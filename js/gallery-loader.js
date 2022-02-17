// get container for images
let imagesDiv = $(".images-container");

// get bootstrap carousel
let carousel = $(".carousel-inner");

// iterate over images folder
let totalImages = 11;
for (let imageNum = 1; imageNum <= totalImages; imageNum++) {
    let imgSrc = "gallery/image" + imageNum + ".jpg";

    // create new image
    let img1 = new Image();
    let img2 = new Image();

    // setting img properties
    let img = `<a href=${imgSrc} data-lightbox="image-1" data-title="My Caption">
                    <img class="gallery-img" src=${imgSrc} />
                </a>`;



    // append img to all images container
    imagesDiv.append(img);
}