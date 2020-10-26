layui.use(['jquery', 'util'], function () {
    var $ = layui.jquery,
        util = layui.util;
    $(window).load(function () {
        $("#loading").fadeOut(500);
        new WOW().init();
    })
    util.fixbar();;
    $('.next').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').outerHeight() + 1
        }, 600);
    });
    $('#menu').on('click', function () {
        var mark = $(this).attr('data-mark');
        if (mark === 'false') {
            $(this).removeClass('menu_open').addClass('menu_close');
            //open
            $('#navgation').removeClass('navgation_close').addClass('navgation_open');
            $(this).attr({ 'data-mark': "true" });
        } else {
            $(this).removeClass('menu_close').addClass('menu_open');
            //close
            $('#navgation').removeClass('navgation_open').addClass('navgation_close');
            $(this).attr({ 'data-mark': "false" });
        }
    });
    !function(){
        var everydayTxt = [
            {
                "id": "1",
                "cont": "我们常常不去看真相。以为不看，就不存在。",
                "type": "airticle"
            },
            {
                "id": "2",
                "cont": "人生事多，死生为大。",
                "type": "airticle"
            },
            {
                "id": "3",
                "cont": "恍然重忆少年事，仍有涟漪泛心头。",
                "type": "airticle"
            },
            {
                "id": "4",
                "cont": "世中已无你，昨日相面，今隔天地;初晨鸣晓鸡，啼声入耳，心泛涟漪。",
                "type": "airticle"
            },
            {
                "id": "5",
                "cont": "总有些事，应该是做给自己看的，而不该是做给别人看的。",
                "type": "airticle"
            },
            {
                "id": "6",
                "cont": "回首过往红尘,渐懂简单是真。",
                "type": "airticle"
            },
            {
                "id": "7",
                "cont": "我以手足换手足，自此折剑出江湖。",
                "type": "airticle"
            },
            {
                "id": "8",
                "cont": "世上没有那么多一见钟情且相守到老，更多的是日久生情仍吵吵闹闹。",
                "type": "airticle"
            },
            {
                "id": "9",
                "cont": "我本能忍受黑夜，如果我从未见过光明。",
                "type": "airticle"
            },
            {
                "id": "10",
                "cont": "有些人，一旦遇到，就再难分开；而有些人，一旦分开，便再不会遇见。",
                "type": "airticle"
            },
            {
                "id": "11",
                "cont": "若有一日心不念，亦是秋来满身伤。",
                "type": "airticle"
            },
            {
                "id": "12",
                "cont": "情到深处难自已，人在心上难忘记。如今眼前已无你，幸是此后无别离。",
                "type": "airticle"
            },
            {
                "id": "13",
                "cont": "哪有人会那么害怕长大，无非是这个长大的结果和自己预期的不一样，因此而惶恐罢了！",
                "type": "airticle"
            },
            {
                "id": "14",
                "cont": "没有一次崩溃是突如其来的，每一座山崩塌之前，都不知道受过多少次碰撞！",
                "type": "airticle"
            }
        ];
        var x = everydayTxt.length;
        var y = 0;
        var rand = parseInt(Math.random() * (x - y + 1) + y);
        var dataNUm = -1;
        // 打字机效果
        var timer = setInterval(function(){
            if(dataNUm < everydayTxt[rand].cont.length){
                dataNUm++;
                $(".everyday").append(everydayTxt[rand].cont.slice(dataNUm,dataNUm+1))
            }else{
                clearInterval(timer);
            }
        }, 80);
    }();
    $.ajax({
        type: "GET", //GET还是POST,不是必须
        url: "../blog/json/article.json",
        success: function(data) {
            console.log(data)
        }
    });
});