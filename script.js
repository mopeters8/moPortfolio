console.log("Script.js loaded");

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $(".chevronT").fadeOut();
  } else {
    $(".chevronT").fadeIn();
  }
});

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const techStackTitle = document.getElementById("techtitle");
const javaItem = document.getElementById("javaTSItem");
const jsItem = document.getElementById("javaScriptTSItem");
const htmlItem = document.getElementById("htmlTSItem");
const cssItem = document.getElementById("cssTSItem");
const cItem = document.getElementById("cTSItem");

javaItem.onmouseover = async function () {
  techStackTitle.innerHTML = "Java";
};

javaItem.onmouseout = function () {
  techStackTitle.innerHTML = "Tech Stack";
};

jsItem.onmouseover = async function () {
  techStackTitle.innerHTML = "JavaScript";
};

jsItem.onmouseout = function () {
  techStackTitle.innerHTML = "Tech Stack";
};

htmlItem.onmouseover = async function () {
  techStackTitle.innerHTML = "HTML 5";
};

htmlItem.onmouseout = function () {
  techStackTitle.innerHTML = "Tech Stack";
};

cssItem.onmouseover = async function () {
  techStackTitle.innerHTML = "CSS ";
};

cssItem.onmouseout = function () {
  techStackTitle.innerHTML = "Tech Stack";
};

cItem.onmouseover = async function () {
  techStackTitle.innerHTML = "C";
};

cItem.onmouseout = function () {
  techStackTitle.innerHTML = "Tech Stack";
};
