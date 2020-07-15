$(document).ready(function () {
  // --- our code goes here ---
  const max = 140;
  $("#tweet-text").on("input", updateCount);
  function updateCount() {
    const textAreaValue = $(this).val().length;
    const parent = $(this).parent();
    const counter = parent.find(".counter");
    let charLimit = max - textAreaValue;
    counter.html(charLimit);
    //console.log($(this).parent().find(".counter"));

    // if (charLimit < 0) {
    //   $("#changeToRed").css("color", "red");
    // } else {
    //   $("#changeToRed").css("color", "black");
    // }
    if (charLimit < 0) {
      $(counter).addClass("changeToRed");
    } else {
      $(counter).removeClass("changeToRed");
    }
  }
});
