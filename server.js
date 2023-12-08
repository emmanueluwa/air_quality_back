const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const aq = require("./aq.json");

//middleware
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json(aq);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
