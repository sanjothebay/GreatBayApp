const inquirer = require("inquirer");
const fs = require("fs");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Welcome1!",
  database: "GreatBay_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  greatBidAppFunction();
});

function afterConnection() {
  connection.query("SELECT * FROM GreatBay", function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}

function greatBidAppFunction() {
  inquirer
    .prompt([
      {
        type: "rawlist",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        name: "auctionQuestion",
        choices: ["POST", "BID", "Exit"],
      },
    ])
    .then((response) => {
      console.log(response);
      if (response.auctionQuestion === "POST") {
        postQuestionFunction();
      } else {
        response.bidOrPostQuestion === "BID";
        bidQuestionFunction();
      }
    });

  function postQuestionFunction() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Item you would like to submit?",
          name: "submitItemQuestion",
        },
        {
          type: "rawlist",
          message: "what category would you like to bid in?",
          name: "categoryQuestion",
          choices: ["Sport", "Music", "Food", "Jewls", "Electronic"],
        },
      ])
      .then((response) => {
        console.log(response);
        if (response.bidOrPostQuestion === "POST") {
          postQuestionFunction();
        } else {
          response.bidOrPostQuestion === "Sport", "Music", "Food", "Jewls", "Electronic";
          bidQuestionFunction()
        }
      });
  }
}
function bidQuestionFunction() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What would your Starting Bid to be ?",
        name: "startingBidQuestion",
      },
    ])
    .then((response) => {
      console.log(response);
      if (response.startingBidQuestion === "BID") {
        bidQuestionFunction();
      } else {
        response.bidOrPostQuestion === "BID";
      }
    });
}
//connection.end();