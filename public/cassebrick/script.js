var BalleObject = { object: "", Taille: 10, Angle: 0, Hauteur: 7, Inventaire: 0 };
var TerrainObject = { object: "", largeur: "", hauteur: "" };
var BrickObjectArray = [];

var inter = ""
var nbr = 0;

function ChoisirDifficulte(Difficulte) {
	DivFenetre = document.getElementById("FenetreChoix");
	document.getElementById("NoCursor").style.cursor = "none";
	DivFenetre.className = DivFenetre.className + " FadeOut";

	BalleObject = { object: "", Taille: 10, Angle: 0, Hauteur: 7, Inventaire: 0 };
	BrickObjectArray = [];
	inter = "";

	if (Difficulte != 0)
		document.getElementById('point').textContent = "Vies restantes: " + Difficulte;
	else
		document.getElementById('point').textContent = "Aucune vie";

	BalleObject.Inventaire = Difficulte;

	DivFenetre.addEventListener('webkitAnimationEnd', LaunchInit, false);

	LaunchInit()
}

function LaunchInit() {
	DivFenetre.style.display = 'none';
	document.getElementById("Difficulte").style.display = 'none';
	init();
}

function init() {
	document.getElementById("FenetreChoix").removeEventListener('webkitAnimationEnd', LaunchInit, false);

	//Cr�er une nouvelle balle
	BalleObject.object = document.getElementById('babale');

	//Cr�ation d'un terrain 
	TerrainObject.object = document.getElementById('ctn');
	TerrainObject.largeur = ctn.offsetWidth;
	TerrainObject.hauteur = ctn.offsetHeight;

	cpt = 1;


	//Cr�ation de briques

	for (var i = 0; i < 3; i++) {
		for (var j = 70; j <= 520; j += 60) {
			var BrickObject = { PositionX: "", PositionY: "", Coup: "", Element: "" };

			BrickObject.PositionX = j;
			switch (i) {
				case 0: BrickObject.PositionY = 100;
					break;
				case 1: BrickObject.PositionY = 50;
					break;
				case 2: BrickObject.PositionY = 25;
					break;
			}

			BrickObject.Coup = cpt;

			if (cpt == 1)
				cpt = 0;
			else
				cpt++;

			BrickObjectArray.push(BrickObject);
		}
	}

	nbr = BrickObjectArray.length;

	init_terrain()

	addEventListener("mousemove", bouge_cur, false);

	inter = setInterval(bouge, 30);
}

function init_terrain() {
	for (var i = 0; i < BrickObjectArray.length; i++) {
		var elem = document.createElement("div");
		elem.className = "bloc";

		if (BrickObjectArray[i].Coup == 1) {
			elem.className = "bloc2";
		}

		elem.style.left = BrickObjectArray[i].PositionX + "px";
		elem.style.top = BrickObjectArray[i].PositionY + "px";

		BrickObjectArray[i].Element = TerrainObject.object.appendChild(elem);
	}
}

function bouge() {

	bord();
	bord_cur();

	if (nbr == 0) {
		clearInterval(inter);
		removeEventListener("mousemove", bouge_cur, false);
		document.getElementById("feedback").style.display = "table";
		document.getElementById('feedback').innerHTML = '<span>Victoire !</span><button onclick="Recommencer()" >Recommencer</button>';
		document.getElementById('FenetreChoix').className = "start";
		document.getElementById('FenetreChoix').style.display = "block";
		return false
	};

	BalleObject.object.style.left = BalleObject.object.offsetLeft + BalleObject.Angle + "px";
	BalleObject.object.style.top = BalleObject.object.offsetTop + BalleObject.Hauteur + "px";

	for (var i = 0; i < BrickObjectArray.length; i++) {

		if (BrickObjectArray[i].PositionX != "azert" && collision(BrickObjectArray[i].PositionX, BrickObjectArray[i].PositionY, BalleObject.object.offsetLeft, BalleObject.object.offsetTop)) {

			var posi_x = BalleObject.object.offsetLeft;
			var posi_y = BalleObject.object.offsetTop;

			if (posi_x - BalleObject.Angle < BrickObjectArray[i].PositionX) {
				BalleObject.Angle = Math.abs(BalleObject.Angle);
			}

			else if (posi_x + BalleObject.Angle > BrickObjectArray[i].PositionX - 15) {

				BalleObject.Angle = -BalleObject.Angle;
			}

			else if (posi_y + BalleObject.Hauteur < BrickObjectArray[i].PositionY) {

				BalleObject.Hauteur = -7;
			}

			else if (posi_y + BalleObject.Hauteur > BrickObjectArray[i].PositionY - 50) {

				BalleObject.Hauteur = 7;
			}

			if (BrickObjectArray[i].Coup == 0) {

				BrickObjectArray[i].Element.parentNode.removeChild(BrickObjectArray[i].Element);
				BrickObjectArray[i].PositionX = "azert";
				nbr--;
			}

			else {
				BrickObjectArray[i].Element.className = "bloc";
			}

			BrickObjectArray[i].Coup--;

			BalleObject.Angle < 0 ? BalleObject.Angle = Math.abs(BalleObject.Angle) : BalleObject.Angle = -BalleObject.Angle;
			BalleObject.Hauteur < 0 ? BalleObject.Hauteur = Math.abs(BalleObject.Hauteur) : BalleObject.Hauteur = -BalleObject.Hauteur;

		}
	}



}


function bord() {

	var cur = document.getElementById('cucure');

	var posi_x = BalleObject.object.offsetLeft;
	var posi_y = BalleObject.object.offsetTop;

	if (posi_x - BalleObject.Angle < 0) {
		BalleObject.object.style.left = 0 + "px";
		BalleObject.Angle = Math.abs(BalleObject.Angle);
	}

	if (posi_x + BalleObject.Angle > TerrainObject.largeur - BalleObject.Taille) {
		BalleObject.object.style.left = TerrainObject.largeur - BalleObject.Taille + "px";
		BalleObject.Angle = - BalleObject.Angle;
	}

	if (posi_y + BalleObject.Hauteur < 0) {
		BalleObject.object.style.top = 0 + "px";
		BalleObject.Hauteur = 7;
	}

	if (posi_y + BalleObject.Hauteur > TerrainObject.hauteur - BalleObject.Taille) {
		BalleObject.object.style.top = TerrainObject.hauteur - BalleObject.Taille + "px";
		BalleObject.Hauteur = -7;
		BalleObject.Inventaire--;


		if (BalleObject.Inventaire == -1) {

			clearInterval(inter);
			removeEventListener("mousemove", bouge_cur, false);
			document.getElementById("feedback").style.display = "table";
			document.getElementById('feedback').innerHTML = '<span>Vous avez perdu...</span><button onclick="Recommencer()" >Recommencer</button>';
			document.getElementById('FenetreChoix').className = "start";
			document.getElementById('FenetreChoix').style.display = "block";
			return false;
		}
		document.getElementById('point').textContent = "Vies restantes: " + BalleObject.Inventaire;
	}
}


function bouge_cur(e) {

	var cur = document.getElementById('cucure');

	var cur_l = cur.offsetWidth;

	var cur_x = e.clientX - TerrainObject.object.offsetLeft - (cur_l / 2);

	if (cur_x + cur_l + 3 > TerrainObject.largeur) {

		cur.style.left = TerrainObject.largeur - cur_l + "px";
	}

	else if (cur_x - 3 < 0) {

		cur.style.left = 0 + "px";
	}

	else {
		cur.style.left = cur_x + "px";
	}

}

function bord_cur() {

	var cur = document.getElementById('cucure');

	var cur_x = cur.offsetLeft;
	var cur_y = cur.offsetTop;

	var posi_x = BalleObject.object.offsetLeft;
	var posi_y = BalleObject.object.offsetTop;

	if (posi_y > cur_y - BalleObject.Taille) {

		if (posi_x >= cur_x - BalleObject.object.offsetWidth && posi_x <= cur_x + cur.offsetWidth) {

			var intermed = (30 * (posi_x - cur_x + BalleObject.object.offsetWidth) / (cur.offsetWidth + BalleObject.object.offsetWidth)) - 15;

			BalleObject.Angle = Math.round(intermed);

			BalleObject.Hauteur = - 7;
		}
	}
}

function Recommencer() {
	document.getElementById("feedback").style.display = "none";
	document.getElementById("Difficulte").style.display = "table";
	BalleObject.object.style.left = null;
	BalleObject.object.style.top = null;

	var myNode = document.getElementById("ctn");
	while (myNode.lastChild) {
		if (myNode.lastChild.className == "bloc" || myNode.lastChild.className == "bloc2")
			myNode.removeChild(myNode.lastChild);
		else
			break;
	}
}

function collision(box_l, box_t, bille_l, bille_t) {

	if ((bille_l >= box_l + 50) || (bille_l + BalleObject.Taille <= box_l) || (bille_t >= box_t + 15) || (bille_t + BalleObject.Taille <= box_t)) {
		return false;
	}
	else {
		return true;
	}
}