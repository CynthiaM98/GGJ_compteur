document.addEventListener('DOMContentLoaded', function(event){

	var compte_a_rebours = document.getElementById("compte_a_rebours");
	var dateActuelle = new Date();
	var dateDebut = new Date("Jan 31 18:00:00 2020");
	var total_secondes = 0;
	var prefixe = "";

	setInterval(function () {
		total_secondes = (dateDebut - dateActuelle) / 1000;
		prefixe = "La Global Game Jam commence dans ";

		if (total_secondes < 0){

		    prefixe = "Global Game Jam commencé il y a ";

		    total_secondes = Math.abs(total_secondes);

		}


		if (total_secondes > 0){

		    var jours = Math.floor(total_secondes / (60 * 60 * 24));
		    var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
		    var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
			var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
			compte_a_rebours.innerHTML = prefixe + jours + ' j ' + heures + ' h ' + minutes + ' min ' + secondes + ' sec';
		}


	}, 1000)

});

