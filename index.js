const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/mongoose_basics",
  err => {
    if (err) throw err;
    console.log("Successfully connected.");
  }
);
