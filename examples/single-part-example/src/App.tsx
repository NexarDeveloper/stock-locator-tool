import React from "react";
import { useEffect, useState } from "react";
let StockLocatorTool = require("@altiumnexar/stock-locator-tool/dist");

function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/token")
      .then((res) => res.json())
      .then((data) => setToken(data.token))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ padding: "0 20%", background: "#AEC6CF" }}>
      <StockLocatorTool
        searchParameters={{
          token: token,
          disableSearch: true,
          q: "acs770",
          limit: 1,
        }}
      />
    </div>
  );
}

export default App;
