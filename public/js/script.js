function checkScroll(){var a=$(document).scrollTop(),b=window.innerHeight,c=Math.floor(a/b)+1;for(b+window.scrollY>=document.body.offsetHeight&&(c=4),i=1;i<5;i++){var d="link"+i;i!=c?document.getElementById(d).style.backgroundColor="#333":document.getElementById(d).style.backgroundColor="#111"}0==a?0==isTop&&"50px"!=$(".fixed-nav-bar").css("height")&&($(".fixed-nav-bar").animate({fontSize:"2.2vw"}),$(".fixed-nav-bar").css({height:"50px"}),isTop=!0):1==isTop&&"30px"!=$(".fixed-nav-bar").css("height")&&($(".fixed-nav-bar").animate({fontSize:"1.8vw"}),$(".fixed-nav-bar").css({height:"30px"}),isTop=!1)}document.getElementById("link1").style.backgroundColor="#111",$(document).ready(function(){var a=window.innerWidth,b=Math.floor(.6*a),c="-"+b+"px",d="-"+2*b+"px";$("#left-arrow").click(function(){if("0px"==$("#list").css("margin-left")){$("#list").css({"margin-left":c});$("#list").css("margin-left")}else if($("#list").css("margin-left")==c){$("#list").css({"margin-left":d});$("#list").css("margin-left")}else{$("#list").css({"margin-left":"0px"});$("#list").css("margin-left")}}),$("#right-arrow").click(function(){"0px"==$("#list").css("margin-left")?$("#list").css({"margin-left":d}):$("#list").css("margin-left")==d?$("#list").css({"margin-left":c}):$("#list").css({"margin-left":"0px"})})});var isTop=!0;$(window).scroll(function(){checkScroll()});var modal=document.getElementById("myModal");document.getElementById("modal-link").onclick=function(){modal.style.display="block"},document.getElementById("close").onclick=function(){modal.style.display="none"},$('a[href^="#"]').click(function(){var a=$(this.hash),b=parseInt(a.offset().top-50);$("html,body").animate({scrollTop:b},1e3)});