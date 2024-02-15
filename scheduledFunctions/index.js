const CronJob = require("node-cron");
const Axios = require("axios");

const jobUrl = process.env.JOB_URL;

exports.initScheduledJobs = () => {
  const scheduledJobFunction = CronJob.schedule("*/1 * * * *", () => {
    Axios.get(jobUrl)
      .then((data) => {
        console.log("I'm executed on a schedule success!");
      })
      .catch((err) => {
        console.log("I'm executed on a schedule error!");
      });
    // Add your custom logic here
  });

  scheduledJobFunction.start();
};
