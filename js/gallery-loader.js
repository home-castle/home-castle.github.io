// get container for images
let imagesDiv = $(".images-container");

// iterate over images folder
let totalImages = 9;
let mobile = screen.width <= 600;

for (let imageNum = 1; imageNum <= totalImages; imageNum++) {
    // define image src
    let imgSrc = "../gallery/image" + imageNum + ".jpg";

    // create new image
    let img;
    if (mobile) {
        img = $('<img></img>')
            .addClass("gallery-img")
            .attr("src", imgSrc);
    } else {
        img = $('<a></a>')
            .attr("data-lightbox", "image-1")
            //.attr("data-title", "My Caption")
            .attr("href", imgSrc)
            .append(
                $('<img></img>')
                    .addClass("gallery-img")
                    .attr("src", imgSrc)
            );
    }

    // append img to all images container
    imagesDiv.append(img);
}