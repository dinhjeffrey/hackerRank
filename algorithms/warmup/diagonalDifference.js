/* Diagonal Difference
Given a square matrix of size N×NN×N, calculate the absolute difference between the sums of its diagonals.
Difference: |4 - 19| = 15
*/

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);  
    }
    // a = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
    var sumFromLeft=0;
    var sumFromRight=0;
    for (var i=0; i<a.length; i++){ 
        sumFromLeft += a[i][i]
        sumFromRight += a[i][a.length-1-i]
    }   
    console.log(Math.abs(sumFromLeft-sumFromRight))
}