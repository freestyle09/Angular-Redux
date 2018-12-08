const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const cats = [
  {
    id: 1,
    name: "Filemon",
    color: "black"
  },
  {
    id: 2,
    name: "Burys",
    color: "fire"
  },
  {
    id: 3,
    name: "Mysia",
    color: "Grey"
  },
  {
    id: 4,
    name: "Niunia",
    color: "Black - grey"
  }
];
app.get("/api/cats", (req, res) => {
  res.send(cats);
});

app.listen(8000, () => {
  console.log("Listening on 8000 port...");
});
