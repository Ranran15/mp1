
document.getElementById("link1").style.backgroundColor="#111";
//carousel
$(document).ready(
    function(){
        //left arrow movement
        var width = window.innerWidth;
        var offset = Math.floor(width*0.6);
        var mid =  "-"+offset+"px";
        var right = "-"+offset*2+"px";
        $('#left-arrow').click(
            function(){


                if($('#list').css("margin-left") == "0px"){
                    $("#list").css( { "margin-left" : mid} );
                    var here = $('#list').css("margin-left");
                }else if ($('#list').css("margin-left") == mid){
                    $("#list").css( { "margin-left" : right} );
                    var here = $('#list').css("margin-left");
                }else{
                    $("#list").css( { "margin-left" : "0px"} );
                    var here = $('#list').css("margin-left");
                }
            }
        );
        //right arrow movement
        $('#right-arrow').click(
            function(){
                if($('#list').css("margin-left") == "0px"){
                    $("#list").css( { "margin-left" : right} );
                }else if ($('#list').css("margin-left") == right){
                    $("#list").css( { "margin-left" : mid} );
                }else{
                    $("#list").css( { "margin-left" : "0px"} );
                }
            }
        );
    }
);

var isTop=true;
$(window).scroll(function() {
    checkScroll();
});
function  checkScroll() {
    var top = $(document).scrollTop();
    var height = window.innerHeight;
//position indicator
    var index = Math.floor(top/height)+1;
    if ((height + window.scrollY) >= document.body.offsetHeight){
        index=4;
    }
    //alert(id);
    for(i=1;i<5;i++){
        var id= "link"+i;
        if(i!=index){
            document.getElementById(id).style.backgroundColor="#333";
        }else{
            document.getElementById(id).style.backgroundColor="#111";
        }
    }
    //bottom of the page


        if (top == 0) {
        if (isTop == false) {
            if ($('.fixed-nav-bar').css("height") != "50px") {
                $(".fixed-nav-bar").animate({fontSize: '2.2vw'});
                $(".fixed-nav-bar").css({"height": "50px"});
                //$(".fixed-nav-bar").animate({height: '50px'});

                isTop = true;
            }
            //
            //$(".fixed-nav-bar").css( { "fontSize" : "2.2rem"} );
        }
        // $(".fixed-nav-bar").css( { "height" : "50px"} );
    } else {
        if (isTop == true) {
            if ($('.fixed-nav-bar').css("height") != "30px") {

                $(".fixed-nav-bar").animate({fontSize: '1.8vw'});
                // $(".fixed-nav-bar").animate({height: '30px'});
                $(".fixed-nav-bar").css({"height": "30px"});
                isTop = false;
            }
        }
        //
        //$(".fixed-nav-bar").css( { "fontSize" : "1.8rem"} );
    }
}


//modal
var modal = document.getElementById('myModal');
document.getElementById("modal-link").onclick = function() {
    modal.style.display = "block";
}
document.getElementById("close").onclick = function() {
    modal.style.display = "none";
}


//smooth scroll
$('a[href^="#"]').click(function() {
    var clicked = $(this.hash);
    var move = parseInt(clicked.offset().top - 50);
    $('html,body').animate({scrollTop: move }, 1000);
});


