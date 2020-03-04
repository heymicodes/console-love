var pickupLines = [
	{
		line: "Je veux faire de toi une constante dans ma vie",
		id: "14"
	},
	{
		line: "Est-ce que t'es un événement, parce que je pourrais t'écouter toute ma vie",
		id: "205"
	},
	{
		line: "Est-ce que t'es un modèle, parce que t'as top la classe",
		id: "3"
	},
	{
		line: "Ta voix est une douce symfony à mes oreilles",
		id: "42"
	}
];

var pickup = {
	currentLineIndex: 0,
	init: function() {
		pickup.displayLine(pickup.currentLineIndex);
		document.addEventListener("keydown", pickup.nextLine);

		pickup.refreshBtn = document.getElementById("refresh-btn");
		pickup.refreshBtn.addEventListener("click", pickup.nextLine);
	},

	displayLine: function(index) {
		let line = document.getElementById("pickup-line");
		line.textContent = pickupLines[index].line;

		let author = document.getElementById("pickup-id");
		author.textContent = pickupLines[index].id;
	},

	nextLine: function(e) {
		console.log(e.currentTarget);
		if ( (e.keyCode == 32 && window.innerWidth > 992) || e.currentTarget == pickup.refreshBtn) {
			if (pickup.currentLineIndex === pickupLines.length - 1) {
				pickup.currentLineIndex = 0;
			} else {
				pickup.currentLineIndex++;
			}

			pickup.displayLine(pickup.currentLineIndex);
		}
	}
};
document.addEventListener("DOMContentLoaded", pickup.init);

var nav = {
	init: function() {
		nav.menuBtn = document.getElementById("menu-btn");
		nav.menuBtn.addEventListener("click", nav.toggleMenu);

		nav.menu = document.querySelector(".navigation");
		window.addEventListener("resize", nav.onResize);
	},

	onResize: function() {
		if (window.innerWidth > 992 && window.getComputedStyle(nav.menu).display === "none") {
			nav.menuBtn.innerHTML = '<i class="fa fa-times"></i>';
			nav.menu.style.display = "block";
		} else if (window.innerWidth < 991 && window.getComputedStyle(nav.menu).display === "block") {
			nav.menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
			nav.menu.style.display = "none";
		}
	},

	toggleMenu: function() {
		nav.changeBtn();
		if (window.getComputedStyle(nav.menu).display === "block") {
			nav.menu.style.display = "none";
			return;
		}
		nav.menu.style.display = "block";
	},

	changeBtn: function() {
		if (nav.menuBtn.innerHTML == '<i class="fa fa-bars"></i>') {
			nav.menuBtn.innerHTML = '<i class="fa fa-times"></i>';
			return;
		}
		nav.menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
	}
};
document.addEventListener("DOMContentLoaded", nav.init);
