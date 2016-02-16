
document.getElementById("link1").style.backgroundColor="#111";
//carousel
$(document).ready(
    function(){
        //left arrow movement
        $('#rarrow').click(
            function(){
                alert('we here');
                if($('#list').css("margin-left") == "0px"){
                    $("#list").css( { "margin-left" : "-1000px"} );
                }else if ($('#list').css("margin-left") == "-1000px"){
                    $("#list").css( { "margin-left" : "-500px"} );
                }else{
                    $("#list").css( { "margin-left" : "0px"} );
                }
            }
        );
        //right arrow movement
        $('#larrow').click(
            function(){
                alert('we here');
                if($('#list').css("margin-left") == "0px"){
                    $("#list").css( { "margin-left" : "-500px"} );
                }else if ($('#list').css("margin-left") == "-500px"){
                    $("#list").css( { "margin-left" : "-1000px"} );
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
    var height = $(window).height();
//position indicator
    var index = Math.floor(top/height)+1;

    //alert(id);
    for(i=1;i<5;i++){
        var id= "link"+i;
        if(i!=index){
            document.getElementById(id).style.backgroundColor="#333";
        }else{
            document.getElementById(id).style.backgroundColor="#111";
        }
    }

    if (top == 0) {
        if (isTop == false) {
            //  alert("hhh");
            if ($('.fixed-nav-bar').css("height") != "50px") {
                $(".fixed-nav-bar").animate({fontSize: '2.2rem'});
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

                $(".fixed-nav-bar").animate({fontSize: '1.8rem'});
                // $(".fixed-nav-bar").animate({height: '30px'});
                $(".fixed-nav-bar").css({"height": "30px"});
                isTop = false;
            }
        }
        //
        //$(".fixed-nav-bar").css( { "fontSize" : "1.8rem"} );
    }
}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("modal-link");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('a[href^="#"]').click(function() {

    var target = $(this.hash);
    var myoffset = parseInt(target.offset().top - 100);
    $('html,body').animate({scrollTop: myoffset }, 1000);
    return false;

});


