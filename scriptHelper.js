// Write your helper functions here!
require('isomorphic-fetch');
// Here is the HTML formatting for our mission target div.

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
     <ol>
         <li>Name: ${name}</li>
         <li>Diameter: ${diameter}</li>
         <li>Star: ${star}</li>
         <li>Distance from Earth: ${distance}</li>
         <li>Number of Moons: ${moons}</li>
     </ol>
     <img src="${imageUrl}">

`}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(Number(testInput))) {
        return "Is not a number"
    } else if (!isNaN(testInput)) {
        return "Is a number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === 'Empty' || validateInput(cargoMass) === "Empty") {
        window.alert("please fill all fields")
    } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number") {
        window.alert("please be sure to enter names with just letters for the pilot and co-pilot")
    } else if (validateInput(cargoMass) === "Is not a number" || validateInput(fuelLevel) === "Is not a number") {
        window.alert("please enter a valid number for Cargo Mass and Fuel Level")
    } else if (Number(fuelLevel) < 10000 && Number(cargoMass) > 10000) {
        document.getElementById("faultyItems").style.visibility = 'visible'
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.color = 'red'
        fstat = document.getElementById("fuelStatus").innerHTML = `Fuel Level: ${fuelLevel}L -- Too low for launch`
        cstat = document.getElementById("cargoStatus").innerHTML = `Cargo Mass: ${cargoMass}kg --Cargo mass too heavy for launch`;
        window.alert("Cargo weight must be below 10,000")
        window.alert("Fuel Level must be at least 10,000")
    } else if (Number(fuelLevel) < 10000) {
        document.getElementById("faultyItems").style.visibility = 'visible'
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.color = 'red'
        fstat = document.getElementById("fuelStatus").innerHTML = `Fuel Level: ${fuelLevel}L -- Too low for launch`
        window.alert("Fuel Level must be at least 10,000")
    } else if (Number(cargoMass) > 10000) {
        document.getElementById("faultyItems").style.visibility = 'visible'
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.color = 'red'
        cstat = document.getElementById("cargoStatus").innerHTML = `Cargo Mass: ${cargoMass}kg --Cargo mass too heavy for launch`;
        window.alert("Cargo weight must be below 10,000")
    } else {
        document.getElementById("faultyItems").style.visibility = 'visible'
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
        document.getElementById("launchStatus").style.color = 'green'
        let pStat = document.getElementById("pilotStatus").innerHTML = `Pilot: ${pilot}--Ready`;
        let cpStat = document.getElementById("copilotStatus").innerHTML = `Co-Pilot: ${copilot}--Ready`;
        let fstat = document.getElementById("fuelStatus").innerHTML = `Fuel Level: ${fuelLevel}L -- Fuel level high enough for launch`
        let cstat = document.getElementById("cargoStatus").innerHTML = `Cargo Mass: ${cargoMass}kg --Cargo mass low enough for launch`;
    }
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let onePlanet = planets[Math.floor(Math.random() * (planets.length))]
    addDestinationInfo(document, onePlanet.name, onePlanet.diameter, onePlanet.star, onePlanet.distance, onePlanet.moons, onePlanet.image)
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
