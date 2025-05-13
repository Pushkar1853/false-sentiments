const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
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
