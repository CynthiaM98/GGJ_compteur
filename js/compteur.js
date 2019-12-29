

document.addEventListener('DOMContentLoaded', function(event){

	var nbJour = document.getElementById("nbJour");
	var nbHeure = document.getElementById("nbHeure");
	var nbMinute = document.getElementById("nbMinute");
	var nbSeconde = document.getElementById("nbSeconde");
	var total_secondes = 0;
	var prefixe = "";

	function goodFormat(nb){
		if (nb < 10){
			return "0" + nb;
		}
		return nb;
	}

	function compteurLoop(){
		var dateActuelle = new Date();
		var dateDebut = new Date("Jan 31 18:00:00 2020");
		total_secondes = (dateDebut - dateActuelle) / 1000;
		prefixe = "LA GLOBAL GAME JAM ";

		if (total_secondes < 0){

		    prefixe = "Global Game Jam commencé il y a ";

		    total_secondes = Math.abs(total_secondes);

		}


		if (total_secondes > 0){

		    var jours = Math.floor(total_secondes / (60 * 60 * 24));
		    var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
		    var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
			var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

			nbJour.innerHTML = jours;
			nbHeure.innerHTML = goodFormat(heures);
			nbMinute.innerHTML = goodFormat(minutes);
			nbSeconde.innerHTML = goodFormat(secondes);
		}
	}

	setInterval(compteurLoop, 1000);



});

