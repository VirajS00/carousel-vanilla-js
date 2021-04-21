const left = document.querySelector('#left');
const right = document.querySelector('#right');
const images = [...document.querySelectorAll('.img-corosel')];
const index_image = document.querySelector('#image-index');
let currentImage = document.querySelector('.currentImg');

const nextImage = () => {
	if (currentImage.nextElementSibling != null) {
		currentImage.classList.remove('currentImg');
		currentImage.nextElementSibling.classList.add('currentImg');
		currentImage = document.querySelector('.currentImg');
	} else {
		images[0].classList.add('currentImg');
		currentImage = document.querySelectorAll('.currentImg')[1];
		currentImage.classList.remove('currentImg');
		currentImage = document.querySelector('.currentImg');
	}
	changeCircleStateNext();
};

let intervalTimer = setInterval(nextImage, 3000);

right.addEventListener('click', (e) => {
	e.preventDefault();
	if (currentImage.nextElementSibling != null) {
		currentImage.classList.remove('currentImg');
		currentImage.nextElementSibling.classList.add('currentImg');
		currentImage = document.querySelector('.currentImg');
	} else {
		images[0].classList.add('currentImg');
		currentImage = document.querySelectorAll('.currentImg')[1];
		currentImage.classList.remove('currentImg');
		currentImage = document.querySelector('.currentImg');
	}
	changeCircleStateNext();
});

right.addEventListener('mousedown', () => {
	clearInterval(intervalTimer);
});

right.addEventListener('mouseup', () => {
	intervalTimer = setInterval(nextImage, 3000);
});

left.addEventListener('click', (e) => {
	e.preventDefault();
	if (currentImage.previousElementSibling != null) {
		currentImage.classList.remove('currentImg');
		currentImage.previousElementSibling.classList.add('currentImg');
		currentImage = document.querySelector('.currentImg');
	} else {
		images[images.length - 1].classList.add('currentImg');
		currentImage = document.querySelectorAll('.currentImg')[0];
		currentImage.classList.remove('currentImg');
		currentImage = document.querySelector('.currentImg');
	}
	changeCircleStatePrev();
});

left.addEventListener('mousedown', () => {
	clearInterval(intervalTimer);
});

left.addEventListener('mouseup', () => {
	intervalTimer = setInterval(nextImage, 3000);
});

for (let i = 0; i < images.length; i++) {
	const circle = document.createElement('div');
	circle.classList.add('index-circle');
	index_image.appendChild(circle);
}

const circles = [...document.querySelectorAll('.index-circle')];
circles[0].classList.add('active-circle');

const changeCircleStateNext = () => {
	let index = images.indexOf(currentImage);
	circles[index].classList.add('active-circle');
	if (index === 0) {
		circles[circles.length - 1].classList.remove('active-circle');
	} else {
		circles[index - 1].classList.remove('active-circle');
	}
};

const changeCircleStatePrev = () => {
	let currentImage = document.querySelector('.currentImg');
	let index = images.indexOf(currentImage);

	circles[index].classList.add('active-circle');
	if (index === circles.length - 1) {
		circles[0].classList.remove('active-circle');
	} else {
		circles[index + 1].classList.remove('active-circle');
	}
};

var hidden, visibilityChange;
if (typeof document.hidden !== 'undefined') {
	hidden = 'hidden';
	visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
	hidden = 'msHidden';
	visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
	hidden = 'webkitHidden';
	visibilityChange = 'webkitvisibilitychange';
}

function handleVisibilityChange() {
	if (document[hidden]) {
		clearInterval(intervalTimer);
	} else {
		intervalTimer = setInterval(nextImage, 3000);
	}
}

if (typeof document.addEventListener === 'undefined' || hidden === undefined) {
	console.log(
		'This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.'
	);
} else {
	document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
