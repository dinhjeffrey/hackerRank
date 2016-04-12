/*
Given an array of NN integers, can you find the sum of its elements?

We print the sum of the array's elements, which is: 1+2+3+4+10+11=311+2+3+4+10+11=31.
*/

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.reduce(function(sum, num){
        return sum+=Number(num) 
    }, 0);
    console.log(arr)
}