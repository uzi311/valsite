const hoverSound1 = document.getElementById("hover-sound-1");
const hoverSound2 = document.getElementById("hover-sound-2");
const hoverSound3 = document.getElementById("hover-sound-3");
const hoverSound4 = document.getElementById("hover-sound-4");
const hoverSound5 = document.getElementById("hover-sound-5");
const hoverSound6 = document.getElementById("hover-sound-6");

const p1 = document.getElementsByTagName("p")[0];
const p2 = document.getElementsByTagName("p")[1];
const p3 = document.getElementsByTagName("p")[2];
const p4 = document.getElementsByTagName("p")[3];
const p5 = document.getElementsByTagName("p")[4];
const p6 = document.getElementsByTagName("p")[5];

p1.addEventListener("mouseover", () => {
  hoverSound1.currentTime = 0;
  hoverSound1.play();
});

p1.addEventListener("mouseout", () => {
  hoverSound1.pause();
});

p2.addEventListener("mouseover", () => {
  hoverSound2.currentTime = 0;
  hoverSound2.play();
});

p2.addEventListener("mouseout", () => {
  hoverSound2.pause();
});

p3.addEventListener("mouseover", () => {
  hoverSound3.currentTime = 0;
  hoverSound3.play();
});

p3.addEventListener("mouseout", () => {
  hoverSound3.pause();
});

p4.addEventListener("mouseover", () => {
  hoverSound4.currentTime = 0;
  hoverSound4.play();
});

p4.addEventListener("mouseout", () => {
  hoverSound4.pause();
});

p5.addEventListener("mouseover", () => {
  hoverSound5.currentTime = 0;
  hoverSound5.play();
});

p5.addEventListener("mouseout", () => {
  hoverSound5.pause();
});

p6.addEventListener("mouseover", () => {
  hoverSound6.currentTime = 0;
  hoverSound6.play();
});

p6.addEventListener("mouseout", () => {
  hoverSound6.pause();
});