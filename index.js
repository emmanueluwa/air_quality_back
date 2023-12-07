require("dotenv").config();
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

API_Key = process.env.API_Key;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
  "X-API-Key": API_Key,
};

const city = "https://api.openaq.org/v1/cities";

const gen =
  "https://api.openaq.org/v2/sources?page=1&offset=0&sort=asc&order_by=sourceName";

const measurements =
  "https://api.openaq.org/v2/measurements?date_from=2023-01-01T00%3A00%3A00Z&date_to=2023-10-03T18%3A14%3A00Z&limit=100&page=1&offset=0&sort=desc&radius=1000&order_by=datetime";

async function airQual() {
  await fetch(measurements, options)
    .then((res) => res.json())
    .then((res) => jsonToString(res))
    .catch((err) => console.error(err));
}

function jsonToString(data) {
  const stringData = JSON.stringify(data);

  fs.writeFile("aq.json", stringData, (err) => {
    if (err) {
      throw err;
    }
  });
}

airQual();
