let scollable = true;

function typewriterEffect(elementId, speed, callback) {
  let target = document.getElementById(elementId);
  if (!target) {
    console.error("Element not found:", elementId);
    return;
  }
  target.style.display = "block";
  let text = target.textContent;
  let length = text.length;
  target.textContent = "";

  let i = 0;

  let interval = setInterval(function () {
    target.textContent += text[i++];
    if (i === length) {
      clearInterval(interval);
      if (callback) {
        callback();
      }
    }
  }, speed);
}

function fadeUpEffect(elementId, speed, callback) {
  let target = document.getElementById(elementId);
  target.style.opacity = "0";
  target.style.transform = "translateY(20px)";
  target.style.transition = `opacity ${speed / 100}s ease, transform ${
    speed / 100
  }s ease`;
  target.style.display = "block";

  setTimeout(function () {
    target.style.opacity = "1";
    target.style.transform = "translateY(0)";
    if (callback) callback();
  }, 10);
}

function animateContent(elementClass, speed, callback) {
  let targets = document.getElementsByClassName(elementClass);

  for (let i = 0; i < targets.length; i++) {
    let target = targets[i];

    target.style.transition = `opacity ${speed / 1000}s ease, transform ${
      speed / 1000
    }s ease`;
    target.style.transform = "translateX(100px)";
    target.style.opacity = "0";
    target.style.display = "block";

    (function (target, i) {
      setTimeout(function () {
        target.style.opacity = "1";
        target.style.transform = "translateX(0)";
      }, i * 200);
    })(target, i);
  }

  if (callback) {
    setTimeout(callback, speed);
  }
}

function themeToggle() {
  document.documentElement.classList.toggle("dark");
  document.body.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflow = "hidden";

  typewriterEffect("headerTitle", 100, function () {
    fadeUpEffect("headerBody", 400, function () {
      fadeUpEffect("tag", 400, function () {
        document.body.style.overflow = "auto";
      });
    });
  });
});

// Working, but needs some tweaking (Maybe add after header has loaded?)
document.addEventListener("scroll", function () {
  animateContent("content", 1000);
});
