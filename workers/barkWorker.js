const CronJob = require("cron").CronJob;

let barkWorker = n => {
  const worker = new CronJob(
    `*/${n} * * * * *`,
    function() {
      if (n === 0 && this.running) {
        this.stop();
      }
      console.log("Bark");
    },
    null,
    true,
    "America/New_York"
  );
};

module.exports = barkWorker;
