var SolarSystem = (function(oldSolarSystem){
	const stars = ['Death Star', 'Star Destroyer', 'Big Star', 'Little Star', 'Ringo Starr'];

	oldSolarSystem.showMeTheStars = function(){
		return stars;
	};

	oldSolarSystem.addThatMfStar = function(newStar){
		spacecrafts.push(newStar);
	};

	oldSolarSystem.getThatMfStarOuttaHere = function(){
		stars.pop()
	};

	return oldSolarSystem;
})(SolarSystem || {});