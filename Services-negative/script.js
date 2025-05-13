const videos = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
    "videos/video4.mp4",
    "videos/video5.mp4"
];

let currentVideoIndex = 0;

function updateVideo() {
    const slideshowVideo = document.getElementById("slideshow-video");
    const videoCounter = document.getElementById("video-counter");
    slideshowVideo.src = videos[currentVideoIndex];
    slideshowVideo.play(); // Ensure the new video starts playing
    videoCounter.textContent = `${currentVideoIndex + 1} of ${videos.length}`;
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
}

updateVideo(); // Initial image setup
