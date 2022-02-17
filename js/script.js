// Complete Day 1 goals here

let songNames = [
  "The Coconut Nut (Da Coconut Nut)",
  "It's a Beautiful Day in the Neighborhood!",
  "S.I.M.P. (Squirrels in My Pants)",
  "Bop!",
  "Chicken Nugget Song",
  "Let It Go",
];

let songArtists = [
  "Dliaa-Life",
  "Daniel Tiger's Neighborhood",
  "2 Guys n the Parque",
  "Jojo Siwa",
  "Nick Bean",
  "Idina Menzel",
];

let songImages = [
  "https://i.ytimg.com/vi/w0AOGeqOnFY/mqdefault.jpg",
  "https://cms-tc.pbskids.org/daniel-tiger-website/Music-Thumbs/song-beautiful-day.png",
  "https://images-na.ssl-images-amazon.com/images/I/715vqnGHASL._RI_.jpg",
  "https://artwork-cdn.7static.com/static/img/sleeveart/00/090/371/0009037154_350.jpg",
  "https://m.media-amazon.com/images/I/810snbzcVPL._SS500_.jpg",
  "https://macacaosapao.files.wordpress.com/2014/05/let-it-go.png",
];

let songLengths = ["1:18", "1:06", "1:34", "2:37", "2:35", "3:44"];

let songLinks = [
  "https://open.spotify.com/track/6V22NX6XrCjdyqXYfobudw?si=db6e3f1251254125",
  "https://open.spotify.com/track/7LsFEbIWg9256P4AErwjS8?si=6726c651099f4647",
  "https://open.spotify.com/track/76Wrq73y3Ef7VNM4CGSZ0l?si=258fc42215a74f8f",
  "https://open.spotify.com/track/0mDH8XQRpQUGkXXZzYAyu0?si=84b56d28de334ba1",
  "https://open.spotify.com/track/6iSpyAN4PjyCnxcJthU4Jl?si=0189891f15da4a08",
  "https://open.spotify.com/track/0qcr5FMsEO85NAQjrlDRKo?si=16500a8fa95b4350",
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
    $(".images").append(`<img src="{images}">`);
  });
  songLengths.forEach(function (lengths) {
    $(".lengths").append(`<p>${lengths}</p>`);
  });
  songLinks.forEach(function (links) {
    $(".links").append(`<a>Listen!</a>`);
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
  
  let newSongName = $(".title").val();
  songNames.push(newSongName);
  
  let newSongArtists = $(".artist").val();
  songArtists.push(newSongArtists);

  let newSongImages = $(".image").val();
  songImages.push(newSongImages);
  
  let newSongLengths = $(".length").val();
  songLengths.push(newSongLengths);

  let newSongLinks = $(".link").val();
  songLinks.push(newSongLinks);
  
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();