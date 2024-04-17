#! /usr/bin/env node

import inquirer from "inquirer"

const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
// conditional statement

if (asnwer.operators === "Addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);
} else if (asnwer.operators === "Subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.operators === "Multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);
} else if (asnwer.operators === "Division") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
} else {
    console.log("Please select a valid operator")
}