import inquirer from "inquirer";
import { data, $data} from "./dumy_database.js";

interface Features {
    account_no:string;
    pin: string
}

let user_input: Features = await inquirer.prompt([
    {
        name:"account_no",
        type: "input",
        message: "Enter your Account No: ",
    },
    {
        name: "pin",
        type: "input",
        message: "Enter your PIN: ",
        validate(user_input) {
            if($data?.$pin !== user_input.pin ) {
                return false
            }  else {
                return true
            }
        }
    },
])
export {user_input};