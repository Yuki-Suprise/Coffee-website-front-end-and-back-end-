window.onload=function(){
    var imgArr=[
        {"path":"images/1.jpeg"},
        {"path":"images/2.jpeg"},
        {"path":"images/3.jpeg"},
        {"path":"images/4.jpeg"},
        {"path":"images/5.jpeg"},
        {"path":"images/6.jpeg"},
        {"path":"images/7.jpeg"}
    ];
    var size=[
        {"top":60,"left":0,"width":400,"height":240,"zIndex":1,"opacity":0},
        {"top":60,"left":0,"width":400,"height":240,"zIndex":2,"opacity":40},
        {"top":30,"left":150,"width":500,"height":300,"zIndex":3,"opacity":70},
        {"top":0,"left":300,"width":600,"height":360,"zIndex":4,"opacity":100},
        {"top":30,"left":550,"width":500,"height":300,"zIndex":3,"opacity":70},
        {"top":60,"left":800,"width":400,"height":240,"zIndex":2,"opacity":40},
        {"top":60,"left":800,"width":400,"height":240,"zIndex":1,"opacity":0}
    ];
    var imgSum=imgArr.length;
    var wrap=document.getElementById('wrap');
    var cont=wrap.firstElementChild || wrap.firstChild;
    var btnArr=wrap.getElementsByTagName('a');/*获取a标签*/
    var falg=true;
    var speed=5;
    wrap.onmouseover=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='block';
        }
        clearInterval(wrap.timer);
    }
    wrap.onmouseout=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='none';
        }
        wrap.timer=setInterval(function(){
             move(true);
         },speed);
    }
    for (var i=0;i<imgSum;i++) {
        var lis=document.createElement('li');   /*每一张图片创造一个li*/          
        lis.style.backgroundImage='url('+imgArr[i].path+')';
        cont.appendChild(lis);/*把新的li加入到列表的末尾*/
    }
    var liArr=cont.children;
    move();
    wrap.timer=setInterval(function(){/*setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式*/
        move(true);
    },speed);
    btnArr[1].onclick=function(){
        if (falg) {
            move(true);
        }
    }
    btnArr[0].onclick=function(){
        if (falg) {
            move(false);
        }
    }
    function move(bool){
        if(bool!=undefined){
            if(bool){
                size.unshift(size.pop());
            }else {
                size.push(size.shift());
            }
        }
        for (var i=0;i<liArr.length;i++) {
            animate(liArr[i],size[i],function(){
                falg=true;
            });
        }
    }
}

function signin(){
    var myAlert = document.getElementById("loginAlert");
    var mClose = document.getElementById("loginClose");
    myAlert.style.display = "block";
    myAlert.style.position = "absolute";
    myAlert.style.top = "50%";
    myAlert.style.left = "50%";
    myAlert.style.marginTop = "-75px";
    myAlert.style.marginLeft = "-150px";
    mybg = document.createElement("div");
    mybg.setAttribute("id", "mybg");
    mybg.style.background = "#000";
    mybg.style.width = "100%";
    mybg.style.height = "100%";
    mybg.style.position = "absolute";
    mybg.style.top = "0";
    mybg.style.left = "0";
    mybg.style.zIndex = "500";
    mybg.style.opacity = "0.3";
    mybg.style.filter = "Alpha(opacity=30)";
    document.body.appendChild(mybg);

    document.body.style.overflow = "hidden";

    mClose.onclick = function () {
        myAlert.style.display = "none";
        document.body.style.overflow = "scroll";
        document.body.removeChild(mybg);
    }
}

function signup(){
    var myAlert = document.getElementById("regAlert");
    var mClose = document.getElementById("regClose");
    myAlert.style.display = "block";
    myAlert.style.position = "absolute";
    myAlert.style.top = "50%";
    myAlert.style.left = "50%";
    myAlert.style.marginTop = "-75px";
    myAlert.style.marginLeft = "-150px";
    mybg = document.createElement("div");
    mybg.setAttribute("id", "mybg");
    mybg.style.background = "#000";
    mybg.style.width = "100%";
    mybg.style.height = "100%";
    mybg.style.position = "absolute";
    mybg.style.top = "0";
    mybg.style.left = "0";
    mybg.style.zIndex = "500";
    mybg.style.opacity = "0.3";
    mybg.style.filter = "Alpha(opacity=30)";
    document.body.appendChild(mybg);

    document.body.style.overflow = "hidden";

    mClose.onclick = function () {
        myAlert.style.display = "none";
        document.body.style.overflow = "scroll";
        document.body.removeChild(mybg);
    }
}

function login(){
    var username = $("#loginUsername").val();
    var password = $("#loginPassword").val();
    $.ajax({
        type:"get",
        url:"http://localhost:44395/api/User?username=" + username + "&password=" + password,
        success:function(result){
            alert(result);
            if(result == "登录成功！"){
                $("#loginClose").click();
            }
        }
    });
}

function reg(){
    var username = $("#regUsername").val();
    var password = $("#regPassword").val();
    var cpassword = $("#regCPassword").val();    
    $.ajax({
        type:"post",
        url:"http://localhost:44395/api/User?username=" + username + "&password=" + password + "&cpassword=" + cpassword,
        success:function(result){
            alert(result);
            if(result == "注册成功！"){
                $("#regClose").click();
            }
        }
    });
}