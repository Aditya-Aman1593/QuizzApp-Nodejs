const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect("mongodb+srv://adityaaman1593:aditya123@cluster0.wa4dc3z.mongodb.net/QuizApp?retryWrites=true&w=majority")
    .then(() => {
      console.log("Database connected...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
