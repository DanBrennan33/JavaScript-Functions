/*
  Function that takes in interger value from textbox
  input within DOM, then doubles that value and returns
  to DOM on onclick event.
*/
function doubleValue() {
  var num = document.getElementById("numberToDouble").value;
  document.getElementById("doubledValue").innerHTML = (num * 2);
}

/*
  Function that takes in integer value from textbox
  input within DOM, then checks if that value is "Odd"
  or "Even" based on bitwise operator to see if the
  the first bit is activated.

  EXAMPLE
    int: 4 Bit: 100     EVEN
    int: 9 Bit: 1001    ODD
*/
function checkOddEven() {
  var num = document.getElementById("numberToCheckOddEven").value;
  if (num & 1)
    document.getElementById("booleanCheckedValue").innerHTML = "Odd";
  else
    document.getElementById("booleanCheckedValue").innerHTML = "Even";
}


/*
  Function to output fizzbuzz coding challenge to DOM,
  this occurs onload as I call fizzbuzz() immediately
  following function.
*/
function fizzbuzz() {
  var str = "";
  for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      str += "FizzBuzz ";
    } else if (i % 3 == 0) {
      str += "Fizz ";
    } else if (i % 5 == 0) {
      str += "Buzz ";
    } else {
      str += i + " ";
    }
  }
  document.getElementById("fizzbuzz").innerHTML = str;
}
fizzbuzz();


/*
  Referenced from https://stackoverflow.com/questions/40200089/is-a-number-prime
  User: Saka7
  PrimeNumber function to print first 100 values based on boolean validity.
*/

function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i == 0) return false;
  return num !== 1;
}

function isPrimePrint() {
  let str = "";
  for (let i = 2; i <= 100; i++) {
    let bool = isPrime(i);
    if (bool)
      str += i + " ";
    else
      continue;
  }
  document.getElementById("isPrimeValue").innerHTML = str;
}
isPrimePrint();


/*
  https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/
  javascript garbage collection article.
*/
