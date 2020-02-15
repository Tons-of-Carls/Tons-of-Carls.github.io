
function getTunnelID(){
	return document.getElementById("NgrokTunnelID").value
}

function command(url){
	fetch(url, {
		mode: "no-cors"
	})
}

// Down
function forwardLeftDown(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/left?left=1")
}

function forwardRightDown(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/right?right=1")
}

function backwardLeftDown(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/left?left=-1")
}

function backwardRightDown(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/right?right=-1")
}



// Up
function forwardLeftUp(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/left?left=0")
}

function forwardRightUp(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/right?right=0")
}

function backwardLeftUp(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/left?left=0")
}

function backwardRightUp(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/right?right=0")
}


function emergencyStop(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/emergencyStop")
}

/*
document.getElementById("forward-left").ontouchstart = forwardLeftDown
document.getElementById("forward-left").ontouchend = forwardLeftUp

document.getElementById("forward-right").ontouchstart = forwardRightDown
document.getElementById("forward-right").ontouchend = forwardRightUp

document.getElementById("backward-left").ontouchstart = backwardLeftDown
document.getElementById("backward-left").ontouchend = backwardLeftUp

document.getElementById("backward-right").ontouchstart = backwardRightDown
document.getElementById("backward-right").ontouchend = backwardRightUp


document.getElementById("EmergencyStop").ontouchstart = emergencyStop
*/
