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

		if ((animal === "lassie" || animal === "babyYoda") && (weapon  === "lightsaber" || weapon === "yourFists") && (friends === "rachael" || friends === "joey") && cocktail === "margarita" && house === "huffle" || house === "slyth") {
			$("#csharp").show();
		} else if ((animal === "babyYoda" || animal === "lassie") && (weapon  === "wizardWand" || weapon === "pokemon") && (friends === "joey" || friends === "chandler") && (cocktail === "longIsland" || cocktail === "cosmo") && (house === "raven" || house === "gryffin")) {
			$("#java").show();
		} else if ((animal === "nagini" || animal === "godzilla") && (weapon  === "wizardWand" || weapon === "pokemon") && (friends === "monica" || friends === "rachael") && (cocktail === "pinaColada" || cocktail === "cosmo") && (house === "slyth" || house === "gryffin")) {
			$("#python").show();
		} else {
			$("#python").show();
		}
			
	

		event.preventDefault();
	});
});