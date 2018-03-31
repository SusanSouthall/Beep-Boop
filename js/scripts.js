// NOTE: Begins Business logic.
//
// function checkNumber(digit) {
//   var numberValue = "";
//   for (var i=0; i<digit.length; i++) {
//     if (digit[i] === 1) {
//       numberValue = "Boop!";
//     }else if (digit[i] === 0) {
//       numberValue = "Beep!";
//     }else {
//       numberValue = digit;
//     }
//   }return numberValue;
// }

function convert(number) {

   var response;

  var splitNumbers = number.toString().split("").map(function(number){
  	return parseInt(number);
  });
    if (number%3 === 0 && number !== 0) {
      response = "I'm sorry Dave, I can't do that.";
      return response;
    }else {
      for(var i=0; i<splitNumbers.length; i++) {
        if (splitNumbers[i] === 1) {
          response = "Boop!";
          break;
        }else if (splitNumbers[i] === 0) {
          response = "Beep!";
        }
    }return response;
  };
};
// else {


// NOTE: Begins User Interface.

$(document).ready(function(){
  $("form#convertor").submit(function(event){
    event.preventDefault();

    var userInput = $("input#userInput").val();

    // results.toString();
    var userOutput = convert(userInput);
    $("#userOutput").text(userOutput);
  });
});












$(document).ready(function(){
  $("form#convertor").submit(function(event){
    event.preventDefault();
    var userNumber =  $("input#userInput").val();
    debugger;
    // convert(userNumber);
    // var name = $("input#userInput").val();
    //
    // var numbers = [];
    //
    //
    var userOutput = convert(userNumber);
    $(".userOutput").text(userOutput);

  });
});
