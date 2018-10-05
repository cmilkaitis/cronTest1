const CronJob = require("cron").CronJob;

let addRandomNumbers = n => {
  const adderWorker = new CronJob(
    "* * * * * *",
    function() {
      this.stop();
      let num = 0;
      for (let i = 0; i <= n; i++) {
        num += Math.floor(Math.random() * 101) + 10;
      }
      console.log(num);
    },
    null,
    false,
    "America/New_York"
  );
  adderWorker.start();
};

module.exports = addRandomNumbers;
