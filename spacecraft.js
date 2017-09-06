var SolarSystem = (function(oldSolarSystem){
	const spacecrafts = ['Pod', 'Death Star', 'Star Destroyer', 'Hoverboard'];

	oldSolarSystem.getSpacecraft = function(){
		return spacecrafts;
	};

	oldSolarSystem.setSpacecraft = function(newCraft){
		spacecrafts.push(newCraft);
	};

	return oldSolarSystem;
})(SolarSystem || {});