$( document ).ready(function() {


    $(window).scroll(function(){
       if ($(this).scrollTop() > 0){
           $("header").css({"opacity" : "0"})
       }
       else {
           $("header").css({"opacity" : "1"})
       }

    })


    

});