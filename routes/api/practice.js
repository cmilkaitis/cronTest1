const express = require("express");
const router = express.Router();
const barker = require("../../workers/barkWorker");
const sorter = require("../../workers/sortWorker");

router.get("/", (req, res) => res.json({ msg: "API practice route success" }));

router.get("/start/:num", (req, res) => {
  let sec = "second";
  const num = parseInt(req.params.num, 10);

  if (num > 1) {
    sec += "s";
  }
  if (num < 1) {
    return res.json({ error: "Please enter a postive number" });
  }
  barker(num);
  res.json({
    status: `Will bark at the console every ${num} ${sec}`
  });
});

router.get("/stop", (req, res) => {
  // if (!barker.running) {
  //   return res.json({ msg: "Cannot stop, barker is not running" });
  // }
  barker(0);
  res.json({ msg: "Bark worker has stopped" });
});

router.post("/sort", (req, res) => {
  const names = req.body.names;
  sorter(names);
  res.json({ msg: "Sorting name array in console" });
});

module.exports = router;
