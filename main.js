//First attempt found both 3 + 5 to return values

// for (i=0; i<100; i++) {
//   if (i % 3 === 0) {
//     console.log("Fizz" + i);
//   } else if (i % 5 === 0) {
//     console.log("Buzz" + i);
//   }
//   }

  // NO BUENO
  //  else if (i % 5 === 0 && i % 3 === 0) {
  //   console.log("FizzBuzz" + i);
  // }

  // NO BUENO
  // else if ((i % 5 === 0) || (i % 3 === 0)) {
  //   console.log("FizzBuzz" + i);
  // }

// Second Attempt with declared variables (if elseif elseif)
// var divisableByThree = "Fizz";
// var divisableByFive = "Buzz";
// var divThreeEqualDivFive = "FizzBuzz";
//
// for (i=0; i<100; i++) {
//   if (i % 3 === 0) {
//     console.log(divisableByThree + i);
// } else if (i % 5 === 0) {
//     console.log(divisableByFive + i);
//     // NO BUENO
// } else if (divisableByThree || divisableByFive) {
//     console.log(divThreeEqualDivFive + i);
//
// }
// }
//Third Attempt if if if
var divisableByThree = "Fizz";
var divisableByFive = "Buzz";
var divThreeEqualDivFive = "FizzBuzz";

for (i=0; i<100; i++) {
  if (i % 3 === 0) {
    console.log(divisableByThree + i);
      if (i % 5 === 0) {
    console.log(divisableByFive + i);
      //   if (divisableByThree === divisableByFive) {
      //     console.log(divThreeEqualDivFive + i)
      // }
        if (i % 3 === 0 && i % 5 === 0){
        console.log(divThreeEqualDivFive + i);
      }
    }
  }
}
//ANSWER is in nesting if statements so each if logs the value
