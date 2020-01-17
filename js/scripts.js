$(document).ready(function() {
	$("form#language").submit(function(event) {
		
		var animal = $("#animal").val();
		console.log(animal);
		var weapon = $("#weapon").val();
		console.log(weapon);
		var friends = $("#friends").val();
		console.log(friends);
		var cocktail = $("#cocktail").val();
		console.log(cocktail);
		var house = $("#house").val();
		console.log(house);

		if (animal === "lassie" && weapon  === "lightsaber" && friends === "rachael" && cocktail === "margarita" && house === "huffle") {
			$("#java").show();
		} else if (animal === "babyYoda" || animal === "lassie" && weapon  === "wizardWand" && friends === "joey" && cocktail === "longIsland" && house === "raven") {
			$("#csharp").show();
		} else if (animal === "nagini" || animal === "godzilla" && weapon  === "wizardWand" || weapon === "pokemon" && friends === "joey" && cocktail === "pinaColada" && house === "slyth") {
			$("#python").show();
		}
			
	

		event.preventDefault();
	});
});