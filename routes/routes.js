const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.getDrugs()
    .then(drugs => {
      res.render("index", { drugs: drugs });
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.get("/add", (req, res) => {
  res.render("add");
});

router.post("/save", (req, res) => {
  console.log(req.body);
  db.saveDrug(req.body)
    .then(drugs => {
      res.render("index", { drugs: drugs });
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

module.exports = router;
