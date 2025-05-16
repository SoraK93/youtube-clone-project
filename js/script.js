const videoContainer = document.getElementById("video-container");
const loadingSpinner = document.getElementById("loading-spinner");

/** Generate a random string used as ID for each video */
function generateId() {
  return Math.random().toString(36).substring(2, 12);
}

const videos = [
  {
    videoId: generateId(),
    thumbnail: "./assets/thumbnails/1.webp",
    channelIcon: "./assets/profile-pic.png",
    title: "Youtube clone 2021 | Create working youtube clone",
    channelName: "SoraK93",
    views: "1540 views",
    time: "1 day ago",
  },
  {
    videoId: generateId(),
    thumbnail: "./assets/thumbnails/2.webp",
    channelIcon: "./assets/profile-pic.png",
    title: "Youtube clone 2021 | Learn Full Stack Web Development",
    channelName: "SoraK93",
    views: "46846 views",
    time: "14 day ago",
  },
  {
    videoId: generateId(),
    thumbnail: "./assets/thumbnails/3.webp",
    channelIcon: "./assets/profile-pic.png",
    title: "Youtube clone 2021 | Master Python in 30days - 2025",
    channelName: "SoraK93",
    views: "168546 views",
    time: "25 day ago",
  },
  {
    videoId: generateId(),
    thumbnail: "./assets/thumbnails/4.webp",
    channelIcon: "./assets/profile-pic.png",
    title: "Youtube clone 2021 | GW2 Scourge Build Guide",
    channelName: "SoraK93",
    views: "64856 views",
    time: "64 day ago",
  },
  {
    videoId: generateId(),
    thumbnail: "./assets/thumbnails/5.webp",
    channelIcon: "./assets/profile-pic.png",
    title: "Youtube clone 2021 | GW2 WvW zerg Fight",
    channelName: "SoraK93",
    views: "1385 views",
    time: "85 day ago",
  },
  {
    videoId: generateId(),
    thumbnail: "./assets/thumbnails/6.webp",
    channelIcon: "./assets/profile-pic.png",
    title: "Youtube clone 2021 | Learn AI & ML - 2025",
    channelName: "SoraK93",
    views: "338534 views",
    time: "6 hours ago",
  },
];

/** Dynamically create video cards for all elements in videos array */
function loadVideos() {
  videos.forEach((video) => {
    const videoDiv = document.createElement("div");
    videoDiv.classList.add("video");

    videoDiv.innerHTML = `
        <img src="${video.thumbnail}" class="thumbnail" alt="video thumbnail" >
        <div class=content">
            <img src="${video.channelIcon}" class="channed-icon" alt="">
            <div class="info">
                <h4 class="title">${video.title}</h4>
                <p class="channel-name">${video.channelName}</p>
                <p class="views-time">${video.views}</p>
            </div>
        </div>
        `;

    videoDiv.addEventListener("click", () => {
        window.location.href = `./html/video.html?videoId=${video.videoId}`;
    });
    
    videoContainer.appendChild(videoDiv);
  });

  console.log(videos);

  loadingSpinner.style.display = "none";
}

// Starts loading video cards as soon as DOM is loaded
window.onload = function () {
  setTimeout(() => {
    loadVideos();
  }, 3000);
};
