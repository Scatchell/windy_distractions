function init() {
	var guy = document.createElement("img");
	guy.src = "assets/sprites/guy.png";
        guy.height=50;
        guy.width=25;
	container=document.getElementById("container");
	container.appendChild(guy);
}
