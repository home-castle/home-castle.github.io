// get container for images
let imagesDiv = $(".images-container");

// iterate over images folder
let totalImages = 3;
for (let imageNum = 1; imageNum <= totalImages; imageNum++) {
    // create new image
    let img = new Image();

    // setting img properties
    img.src = "images/image" + imageNum + ".jpg";
    img.className = "gallery-img";

    // append img to container
    imagesDiv.append(img);
}


$("img").click(function () {
    window.alert("Img clicked");
});