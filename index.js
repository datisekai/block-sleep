const express = require("express");
require("dotenv").config();
// DEFINE the path to your scheduled function(s)
const scheduledFunctions = require("./scheduledFunctions");
const app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("server running...");
});

// ADD CALL to execute your function(s)
scheduledFunctions.initScheduledJobs();

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
