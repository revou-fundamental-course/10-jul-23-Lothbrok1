document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var gender = document.querySelector('input[name="gender"]:checked').value;
  var age = parseInt(document.getElementById('age').value);
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  var bmi = calculateBMI(weight, height);
  var category = getBMICategory(bmi);

  var result = document.getElementById('result');
  result.innerHTML = 'BMI: ' + bmi.toFixed(2) + ' (' + category + ')';
});

function calculateBMI(weight, height) {
  var heightInMeter = height / 100;
  return weight / (heightInMeter * heightInMeter);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Anda kekurangan berat badan';
  } else if (bmi < 25) {
    return 'Berat badan anda normal';
  } else if (bmi < 30) {
    return 'Anda kelebihan berat badan';
  } else {
    return 'Anda mengalami obesitas ';
  }
}
