import { clone3 } from "./exemplo3";

const dateRange = { dateInit: Date.now(), endDate: Date.now()}
const dateRangeCopy = clone3(dateRange);

console.log(dateRangeCopy)