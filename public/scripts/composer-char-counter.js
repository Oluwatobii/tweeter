$(document).ready(function () {
  // --- our code goes here ---
  const max = 140;
  $("#tweet-text").on("input", updateCount);
  function updateCount() {
    const textAreaValue = $(this).val().length;
    const counter = $(this).parent().find(".counter");
    let charLimit = max - textAreaValue;
    counter.html(charLimit);

    if (charLimit < 0) {
      $(counter).addClass("changeToRed");
    } else {
      $(counter).removeClass("changeToRed");
    }
  }
});
