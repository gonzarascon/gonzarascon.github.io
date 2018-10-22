// Main javascript

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

function CreateFullPageSlider()
{
    $("#fullpage").fullpage(
    {
        // options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true
    });
}
