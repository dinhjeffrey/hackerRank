/* A Very Big Sum
You are given an array of integers of size NN. You need to print the sum of the elements in the array, keeping in mind that some of those integers may be quite large.

Print a single value equal to the sum of the elements in the array. In the above sample, you would print 5000000015
*/

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.reduce((sum, num) => sum+=Number(num), 0);
    console.log(arr)
}