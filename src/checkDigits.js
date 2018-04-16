export function checkDigits(number) {
  var answer;
  var num = number.toString().split("");
  for(var i=0; i<number.length; i++) {
    if (num[i] === "1") {
      answer = "Boop!";
      break;
    }else if (num[i] === "0") {
      answer = "Beep!";
    }
  } return answer;
}
