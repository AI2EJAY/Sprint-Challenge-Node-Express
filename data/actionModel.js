const express = require("express");
const router = express.Router();
const AMdb = require("./helpers/actionModel");

router.get("/", (req, res) => {
  AMdb.get()
    .then(pm => {
      res.status(200).json(pm);
    })
    .catch(err => {
      console.error(
        `There was an error in your Get function: \n === ${err} ===`
      );
      res
        .status(500)
        .json({
          errMsg: "Unable to fetch the Action Model Data you were looking for"
        });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  AMdb.get(id)
    .then(pm => {
      res.status(200).json(pm);
    })
    .catch(err => {
      console.error(
        `There was an error in your Get function: \n === ${err} ===`
      );
      res
        .status(500)
        .json({
          errMsg: "Unable to fetch the Action Model Data you were looking for"
        });
    });
});

router.post("/", (req, res) => {
  const content = req.body;
  AMdb.insert(content)
    .then(pm => {
      res.status(200).json(pm);
    })
    .catch(err => {
      console.error(
        `There was an error in your Post function: \n  === ${err} ===`
      );
      res.status(500).json({ errMsg: "Unable to create post" });
    });
});

router.put("/:id", (req, res) => {
  const content = req.body;
  const { id } = req.params;

  AMdb.update(id, content)
    .then(pm => {
      res.status(200).json(pm);
    })
    .catch(err => {
      console.error(
        `There was an error in your Put function: \n === ${err} ===`
      );
      res
        .status(500)
        .json({
          errMsg: "Unable to add the data to target you were looking for"
        });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  AMdb.remove(id)
    .then(pm => {
      res.status(200).json(pm);
    })
    .catch(err => {
      console.error(
        `There was an error in your Delete function: \n === ${err} ===`
      );
      res
        .status(500)
        .json({ errMsg: "Unable to delete the target you were looking for" });
    });
});

module.exports = router;
