content1="海底两万里 德芙巧克力<br>香草味八喜 可可布朗尼<br>榴莲菠萝蜜 芝士玉米粒<br>鸡汁土豆泥 黑椒牛里脊<br>黄焖辣子鸡 红烧排骨酱里脊"
content2=" 不如你 全部不如你"
content3="黄先生，不管你爱不爱我，都爱你哟"
var k=0;i=0;j=0;first=true;first2=true;
function show() {
    if (k <= content1.length + 1) {
        str1 = content1.substr(0, k);
        var top = document.getElementById("txt1");
        top.innerHTML = str1 + "_";
        k++;
    }
    if(k >content1.length+1)
    {
        if(first){first=false;
        tsotsi($('#txt1'),0.5);
        }
        if(i<=content2.length+1) {
            str2 = content2.substr(0, i);
            var top2 = document.getElementById("txt2");
            top2.innerHTML = str2 + "_";
            i++;
        }
    }
    if(i>content2.length+1)
    {
        if(first2){first2=false;
            tsotsi($('#txt2'),0.5);
        }
        str3 = content3.substr(0, j);
        var top3 = document.getElementById("txt3");
        top3.innerHTML = str3 + "_";
        j++;
    }

    setTimeout("show()",150);
}
function tsotsi(item,t){

    if(t>=0){
        item.css({
            opacity: 0.1*t
        });
        setTimeout(tsotsi,500,item,t-0.5);
    }
}
$(function(){
    var n=1;
    $("body").click(function(e){
        var $i=$('<b></b>').text('❤');
        var x=e.pageX,y=e.pageY;
        $i.css({
            "z-index": 9999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "color": 'hotpink',
            "font-size": "20px",
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function() {
            $i.remove();
        });
    });
});