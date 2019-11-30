function validateForm() {
  
  var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var cent = parseInt(document.getElementById("cent").value);
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);
  
    
  if (cent == "" || cent < 19 || cent >20) {
    alert ("First two digits must be between 18 and 21");
    return false;
  }
  if (year == "" || year < 0 || year >=100 ) {
    alert ("Year value should be between 0 and 99");
    return false;
  }
  
  if (month == "" || month <= 0 || month >12) {
    alert ("Month is wrong: Enter value between 0 and 13");
    return false;
  }
   if (day == "" || day <=0 || day > 31) {
    alert ("Day is wrong: Enter a number between 0 and 32");
    return false;
  } 
  
  
  var days = parseInt( ( (cent/4) -2*cent-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;

  var gender = document.querySelector('input[name="gender"]:checked').value;

  if (gender == 1) {
    if (days === 0) {
      alert("Sunday was your day of birth");
      alert( "Your name should be" + females[0] );
    } else if (days === 1) {
      alert("You were born on Monday");
      alert("Your name is" + females[1]);
    } else if (days === 2) {
      alert("Tuesday is when you were born");
      alert("You are" + females[2]);
    } else if (days === 3) {
      alert("Wednesday is when you were born");
      alert("Your name should be: " + females[3]);
    } else if (days === 4) {
      alert("Thursday is when you were born");
      alert("Your name should be: " + females[4]);
    } else if (days === 5) {
      alert("Friday is when you were born");
      alert("Your name should be: " + females[5]);
    } else if (days === 6) {
      alert("Saturday is when you were born");
      alert("Your name should be: " + females[6]);
    } else {
      alert ("Kindly try Again Later");
    }
  } else {
    if (days === 0) {
      alert ("Your were born on Sunday");
      alert ("Your name should be: " + males[0]);
    } else if (days === 1) {
      alert ("You were born on Monday");
      alert ("Your name should be: " + males[1]);
    } else if (days === 2) {
      alert ("You were born on Tuesday");
      alert ("Your name should be: " + males[2]);
    } else if (days === 3) {
      alert ("You were born on Wednesday");
      alert ("Your name should be: " + males[3]);
    } else if (days === 4) {
      alert ("You were born on Thursday");
      alert ("Your name should be: " + males[4]);
    } else if (days === 5) {
      alert ("You were born on Friday");
      alert ("Your name should be: " + males[5]);
    } else if (days === 6) {
      alert ("You were born on Saturday");
      alert ("Your name should be: " + males[6]);
    } 
  }
} 



