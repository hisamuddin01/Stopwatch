let [secs, mins, hours] = [0, 0, 0];
let displayTime = document.getElementById("display");
let timer = null;

function stopwatch() {
    secs ++
    if(secs == 60) {
        secs = 0;
        mins++
        if(mins == 60) {
            mins = 0
            hours++
        }
    }

    let hoursString = hours < 10 ? "0" + hours : hours;
    let minsString = mins < 10 ? "0" + mins : mins;
    let secsString = secs < 10 ? "0" + secs : secs;

    displayTime.innerHTML = hoursString + ":" + minsString + ":" + secsString
}

function watchStart() {
    if(timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000);
}
function watchStop () {
    clearInterval(timer)
}
function watchReset () {
    [secs, mins, hours] = [0, 0, 0];
    clearInterval(timer);
    displayTime.innerHTML = "00:00:00"
}