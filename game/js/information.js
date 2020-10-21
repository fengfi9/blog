

function checkColor(){
	if (title.innerHTML == "Joker") {
		title.style.background = colorscheme.joker;
	}
	if (title.innerHTML == "Batman") {
		title.style.background = colorscheme.batman;
	}
	if (title.innerHTML == "Superman") {
		title.style.background = colorscheme.superman;
	}
	if (title.innerHTML == "Green Lantern") {
		title.style.background = colorscheme.green;
	}
	if (title.innerHTML == "Harley Quinn") {
		title.style.background = colorscheme.pink;
	}
	if (title.innerHTML == "Robin") {
		title.style.background = colorscheme.red;
	}
	if (title.innerHTML == "Catwoman") {
		title.style.background = colorscheme.cat;
	}
}
function getcolor(){
	if (p1.name == "Joker") {
		$(".p1info h1").css("background",colorscheme.joker);
	}
	if (p1.name == "Batman") {
		$(".p1info h1").css("background",colorscheme.batman);
	}
	if (p1.name == "Superman") {
		$(".p1info h1").css("background",colorscheme.superman);
	}
	if (p1.name == "Green Lantern") {
		$(".p1info h1").css("background",colorscheme.green);
	}
	if (p1.name == "Harley Quinn") {
		$(".p1info h1").css("background",colorscheme.pink);
	}
	if (p1.name == "Robin") {
		$(".p1info h1").css("background",colorscheme.red);
	}
	if (p1.name == "Catwoman") {
		$(".p1info h1").css("background",colorscheme.cat);
	}
	if (p2.name == "Joker") {
		$(".p2info h1").css("background",colorscheme.joker);
	}
	if (p2.name == "Batman") {
		$(".p2info h1").css("background",colorscheme.batman);
	}
	if (p2.name == "Superman") {
		$(".p2info h1").css("background",colorscheme.superman);
	}
	if (p2.name == "Green Lantern") {
		$(".p2info h1").css("background",colorscheme.green);
	}
	if (p2.name == "Harley Quinn") {
		$(".p2info h1").css("background",colorscheme.pink);
	}
	if (p2.name == "Robin") {
		$(".p2info h1").css("background",colorscheme.red);
	}
	if (p2.name == "Catwoman") {
		$(".p2info h1").css("background",colorscheme.cat);
	}
	if (p3.name == "Joker") {
		$(".p3info h1").css("background",colorscheme.joker);
	}
	if (p3.name == "Batman") {
		$(".p3info h1").css("background",colorscheme.batman);
	}
	if (p3.name == "Superman") {
		$(".p3info h1").css("background",colorscheme.superman);
	}
	if (p3.name == "Green Lantern") {
		$(".p3info h1").css("background",colorscheme.green);
	}
	if (p3.name == "Harley Quinn") {
		$(".p3info h1").css("background",colorscheme.pink);
	}
	if (p3.name == "Robin") {
		$(".p3info h1").css("background",colorscheme.red);
	}
	if (p3.name == "Catwoman") {
		$(".p3info h1").css("background",colorscheme.cat);
	}
	if (p4.name == "Joker") {
		$(".p4info h1").css("background",colorscheme.joker);
	}
	if (p4.name == "Batman") {
		$(".p4info h1").css("background",colorscheme.batman);
	}
	if (p4.name == "Superman") {
		$(".p4info h1").css("background",colorscheme.superman);
	}
	if (p4.name == "Green Lantern") {
		$(".p4info h1").css("background",colorscheme.green);
	}
	if (p4.name == "Harley Quinn") {
		$(".p4info h1").css("background",colorscheme.pink);
	}
	if (p4.name == "Robin") {
		$(".p4info h1").css("background",colorscheme.red);
	}
	if (p4.name == "Catwoman") {
		$(".p4info h1").css("background",colorscheme.cat);
	}
}
//显示信息
function writeinfo(){
	$(".p1info h1").text(p1.name);
	$(".p1info h2").text("$" + p1.money);
	$(".p2info h1").text(p2.name);
	$(".p2info h2").text("$" + p2.money);
	if(player >= 3){
		$(".p3info h1").text(p3.name);
		$(".p3info h2").text("$" + p3.money);
		if(player == 4){
			$(".p4info h1").text(p4.name);
			$(".p4info h2").text("$" + p4.money);
		}	
	}		
	getcolor();
}
// 显示地产信息
for (var i = 0; i < boxes.length; i++) {
	boxes[i].onmouseover = function(){
		info.style.visibility = "visible";
		info.firstElementChild.firstElementChild.innerHTML = place[Number(this.id.substr(1))].name;
		info.lastElementChild.children[0].innerHTML = "地主：" + place[Number(this.id.substr(1))].owner;
		info.lastElementChild.children[1].innerHTML = "价格：" + place[Number(this.id.substr(1))].cost;
		if(place[Number(this.id.substr(1))].owner == "none" || place[Number(this.id.substr(1))].owner == "sean" ){
			info.lastElementChild.children[0].innerHTML = "地主：无";
			info.lastElementChild.children[1].innerHTML = "价格：" + place[Number(this.id.substr(1))].value;
		}
	}
	boxes[i].onmouseout = function(){
		info.style.visibility = "hidden";
	}
}
boxes[0].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[11].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[7].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[8].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[9].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[17].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[16].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[15].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[23].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[25].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[26].onmouseover = function(){
		info.style.visibility = "hidden";
}
boxes[4].onmouseover = function(){
		info.style.visibility = "hidden";
}