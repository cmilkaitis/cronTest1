const CronJob = require("cron").CronJob;

const adderWorker = new CronJob(
  "* * * * * *",
  function randomAdder() {
    this.stop();
    let num = 0;
    for (let i = 0; i <= 14; i++) {
      num += Math.floor(Math.random() * 101) + 10;
    }
    console.log(num);
  },
  null,
  false,
  "America/New_York"
);

module.exports = adderWorker;
