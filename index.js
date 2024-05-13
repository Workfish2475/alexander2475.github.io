function loadText(elementId, speed, callback) {
    let target = document.getElementById(elementId);
    if (!target) {
        console.error('Element not found:', elementId);
        return;
    }
    target.style.display = 'block';
    let text = target.textContent;
    let length = text.length;
    target.textContent = '';

    let i = 0;

    let interval = setInterval(function() {
        target.textContent += text[i++];
        if (i === length) {
            clearInterval(interval);
            if (callback) {
                callback();
            }
        }
    }, speed);
}

function loadTag(elementId, speed, callback){
    let target = document.getElementById(elementId);
    target.style.opacity = '0';
    target.style.transform = 'translateY(20px)';
    target.style.transition = `opacity ${speed / 100}s ease, transform ${speed / 100}s ease`;
    target.style.display = 'block';

    setTimeout(function() {
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
        if (callback) callback();
    }, 10);
}


document.addEventListener("DOMContentLoaded", function() {
    loadText("headerTitle", 100, function() {
        loadTag("headerBody", 400, function() {
            loadTag("tag", 400);
        });
    });
});
