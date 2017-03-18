var kid = 15;
var adult = 20;

function checkIfAdult(age) {
  if( age < 18) {
    alert('you are not an adult')
  }
  if(age >= 18) {
    alert('Welcome to adulthood')
  }
}


function sayBonjour(){
  var name = document.getElementById("inputfield").value
  document.getElementById("greeting").innerHTML = "Bonjour " + name;
}
