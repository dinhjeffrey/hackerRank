// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line. 

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    // arr = [ -4, 3, -9, 0, 4, 1 ]
    console.log((arr.reduce((acc, num) => num > 0 ? acc+=1 : acc+=0, 0)/arr.length).toFixed(6))
    console.log((arr.reduce((acc, num) => num < 0 ? acc+=1 : acc+=0, 0)/arr.length).toFixed(6))
    console.log((arr.reduce((acc, num) => num === 0 ? acc+=1 : acc+=0, 0)/arr.length).toFixed(6))
}