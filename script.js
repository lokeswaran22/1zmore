const mainCard = document.querySelector("#ContentWarpper");
const songImg = document.querySelector("#SongImg");
const controlButtons = document.querySelector(".control");
const currentYear = new Date().getFullYear();

const playPauseButton = document.querySelector("#PausePlay");
const audio = document.querySelector("audio");
const artist = document.querySelector("#Artist");
const songName = document.querySelector("#SongName");
const previousButton = document.querySelector("#Previous");
const nextButton = document.querySelector("#Next");
const songImgAtTheTop = document.querySelector("img");

let startDuration = document.querySelector("#Start");
const endDuration = document.querySelector("#End");
const meter = document.querySelector("#ProgrssMeterChild");
const progressBar = document.querySelector("#ProgressMeterContainer");

let isPlaying = false;
let index = 0;

const songDataBase = [
  {
    songSrc: "./music/Aaruyire.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Aaruyire",
    imgSrc: "./img/Aaruyire.jpg",
  },
  {
    songSrc: "./music/Adiyae Kolluthey.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Adiyae Kolluthey",
    imgSrc: "./img/Adiyae Kolluthey.jpg",
  },
  {
    songSrc: "./music/Adiye S.Madhu.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Adiye S.Madhu",
    imgSrc: "./img/Adiye S.Madhu.jpg",
  },
  {
    songSrc: "./music/Anbil Avan.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Anbil Avan",
    imgSrc: "./img/Anbil Avan.jpg",
  },
  {
    songSrc: "./music/Annul Maelae.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Annul Maelae",
    imgSrc: "./img/Annul Maelae.jpg",
  },
  {
    songSrc: "./music/Aradhya.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Aradhya",
    imgSrc: "./img/Aradhya.jpg",
  },
  {
    songSrc: "./music/Ava Enna.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Ava Enna",
    imgSrc: "./img/Ava Enna.jpg",
  },
  {
    songSrc: "./music/Aval.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Aval",
    imgSrc: "./img/Aval.jpg",
  },
  {
    songSrc: "./music/Azhagiye.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Azhagiye",
    imgSrc: "./img/Azhagiye.jpg",
  },
  {
    songSrc: "./music/Dimmu Dippu.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Dimmu Dippu",
    imgSrc: "./img/Dimmu Dippu.jpg",
  },
  {
    songSrc: "./music/Engeyo Partha.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Engeyo Partha",
    imgSrc: "./img/Engeyo Partha.jpg",
  },
  {
    songSrc: "./music/EnKadhal Solla.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "EnKadhal Solla",
    imgSrc: "./img/EnKadhal Solla.jpg",
  },
  {
    songSrc: "./music/EnRojaa neeya.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "EnRojaa neeya",
    imgSrc: "./img/EnRojaa neeya.jpg",
  },
  {
    songSrc: "./music/Hey Suzhali.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Hey Suzhali",
    imgSrc: "./img/Hey Suzhali.jpg",
  },
  {
    songSrc: "./music/Hosanna.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Hosanna",
    imgSrc: "./img/Hosanna.jpg",
  },
  {
    songSrc: "./music/Idhayam Love.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Idhayam Love",
    imgSrc: "./img/Idhayam Love.jpg",
  },
  {
    songSrc: "./music/Idhazhin Oram.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Idhazhin Oram",
    imgSrc: "./img/Idhazhin Oram.jpg",
  },
  {
    songSrc: "./music/Jalsa Pannungada.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Jalsa Pannungada",
    imgSrc: "./img/Jalsa Pannungada.jpg",
  },
  {
    songSrc: "./music/June Pona.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "June Pona",
    imgSrc: "./img/June Pona.jpg",
  },
  {
    songSrc: "./music/Kadhal Kappal.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Kadhal Kappal",
    imgSrc: "./img/Kadhal Kappal.jpg",
  },
  {
    songSrc: "./music/Kannadasan Karaikudi.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Kannadasan Karaikudi",
    imgSrc: "./img/Kannadasan Karaikudi.jpg",
  },
  {
    songSrc: "./music/Kannazhaga.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Kannazhaga",
    imgSrc: "./img/Kannazhaga.jpg",
  },
  {
    songSrc: "./music/Katchi Sera.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Katchi Sera",
    imgSrc: "./img/Katchi Sera.jpg",
  },
  {
    songSrc: "./music/Kathaala Kannaala.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Kathaala Kannaala",
    imgSrc: "./img/Kathaala Kannaala.jpg",
  },
  {
    songSrc: "./music/Kodana Kodi.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Kodana Kodi",
    imgSrc: "./img/Kodana Kodi.jpg",
  },
  {
    songSrc: "./music/Macha Kanni.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Macha Kanni",
    imgSrc: "./img/Macha Kanni.jpg",
  },
  {
    songSrc: "./music/Makkamishi.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Makkamishi",
    imgSrc: "./img/Makkamishi",
  },

  {
    songSrc: "./music/Manjal Veiyil.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Manjal Veiyil",
    imgSrc: "./img/Manjal Veiyil.jpg",
  },
  {
    songSrc: "./music/Mannipaaya.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Mannipaaya",
    imgSrc: "./img/Mannipaaya.jpg",
  },
  {
    songSrc: "./music/Mazhai Kuruvi.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Mazhai Kuruvi",
    imgSrc: "./img/Mazhai Kuruvi.jpg",
  },
  {
    songSrc: "./music/Mudhal Nee Mudivum Nee.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Mudhal Nee Mudivum Nee",
    imgSrc: "./img/Mudhal Nee Mudivum Nee.jpg",
  },
  {
    songSrc: "./music/Mundhinam Parthene.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Mundhinam Parthene",
    imgSrc: "./img/Mundhinam Parthene.jpg",
  },
  {
    songSrc: "./music/Naan Pizhai.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Naan Pizhai",
    imgSrc: "./img/Naan Pizhai.jpg",
  },
  {
    songSrc: "./music/Nallai Allai.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Nallai Allai",
    imgSrc: "./img/Nallai Allai.jpg",
  },
  {
    songSrc: "./music/Nee Kavithaigala.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Nee Kavithaigala",
    imgSrc: "./img/Nee Kavithaigala.jpg",
  },
  {
    songSrc: "./music/Nenjame Nenjame.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Nenjame Nenjame",
    imgSrc: "./img/Nenjame Nenjame.jpg",
  },
  {
    songSrc: "./music/Nenjukkul Peidhidum.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Nenjukkul Peidhidum",
    imgSrc: "./img/Nenjukkul Peidhidum.jpg",
  },
  {
    songSrc: "./music/New York Nagaram.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "New York Nagaram",
    imgSrc: "./img/New York Nagaram.jpg",
  },
  {
    songSrc: "./music/Oh Shanthi Shanthi.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Oh Shanthi Shanthi",
    imgSrc: "./img/Oh Shanthi Shanthi.jpg",
  },
  {
    songSrc: "./music/Oru Naalaikkul.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Oru Naalaikkul",
    imgSrc: "./img/Oru Naalaikkul.jpg",
  },
  {
    songSrc: "./music/Pala Palakura.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Pala Palakura",
    imgSrc: "./img/Pala Palakura.jpg",
  },
  {
    songSrc: "./music/Para Para.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Para Para",
    imgSrc: "./img/Para Para.jpg",
  },
  {
    songSrc: "./music/Partha Muthal.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Partha Muthal",
    imgSrc: "./img/Partha Muthal.jpg",
  },
  {
    songSrc: "./music/Piya Piya.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Piya Piya",
    imgSrc: "./img/Piya Piya.jpg",
  },
  {
    songSrc: "./music/Poo Nee Poo.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Poo Nee Poo",
    imgSrc: "./img/Poo Nee Poo.jpg",
  },
  {
    songSrc: "./music/Poongatre Poongatre.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Poongatre Poongatre",
    imgSrc: "./img/Poongatre Poongatre.jpg",
  },
  {
    songSrc: "./music/Railin Oligal.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Railin Oligal",
    imgSrc: "./img/Railin Oligal.jpg",
  },
  {
    songSrc: "./music/Sirukki-Vaasam.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Sirukki-Vaasam",
    imgSrc: "./img/Sirukki-Vaasam.jpg",
  },
  {
    songSrc: "./music/Suthuthe Suthuthe Bhoomi.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Suthuthe Suthuthe Bhoomi",
    imgSrc: "./img/Suthuthe Suthuthe Bhoomi.jpg",
  },
  {
    songSrc: "./music/Thimiru Kaattaadha.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Thimiru Kaattaadha",
    imgSrc: "./img/Thimiru Kaattaadha.jpg",
  },
  {
    songSrc: "./music/Thuli Thuli Mazhaiyaai.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Thuli Thuli Mazhaiyaai",
    imgSrc: "./img/Thuli Thuli Mazhaiyaai.jpg",
  },{
    songSrc: "./music/Udhungada Sangu.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Udhungada Sangu",
    imgSrc: "./img/Udhungada Sangu.jpg",
  },
  {
    songSrc: "./music/Un Paarvai Mele Pattal.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Un Paarvai Mele Pattal",
    imgSrc: "./img/Un Paarvai Mele Pattal.jpg",
  },
  {
    songSrc: "./music/Un Vizhigalil.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Un Vizhigalil",
    imgSrc: "./img/Un Vizhigalil.jpg",
  },
  {
    songSrc: "./music/Urugi Urugi.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Urugi Urugi",
    imgSrc: "./img/Urugi Urugi.jpg",
  },
  {
    songSrc: "./music/Vaa Senthaazhini.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Vaa Senthaazhini",
    imgSrc: "./img/Vaa Senthaazhini.jpg",
  },
  {
    songSrc: "./music/Varaha Nadikkarai Oram.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Varaha Nadikkarai Oram",
    imgSrc: "./img/Varaha Nadikkarai Oram.jpg",
  },
  {
    songSrc: "./music/Venaam Machan.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Venaam Machan",
    imgSrc: "./img/Venaam Machan.jpg",
  },
  {
    songSrc: "./music/Venmegam Pennaga.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Venmegam Pennaga",
    imgSrc: "./img/Venmegam Pennaga.jpg",
  },
  {
    songSrc: "./music/Vinmeen Vithaiyil.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Vinmeen Vithaiyil",
    imgSrc: "./img/Vinmeen Vithaiyil.jpg",
  },
  {
    songSrc: "./music/Vizhi Moodi Yosithaal.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Vizhi Moodi Yosithaal",
    imgSrc: "./img/Vizhi Moodi Yosithaal.jpg",
  },
  {
    songSrc: "./music/Yaaro Manathile.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Yaaro Manathile",
    imgSrc: "./img/Yaaro Manathile.jpg",
  },
  {
    songSrc: "./music/Yaarumillaa.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Yaarumillaa",
    imgSrc: "./img/Yaarumillaa.jpg",
  },
  {
    songSrc: "./music/Yedho Ondru Ennai.mp3",
    title: "Playing From Playlist 🤍⚡🕊️",
    artist: "Yedho Ondru Ennai",
    imgSrc: "./img/Yedho Ondru Ennai.jpg",
  }

];

const loadMusic = () => {
  audio.src = songDataBase[index].songSrc;
  artist.textContent = songDataBase[index].artist;
  songName.textContent = songDataBase[index].title;
  songImgAtTheTop.src = songDataBase[index].imgSrc;
};
audio.addEventListener("ended", () => {
  loadMusic(index++);
  play();
});

loadMusic();

nextButton.addEventListener("click", () => {
  if (index < songDataBase.length - 1) {
    loadMusic(index++);
    play();
  } else {
    pause();
  }
});
previousButton.addEventListener("click", () => {
  if (index > 0) {
    loadMusic(index--);
    play();
  } else {
    pause();
  }
});

const play = () => {
  isPlaying = true;
  audio.play();
  playPauseButton.classList.replace("fa-play", "fa-pause");
  songImg.classList.add("anime");
};
const pause = () => {
  isPlaying = false;
  audio.pause();
  playPauseButton.classList.replace("fa-pause", "fa-play");
  songImg.classList.remove("anime");
};

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});
let minute, second;
const timeStamp = (event) => {
  let { duration, currentTime } = event.srcElement;
  const full_second = Math.floor(duration % 60);
  const full_minute = Math.floor(duration / 60);
  const start_second = Math.floor(currentTime % 60);
  const start_minute = Math.floor(currentTime / 60);
  const totalDuration = `${full_minute} : ${full_second}`;
  const currenDuration = `${start_minute} : ${start_second}`;
  if (duration) {
    endDuration.textContent = totalDuration;
  }
  startDuration.textContent = currenDuration;
  const percentage = (currentTime / duration) * 100;
  meter.style.width = `${percentage}%`;
};
audio.addEventListener("timeupdate", timeStamp);
progressBar.addEventListener("click", (event) => {
  const { duration } = audio;
  const moreProgress =
    (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = moreProgress;
});

document.querySelector("#Year").innerHTML = currentYear;

mainCard.addEventListener("mouseover", (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 15;
  const yAxis = (window.innerHeight / 2 - event.pageY) / 15;
  // mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  // songImg.style.transform = `rotate(${xAxis}deg)`;
  // controlButtons.style.transform = `rotate(${xAxis}deg)`;
});
mainCard.addEventListener("mouseleave", () => {
  mainCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  songImg.style.transform = "rotate(0deg)";
  controlButtons.style.transform = "rotate(0deg)";
});
const volumeBar = document.getElementById('volume-bar');

// Set initial volume to 100%
audio.volume = 1;

// Volume control function
function setVolume() {
    audio.volume = volumeBar.value;
}

// Event listener for volume changes
volumeBar.addEventListener('input', setVolume);



