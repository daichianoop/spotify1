function song_reload() {
  audioElement1.load();
  audioElement2.load();
  audioElement3.load();
  audioElement4.load();
  audioElement5.load();
  audioElement6.load();
  audioElement7.load();
  audioElement8.load();
}

function green_text_style_reload() {
  document.getElementById("js-grid-element-1").style.color = "rgb(156,163,175)";
  document.getElementById("js-grid-element-2").style.color = "rgb(156,163,175)";
  document.getElementById("js-grid-element-3").style.color = "rgb(156,163,175)";
  document.getElementById("js-grid-element-4").style.color = "rgb(156,163,175)";
  document.getElementById("js-grid-element-5").style.color = "rgb(156,163,175)";
  document.getElementById("js-grid-element-6").style.color = "rgb(156,163,175)";
  document.getElementById("js-grid-element-7").style.color = "rgb(156,163,175)";
  document.getElementById("js-grid-element-8").style.color = "rgb(156,163,175)";
}

function playing_gif_reload(){
document.getElementById("js-gif-spot-1").innerHTML = `1`;
document.getElementById("js-gif-spot-2").innerHTML = `2`;
document.getElementById("js-gif-spot-3").innerHTML = `3`;
document.getElementById("js-gif-spot-4").innerHTML = `4`;
document.getElementById("js-gif-spot-5").innerHTML = `5`;
document.getElementById("js-gif-spot-6").innerHTML = `6`;
document.getElementById("js-gif-spot-7").innerHTML = `7`;
document.getElementById("js-gif-spot-8").innerHTML = `8`;
}

//------------------------------------------------------------------------------------------------------

let audioElement1 = new Audio("Music/1.aac");
function play_song1() {
  song_reload();
  audioElement1.play();

  green_text_style_reload();
  document.getElementById("js-grid-element-1").style.color = "#1ed760";

  playing_gif_reload();
  document.getElementById("js-gif-spot-1").innerHTML = `<img class="size-5" src="Images/equaizerr.gif" alt="">`;
}

let audioElement2 = new Audio("Music/2.aac");
function play_song2() {
    song_reload();
    audioElement2.play();
  
    green_text_style_reload();
    document.getElementById("js-grid-element-2").style.color = "#1ed760";

    playing_gif_reload();
    document.getElementById("js-gif-spot-2").innerHTML = `<img class="size-5" src="Images/equaizerr.gif" alt="">`;
}

let audioElement3 = new Audio("Music/3.aac");
function play_song3() {
    song_reload();
    audioElement3.play();
  
    green_text_style_reload();
    document.getElementById("js-grid-element-3").style.color = "#1ed760";

    playing_gif_reload();
    document.getElementById("js-gif-spot-3").innerHTML = `<img class="size-5" src="Images/equaizerr.gif" alt="">`;
}

let audioElement4 = new Audio("Music/4.aac");
function play_song4() {
    song_reload();
    audioElement4.play();
  
    green_text_style_reload();
    document.getElementById("js-grid-element-4").style.color = "#1ed760";

    playing_gif_reload();
    document.getElementById("js-gif-spot-4").innerHTML = `<img class="size-5" src="Images/equaizerr.gif" alt="">`;
}

let audioElement5 = new Audio("Music/5.aac");
function play_song5() {
    song_reload();
    audioElement5.play();
  
    green_text_style_reload();
    document.getElementById("js-grid-element-5").style.color = "#1ed760";

    playing_gif_reload();
    document.getElementById("js-gif-spot-5").innerHTML = `<img class="size-5" src="Images/equaizerr.gif" alt="">`;
}

let audioElement6 = new Audio("Music/6.aac");
function play_song6() {
    song_reload();
    audioElement6.play();
  
    green_text_style_reload();
    document.getElementById("js-grid-element-6").style.color = "#1ed760";

    playing_gif_reload();
    document.getElementById("js-gif-spot-6").innerHTML = `<img class="size-5" src="Images/equaizerr.gif" alt="">`;
}

let audioElement7 = new Audio("Music/7.aac");
function play_song7() {
    song_reload();
    audioElement7.play();
  
    green_text_style_reload();
    document.getElementById("js-grid-element-7").style.color = "#1ed760";

    playing_gif_reload();
    document.getElementById("js-gif-spot-7").innerHTML = `<img class="size-5" src="Images/equaizerr.gif" alt="">`;
}

let audioElement8 = new Audio("Music/8.aac");
function play_song8() {
    song_reload();
    audioElement8.play();
  
    green_text_style_reload();
    document.getElementById("js-grid-element-8").style.color = "#1ed760";

    playing_gif_reload();
    document.getElementById("js-gif-spot-8").innerHTML = `<img class="size-5" src="Images/equaizerr.gif" alt="">`;
}
