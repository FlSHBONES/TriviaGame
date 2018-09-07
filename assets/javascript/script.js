setTimeout(timeUp, 1000 * 15);

//this is the timer function that triggers from the "on click button that says start quiz"
function timeUp() {
    
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");

};