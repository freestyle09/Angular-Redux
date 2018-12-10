const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
let fileName = "./cats.json";
let cats = require(fileName);
let fs = require("fs");

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const saveCat = () => {
  fs.writeFile(fileName, JSON.stringify(cats), function(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(cats));
    console.log("Writing to " + fileName);
  });
};

app.get("/api/cats", (req, res) => {
  res.send(cats);
});
app.get("/api/cats/:id", (req, res) => {
  res.send(cats.find(t => t.id === parseInt(req.params.id)));
});

app.post("/api/cats", (req, res) => {
  let cat = {
    id: cats[cats.length - 1].id + 1,
    title: req.body.title
  };
  cats.push(cat);
  saveCat();
  res.send(cat);
});

app.delete("/remove_cat/:id", (req, res) => {
  let index = parseInt(req.params.id);
  let cat = cats.find(t => t.id === index);
  let catIndex = cats.indexOf(cat);
  cats.splice(catIndex, 1);
  saveCat();
  res.send(cat);
});

app.listen(8000, () => {
  console.log("Listening on 8000 port...");
});
