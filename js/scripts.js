// NOTE: Begins Business logic.

function convert(number) {

  var responses = ["Beep!", "Boop!", "I'm sorry Dave, I can't do that."];

  var numbers = [];
  // var newNumber = $("input#userInput").val();
  var splitNumbers = number.toString().split("").map(function(number){
  	return parseInt(number);
  });
   numbers.push(splitNumbers);

    if (number%3 === 0) {
       numbers = responses[2];
    // }else if (number)
     return numbers;
  }
}



// NOTE: Begins User Interface.

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
