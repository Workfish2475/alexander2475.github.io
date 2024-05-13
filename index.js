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

function loadTag(elementId, callback){
	let tag = document.getElementById("tag");

	tag.style.transform = 'scale(0)';
	tag.style.transition = 'transform 0.6s ease-out';

	tag.style.display = 'block';

	setTimeout(function() {
		tag.style.transform = 'scale(1)';
	}, 10);
}

document.addEventListener("DOMContentLoaded", function() {
    loadText("headerTitle", 100, function() {
        loadText("headerBody", 25, function() {
			loadTag("tag");
		});
    });
});
