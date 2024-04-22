const express = require("express");
const router = express.Router();
const db = require("../models/database");

/* GET All users listing. */
router.get("/all", function (req, res) {
  db.User.findAll()
    .then((users) => {
      res.status(200).send(JSON.stringify(users));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

/* GET user by id. */
router.get("/:id", function (req, res) {
  db.User.findByPk(req.params.id)
    .then((user) => {
      res.status(200).send(JSON.stringify(user));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

/* Create new user. */
router.post("/", function (req, res) {
  db.User.create(req.body)
    .then((user) => {
      res.status(200).send(JSON.stringify(user));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

/* Update user by id. */
router.put("/:id", function (req, res) {
  db.User.update(req.body, { where: { id: req.params.id } })
    .then((user) => {
      res.status(200).send(JSON.stringify(user));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

/* Delete user by id. */
router.delete("/:id", function (req, res) {
  db.User.destroy({ where: { id: req.params.id } })
    .then((user) => {
      res.status(200).send(JSON.stringify(user));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});
module.exports = router;
