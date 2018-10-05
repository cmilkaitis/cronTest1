const express = require("express");
const router = express.Router();
const mainWorker = require("../../workers/mainWorker");
const adderWorker = require("../../workers/adderWorker");

router.get("/", (req, res) => res.json({ msg: "API default route success" }));

router.get("/start", (req, res) => {
  if (mainWorker.running) {
    return res.json({ status: "worker already running" });
  }
  mainWorker.start();
  res.json({ status: "started worker" });
});

router.get("/stop", (req, res) => {
  if (!mainWorker.running) {
    return res.json({ status: "worker not yet running" });
  }
  mainWorker.stop();
  res.json({ status: "main worker stoppeed" });
});

router.get("/add", (req, res) => {
  adderWorker.start();
  res.json({ msg: "Check console" });
});

module.exports = router;
