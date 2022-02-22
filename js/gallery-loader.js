// get container for images
let imagesDiv = $(".images-container");

// get bootstrap carousel
let carousel = $(".carousel-inner");


/*
if (screenWidth >= 1100) {
    screenWidth = ;
} else if (screenWidth <= )

 */
// iterate over images folder
let totalImages = 9;
let currentDiv = $('<div></div>').addClass("gallery-row");
let totalWidth = imagesDiv.innerWidth();

let imgWidth;
let imgHeight;
let screenWidth = screen.width;

for (let imageNum = 1; imageNum <= totalImages; imageNum++) {
    // define image src
    let imgSrc = "gallery/image" + imageNum + ".jpg";

    // create new image
    let img = $('<a></a>')
                .attr("data-lightbox", "image-1")
                .attr("data-title", "My Caption")
                .attr("href", imgSrc)
                .append(
                  $('<img></img>')
                      .addClass("gallery-img")
                      .attr("src", imgSrc)
                );


    // append img to all images container
    imagesDiv.append(img);
}

/*
if (imagesCurrRow != 0) {
    if (imagesCurrRow != imagesPerRow) {
        currentDiv.removeClass("gallery-row");
        currentDiv.addClass("gallery-row-last");
    }

    imagesDiv.append(currentDiv);
}

 */
