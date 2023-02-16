const { MongoClient} = require("mongodb");
module.exports = {
    connectToServer: async (url) => {
    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function (err, client) {
      if (err) {
        console.log("------ CAN NOT CONNECT TO MONGO DB URL ---------");
        process.exit(1);
      } else {
        jobSearchDb = client.db("jobSearchApp");
        console.log("------CONNECT TO MONGO DB URL ---------");
      }
    });
  },

  jobSearchDb: function () {
    return jobSearchDb;
  }
}