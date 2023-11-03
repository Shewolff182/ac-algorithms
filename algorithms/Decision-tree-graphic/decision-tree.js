//1. Asking about the weather
//is it sunny, cloud or rainy.
//if it is sunny, the second question is: how much time do I have?
//+-30 mins
//if I have longer than 30 minutes, WALK
//if less than 30 min, take the BUS.
//if its cloudy, the second question is: am i hungry?
//if YES, then I walk.
//if NO, then I will take the bus.
// if it is rainy, then I will take the BUS
//? = if/else
//switch statements... case is what is inside of a switch
//$(document).ready(function() { /* code here */ });
function transportationOptions() {
    weather = window.prompt("What is the weather like today? Sunny, Cloudy or Rainy?");
    if(weather === "sunny") {
      time = window.prompt("Do you have at least 30 minutes? Yes or No?");
      if(time === "yes") {
        return "Walk";
      } else {
        return "Bus";
      }
    } else if(weather === "cloudy"){
      hungry = window.prompt("Are you hungry?");
      if(hungry === "yes") {
        return "Walk";
      } else {
        return "Bus";
      }
    } else if(weather === "rainy") {
        return "Bus";
    } else {
      return "Please input either sunny, cloudy, or rainy?"
    }
  }

  $(document).ready(function() {alert(transportationOptions())});   