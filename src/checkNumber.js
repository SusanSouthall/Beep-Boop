import { checkDigits } from './checkDigits.js';

export function checkNumber(number) {
  var response;
  var numberList = [];
  for (var i=0; i<=number; i++) {
    var num = i.toString();
    if (i%3 === 0 && i !== 0) {
      response = "I'm sorry Dave, I can't do that.";
      numberList.push(response);
    }else if (num.includes("1") === true || num.includes("0") === true) {
      var checkOneZero = checkDigits(num);
      response = checkOneZero;
      numberList.push(response);
    }else {
      numberList.push(i);
    }
  }return numberList;
}
