!function(e, t, a) {
        var e = e,t=t,a=a;
    function n() {
        // c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
        c(".heart{width: 100px;height: 10px;position: fixed;background: #1e9fff00;color:#ffffff}"),
        o(),
        r()
    }
    function r() {
        for (var e = 0; e < d.length; e++)
            d[e].alpha <= 0 ? (t.body.removeChild(d[e].el),
            d.splice(e, 1)) : (d[e].y--,
            d[e].scale += .004,
            d[e].alpha -= .013,
            d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(0deg);color:" + d[e].color + ";z-index:99999");
        requestAnimationFrame(r)
    }
    function o() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function(e) {
            t && t(),
            i(e)
        }
    }
    function i(e) {
        var everydayTxt = ["自强不息","公平公正","富强民主","团结友爱","共同进步","爱国敬业","诚信友善"];
        var x = everydayTxt.length;
        var y = 1;
        var rand = parseInt(Math.random() * (x - y + 1) + y);
        var a = t.createElement("div");
        a.className = "heart",
        a.innerHTML = everydayTxt[rand-1];
        d.push({
            el: a,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: s()
        }),
        t.body.appendChild(a)
    }
    function c(e) {
        var t = document;
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch (t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }
    function s() {
        return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    }
    var d = [];
    e.requestAnimationFrame = function() {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        }
    }(),
    n()
}(window, document, '');
