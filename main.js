const dayStart = "07:30";
const dayEnd = "17:45";

function addMinutes(time, minsToAdd) {
    function D(J){ return (J<10? '0':'') + J;};
    var piece = time.split(':');
    var mins = piece[0]*60 + +piece[1] + +minsToAdd;
  
    return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);  
}  

function scheduleMeeting(startTime, durationMinutes) {
    // compare start for initial fail condition
    // they are strings, and I don't think a "time()" function exists, but let's check
    if (Date.parse('01/01/2011 ' + startTime) < Date.parse('01/01/2011 ' + dayStart)) {
        return false;
    }
    
    // add duration and compare end with above limit
    let newTime = addMinutes(startTime, durationMinutes.toString());
    if (Date.parse('01/01/2011 ' + newTime) <= Date.parse('01/01/2011 ' + dayEnd)) {
        return true;
    }

    // might need a blanket return
    return false;
}

let res1=scheduleMeeting("7:00",15);     // false
let res2=scheduleMeeting("07:15",30);    // false
let res3=scheduleMeeting("7:30",30);     // true
let res4=scheduleMeeting("11:30",60);    // true
let res5=scheduleMeeting("17:00",45);    // true
let res6=scheduleMeeting("17:30",30);    // false
let res7=scheduleMeeting("18:00",15);    // false
console.log("test");