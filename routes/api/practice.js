const express = require("express");
const router = express.Router();
//const barker = require("../../workers/barkWorker");
const sorter = require("../../workers/sortWorker");
const CronJob = require("cron").CronJob;

router.get("/", (req, res) => res.json({ msg: "API practice route success" }));

let num = 0;

const barker = new CronJob(
  `*${num} * * * * *`,
  function() {
    console.log("Bark");
  },
  null,
  false,
  "America/New_York"
);

router.get("/start/:num", (req, res) => {
  let sec = "second";
  num = parseInt(req.params.num, 10);

  if (num > 1) {
    sec += "s";
  }
  if (num < 1) {
    return res.json({ error: "Please enter a postive number" });
  }
  if (barker.running) {
    return res.json({ error: "the console is already barking" });
  }
  barker.start();
  res.json({
    status: `Will bark at the console every ${num} ${sec}`
  });
});

router.get("/stop", (req, res) => {
  if (!barker.running) {
    return res.json({ msg: "Cannot stop, barker is not running" });
  }
  barker.stop();
  console.log("Stopped");
  res.json({ msg: "Bark worker has stopped" });
});

router.post("/sort", (req, res) => {
  const names = req.body.names;
  sorter(names);
  res.json({ msg: "Sorting name array in console" });
});

module.exports = router;
