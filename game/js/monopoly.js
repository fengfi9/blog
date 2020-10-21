
dice.on("click", game); 
function game(){
	//骰子点数显示
	var num = Math.ceil(Math.random()*6);
	var bgi = Math.ceil(Math.random()*2);
	dice.css("background-image", "url(img/s"+bgi+".jpg");
	setTimeout(function(){
		dice.css("background-image", "url(img/"+num+".jpg");
	}, 300);
	dice.css("pointer-events","none");

	if(s == 1){
		var move = setInterval(p1move, v);
		text = "p1";
		playing();
	}
	else if(s == 2){
		var move = setInterval(p2move, v);
		text = "p2";
		playing();					
	}
	else if (s == 3) {
		var move = setInterval(p3move, v);
		text = "p3";
		playing();
	}
	else if (s == 4){
		var move = setInterval(p4move, v);
		text = "p4";
		playing();
	}	
	// 游戏核心
	function playing(){
		setTimeout(function(){
			clearInterval(move);
			//绑定对应角色
			if( text == "p1"){
				position = po1;
				person = p1;
			}
			else if( text == "p2"){
				position = po2;
				person = p2;
			}
			else if( text == "p3"){
				position = po3;
				person = p3;
			}
			else if( text == "p4"){
				position = po4;
				person = p4;
			}
			//公用动作判定
			// 买地产
			if(place[position].owner == "none"){
				if(person.control == 0){
					purchase.style.visibility = "hidden";
				}
				else{
					purchase.style.visibility = "visible";
				}
					// 买公用地产
					if(place[position].state == 0){
						purchase.firstElementChild.innerText = "请问你要花费$" + place[position].value + "来购买" +place[position].name+"吗？";
						if(person.money < place[position].value){
							purchase.children[2].style.pointerEvents = "none";
							purchase.children[2].style.background = "#454545";	
						}
						purchase.children[2].onclick = function(){
							place[position].owner = person.name;
							purchase.style.visibility = "hidden";
							person.money -= place[position].value;
							msgtype = "purchase";
							showMsgbox();
							gameSequence();
						}
						if(person.control == 0){
							purchase.children[2].style.pointerEvents = "auto";
							purchase.children[2].style.background = "#e1e1e1";
							if((person.money - place[position].value) > 3000 ){
								setTimeout(function(){
									place[position].owner = person.name;
									person.money -= place[position].value;
									msgtype = "purchase";
									showMsgbox();
									gameSequence();
								},v/3)
							}
							else{
								gameSequence();
							}
						}
					}
					// 买充公地产
					else if(place[position].state == 1 || place[position].state == 2 || place[position].state == 3){
						if(person.money < (place[position].value + place[position].cost) ){
							purchase.children[2].style.pointerEvents = "none";
							purchase.children[2].style.background = "#454545";	
						}
						purchase.firstElementChild.innerText = "请问你要花费$" + (place[position].value + place[position].cost) + "来购买" +place[position].name+"吗？";
						purchase.children[2].onclick = function(){
							place[position].owner = person.name;
							purchase.style.visibility = "hidden";
							person.money -= place[position].value;
							person.money -= place[position].cost;
							msgtype = "purchase";
							showMsgbox();
							gameSequence();
						}
						if(person.control == 0){
							purchase.children[2].style.pointerEvents = "auto";
							purchase.children[2].style.background = "#e1e1e1";
							if((person.money - place[position].value - place[position].cost ) > 3000 ){
								setTimeout(function(){
									place[position].owner = person.name;
									person.money -= place[position].value;
									person.money -= place[position].cost;
									msgtype = "purchase";
									showMsgbox();
									gameSequence();
								})
							}
							else{
								gameSequence();
							}
						}
					}	
			}
			// 住房
			if(place[position].owner !== person.name && place[position].owner !== "none" && ( place[position].state == 0 || place[position].state == 1 || place[position].state == 2 || place[position].state == 3 ) ){
				for (var i = 0; i < players.length; i++) {
					if(place[position].owner == players[i].name){
						if(players[i].stop !== 0){
							msgtype = "busy";
						}
						else{
							person.money -= place[position].cost;
							players[i].money += place[position].cost;								
							msgtype = "checkIn";
						}
					}
				}
				showMsgbox();
				gameSequence();
			}
			// 升级房子
			if(place[position].owner == person.name){
				if(person.control == 1){
					if(place[position].state < 3){
						upgrade.style.visibility = "visible";
						upgrade.firstElementChild.innerText = "请问你要花费$"+place[position].value * .5+"来升级"+place[position].name+"吗？";
						if(person.money < place[position].value * .5){
							upgrade.children[2].style.pointerEvents = "none";
							upgrade.children[2].style.background = "#454545";	
						}
					}
					else{
						gameSequence();
					}		
					upgrade.children[2].onclick = function(){
						if(place[position].state < 3){
							if(place[position].state == 0){
								place[position].cost += place[position].value * .4;
								person.money -= place[position].value * .5;
								upgrade.style.visibility = "hidden";
								boxes[position].prepend(construct);
								setTimeout(function(){
									$(".hide").append(construct);
									$("#b"+position+"").append(l1);
									gameSequence();
								},2000);
							}
							else if(place[position].state == 1){
								place[position].cost += place[position].value * .5;
								person.money -= place[position].value * .5;
								upgrade.style.visibility = "hidden";
								boxes[position].prepend(construct);
								setTimeout(function(){
									$(".hide").append(construct);
									$("#b"+position+">img.house").remove();
									$("#b"+position+"").append(l2);
									gameSequence();
								},2000);
							}
							else if(place[position].state == 2){
								place[position].cost += place[position].value *.6;
								person.money -= place[position].value * .5;
								upgrade.style.visibility = "hidden";
								boxes[position].prepend(construct);
								setTimeout(function(){
									$(".hide").append(construct);
									$("#b"+position+">img.house").remove();
									$("#b"+position+"").append(l3);
									gameSequence();
								},2000);
							}
							place[position].state += 1;
							msgtype = "upgrade";
							showMsgbox();
						}
						else{
							gameSequence();
						}
					}
				}
				else if(person.control == 0){
						upgrade.style.visibility = "hidden";
						upgrade.children[2].style.pointerEvents = "auto";
						upgrade.children[2].style.background = "#e1e1e1";
						if(place[position].state < 3){
							if((person.money - place[position].value * .5)	> 2000 ){
								if(place[position].state == 0){
									place[position].cost += place[position].value * .4;
									person.money -= place[position].value * .5;
									upgrade.style.visibility = "hidden";
									boxes[position].prepend(construct);
									setTimeout(function(){
										$(".hide").append(construct);
										$("#b"+position+"").append(l1);
										gameSequence();
									},2000);
								}
								else if(place[position].state == 1){
									place[position].cost += place[position].value * .5;
									person.money -= place[position].value * .5;
									upgrade.style.visibility = "hidden";
									boxes[position].prepend(construct);
									setTimeout(function(){
										$(".hide").append(construct);
										$("#b"+position+">img.house").remove();
										$("#b"+position+"").append(l2);
										gameSequence();
									},2000);
								}
								else if(place[position].state == 2){
									place[position].cost += place[position].value *.6;
									person.money -= place[position].value * .5;
									upgrade.style.visibility = "hidden";
									boxes[position].prepend(construct);
									setTimeout(function(){
										$(".hide").append(construct);
										$("#b"+position+">img.house").remove();
										$("#b"+position+"").append(l3);
										gameSequence();
									},2000);
								}
								place[position].state += 1;
								msgtype = "upgrade";
								showMsgbox();	
							}
							else{
								gameSequence();
							}
						}
						else{
							gameSequence();
						}
				}
			}
			// 收支钱
			if(place[position].state == "goodsp"){
				randomMoney = 500 * Math.floor(Math.random()*7);
				person.money += randomMoney;
				msgtype = "goodsp";
				showMsgbox();
				gameSequence();
			}
			if(place[position].state == "badsp"){
				randomMoney = 300 * Math.floor(Math.random()*7);
				person.money -= randomMoney;
				msgtype = "badsp";
				showMsgbox();
				gameSequence();
			}
			// 监狱
			if(place[position].state == "jail"){
				person.stop = Math.ceil(Math.random()*3);
				msgtype = "jail";
				showMsgbox();
				gameSequence();
			}
			// 赌场
			if(place[position].state == "casino"){
				document.querySelector(".bet").style.visibility = "visible";
				if(person.control == 0){
					spdice.css("pointer-events","none");
					gamble();
				}
				else{
					spdice.css("pointer-events","auto");	
				}
			}

			// 机会命运
			if(place[position].state == "surprise"){
				var y = Math.floor(Math.random()*31); 
				person.money += fate[y].value;
				fateText = fate[y].text;
				msgtype = "surprise";
				// 坐牢事件
				if (y > 26){
					if(y == 27){
						person.stop = 1;
					}
					else if(y == 28){
						person.stop = 2;
					}
					else if(y == 29){
						person.stop = 3;
					}
					if(y == 30){
						person.stop = 5;
					}
					setTimeout(function(){
						position = 11;
						if(person.index == 1){
							boxes[11].append(i1);
							po1 = 11;
							if(person.state == "bankrupt"){
								document.querySelector(".p1info").append(i1);
							}	
						}
						else if(person.index == 2){
							boxes[11].append(i2);
							po2 = 11;
							if(person.state == "bankrupt"){
								document.querySelector(".p2info").append(i2);
							}		
						}
						else if(person.index == 3){
							boxes[11].append(i3);
							po3 = 11;
							if(person.state == "bankrupt"){
								document.querySelector(".p3info").append(i3);
							}	
						}
						else if(person.index == 4){
							boxes[11].append(i4);
							po4 = 11;
							if(person.state == "bankrupt"){
								document.querySelector(".p4info").append(i4);
							}		
						}	
					},v * 1.5)
				}
				showMsgbox();
				gameSequence();
			}

			// 飞机
			if(place[position].state == "ap"){
				if(place[position].name == "白云机场"){
					msgtype = "airporteast";
					setTimeout(function(){
						position = 23;
						if(person.index == 1){
							boxes[23].append(i1);
							po1 = 23;	
						}
						else if(person.index == 2){
							boxes[23].append(i2);
							po2 = 23;	
						}
						else if(person.index == 3){
							boxes[23].append(i3);
							po3 = 23;	
						}
						else if(person.index == 4){
							boxes[23].append(i4);
							po4 = 23;	
						}						
					},v * 1.5)
				}
				else{
					msgtype = "airportwest";
					setTimeout(function(){
						if(person.index == 1){
							boxes[7].append(i1);
							po1 = 7;	
						}
						else if(person.index == 2){
							boxes[7].append(i2);
							po2 = 7;	
						}
						else if(person.index == 3){
							boxes[7].append(i3);	
							po3 = 7;
						}
						else if(person.index == 4){
							boxes[7].append(i4);
							po4 = 7;	
						}
					},v * 1.5)	
				}
				person.money -= 800;
				
				showMsgbox();
				gameSequence();
			}

			// 旅游度假
			if(place[position].state == "trip"){
				person.stop = Math.ceil(Math.random()*3);
				person.money -= person.stop * 1000;
				msgtype = "trip";
				showMsgbox();
				gameSequence();
			}


			//查看变化
			console.log(person.name + "现在有$" + person.money);


		},v * num + v*0.9);
		
	}

}



spdice.on("click", gamble);
function gamble(){
	var gain = Math.ceil(Math.random()*6);
	var bgm = Math.ceil(Math.random()*2);
	spdice.css("background-image", "url(img/s"+bgm+".jpg");
	setTimeout(function(){
		spdice.css("background-image", "url(img/"+gain+".jpg");
	}, 300);
	setTimeout(function(){
		msgtype = "casino";
		casinoMoney = gain * 500;
		person.money += casinoMoney;
		showMsgbox();
		document.querySelector(".bet").style.visibility = "hidden";
		gameSequence();
	},v*2);
	spdice.css("pointer-events","none");	
}



// 轮骰顺序
function gameSequence(){
	if( text == "p1"){
		p1checkState();
	}
	if( text == "p2"){
		p2checkState();
	}
	if( text == "p3"){
		p3checkState();
	}
	if( text == "p4"){
		p4checkState();
	}
}

function p1checkState(){
	if(p2.stop !== 0){
		setTimeout(function(){
			p2checkState();
			p2.stop -= 1;
			myName = p2.name;
			daysLeft = p2.stop + 1;
			if(po2 == 11){
				msgtype = "injail";			
			}
			else{
				msgtype = "intrip";
			}
			showMsgbox();
		},v*2);
	}
	else if(p2.state == "bankrupt"){
		p2checkState();
	}
	else{
		if(p2.control == 0){
			setTimeout(function(){
				game();	
			},v*2)
		}
		else{
			dice.css("pointer-events","auto");
		}
		s = 2;
		title.innerHTML = p2.name;
		checkColor();
	}
}
function p2checkState(){
	if(p3.stop !== 0){
		setTimeout(function(){
			p3checkState();
			p3.stop -= 1;
			myName = p3.name;
			daysLeft = p3.stop + 1;
			if(po3 == 11){
				msgtype = "injail";			
			}
			else{
				msgtype = "intrip";
			}
			showMsgbox();
		},v*2);
	}
	else if(p3.state == "bankrupt"){
		p3checkState();
	}
	else{
		if(player == 2){
			s = 1;
			title.innerHTML = p1.name;
			dice.css("pointer-events","auto");
			if(p1.stop !== 0){
				setTimeout(function(){
					p1.stop -= 1;
					myName = p1.name;
					daysLeft = p1.stop + 1;
					if(po1 == 11){
						msgtype = "injail";			
					}
					else{
						msgtype = "intrip";
					}
					showMsgbox();
				},v*2);
				if(p2.control == 0){
					dice.css("pointer-events","none");
					setTimeout(function(){
						p1checkState();
					},v*4);
				}
				s = 2;
				title.innerHTML = p2.name;
			}
		}
		else{
			if(p3.control == 0){
				setTimeout(function(){
					game();	
				},v*2)
			}
			else{
				dice.css("pointer-events","auto");			
			}
			s = 3;
			title.innerHTML = p3.name;
		}
		checkColor();
	}
}
function p3checkState(){
	if(p4.stop !== 0){
		setTimeout(function(){
			p4checkState();
			p4.stop -= 1;
			myName = p4.name;
			daysLeft = p4.stop + 1;
			if(po4 == 11){
				msgtype = "injail";			
			}
			else{
				msgtype = "intrip";
			}
			showMsgbox();
		},v*2);
	}
	else if(p4.state == "bankrupt"){
		p4checkState();
	}
	else{
		if(player == 4){
			if(p4.control == 0){
				setTimeout(function(){
					game();	
				},v*2)
			}
			else{
				dice.css("pointer-events","auto");
			}
			s = 4;
			title.innerHTML = p4.name;			
		}
		else{
			dice.css("pointer-events","auto");
			if(p1.stop !== 0){
				dice.css("pointer-events","none");
				setTimeout(function(){
					p1checkState();
					p1.stop -= 1;
					myName = p1.name;
					daysLeft = p1.stop + 1;
					if(po1 == 11){
						msgtype = "injail";			
					}
					else{
						msgtype = "intrip";
					}
					showMsgbox();
				},v*2);
				
				s = 2;
				title.innerHTML = p2.name;
			}
			s = 1;
			title.innerHTML = p1.name;
		}
		checkColor();
	}
}
function p4checkState(){
	if(p1.stop !== 0){
		setTimeout(function(){
			p1checkState();
			p1.stop -= 1;
			myName = p1.name;
			daysLeft = p1.stop + 1;
			if(po1 == 11){
				msgtype = "injail";			
			}
			else{
				msgtype = "intrip";
			}
			showMsgbox();
		},v*2);
	}
	else if(p1.state == "bankrupt"){
		p1checkState();
	}
	else{
		dice.css("pointer-events","auto");
		if(p1.stop !== 0){
			dice.css("pointer-events","none");
			setTimeout(function(){
				p1checkState();
				p1.stop -= 1;
				myName = p1.name;
				daysLeft = p1.stop + 1;
				if(po1 == 11){
					msgtype = "injail";			
				}
				else{
					msgtype = "intrip";
				}
				showMsgbox();
			},v*2);
			s = 2;
			title.innerHTML = p2.name;
		}
		s = 1;
		title.innerHTML = p1.name;
		checkColor();
	}
}
// 关闭对话框按钮
purchase.children[3].onclick = function(){
	purchase.style.visibility = "hidden";
	gameSequence();
	purchase.children[2].style.pointerEvents = "auto";
	purchase.children[2].style.background = "#e1e1e1";
}
upgrade.children[3].onclick = function(){
	upgrade.style.visibility = "hidden";
	gameSequence();
	upgrade.children[2].style.pointerEvents = "auto";
	upgrade.children[2].style.background = "#e1e1e1";
}
				
// 角色移动
function p1move(){
	if(po1 == 29){
		po1 = -1;
		boxes[0].append(i1);
		p1.money += 2000;
	}
	po1++;
	boxes[po1].append(i1);
}
function p2move(){
	if(po2 == 29){
		po2 = -1;
		boxes[0].append(i2);
		p2.money += 2000;
	}
	po2++;
	boxes[po2].append(i2);
}
function p3move(){
	if(po3 == 29){
		po3 = -1;
		boxes[0].append(i3);
		p3.money += 2000;
	}
	po3++;
	boxes[po3].append(i3);
}
function p4move(){
	if(po4 == 29){
		po4 = -1;
		boxes[0].append(i4);
		p4.money += 2000;
	}
	po4++;
	boxes[po4].append(i4);
}

