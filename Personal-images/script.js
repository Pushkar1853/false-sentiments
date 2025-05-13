const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png"
];

let currentIndex = 0;

function updateImage() {
    const slideshowImage = document.getElementById("slideshow-image");
    const imageCounter = document.getElementById("image-counter");
    slideshowImage.src = images[currentIndex];
    imageCounter.textContent = `${currentIndex + 1} of ${images.length}`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

updateImage(); // Initial image setup
