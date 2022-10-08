
        $(function(){


            $("#btn").click(function () {

                    function sayiUret() {

                        return Math.round(Math.random() * 9);  

                    }

                    
                    $(".c1").hide().css({"background-color":"brown","color":"black"});  

                    
                    $("#dis").css("background-color", "rgb(18, 200, 220)");

                      

                    $("#div1").html(sayiUret()).slideDown(1000); 
                    $("#div2").html(sayiUret()).slideDown(2250);
                    $("#div3").html(sayiUret()).slideDown(3500);
                    $("#div4").html(sayiUret()).slideDown(4750);
                    $("#div5").html(sayiUret()).slideDown(5500);
                    $("#div6").html(sayiUret()).slideDown(6500);
                    $("#div7").html(sayiUret()).slideDown(7000);


                   


                    setInterval(function () {

                        $(".c1").fadeOut(1000, function () {

                            $(this).fadeIn(1000, function () {

                                $(this).fadeOut(1000, function () {

                                    $(this).fadeIn(1000, function () {

                                        $(this).fadeOut(1000, function () {

                                            $(this).fadeIn(2000);

                                        });

                                    });

                                });
                        });
                });

         }, 7000);

    });
 });





   