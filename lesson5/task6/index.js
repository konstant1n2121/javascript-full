function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    let primes = true;

    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && i !== j) {
        primes = false;
      }
    }
    if (primes === true) {
      console.log(i);
    }
  }
}
getPrimes(67);
// function getPrimes(num) {
//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//       if (i % j === 0 && i !== j) {
//         isPrime = false;
//       }
//     }
//     if (isPrime === true) {
//       console.log(i);
//     }
//   }
// }
// getPrimes(40);
