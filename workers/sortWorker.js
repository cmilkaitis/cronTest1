const CronJob = require("cron").CronJob;

const sortWorker = names => {
  const sorter = new CronJob(
    "* * * * * *",
    function() {
      this.stop();

      let nameArray = names.split(",");
      nameArray.sort();
      console.log(nameArray);
    },
    null,
    false,
    "America/New_York"
  );
  sorter.start();
};

module.exports = sortWorker;
