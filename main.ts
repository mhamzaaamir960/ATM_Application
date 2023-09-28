
import { data } from "./dumy_database.js";
import  {user_input}  from "./user_input.js";
import inquirer from "inquirer";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

async function operation() { 
    let amount_found = false;
    for (const $data of data) { 
        if($data.account_number === user_input.account_no && $data.$pin === user_input.pin ) {
            amount_found = true
            let features = await inquirer.prompt([
                {
                    name:"choices",
                    type: "rawlist",
                    message: "Select one choice which you want: ",
                    choices: ["Total Balance","Withdraw","Deposit","Transaction History","Change PIN","Exit"]
                } 
                ])
                if(features.choices === "Total Balance"){
                    console.log(`Total Balance: ${$data.balance}`)
                       console.log(features)
                } else if(features.choices === "Withdraw"){
                    let $withdraw : number = parseInt(prompt(`Enter amount for withdraw: `))
                    if($withdraw <= $data.balance) {
                        console.log(`Rs ${$withdraw} withdrawn, Rs ${$data.balance - $withdraw} is left`)
                        $data.transactions.push(`Withdraw Amount : ${$withdraw}`)
                        await operation();
                    } else {
                        console.log(`Your Balance is ${$data.balance} less than your entered Amount`)
                    } 
                } else if (features.choices === "Deposit") {
                    let $deposit : number = parseInt(prompt(`Enter amount for Deposit: `));
                    let $deposit_amount = $deposit + $data.balance
                    console.log(`Now your amount is ${$deposit_amount}`)
                    $data.transactions.push(`Deposit Amount : ${$deposit}`)
                    await operation();
                } else if (features.choices === "Transaction History") {
                    console.log(`Transaction History : ${$data.transactions}`)
                } else if (features.choices === "Change PIN") {
                     let user_input_1: string = prompt(`Enter your old PIN: `)
                    if(user_input_1 === $data.$pin) {
                      let user_input_2 : string = prompt(`Enter new PIN: `)
                      $data.$pin = user_input_2;
                      console.log(`Your PIN is changed Successfully! `)
                      $data.transactions.push(`PIN changed : ${$data.$pin}`)
                      await operation();
                    } else {
                        console.log(`Invalid! Enter valid PIN`)
                    }
                } else if (features.choices === "Exit") {
                    console.log(`Good Bye`)
                    process.exit(0)
                }
        }
    }
    if(!amount_found) {
        console.log('Invalid! Please enter valid Account No and PIN')
    }
}
let abc1 = await operation();
// console.log(abc1)





