// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let objImage = document.getElementById("rocket");
    objImage.style.position = "relative";
    objImage.style.left = "0px";
    objImage.style.top = "0px";


takeOff.addEventListener("click", event => {
let response = confirm("Is the rocket ready for launch?");
if (response) {
    flightStatus.innerHTML = "Shuttle in flight!";
    shuttleBackground.style.backgroundColor = "blue";
    let value = spaceShuttleHeight.innerHTML;
    spaceShuttleHeight.innerHTML = Number(value) + 10000;
}
});
landing.addEventListener("click", event => {
    flightStatus.innerHTML = "The shuttle is landing. Landing gear engaged.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;  
});

missionAbort.addEventListener("click", event =>{
    let response = confirm("Are you sure you wish to abort?");
    if (response) {
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    }
});
up.addEventListener("click", function (event) {
    objImage.style.top = parseInt(objImage.style.top) - 10 + "px";
    let value = spaceShuttleHeight.innerHTML;
    spaceShuttleHeight.innerHTML = Number(value) + 10000;
    });    

down.addEventListener("click", function (event) {
    objImage.style.top = parseInt(objImage.style.top) + 10 + "px";
    let value = spaceShuttleHeight.innerHTML;
    spaceShuttleHeight.innerHTML = Number(value) - 10000;
    });

right.addEventListener("click", function (event) {
    objImage.style.left = parseInt(objImage.style.left) + 10 + "px";
    });

left.addEventListener("click", function (event) {
    objImage.style.left = parseInt(objImage.style.left) - 10 + "px";
     });
}
window.addEventListener("load", init);g