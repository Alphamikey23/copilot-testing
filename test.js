// Create a function that checks if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
}

// Test the isPrime function with various inputs
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true