const themToggler = document.querySelector(".them-toogle");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".togglor-icon");

const isDark = true;
toggleIcon.onclcik = () => {
  calculator.classList.toggle("dark");
  themToggler.classList.toggle("active");
  isDark === isDark;
};

const ArrColor = [
  "#fcba03",
  "#c6fc03",
  "#ccc",
  "#ffff",
  "#adadad",
  "#2dfc03",
  "#0352fc",
  "#000",
  "#f50a0e",
];

const myElement = document.querySelectorAll(".main");
myElement.forEach((e, i) => {
  e.addEventListener("click", function () {
    document.body.style.backgroundColor = ArrColor[i];
  });
});

const myelemnt = document.querySelector(".echo");
myelemnt.addEventListener("click", function () {
  document.body.style.backgroundColor = "#cccc";
});

// Span scroll (------------)
const span = document.querySelector(".span");
window.onscroll = function () {
  if (this.scrollY >= 20) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
  // this.scrollY >= 400
  //   ? span.classList.add("show")
  //   : span.classList.remove("show");
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
