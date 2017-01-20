function fizzBuzz() {
  for(i=1;i<=100;i++) {
    if(i%3 === 0 && i%5 === 0) {
      console.log("'" + i + "' is fizz and Buzz");
    } else if(i%3 === 0) {
      console.log("'" + i + "' is Fizz");
    } else if(i%5 === 0) {
      console.log("'" + i + "' is Buzz");
    }
  }
}

fizzBuzz();
