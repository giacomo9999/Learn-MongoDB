const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/mongoose_basics",
  { useNewUrlParser: true },
  err => {
    if (err) throw err;
    console.log("Successfully connected.");
  }
);
