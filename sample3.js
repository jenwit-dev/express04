const options_1 = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
// console.log(new Intl.DateTimeFormat("en-US", options_1).format(new Date()));
// output : July 14, 2025 at 12:40:46 PM
// console.log(
//   typeof new Intl.DateTimeFormat("en-US", options_1).format(new Date())
// );
// output : string
// const date_1 = new Intl.DateTimeFormat("en-US", options_1).format(new Date());
// console.log(date_1); // output : July 14, 2025 at 01:22:04 PM
// console.log(typeof date_1); // output : string

const options_2 = {
  year: "numeric",
  month: "medium", // not a valid value
  // month: "long", // valid value
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
// console.log(new Intl.DateTimeFormat("en-US", options_2).format(new Date()));
// output : RangeError: Value medium out of range for Intl.DateTimeFormat options property month ('medium' is not a valid value for 'month')

const x = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(x));
// output : July 14, 2025 at 12:40:46 PM
// output : July 15, 2025 at 02:39:28 PM
