function titleAnimation(elementId, speed, callback) {
  let target = document.getElementById(elementId);

  if (!target) {
    console.error("Element not found: ", elementId);
    return;
  }

  target.style.display = "block";

  let targetText = target.textContent;
  target.textContent = "";

  let charIndex = 0;

  let charInterval = setInterval(function () {
    if (charIndex < targetText.length) {
      target.textContent += targetText[charIndex++];
    } else {
      clearInterval(charInterval);
      if (callback) {
        callback();
      }
    }
  }, speed);
}

function themeToggle() {
  document.documentElement.classList.toggle("dark");
  document.body.classList.toggle("dark");
}

// document.addEventListener("DOMContentLoaded", function () {
//   document.body.style.overflowX = "hidden";
//
//   titleAnimation('headerTemp', 100, function() {
//     titleAnimation('headerTitle', 100, function() {
//       titleAnimation('headerBody', 50, function() {
//           document.body.style.overflowY = "auto";
//       });
//     });
//   });
// });
