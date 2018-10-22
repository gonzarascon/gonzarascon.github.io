// About Javascript

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
        slidesNavigation: true
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
