// NOTE: Begins Business logic.

function checkDigits(number) {
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

function checkNumber(number) {
  var response;
  var numberList = [];
  for (var i=0; i<=number; i++) {
    var num = i.toString();
    if (i%3 === 0) {
      response = "I'm sorry Dave, I can't do that.";
      numberList.push(response);
    }else if (num.includes("1") === true || num.includes("0") === true) {
      var checkOneZero = checkDigits(num);
      response = checkOneZero;
      numberList.push(response);
    }else {
      numberList.push(i);
    }
  }  return numberList;
}

// NOTE: Begins User Interface Logic.

$(document).ready(function(){
  $("form#convertor").submit(function(event){
    event.preventDefault();
    var finalNumberList = [];
    var userNumber =  $("input#userInput").val();
    var userOutput = checkNumber(userNumber);
    // $("ul#userOutput").text(userOutput);
    for (var i =0; i< userOutput.length; i++) {
      $("#replay").click(function(){
        window.location.reload();
      });
      $("ul#userOutput").append("<li>" + userOutput[i] + "</li>");
    }
  });
});
