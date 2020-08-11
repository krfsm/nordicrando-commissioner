"use strict";

const optionsURL = "options.json";
const wishesVetosURL = "wishes-vetos.json";
const translationsURL = "translations.json";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    let element = document.getElementById(parent);
    return element.appendChild(el);
}

function getWishesVetos() {
    fetch(wishesVetosURL)
    .then((resp) => resp.json())
    .then(function(data) {
        for (let numRaces = 0 ; numRaces < data.length; numRaces++) {
            let race = data[numRaces].race;
            let raceDiv = createNode("div");
            raceDiv.setAttribute("id", "race" + race);
            raceDiv.setAttribute("class", "race")
            append("races", raceDiv);
            raceDiv.innerHTML = "Race " + race;
            let racers = Object.values(data[numRaces].racers[0]);
            for (let numRacers = 0; numRacers < racers.length; numRacers++) {
                let racer = racers[numRacers];
                let racerDiv = createNode("div");
                racerDiv.setAttribute("id", "racer");
                console.log(numRacers);
                append("race" + race, racerDiv);
                racerDiv.innerHTML = racer;
            }
        }
    })
}

function getOptions() {
    fetch(optionsURL)
    .then((resp) => resp.json())
    .then(function(data) {
        let options = data;
        console.log(options);
    })
}

function getTranslations() {
    fetch(translationsURL)
    .then((resp) => resp.json())
    .then(function(data) {

    })
}

window.onload = function() {
    getWishesVetos();
    // getOptions();
    // getTranslations();
}