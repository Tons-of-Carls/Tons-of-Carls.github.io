var start_latitude = null
var start_longitude = null
var num_of_people = null

var end_latitude = null
var end_longitude = null


var json_data = null

var distance = null

var fuel = null
var mpg = 24.8
var price_per_gallon = 2.603

function getNumPeople()
{	
	num_of_people = parseInt(document.getElementById("amount_of_people").value)
	getLocation()
}


function getLocation()
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position)
{
    start_latitude = position.coords.latitude;
	start_longitude = position.coords.longitude;
	
	var pare = document.getElementById("body")
	
	remove = ["prompt", "amount_of_people", "sub"]
	
	for(var i = 0; i < remove.length; i++)
	{
		pare.removeChild(document.getElementById(remove[i]))
	}
	
	createNewElements(pare)
}


function createNewElements(pare)
{
	var trip_over_button = document.getElementById("body").appendChild(document.createElement("input"))
	trip_over_button.id = "tripOverButton"
	trip_over_button.type = "Submit"
	trip_over_button.value = "End Trip"
	trip_over_button.onclick = onEndTrip;
}

function onEndTrip()
{
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getPosition(position)
{
	end_latitude = position.coords.latitude;
	end_longitude = position.coords.longitude;
	
	var pare = document.getElementById("body")
	pare.removeChild(document.getElementById("tripOverButton"))
	
	getData()
}


function getData()
{
	var xmlHTTP = new XMLHttpRequest()	
	xmlHTTP.open("GET", "https://www.mapquestapi.com/directions/v2/route?key=EQqJGc8Kerul1U4YYVO082Aomcxh8ZDT&from=" + String(start_latitude) + "," + String(start_longitude) + "&to=" + + String(end_latitude) + "," + String(end_longitude), false)
	xmlHTTP.send(null)
	json_data = JSON.parse(xmlHTTP.response)
	
	distance = json_data["route"]["distance"]
	fuel = json_data["route"]["fuelUsed"]
	
	document.getElementById("demo").innerHTML = "Cost Per Person: " + "$" + String(((distance/mpg)*price_per_gallon)/num_of_people)
}



