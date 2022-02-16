// get container for images
let imagesDiv = $(".images-container");

// get bootstrap carousel
let carousel = $(".carousel-inner");

// iterate over images folder
let totalImages = 3;
for (let imageNum = 1; imageNum <= totalImages; imageNum++) {
    let imgSrc = "images/image" + imageNum + ".jpg";

    // create new image
    let img1 = new Image();
    let img2 = new Image();

    // setting img properties
    img1.src = imgSrc;
    img1.className = "gallery-img";
    img1.id = "" + (imageNum - 1);
    img2.src = imgSrc;
    img2.className = "gallery-img";

    // append img to all images container
    imagesDiv.append(img1);

    // append img to bootstrap carousel
    let div = document.createElement('div');
    div.className = "carousel-item";
    div.id = img2.src;

    if (imageNum === 1) {
        div.className = div.className + " active";
    }

    img2.className = "gallery-img " + "d-block w-100";
    div.append(img2);
    carousel.append(div);
}

// image on click function
$("img").click(function () {
    window.alert("image clicked");
});