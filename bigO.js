// #1
function return_num(){
    return 4;
}

console.log(return_num());

//O(1)


// #2
function return_num_with_input(num1, num2){
    let new_num = num1 + num2;
    return new_num;
}

console.log(return_num_with_input(3, 4));

//O(1)


// #3
function find_min(arr){
    let min = arr[0];
    for (let idx = 0; idx < arr.length; idx++){
        if(arr[idx] < min){
            min = arr[idx];
        }
    }
    return min;
}

console.log(find_min([2,3,7,6]))

//O(n)


// #4
function crazy_adding(arr){
    let sum = 0;
    for (let x = 0; x < arr.length; x++){
        for (let y = 0; y < arr.length; y++){
            sum = sum + arr[x] + arr[y];
        }
    }
    return sum;
}

console.log(crazy_adding([5,3,2]))


//O(n^2)



















/* RIOT WALK (Recap, Inputs/Outputs, Test Cases, Walkthrough)

Write a function that accepts an array, and tells me the largest value.


Recap

Inputs/Outputs

Test Cases

*/

// Writing the algorithm


// Walkthrough


// length
// pop 
// push 



















/*
GROUP ACTIVITY

3 min to...
A) Come up with 2 questions to ask about the algorithm: 
"Write a function that accepts an array, and tells me the largest value." 
Get creative!
B) Appoint someone to represent your group in speaking
*/

// Same # in multiple indexes?
// Do all indexes have values?
// Are all indexes the same datatype?
// Size of array? Could array be empty?
