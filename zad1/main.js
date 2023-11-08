let dodawanie = document.getElementById("dodawanie");
let odejmowanie = document.getElementById("odejmowanie");
let mnozenie = document.getElementById("mnozenie");
let dzielenie = document.getElementById("dzielenie");
let wynik = document.getElementById("wynik");

function calculate() {
  let num1 = document.getElementById("liczba1").value;
  let num2 = document.getElementById("liczba2").value;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let res = 0;

  if (dodawanie.checked) {
    res = num1 + num2;
  } else if (odejmowanie.checked) {
    res = num1 - num2;
  } else if (mnozenie.checked) {
    res = num1 * num2;
  } else if (dzielenie.checked) {
    res = num1 / num2;
  }

  if (dzielenie.checked && num2 == 0) {
    wynik.innerText = "Wynik nieokreślony";
  } else {
    wynik.innerText = "Wynik: " + res;
  }
}