const router = require("express").Router();

const Users = require("./usersModel");

const restricted = require("../auth/restricted-mw");

router.use(restricted);

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
