const express = require("express");
const PMdb = require("./helpers/projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  PMdb.get()
    .then(pm => {
      res.status(200).json(pm);
    })
    .catch(err => {
        console.error(`There was an error in your Get function:  ===${err}===`)
        res.status(500).json({ errMsg: "Unable to fetch Project Model Data" });
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params
    console.log(id)
    // PMdb.get(id)
})
module.exports = router;
