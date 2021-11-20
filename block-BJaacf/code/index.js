// 1. Create an array named numbers and store 5 number values in it
numbers = [1, 2, 3, 4, 5];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]; 
}
 console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()

let average = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]; 
}
 average = sum/numbers.length - 1;
 console.log( `Average of given numbers is ${average}`);

// 4. Find the highest number in the array and print it to the console using console.log()
console.log(Math.max(numbers.length));

// 5. Find the lowest number in the array and print it to the console using console.log()
console.log(Math.min(numbers.length));
// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [];
for (let number of numbers){
    if(number % 2 === 0){
        even.push(number);
    }
      console.log (`Even numbers are ${even}`);
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];
for (let number of numbers){
    if(number % 2 !== 0){
        odd.push(number);
    }
    console.log (`Odd numbers are ${odd}`);
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divisibleByFive = [];
for (let number of numbers){
    if(number % 5 === 0){
        divisibleByFive.push(number);
    }
    console.log (`numbers divisible by five are ${divisibleByFive}`);
}
// 9. Log all the element of the array one by one
console.log(numbers.length);
// 10. Find all the number in the array that is divisible by 3
let divisibleByThree = [];
for (let number of numbers){
    if(number % 3 === 0){
        divisibleByThree.push(number);
    }
    console.log (`numbers divisible by three are ${divisibleByThree}`);
}