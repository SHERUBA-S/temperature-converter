function convertTemperature() {


  const tempInput =
    document.getElementById("temperature").value;


  const unit =
    document.querySelector(
      'input[name="unit"]:checked'
    ).value;


  const resultDiv =
    document.getElementById("result");


  const temp =
    parseFloat(tempInput);



  // Validate input

  if (isNaN(temp)) {

    resultDiv.textContent =
      "⚠️ Please enter a valid number!";

    resultDiv.style.color = "red";

    return;

  }



  // Kelvin validation

  if (unit === "K" && temp < 0) {

    resultDiv.textContent =
      "⚠️ Kelvin cannot be negative!";

    resultDiv.style.color = "red";

    return;

  }



  let result = "";

  let celsius;



  switch(unit) {


    case "C":

      celsius = temp;

      result =
        `${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F 
        | ${(temp + 273.15).toFixed(2)}K`;

      break;



    case "F":

      celsius =
        (temp - 32) * 5/9;


      result =
        `${temp}°F = ${celsius.toFixed(2)}°C 
        | ${(celsius + 273.15).toFixed(2)}K`;

      break;



    case "K":

      celsius =
        temp - 273.15;


      result =
        `${temp}K = ${celsius.toFixed(2)}°C 
        | ${(celsius * 9/5 + 32).toFixed(2)}°F`;

      break;

  }



  resultDiv.textContent = result;



  // Temperature indicator color

  if(celsius < 10){

    resultDiv.style.color = "blue";

  }

  else if(celsius < 30){

    resultDiv.style.color = "green";

  }

  else{

    resultDiv.style.color = "red";

  }


}



function resetConverter(){


  document.getElementById("temperature").value = "";


  document.getElementById("result").textContent = "";


  document.getElementById("result").style.color = "black";


}
