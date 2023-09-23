import { data } from "./dumy_database.js";
import inquirer from "inquirer";
import { basename } from "path";
import PromptSync from "prompt-sync";
const prompt = PromptSync();



// const input_1: string = prompt(`Enter Account No: `);
// const input_2: string = prompt(`Enter your PIN: `)

let user_input = await inquirer.prompt([
    {
        name:"account_no",
        type: "input",
        message: "Enter your Account No: ",
    },
    {
        name: "pin",
        type: "input",
        message: "Enter your PIN: ",
    }
])

function data_find() {
    let $data = data.find((element) => element.account_number === user_input.account_no && element.pin === user_input.pin )
    return $data
}
let data_1 = data_find();
console.log(data_1)


// let features = await inquirer.prompt([
    // {
    //     name:"choices",
    //     type: "rawlist",
    //     message: "Select one choice which you want: ",
    //     choices: ["Total Balance","Withdraw","Deposit","Transaction History","Change PIN","Exit"]
    // } 
// ]) 
    // if(features.choices === "Total Balance") {
    //     return (data[]) 
    // }
  

