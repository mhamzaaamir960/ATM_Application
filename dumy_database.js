import { user_input } from "./user_input.js";
export let data = [
    { account_number: '1123456789', $pin: '1111', balance: 10000, transactions: [] },
    { account_number: '1223456789', $pin: '2222', balance: 20000, transactions: [] },
    { account_number: '1233456789', $pin: '3333', balance: 30000, transactions: [] },
    { account_number: '1234456789', $pin: '4444', balance: 40000, transactions: [] }
];
let $data = data.find((element) => {
    return element.account_number === user_input.account_no && element.$pin === user_input.pin;
});
export { $data };
