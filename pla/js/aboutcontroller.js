// About Javascript

var FINAL_SLIDE = 6;

$(document).ready(function()
{
    Init();
});

function Init()
{
    //CreateFullPageSlider();
    CreateTeamSlider();
}

function CreateFullPageSlider()
{
    $("#fullpage").fullpage(
    {
        // options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
        controlArrows: false,
        slidesNavigation: true,

        onLeave: function(origin, destination, direction)
        {
            console.info(origin.index, destination.index, direction);
            var header = document.querySelector("header");
            if (destination.index == FINAL_SLIDE)
            {
                if (!header.classList.contains("invisible-bg"))
                {
                    header.classList.add("invisible-bg");
                }
            }
            else
            {
                if (header.classList.contains("invisible-bg"))
                {
                    header.classList.remove("invisible-bg");
                }
            }
        }
    });
}

function CreateTeamSlider()
{
    $.getJSON("js/json/team.json", function(data)
    {
        var slider = JsonParseTeamMembers(data);
        slider.setAttribute("id", "team-members-slider");
        var teamSlideContainer = document.querySelector("#about-team .container.relative-pos");
        teamSlideContainer.appendChild(slider);

        // Recién una vez que tenemos la estructura hacemos el fullpage slider
        CreateFullPageSlider();
    });
}

function CreateFullPageTeamSlider()
{
    $("#team-members-slider").fullpage(
        {
            // options here
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling:true,
            scrollHorizontally: true,
            controlArrows: false
        }
    );
}
