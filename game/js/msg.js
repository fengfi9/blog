// 消息提示框
var msgtype = "";
var msgbox = document.querySelector(".msgbox");
function showMsgbox(){
	msgbox.style.visibility = "visible";
	if(msgtype == "purchase"){
		msgbox.firstElementChild.innerHTML = "恭喜你获得了"+place[position].name;
	}
	else if(msgtype == "upgrade"){
		if(place[position].state == 1){
			msgbox.firstElementChild.innerHTML = "恭喜你在"+place[position].name+"建了一座小房子！"
		}
		else if(place[position].state == 2){
			msgbox.firstElementChild.innerHTML = "恭喜你在"+place[position].name+"建了一栋大房子！"
		}
		else if(place[position].state == 3){
			msgbox.firstElementChild.innerHTML = "恭喜你在"+place[position].name+"建了一栋大酒店！"
		}
	}
	else if(msgtype == "checkIn"){
		msgbox.firstElementChild.innerHTML = place[position].owner + "谢谢你在" + place[position].name + "消费$" + place[position].cost 
	}
	else if(msgtype == "goodsp"){
		msgbox.firstElementChild.innerHTML = "恭喜你捡到了$" + randomMoney;
	}
	else if(msgtype == "badsp"){
		msgbox.firstElementChild.innerHTML = "你需要向政府缴纳税收$" + randomMoney;
	}
	else if(msgtype == "surprise"){
		msgbox.firstElementChild.innerHTML = fateText;
	}
	else if(msgtype == "jail"){
		msgbox.firstElementChild.innerHTML = "偷税漏税被抓，关押" + person.stop + "天";
	}
	else if(msgtype == "injail"){
		msgbox.firstElementChild.innerHTML = myName + "还有" + daysLeft + "天可以出狱";
	}
	else if(msgtype == "trip"){
		msgbox.firstElementChild.innerHTML = "花费" + (person.stop * 1000) + "享受旅游度假" + person.stop + "天" 
	}
	else if(msgtype == "intrip"){
		msgbox.firstElementChild.innerHTML = myName + "离难得的假期结束还有" + daysLeft + "天"
	}
	else if(msgtype == "busy"){
		msgbox.firstElementChild.innerHTML = "房子主人不在，免费过夜1晚！"
	}
	else if(msgtype == "casino"){
		msgbox.firstElementChild.innerHTML = "恭喜你获得了$" + casinoMoney; 
	}
	else if(msgtype == "airporteast"){
		msgbox.firstElementChild.innerHTML = "你花费$800搭乘飞机前往英国"
	}
	else if(msgtype == "airportwest"){
		msgbox.firstElementChild.innerHTML = "你花费$800搭乘飞机返回中国"
	}
	else if(msgtype == "nope"){
		msgbox.firstElementChild.innerHTML = "此处正在施工，请快速通过！"
	}
	setTimeout(function(){
		msgbox.style.visibility = "hidden";
	},v*1.6);
}