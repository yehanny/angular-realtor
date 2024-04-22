const express = require("express");
const router = express.Router();
const db = require("../models/database");

/* Get all properties listing */
router.get("/all", function (req, res) {
  db.Property.findAll()
    .then((items) => {
      res.status(200).send(JSON.stringify(items));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

/* Create property listing */
router.post("/", function (req, res) {
  db.Property.create(req.body)
    .then((property) => {
      res.status(200).send(JSON.stringify(property));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

/* Update property listing */
router.put("/:id", function (req, res) {
  db.Property.update(req.body, { where: { id: req.params.id } })
    .then((property) => {
      res.status(200).send(JSON.stringify(property));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

/* Get property listing by id */
router.get("/:id", function (req, res) {
  db.Property.findByPk(req.params.id)
    .then((property) => {
      res.status(200).send(JSON.stringify(property));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

/* Delete property listing */
router.delete("/:id", function (req, res) {
  db.Property.destroy({ where: { id: req.params.id } })
    .then((property) => {
      res.status(200).send(JSON.stringify(property));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

module.exports = router;
