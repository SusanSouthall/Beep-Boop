import './styles.css';
import { checkNumber } from './checkNumber.js';

$(document).ready(function(){
  $("form#convertor").submit(function(event){
    event.preventDefault();
    var userNumber =  $("input#userInput").val();
    var userOutput = checkNumber(userNumber);
    for (var i =0; i< userOutput.length; i++) {
      $("#replay").click(function(){
        window.location.reload();
      });
      $("ul#userOutput").append("<li>" + userOutput[i] + "</li>");
    }
  });
});
