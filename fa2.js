function add(num1, num2) {
  let res = num1 + num2;
  result(res);
  return res;
}

function subtract(num1, num2) {
  let res = num1 - num2;
  result(res);
  return res;
}

function multiply(num1, num2) {
  let res = num1 * num2;
  result(res);
  return res;
}

function divide(num1, num2) {
  let res = num1 / num2;
  result(res);
  return res;
}

function remainder(num1, num2) {
  let res = num1 % num2;
  result(res);
  return res;
}

function result(res) {
  document.getElementById('res').innerHTML = res;
}