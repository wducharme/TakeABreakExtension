//Current version uses a preset list of exercises - in the next iteration I am adding the option to add exercises
var exercises = ["Stand Up/Sit Down without using your hands", "Shoulder Shrug", "Neck Rotations", "Shoulder Extensions", "Finger Extension/Contraction", "Torso Twist", "Leg Extensions"]
//Used to keep track of/overwrite different intervals
var interval;


chrome.runtime.onInstalled.addListener(function() {
  //Defaults to reminding every 60 minutes
  setInterval(getUp, 60 * 60 * 1000)
});

//Recieves the user input from the popup and changes interval
chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        console.log(message);
        //Clears the last interval
        clearInterval(interval)
        //since setInterval takes milliseconds, need to account for minutes with 60 * 1000 
        interval = setInterval(getUp, parseInt(message.num, 10) * 60 * 1000)
});

function getUp() {

	var notifMsg = "Try this exercise if you need it: " + getRandomExercise()

    var notifOptions = {
        type: 'basic',
        iconUrl: 'images/mind.png',
        title: 'Take a break',
        message: notifMsg
        
    }
    //Creates and displays break notification
    chrome.notifications.create('breakNotif', notifOptions);

}

//Chooses a random exercise
function getRandomExercise(){

	var index = Math.floor(Math.random() * exercises.length)

	return exercises[index]
}








