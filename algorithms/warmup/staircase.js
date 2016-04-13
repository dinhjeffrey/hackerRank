// Your teacher has given you the task of drawing a staircase structure. Being an expert programmer, you decided to make a program to draw it for you instead. Given the required height, can you print a staircase as shown in the example?

function main() {
    var n = parseInt(readLine());
    /* 
    Array(11).join("a") - (Note that an array of length 11 gets you only 10 "a"s, since Array.join puts the argument between the array elements.)
    */
    for (var i=1; i<=n; i++){
        console.log(Array(n-i+1).join(" ") + Array(i+1).join('#'))
    }
}