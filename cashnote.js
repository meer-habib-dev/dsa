let cash = 5234;
let note = [];

if (cash >= 1000) {
  note.push(Math.floor(cash / 1000));
  cash = cash % 1000;
}

if (cash >= 500) {
  note.push(Math.floor(cash / 500));
  cash = cash % 500;
}

if (cash >= 100) {
  note.push(Math.floor(cash / 100));
  cash = cash % 100;
}

if (cash >= 50) {
  note.push(Math.floor(cash / 50));
  cash = cash % 50;
}

if (cash >= 20) {
  note.push(Math.floor(cash / 20));
  cash = cash % 20;
}

if (cash >= 10) {
  note.push(Math.floor(cash / 10));
  cash = cash % 10;
}

if (cash >= 5) {
  note.push(Math.floor(cash / 5));
  cash = cash % 5;
}

if (cash >= 1) {
  note.push(Math.floor(cash / 1));
  cash = cash % 1;
}
console.log(note, cash);

let num = 0.1 + 0.2;

switch (+num.toFixed(1)) {
  case 0.3:
    console.log("first");
    break;
  case 0.4:
    console.log("second");
    break;
  default:
    console.log("default", num);
    break;
}
