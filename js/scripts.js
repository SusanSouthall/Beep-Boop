// NOTE: Begins Business logic.

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
        }else {
          response = number;
        }
    }return response;
  };
};

// NOTE: Begins User Interface.

$(document).ready(function(){
  $("form#convertor").submit(function(event){
    event.preventDefault();
    var userNumber =  $("input#userInput").val();
    var userOutput = convert(userNumber);
    $(".userOutput").text(userOutput);

  });
});
