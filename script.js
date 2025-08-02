function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  const resultDiv = document.getElementById('result');
  const container = document.querySelector('.container');

  // Reset classes
  resultDiv.className = '';
  container.classList.remove('container-green', 'container-yellow', 'container-red');

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.textContent = "Please enter valid height and weight.";
    resultDiv.classList.add('result-red');
    container.classList.add('container-red');
    return;
  }

  const bmi = weight / (height * height);
  const bmiRounded = bmi.toFixed(1);

  let category = '';
  let resultClass = '';
  let containerClass = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    resultClass = 'result-red';
    containerClass = 'container-red';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal';
    resultClass = 'result-green';
    containerClass = 'container-green';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
    resultClass = 'result-yellow';
    containerClass = 'container-yellow';
  } else {
    category = 'Obese';
    resultClass = 'result-red';
    containerClass = 'container-red';
  }

  resultDiv.textContent = `Your BMI is ${bmiRounded} (${category})`;
  resultDiv.classList.add(resultClass);
  container.classList.add(containerClass);
}
