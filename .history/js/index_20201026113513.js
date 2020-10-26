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
    // 打字机效果
    $.ajax({
        type: "GET", //GET还是POST,不是必须
        url: "../blog/json/article.json",
        dataType:"jsonp",
        success: function(data) {
            console.log(data);
            var x = data.length;
            var y = 0;
            var rand = parseInt(Math.random() * (x - y + 1) + y);
            var dataNUm = -1;
            console.log(typeof(data))
            // 打字机效果
            var timer = setInterval(function(){
                if(dataNUm < data[rand].cont.length){
                    dataNUm++;
                    $(".everyday").append(data[rand].cont.slice(dataNUm,dataNUm+1))
                }else{
                    clearInterval(timer);
                }
            }, 80);
        }
    });
});