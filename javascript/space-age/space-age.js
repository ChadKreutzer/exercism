"use strict";

class SpaceAge {
    constructor (input) {
        this.seconds = input;
    }
    
    onEarth () {
        return planetYears(this.seconds, 1);
    }
    
    onMercury () {
        return planetYears(this.seconds, 0.2408467);
    }
    
    onVenus () {
        return planetYears(this.seconds, 0.61519726);
    }
    
    onMars () {
        return planetYears(this.seconds, 1.8808158);
    }
    
    onJupiter () {
        return planetYears(this.seconds, 11.862615);
    }
    
    onSaturn () {
        return planetYears(this.seconds, 29.447498);
    }
    
    onUranus () {
        return planetYears(this.seconds, 84.016846);
    }
    
    onNeptune () {
        return planetYears(this.seconds, 164.79132);
    }
}

const planetYears = (seconds, factor) => Math.round(seconds / 31557600 / factor * 100) / 100;

module.exports = SpaceAge;