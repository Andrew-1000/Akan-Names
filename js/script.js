//Creation of function that will get the Akan names
function validateForm() {

//Array list for the male and female genders
  var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


//JavaScript getting data provided in a form.
  var cent = parseInt(document.getElementById("cent").value);
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);


//If statement to check for values provided by the user
if (cent == "" || cent < 19 || cent >21) {
    alert ("Century must be between 18 and 22");
    return false;
  }
  if (year == "" || year < 0 || year >=100 ) {
    alert ("Year value should be between 0 and 99");
    return false;
  }
  if (cent == 21 && year > 19){
    alert ("We're not yet there");
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

  //Formula for getting the Exact Day with regards to the century, year, month and date
  var days = parseInt( ( (cent/4) -2*cent-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
  
  
  // JavaScript code for picking the gender that has been selected
  var gender = document.querySelector('input[name="gender"]:checked').value;


  //With regards to the persons gender and day, a name will be given to the Male
  if (gender == 1) {
    if (days === 0) {
      alert("Sunday is when you were born");
      alert( "Your name should be" + males[0] );
    } else if (days === 1) {
      alert("Monday is when you were born");
      alert("Your name is " + males[1]);
    } else if (days === 2) {
      alert("Tuesday is when you were born");
      alert("You are " + males[2]);
    } else if (days === 3) {
      alert("Wednesday is when you were born");
      alert("Your name should be: " + males[3]);
    } else if (days === 4) {
      alert("Thursday is when you were born");
      alert("Your name should be: " + males[4]);
    } else if (days === 5) {
      alert("Friday is when you were born");
      alert("Your name should be: " + males[5]);
    } else if (days === 6) {
      alert("Saturday is when you were born");
      alert("Your name should be: " + males[6]);
    } else {
      alert ("Kindly try Again Later");
    }   //If gender selected is not male it will give names to females with regards to the day obtained from the formula above
  } else {
    if (days === 0) {
      alert ("Sunday is when you were born");
      alert ("Your name should be: " + females[0]);
    } else if (days === 1) {
      alert ("Monday is when you were born");
      alert ("Your name should be: " + females[1]);
    } else if (days === 2) {
      alert ("Tuesday is when you were born");
      alert ("Your name should be: " + females[2]);
    } else if (days === 3) {
      alert ("Wednesday is when you were born");
      alert ("Your name should be: " + females[3]);
    } else if (days === 4) {
      alert ("Thursday is when you were born");
      alert ("Your name should be: " + females[4]);
    } else if (days === 5) {
      alert ("Friday is when you were born");
      alert ("Your name should be: " + females[5]);
    } else if (days === 6) {
      alert ("Saturday is when you were born");
      alert ("Your name should be: " + females[6]);
    } 
  }
} 

