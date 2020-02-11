
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
	command("https://" + id +".ngrok.io/left?left=0.5")
}

function forwardRightDown(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/right?right=0.5")
}

function backwardLeftDown(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/left?left=-0.5")
}

function backwardRightDown(){
	id = getTunnelID()
	command("https://" + id +".ngrok.io/right?right=-0.5")
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


document.getElementById("forward-left").onmousedown = forwardLeftDown
document.getElementById("forward-left").onmouseup = forwardLeftUp

document.getElementById("forward-right").onmousedown = forwardRightDown
document.getElementById("forward-right").onmouseup = forwardRightUp

document.getElementById("backward-left").onmousedown = backwardLeftDown
document.getElementById("backward-left").onmouseup = backwardLeftUp

document.getElementById("backward-right").onmousedown = backwardRightDown
document.getElementById("backward-right").onmouseup = backwardRightUp


document.getElementById("EmergencyStop").onmousedown = emergencyStop