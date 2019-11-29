//Validating inputs 

function formValidation(){
  var cent = document.forms["akamGen"]["century"].value;
  var year = document.forms["akamGen"]["year"].value;
  var month = document.forms["akamGen"]["month"].value;
  var day = document.forms["akamGen"]["day"].value;
  var gender = document.forms["akamGen"]["gender"].value

  if (cent == "" || cent < 19 || cent >21) {
    alert("Century Digit Must be between 18 and 21 ");
    return false;
  } else if ( year == "" || year < 1900 || year >2019) {
    alert("Sorry you dont exist");
    return false;
  } else if (month == "" || month <= 0 || month >12) {
    alert ("Enter value between 0 and 13");
    return false;
  } else if (day == "" || day <=0 || day > 31) {
    alert ("Enter a number between 0 and 32");
    return false;
  } else if (gender == "") {
    alert ("Please select gender");
  } else {
    alert ("You have made it")
  }

}




//Initializing days of the week with an array of 7 items
day = new makeArray(7);
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";
