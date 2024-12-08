$(document).ready(
    function (){
        $("#btn-id").click(function () {
            $("h2").fadeOut(300);
        });
        $("#btn-show").click(function () {
            $("h2").fadeIn(300);
        });
        $("#btn-toggle").click(function () {
            $("h2").fadeToggle(100);
        });
        $("h2").click(function () {
            $(this).fadeTo(100,0.3);
        })
        $("h2").click(function () {
            $(this).fadeTo(500,0.5,function () {
                $(this).fadeTo(500,1);
            })
        })

    }
)
