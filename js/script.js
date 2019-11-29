//Validating inputs 

function validateForm(){
  var cent = document.forms["akamGen"]["century"].value;
  var year = document.forms["akamGen"]["year"].value;
  var month = document.forms["akamGen"]["month"].value;
  var day = document.forms["akamGen"]["day"].value;
  var gender = document.forms["akamGen"]["gender"].value

  if (cent == "" || cent < 19 || cent >21) {
    alert("Century Digit Must be between 18 and 21 ");
    return false;
  } else if ( year == "" || year < 1900 || year >2019) {
    alert("Year provided is wrong: Sorry you dont exist");
    return false;
  } else if (month == "" || month <= 0 || month >12) {
    alert ("Month is wrong: Enter value between 0 and 13");
    return false;
  } else if (day == "" || day <=0 || day > 31) {
    alert ("Day is wrong: Enter a number between 0 and 32");
    return false;
  } else if (gender == "") {
    alert ("Please select gender");
  } else {
    alert ("You have made it")
  }

  var males = ["Akufo", "Ayuko", ""]
  var females = ["Ayud", "Yaa", "Star"]

  

}

