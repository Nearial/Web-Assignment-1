//Constants
const result = document.querySelector("#result");
const personName = document.querySelector("#name");
const heightDiv = document.querySelector("#height");
const weightDiv = document.querySelector("#weight");
const button = document.querySelector("#button");

//Array
const personList = [];

//Event Listener for the button
button.addEventListener("click", function () {
  calcBMI(Number(heightDiv.value), Number(weightDiv.value));
});

//
function calcBMI(height, weight) {
  //BMI Calculation

  if (
    personName.value == "" ||
    heightDiv.value == "" ||
    weightDiv.value == ""
  ) {
    alert("One or more Input fields are empty!");
  } else {
    const bmi = (weight / height ** 2).toFixed(1);

    //Object
    const person = {
      personName: personName.value,
      height: height,
      weight: weight,
      bmi: bmi,
    };

    //Post result
    result.innerHTML = bmi;

    //Push to array and console log it
    personList.push(person);
    console.log(personList);

    //Reset input field values
    personName.value = "";
    heightDiv.value = "";
    weightDiv.value = "";
  }
}
