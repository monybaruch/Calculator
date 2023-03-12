const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // urlencoded is used to parse a data from a html form

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/calculator.html");
});
app.post("/", function (req, res) {
  let number1 = Number(req.body.number1);
  let number2 = Number(req.body.number2);
  let result = number1 + number2;
  res.send("The result of the calculation is: " + result);
});
app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmi", function (req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = weight / (height * height);
  res.send("The result of your BMI is: " + bmi);
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
