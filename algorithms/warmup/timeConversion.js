// Given a time in AM/PM format, convert it to military (2424-hour) time.

function main() {
    var time = readLine();
    if (time.slice(0,2) === "12" && time.slice(-2) === "AM") {
        console.log("00" + time.slice(2,-2) ) 
    } else if (time.slice(0,2) === "12" && time.slice(-2) === "PM") {
        console.log("12" + time.slice(2,-2) )
    }else if (time.slice(-2) === "AM") {
        console.log(time.slice(0,-2))
    } else {
        console.log((Number(time.slice(0,2))+12).toString() + time.slice(2,-2))
    }
}