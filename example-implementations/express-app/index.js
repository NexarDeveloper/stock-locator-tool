const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

const nx = require("./nexarClient");
const nexar = new nx.NexarClient("Client ID", "Client secret");

const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/token", (req, res) => {
  nexar
    .token()
    .then(function (response) {
      res.json({
        token: response.access_token.toString(),
      });
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`Server is up listening on port ${port}`);
});
