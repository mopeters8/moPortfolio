console.log("Script.js loaded");

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $(".chevronT").fadeOut();
  } else {
    $(".chevronT").fadeIn();
  }
});
