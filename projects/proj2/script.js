const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.querySelector(".weight").value);
  const height = parseFloat(document.querySelector(".height").value);
  const result = document.querySelector(".result");

  if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
    alert("Please enter valid numbers for weight and height.");
    result.innerHTML = ""; // Clear old result if any
  } else {
    const bmi = weight / ((height / 100) ** 2);
    let category = "";

    if (bmi < 18.6) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else category = "Overweight";

    result.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong> (${category})`;
  }
});