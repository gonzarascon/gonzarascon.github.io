// Main javascript

// CONSTANTS

var SLIDER_IDLE_TIME = 10000;

var allowSlideTransition = true;
var sectionsTotal = -1;

$(document).ready(function()
{
    Init();
});

function Init()
{
    CreateMainSlider();
}


function CreateMainSlider()
{
    $.getJSON("js/json/homeslides.json", function(data)
    {
        var slider = JsonParseHomeSlides(data);
        var mainSlideContainer = document.getElementById("main-slide");
        mainSlideContainer.appendChild(slider);

        CreateFullPageSlider();
    });
}

var timer;

function CreateFullPageSlider()
{
    $("#fullpage").fullpage(
    {
        // options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        slidesNavigation: false,

        afterLoad: function(origin, destination, direction)
        {
            if (destination.index != sectionsTotal)
            {
                console.info("Titolog: ", origin, destination)
                AnimateTimeLapseBar();
                timer = setInterval(function()
                {
                    if (allowSlideTransition)
                    {
                        $.fn.fullpage.moveSlideRight();
                        clearInterval(timer);
                    }
                }, SLIDER_IDLE_TIME);
            }
        },
        afterSlideLoad: function(section, origin, destination, direction)
        {
            ResetTimeLapseBar();
        },

        onLeave: function(origin, destination, direction)
        {
            if (origin.index != sectionsTotal)
            {
                ResetTimeLapseBar();
                var childrenSlides = origin.item.querySelectorAll(".slide");
                if (!childrenSlides[0].classList.contains("active"))
                {
                    origin.item.querySelectorAll(".slide")[0].classList.add("active");
                }

                if (childrenSlides[0].classList.contains("active"))
                {
                    origin.item.querySelectorAll(".slide")[1].classList.remove("active");
                }
                console.info(childrenSlides[0]);
                console.info(childrenSlides[1]);
                // TODO: When returning to previous section, set main slide to 0.
                //$.fn.fullpage.scrollSlider(destination, 0);
            }
        }

    });
}

function AnimateTimeLapseBar()
{
    $(".time-lapse-bar").animate({
        width: "100%",
        opacity: 1
    }, SLIDER_IDLE_TIME, function() {
        // Just to stablish end of anim.
    });
}

function ResetTimeLapseBar()
{
    clearInterval(timer);
    if($(".time-lapse-bar").is(":animated"))
    {
        $(".time-lapse-bar").stop();
    }

    $(".time-lapse-bar").css("width","0");
    $(".time-lapse-bar").css("opacity","0.2");
}
