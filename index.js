let scoreHome = 0;
let scoreGuest = 0;
let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
// let saveEl = document.getElementById('save-el');

function add1Home() {
  scoreHome += 1;
  homeScore.textContent = scoreHome;
}

function add2Home() {
  scoreHome += 2;
  homeScore.textContent = scoreHome;
}

function add3Home() {
  scoreHome += 3;
  homeScore.textContent = scoreHome;
}

function add1Guest() {
  scoreGuest += 1;
  guestScore.textContent = scoreGuest;
}

function add2Guest() {
  scoreGuest += 2;
  guestScore.textContent = scoreGuest;
}

function add3Guest() {
  scoreGuest += 3;
  guestScore.textContent = scoreGuest;
}

function reset() {
  scoreHome = 0;
  scoreGuest = 0;
  homeScore.textContent = scoreHome;
  guestScore.textContent = scoreGuest;
}
