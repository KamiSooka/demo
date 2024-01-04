let theme = new Audio();
theme.src = "./song/burbank - gucci gucci.mp3";
function playTheme(e) {
  console.log(e);
  if (theme.paused) {
    theme.play();
  } else {
    theme.pause();
  }
}
