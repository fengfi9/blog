// 判定地皮归属
setInterval(function(){
	for( var i = 0; i < place.length; i++){
		if(place[i].owner == "Robin"){
			boxes[i].style.boxShadow = "3px 3px 3px inset #FA2A14,3px -3px 3px inset #FA2A14,-3px 3px 3px inset #FA2A14, -3px -3px 3px inset #FA2A14";
		}
		if(place[i].owner == "Batman"){
			boxes[i].style.boxShadow = "3px 3px 3px inset #121212,3px -3px 3px inset #121212,-3px 3px 3px inset #121212, -3px -3px 3px inset #121212";
		}
		if(place[i].owner == "Superman"){
			boxes[i].style.boxShadow = "3px 3px 3px inset #274D7A,3px -3px 3px inset #274D7A,-3px 3px 3px inset #274D7A, -3px -3px 3px inset #274D7A";
		}
		if(place[i].owner == "Catwoman"){
			boxes[i].style.boxShadow = "3px 3px 3px inset #B04E58,3px -3px 3px inset #B04E58,-3px 3px 3px inset #B04E58, -3px -3px 3px inset #B04E58";
		}
		if(place[i].owner == "Green Lantern"){
			boxes[i].style.boxShadow = "3px 3px 3px inset #5FAE2E,3px -3px 3px inset #5FAE2E,-3px 3px 3px inset #5FAE2E, -3px -3px 3px inset #5FAE2E";
		}
		if(place[i].owner == "Joker"){
			boxes[i].style.boxShadow = "3px 3px 3px inset #5E45AB,3px -3px 3px inset #5E45AB,-3px 3px 3px inset #5E45AB, -3px -3px 3px inset #5E45AB";
		}
		if(place[i].owner == "Harley Quinn"){
			boxes[i].style.boxShadow = "3px 3px 3px inset pink,3px -3px 3px inset pink,-3px 3px 3px inset pink, -3px -3px 3px inset pink";
		}
		if(place[i].owner == "none"){
			boxes[i].style.boxShadow = "1px 1px 1px inset #454545,1px -1px 1px inset #454545,-1px 1px 1px inset #454545, -1px -1px 1px inset #454545";
		}
	}
});

// 判断胜利条件
var winning = setInterval(function(){
	if(p1.money < 0){
		p1.state = "bankrupt"
	}
	if(p2.money < 0){
		p2.state = "bankrupt"
	}
	if(p3.money < 0){
		p3.state = "bankrupt"
	}
	if(p4.money < 0){
		p4.state = "bankrupt"
	}
	if(p1.state == "active" && p2.state !== "active" && p3.state !== "active" && p4.state !== "active"){
		clearInterval(checkp1state);
		clearInterval(checkp2state);
		clearInterval(checkp3state);
		clearInterval(checkp4state);
		clearInterval(winning);
		alert(p1.name+"赢啦！恭喜你成为最有钱的人！");
		location.reload();
	}
	if(p2.state == "active" && p1.state !== "active" && p3.state !== "active" && p4.state !== "active"){
		clearInterval(checkp2state);
		clearInterval(checkp3state);
		clearInterval(checkp4state);
		clearInterval(winning);
		alert(p2.name+"赢啦！恭喜你成为最有钱的人！");
		location.reload();
	}
	if(p3.state == "active" && p2.state !== "active" && p1.state !== "active" && p4.state !== "active"){
		clearInterval(checkp2state);
		clearInterval(checkp3state);
		clearInterval(checkp4state);
		clearInterval(winning);
		alert(p3.name+"赢啦！恭喜你成为最有钱的人！");
		location.reload();
	}
	if(p4.state == "active" && p2.state !== "active" && p3.state !== "active" && p1.state !== "active"){
		clearInterval(checkp2state);
		clearInterval(checkp3state);
		clearInterval(checkp4state);
		clearInterval(winning);
		alert(p4.name+"赢啦！恭喜你成为最有钱的人！");
		location.reload();
	}
},v);
//判断破产
var checkp1state = setInterval(function(){
	if(p1.state == "bankrupt"){
		clearInterval(checkp1state);
		alert("很遗憾，"+ p1.name + "破产了，所有地产将充公处理。");
		document.querySelector(".p1info").append(i1);
		for( var i = 0; i < place.length; i++){
			if(place[i].owner == p1.name){
				place[i].owner = "none";
			}
		}
		if(po1 == 7 || po1 == 23){
			setTimeout(function(){
				document.querySelector(".p1info").append(i1);
			},v * 2);
		}
		if(po1 == 11 || po1 == 26){
			p1.stop = 0;
		}
	}
},10)
var checkp2state = setInterval(function(){
	if(p2.state == "bankrupt"){
		clearInterval(checkp2state);
		alert("很遗憾，"+ p2.name + "破产了，所有地产将充公处理。");
		document.querySelector(".p2info").append(i2);
		for( var i = 0; i < place.length; i++){
			if(place[i].owner == p2.name){
				place[i].owner = "none";
			}
		}
		if(po2 == 7 || po2 == 23){
			setTimeout(function(){
				document.querySelector(".p2info").append(i2);
			},v * 2);
		}
		if(po2 == 11 || po2 == 26){
			p2.stop = 0;
		}
	}
},10)
var checkp3state = setInterval(function(){
	if(p3.state == "bankrupt"){
		clearInterval(checkp3state);
		alert("很遗憾，"+ p3.name + "破产了，所有地产将充公处理。");
		document.querySelector(".p3info").append(i3);
		for( var i = 0; i < place.length; i++){
			if(place[i].owner == p3.name){
				place[i].owner = "none";
			}
		}
		if(po3 == 7 || po3 == 23){
			setTimeout(function(){
				document.querySelector(".p3info").append(i3);
			},v * 2);
		}
		if(po3 == 11 || po3 == 26){
			p3.stop = 0;
		}
	}
},10)
var checkp4state = setInterval(function(){
	if(p4.state == "bankrupt"){
		clearInterval(checkp4state);
		alert("很遗憾，"+ p4.name + "破产了，所有地产将充公处理。");
		document.querySelector(".p4info").append(i4);
		for( var i = 0; i < place.length; i++){
			if(place[i].owner == p4.name){
				place[i].owner = "none";
			}
		}
		if(po4 == 7 || po4 == 23){
			setTimeout(function(){
				document.querySelector(".p4info").append(i4);
			},v * 2);
		}
		if(po4 == 11 || po4 == 26){
			p4.stop = 0;
		}

	}
},10)