/* sherlock and the beast
For N=1N=1, there is no decent number having 11 digit (so we print −1−1).
For N=3N=3, 555555 is the only possible number. The number 55 appears three times in this number, so our count of 55's is evenly divisible by 33 (Decent Number Property 3).
For N=5N=5, 3333333333 is the only possible number. The number 33 appears five times in this number, so our count of 33's is evenly divisible by 55 (Decent Number Property 2).
For N=11N=11, 5555553333355555533333 and all permutations of these digits are valid numbers; among them, the given number is the largest one.
*/

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        if (n <3 || n === 4 || n === 7)
            console.log( -1)
        else if (n%3 === 0)
            console.log(Array(n+1).join("5"))
        else if (n%3 === 1 )
            console.log( Array(n+1-10).join("5") + "3333333333")
        else 
            console.log(Array(n+1-5).join("5") + "33333" )
    }   
}