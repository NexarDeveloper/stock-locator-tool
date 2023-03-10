const { URLSearchParams } = require("url");
const https = require("https");

const TOKEN_OPTIONS = {
  hostname: "identity.nexar.com",
  path: "/connect/token",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

function decodeJWT(jwt) {
  return JSON.parse(
    Buffer.from(
      jwt.split(".")[1].replace("-", "+").replace("_", "/"),
      "base64"
    ).toString("binary")
  );
}

function getRequest(options, data) {
  return new Promise((resolve, reject) => {
    let req = https.request(options, (res) => {
      const contentType = res.headers["content-type"];

      let error;
      if (res.statusCode !== 200) {
        error = new Error(
          "Request Failed.\n" +
            `Status Code: ${res.statusCode} ${res.statusMessage}`
        );
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error(
          "Invalid content-type.\n" +
            `Expected application/json but received ${contentType}`
        );
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      let rawData = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => (rawData += chunk));
      res.on("end", () => resolve(JSON.parse(rawData)));
    });
    req.on("error", (err) => reject(err));
    req.write(data);
    req.end();
  });
}

class NexarClient {
  #accessToken;
  #exp;
  #id;
  #secret;

  /**
   * Client for the Nexar API to manage authorization and requests.
   * @param {string} id - the client id assigned to a Nexar application.
   * @param {string} secret - the client secret assigned to a Nexar application.
   */

  constructor(id, secret) {
    this.#id = id;
    this.#secret = secret;
  }

  #getAccessToken(id, secret) {
    const data = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: id,
      client_secret: secret,
    });

    return getRequest(TOKEN_OPTIONS, data.toString());
  }

  #checkTokenExp() {
    this.#exp =
      this.#exp ||
      this.#accessToken.then(
        (token) => decodeJWT(token.access_token)?.exp * 1000
      );

    return this.#exp.then((exp) => {
      if (exp < Date.now() + 300000) {
        //token is expired ... or will be in less than 5 minutes (300000 msec)
        this.#exp = undefined;
        this.#accessToken = this.#getAccessToken(this.#id, this.#secret);
      }
      return this.#accessToken;
    });
  }

  async token() {
    this.#accessToken =
      this.#accessToken || this.#getAccessToken(this.#id, this.#secret);
    return this.#checkTokenExp();
  }
}

module.exports = { NexarClient };
