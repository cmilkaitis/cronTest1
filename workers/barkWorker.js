const CronJob = require("cron").CronJob;

let barkWorker = n => {
  const worker = new CronJob(
    `*/${n} * * * * *`,
    function() {
      console.log("Bark");
    },
    null,
    false,
    "America/New_York"
  );
  worker.start();
};

module.exports = barkerWorker;
