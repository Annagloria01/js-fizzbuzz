console.log("Fizzbuzz")

// stampare i numeri da 1 a 100//
for (let i=0; i<100; i++) {
  const num = i + 1

  // sostituire Fizz ai multipli di 3
  if (num %3==0 && num %5==0) {
    console.log("FizzBuzz");
  } else if (num %3==0) {
    console.log("Fizz");
  } else if (num %5==0) {
    console.log("Buzz");
  } else  {
    console.log(num)
  }
}

