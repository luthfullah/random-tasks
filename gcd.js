function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage
const num1 = 56;
const num2 = 98;
const result = gcd(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${result}`);

// Output: The GCD of 56 and 98 is: 14
