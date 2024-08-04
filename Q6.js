function reverseString(str) {
    
    return str.split('').reverse().join('');
}


let originalString = "Hello, World!";
let reversedString = reverseString(originalString);

console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);