console.log("Welcome to Gaan-Bajna");

let playbutton = document.getElementById("play");
let gif = document.getElementById("gif");
let nickname = document.getElementById("nickname");
//let songitems = Array.from(document.getElementsByClassName("songitem"));
let progressbar = document.getElementById("progressbar");
let divicon = Array.from(document.getElementsByClassName("divicon"));
let container = document.getElementById("gaans");
var songItems = document.querySelectorAll(".songitem");
let vol = document.getElementById("vol");
let volbar = document.getElementById("volume");
let previous = document.getElementById("previous");
let next = document.getElementById("next");

let songs = [
  {
    songname: "srothoshini",
    filepath: "/1.mp3",
    coverpath: "/srotoshini.jpg",
  },
  {
    songname: "Bishonnosundor",
    filepath: "/2.mp3",
    coverpath: "/Bishonnosundor.jpeg",
  },
  {
    songname: "Choo Loo",
    filepath: "/3.mp3",
    coverpath: "/Choolo.jpeg",
  },
  { songname: "Ghum", filepath: "/4.mp3", coverpath: "/ghum.jpeg" },
  {
    songname: "AnotherLove",
    filepath: "/5.mp3",
    coverpath: "/AnotherLove.jpeg",
  },
  {
    songname: "Dehokhan",
    filepath: "/6.mp3",
    coverpath: "/Dehokhan.jpg",
  },
];

let songindex = 0;
let audioelement = new Audio("1.mp3");

//playButton:

const makeAllpause = () => {
  var icons = document.querySelectorAll(".smallicon");
  // Toggle between play and pause icon
  icons.forEach(function (icon) {
    icon.classList.remove("fa-circle-pause");
    icon.classList.add("fa-circle-play");
  });
};

// songitems.forEach(function (song) {
//   div.addEventListener("click", () => {
//     var icon = this.querySelector("divicon");

//     if (audioelement.paused || audioelement.currentTime <= 0) {
//       audioelement.play();                                                       ki problem???????
//       icon.classList.remove("fa-circle-pause");                                  Ans: matha nosto, function e song pathay diya
//       icon.classList.add("fa-circle-play");                                      ami song.addeventlistener na diya div.addevent disi, sabas.
//     } else {
//       audioelement.pause();
//       icon.classList.remove("fa-circle-pause");
//       icon.classList.add("fa-circle-play");
//     }
//   });
// });

const makeAllplay = () => {
  var icons = document.querySelectorAll(".smallicon");
  // Toggle between play and pause icon
  icons.forEach(function (icon) {
    icon.classList.remove("fa-circle-pause");
    icon.classList.add("fa-circle-play");
  });
};

// Add click event listener to each song item
songItems.forEach(function (songItem) {
  songItem.addEventListener("click", function () {
    // Find the icon within the clicked song item

    makeAllplay();
    var icon = this.querySelector(".divicon");
    // Toggle between play and pause icon
    songindex = parseInt(icon.id);
    audioelement.src = `${songindex}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    icon.classList.remove("fa-circle-play");
    icon.classList.add("fa-circle-pause");
    playbutton.classList.remove("fa-circle-play");
    playbutton.classList.add("fa-circle-pause");
  });
});

audioelement.addEventListener("timeupdate", () => {
  let progress = parseFloat(
    (audioelement.currentTime / audioelement.duration) * 100
  );
  progressbar.value = progress;
});

progressbar.addEventListener("change", () => {
  audioelement.currentTime = (progressbar.value * audioelement.duration) / 100;
});

vol.addEventListener("click", () => {
  if (volbar.value != 0) {
    vol.classList.remove("fa-volume-high");
    vol.classList.add("fa-volume-xmark");
    audioelement.volume = 0;
    volbar.value = 0;
  } else {
    vol.classList.remove("fa-volume-xmark");
    vol.classList.add("fa-volume-high");
    volbar.value = 0.2;
    audioelement.volume = 0.2;
  }
});

volbar.addEventListener("input", function () {
  audioelement.volume = this.value;
});

playbutton.addEventListener("click", () => {
  if (songindex == 0) {
    playbutton.classList.remove("fa-circle-play");
    playbutton.classList.add("fa-circle-pause");
    document.getElementById("1").classList.remove("fa-circle-play");
    document.getElementById("1").classList.add("fa-circle-pause");
  }
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    document.getElementById(`${songindex}`).classList.remove("fa-circle-play");
    document.getElementById(`${songindex}`).classList.add("fa-circle-pause");
    playbutton.classList.remove("fa-circle-play");
    playbutton.classList.add("fa-circle-pause");
  } else {
    audioelement.pause();
    playbutton.classList.remove("fa-circle-pause");
    playbutton.classList.add("fa-circle-play");
    makeAllpause();
  }
});

previous.addEventListener("click", function () {
  if (songindex <= 1) {
    songindex = 6;
  } else {
    songindex -= 1;
  }
  audioelement.src = `${songindex}.mp3`;
  audioelement.currentTime = 0;
  audioelement.play();
  makeAllplay();
  playbutton.classList.remove("fa-circle-play");
  playbutton.classList.add("fa-circle-pause");
  document.getElementById(`${songindex}`).classList.remove("fa-circle-play");
  document.getElementById(`${songindex}`).classList.add("fa-circle-pause");
});

next.addEventListener("click", function () {
  if (songindex == 6) {
    songindex = 1;
  } else if (songindex == 0) {
    songindex += 2;
  } else {
    songindex += 1;
  }
  audioelement.src = `${songindex}.mp3`;
  audioelement.currentTime = 0;
  audioelement.play();
  makeAllplay();
  playbutton.classList.remove("fa-circle-play");
  playbutton.classList.add("fa-circle-pause");
  document.getElementById(`${songindex}`).classList.remove("fa-circle-play");
  document.getElementById(`${songindex}`).classList.add("fa-circle-pause");
});
