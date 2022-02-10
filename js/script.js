// Complete Day 1 goals here

let songNames = [
  "The Coconut Nut (Da Coconut Nut)",
  "It's a Beautiful Day in the Neighborhood!",
  "S.I.M.P. (Squirrels in My Pants)",
  "Bop!",
];

let songArtists = [
  "Dliaa-Life",
  "Tiger's Neighborhood",
  "2 Guys n the Parque",
  "Jojo Siwa",
];

let songImages = [
  "https://i.ytimg.com/vi/w0AOGeqOnFY/mqdefault.jpg",
  "https://cms-tc.pbskids.org/daniel-tiger-website/Music-Thumbs/song-beautiful-day.png",
  "https://images-na.ssl-images-amazon.com/images/I/715vqnGHASL._RI_.jpg",
  "https://artwork-cdn.7static.com/static/img/sleeveart/00/090/371/0009037154_350.jpg",
];

let songLengths = ["1:18", "1:06", "1:34", "2:37"];

let songLinks = [
  "https://open.spotify.com/track/6V22NX6XrCjdyqXYfobudw?si=db6e3f1251254125",
  "https://open.spotify.com/track/7LsFEbIWg9256P4AErwjS8?si=6726c651099f4647",
  "https://open.spotify.com/track/76Wrq73y3Ef7VNM4CGSZ0l?si=258fc42215a74f8f",
  "https://open.spotify.com/track/0mDH8XQRpQUGkXXZzYAyu0?si=84b56d28de334ba1",
];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  songNames.forEach(function (names) {
    $(".songs").append(`<p>${names}</p>`);
  });
  songArtists.forEach(function (artists) {
    $(".artists").append(`<p>${artists}</p>`);
  });
  songImages.forEach(function (images) {
    $(".images").append(`<p>${images}</p>`);
  });
  songLengths.forEach(function (lengths) {
    $(".lengths").append(`<p>${lengths}</p>`);
  });
  songLinks.forEach(function (links) {
    $(".links").append(`<p>${links}</p>`);
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
