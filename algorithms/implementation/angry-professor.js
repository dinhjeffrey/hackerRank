/* Angry Professor
A Discrete Mathematics professor has a class of NN students. Frustrated with their lack of discipline, he decides to cancel class if fewer than KK students are present when class starts.

Given the arrival time of each student, determine if the class is canceled.
*/

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);
        console.log(a.filter(function(num){
            return num <=0;
            // No class is not cancelled, yes class is cancelled
        }).length >= k ? "NO" : "YES" )
    }
}