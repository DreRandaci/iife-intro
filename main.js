// let Something = (function(oldSomething){
// 	const animals = ['cat', 'dog'];

// 	oldSomething.niceFunction = function() {
// 		console.log('Im a nice function');
// 	}

// 	return oldSomething;

// })(Something || {});

//
var SolarSystem = (function(oldSolarSystem){
	const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
	const spacecrafts = ['Pod', 'Death Star', 'Star Destroyer', 'Hoverboard']

	oldSolarSystem.getPlanets = function(){
		return planets;
	};

	oldSolarSystem.setPlanet = function(newPlanet){
		planets.push(newPlanet);
	};

	oldSolarSystem.getSpacecraft = function(){
		return spacecrafts;
	};

	oldSolarSystem.setSpacecraft = function(newCraft){
		spacecrafts.push(newCraft);
	};


	return oldSolarSystem;
})(SolarSystem || {});


let myPlanets = SolarSystem.getPlanets();
console.log('my planets', myPlanets);

