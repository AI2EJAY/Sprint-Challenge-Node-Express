const express = require("express");
const router = express.Router();
const PMdb = require('./helpers/projectModel');

router.get("/", (req, res) => {
  PMdb.get()
    .then(pm => {
      res.status(200).json(pm);
    })
    .catch(err => {
      console.error(`There was an error in your Get function:  ===${err}===`);
      res.status(500).json({ errMsg: "Unable to fetch Project Model Data" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  // PMdb.get(id)
});

router.post("/", (req, res) => {
  content = req.body;
});

router.put();

router.delete();

module.exports = router;
