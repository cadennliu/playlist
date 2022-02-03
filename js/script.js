// Complete Day 1 goals here

let songNames = ["Crazy Over You", "The Feels", "LOCO", "Pirate"];
let songArtists = ["Blackpink", "Twice", "ITZY", "Everglow"];
let songImages = [
  "https://i.scdn.co/image/ab67616d0000b2731895052324f123becdd0d53d",
  "https://upload.wikimedia.org/wikipedia/en/5/50/Twice_-_The_Feels.png",
  "https://i.scdn.co/image/ab67616d0000b2737cba267dc81d036a71f46a3a",
  "https://images.genius.com/a98c2abb455970e01e3440ba43df03bf.1000x1000x1.png",
];
let songLengths = ["2:42", "3:18", "3:11", "3:30"];
let aongLinks = [
  "https://open.spotify.com/track/4yOqfpzmL4FvmXJTUgAMUP?si=b6e90d00caab4abe",
  "https://open.spotify.com/track/1XyzcGhmO7iUamSS94XfqY?si=960a647b85844411",
  "https://open.spotify.com/track/5b8FtevTVz8xVF6E208xeV?si=986c5adfbf5f4b62",
  "https://open.spotify.com/track/0Vu5tjvXZX3qtzRiezxLi1?si=4b93693b180d4253",
];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
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
