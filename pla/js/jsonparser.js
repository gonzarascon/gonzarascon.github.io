// Colección de métodos para hacer parseo de archivos JSON

function JsonParseHomeSlides(data)
{
    var slidesData = data.homeSlides;
    var slides = document.createElement("div");

    slides.setAttribute("id", "fullpage");
    for(i = 0; i < slidesData.length; i++)
    {
        var slide = document.createElement("div");
        var id = "slide-" + (i + 1).toString();

        slide.setAttribute("class", "section");
        slide.setAttribute("style", "background: url(" + slidesData[i].image + "); background-size:cover;");

        var slideContent = document.createElement("div");
        slideContent.classList.add("container");
        slideContent.classList.add("relative-pos");

        var slideContentWrapper = document.createElement("div");
        slideContentWrapper.classList.add("content-wrapper");

        // Begin content adding
        var categoryLabel = document.createElement("span");
        categoryLabel.innerText = slidesData[i].category;
        categoryLabel.classList.add("category");

        var titleLabel = document.createElement("h2");
        titleLabel.innerHTML = slidesData[i].title;

        var contentText = document.createElement("p");
        contentText.innerHTML = slidesData[i].content;

        slideContentWrapper.appendChild(categoryLabel);
        slideContentWrapper.appendChild(titleLabel);
        slideContentWrapper.appendChild(contentText);

        if (slidesData[i].button == true)
        {
            var linkButton = document.createElement("a");
            linkButton.innerText = "Involucrate";
            linkButton.setAttribute("href", slidesData[i].buttonLink);
            slideContentWrapper.appendChild(linkButton);
        }
        // End content adding
        slideContent.appendChild(slideContentWrapper);
        slide.appendChild(slideContent);
        slides.appendChild(slide);
    }
    return slides;
}

function JsonParseTeamMembers(data)
{
    var slidesData = data.teamMembers;
    var slides = document.createElement("div");
    slides.setAttribute("id", "team-member-cards");

    for (i = 0; i < slidesData.length; i++)
    {
        // Start member
        var memberCardContainer = document.createElement("div");
        memberCardContainer.classList.add("slide");
        // Start Member card
        var memberCardAsset = document.createElement("div");
        memberCardAsset.classList.add("member-card-asset");
        var memberImage = document.createElement("img");
        memberImage.setAttribute("src", slidesData[i].image);
        memberImage.classList.add("img-circle");
        var memberName = document.createElement("h3");
        memberName.innerText = slidesData[i].name;
        var memberAge = document.createElement("span");
        memberAge.innerText = slidesData[i].age;
        var memberFact1 = document.createElement("span");
        memberFact1.innerText = slidesData[i].fact1;
        var memberFact2 = document.createElement("span");
        memberFact2.innerText = slidesData[i].fact2;

        memberCardAsset.appendChild(memberImage);
        memberCardAsset.appendChild(memberName);
        memberCardAsset.appendChild(memberAge);
        memberCardAsset.appendChild(memberFact1);
        memberCardAsset.appendChild(memberFact2);

        var memberCardInformation = document.createElement("div");
        memberCardInformation.classList.add("member-card-information");

        var memberRank = document.createElement("span");
        memberRank.classList.add("member-rank");
        memberRank.innerText = slidesData[i].rank;

        var memberQuote = document.createElement("h3");
        memberQuote.innerText = '"' + slidesData[i].quote + '"';

        var memberContent = document.createElement("div");
        memberContent.innerHTML = slidesData[i].content;

        memberCardInformation.appendChild(memberRank);
        memberCardInformation.appendChild(memberQuote);
        memberCardInformation.appendChild(memberContent);

        memberCardContainer.appendChild(memberCardAsset);
        memberCardContainer.appendChild(memberCardInformation);
        // End member card

        slides.appendChild(memberCardContainer);
        // End member
    }
    return slides;
}
