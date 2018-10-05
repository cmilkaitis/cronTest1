const CronJob = require("cron").CronJob;

const mainWorker = new CronJob(
  "*/5 * * * * *",
  () => {
    console.log(`Cron Job every 5 sec`);
  },
  null,
  false,
  "America/New_York"
);

module.exports = mainWorker;
