// global variables
const header = document.querySelector(".header-container");
const navBar = document.querySelector(".header-container .navbar");
const button = document.querySelector(".header-container .navbar .button");
const wave = document.querySelector(".header-container .wave");
const hero = document.querySelector(".header-container .hero");
const waves = document.querySelector(".header-container .waves");
const line1 = document.querySelector(
  ".header-container .navbar .button .line1"
);
const line2 = document.querySelector(
  ".header-container .navbar .button .line2"
);
const navigation = document.querySelector(".navigation");

///////
///////
///////
// navbar close effect
button.addEventListener("click", function () {
  this.classList.toggle("active");
  // button.children[0].style.background = "#454b54";
  // button.children[1].style.background = "#454b54";
  if (this.classList.contains("active")) {
    button.children[0].style.background = "#454b54";
    button.children[1].style.background = "#454b54";
    navigation.style.right = -1 + "%";
  } else if (window.scrollY >= 600) {
    button.children[0].style.background = "#454b54";
    button.children[1].style.background = "#454b54";
    navigation.style.right = -50 + "%";
  } else {
    navigation.style.right = -50 + "%";
    button.children[0].style.background = "white";
    button.children[1].style.background = "white";
  }
});
///////
///////
///////
// navigation menu effect
// const navLinks = document.querySelectorAll(".navigation .list");
// function activeLink(e) {
//   navLinks.forEach((link) => link.classList.remove("visit"));
//   this.classList.add("visit");
// }
// navLinks.forEach((link) => {
//   link.addEventListener("click", activeLink);
// });

window.addEventListener("scroll", function () {
  if (window.scrollY >= 600) {
    navigation.classList.add("after");
  } else {
    navigation.classList.remove("after");
  }
});
///////
///////
///////
// make navbar fixed top
window.addEventListener("scroll", function () {
  if (window.scrollY >= 600 && button.classList.contains("active")) {
    // navBar.classList.add("fixed-top");
    button.children[0].style.background = "#454b54";
    button.children[1].style.background = "#454b54";
  } else if (window.scrollY >= 600 && !button.classList.contains("active")) {
    // navBar.classList.remove("fixed-top");
    // button.classList.remove("active");
    // navigation.style.right = -50 + "%";
    button.children[0].style.background = "#454b54";
    button.children[1].style.background = "#454b54";
  } else if (window.scrollY <= 600 && !button.classList.contains("active")) {
    button.children[0].style.background = "white";
    button.children[1].style.background = "white";
  }
});
///////
///////
///////
// change navigation active class while scrolling
function changeWhileScrolling() {
  let sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    let sectionId = section.getAttribute("id");
    if (
      window.scrollY >= section.offsetTop - 50 &&
      window.scrollY <= section.offsetTop - 50 + section.offsetHeight
    ) {
      document
        .querySelector(".navigation .list a[href*=" + sectionId + "]")
        .parentElement.classList.add("visit");
    } else {
      document
        .querySelector(".navigation .list a[href*=" + sectionId + "]")
        .parentElement.classList.remove("visit");
    }
  });
}
window.addEventListener("scroll", changeWhileScrolling);

///////
///////
///////
// dynamic hero height
const navBarHeight = parseFloat(window.getComputedStyle(navBar).height);

hero.style.height = window.innerHeight - navBarHeight;
///////
///////
///////
// header parallax effect
window.addEventListener("scroll", function () {
  if (window.innerWidth > 992) {
    let scrollValue = window.scrollY;

    hero.style.bottom = -120 - scrollValue * 0.5 + "px";
    waves.style.bottom = scrollValue * 0.2 + "px";
    wave.style.bottom = scrollValue * 0.15 + "px";
  }
});
///////
///////
///////
// typewriter effect
let message = ["i'm marwan elsayed"];
let textPosition = 0;
let speed = 100;

function typewriter() {
  let title = document.querySelector("header .title");
  title.innerHTML =
    message[0].substring(0, textPosition) +
    `<span class="blinker">&#124</span>`;
  if (textPosition++ != message[0].length) {
    setTimeout(typewriter, speed);
  }
}

window.addEventListener("load", typewriter);
///////
///////
///////
// portfolio imgs parallax effect
// const workContainer = document.querySelectorAll(".work-img");
// const workLap = document.querySelectorAll(".main-img img:nth-child(1)");
// const workMobile = document.querySelectorAll(".main-img img:nth-child(2)");
// const projectLogo = document.querySelector(".logo-img");

// let x = 0;
// let y = 0;

// workContainer.forEach((work) => {
//   work.addEventListener("mousemove", function (e) {
//     console.log(this);
//     x = e.pageX;
//     y = e.pageY;
//     imgAnimation(x, y);
//   });
// });

// function imgAnimation(x1, y1) {
//   workLap.forEach((lap) => {
//     lap.style.left = `${-x1 / 20}`;
//     lap.style.bottom = `${-y1 / 70}`;
//   });
//   workMobile.forEach((mobile) => {
//     mobile.style.right = `${-x1 / 20}`;
//     mobile.style.top = `${-y1 / 70}`;
//   });
// }

// workContainer.forEach((ele) => {
//   ele.addEventListener("mouseout", function () {
//     workLap.forEach((lap) => {
//       lap.style.left = -20;
//       lap.style.bottom = 0;
//     });
//     workMobile.forEach((mobile) => {
//       mobile.style.right = -83;
//       mobile.style.top = 43;
//     });
//   });
// });
