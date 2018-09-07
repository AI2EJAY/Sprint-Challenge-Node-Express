const express = require("express");
const router = express.Router();
const PMdb = require("./helpers/projectModel");

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
  PMdb.get(id)
    .then(pm => {
      res.status(200).json(pm);
    })
    .catch(err => {
      console.error(`There was an error in your Get function:  ===${err}===`);
      res.status(500).json({ errMsg: "Unable to fetch Project Model Data" });
    });
});

router.post("/", (req, res) => {
  const content = req.body;
  PMdb.insert(content)
    .then(pm => {
      res.status(200).json(pm);
    })
    .catch(err => {
      console.error(`There was an error in your Post function:  ===${err}===`);
      res.status(500).json({ errMsg: "Unable to create post" });
    });
});

router.put("/:id", (req, res) => {
  const content = req.body;
  const { id } = req.params;
  if (id) {
    PMdb.update(id, content)
      .then(pm => {
        res.status(200).json({ pm });
      })
      .catch(err => {
        console.error(`There was an error in your Put function:  ===${err}===`);
        res.status(500).json({ errMsg: "Unable to add data to target" });
      });
  } else return null;
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  PMdb.remove(id)
    .then(pm => {
      res.status(200).json({ pm });
    })
    .catch(err => {
      console.error(
        `There was an error in your Delete function:  ===${err}===`
      );
      res.status(500).json({ errMsg: "Unable to delete target" });
    });
});

module.exports = router;
