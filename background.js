


var exercises = ["Stand Up/Sit Down without using your hands", "Shoulder Shrug", "Neck Rotations", "Shoulder Extensions", "Finger Extension/Contraction", "Torso Twist", "Leg Extensions"]

chrome.runtime.onInstalled.addListener(function() {
  //Execute getUp every 60 minutes
  setInterval(getUp, 60 * 60 * 1000)
});


function getUp() {

	var alertMsg = "Get up: " + getRandomExercise()

	alert(alertMsg)
}


function getRandomExercise(){

	var index = Math.floor(Math.random() * exercises.length)

	return exercises[index]
}





