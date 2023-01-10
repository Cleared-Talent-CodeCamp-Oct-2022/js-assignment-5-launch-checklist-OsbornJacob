// Write your JavaScript code here!

//const { addDestinationInfo, pickPlanet } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
    let subButt = document.querySelector("form")
    subButt.addEventListener("submit", function (event) {
        event.preventDefault()
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         formSubmission(document, null, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
    console.log(event)
    })
    let listedPlanets;
    //  Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        pickPlanet(listedPlanets)
        
        return result
    }).then(function (listedPlanets) {  
        console.log(listedPlanets);
        
        //Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.



})
})
