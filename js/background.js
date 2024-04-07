const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);


// JavaScript 파일에 다음 내용을 추가하세요

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = 'cover';



// document.body.style.backgroundRepeat = 'no-repeat';
// document.body.style.backgroundPosition = 'center';

// document.body.style.backgroundImage = `url('img/${chosenImage}')`;
// document.body.style.backgroundRepeat = 'no-repeat';
// document.body.style.backgroundSize = 'auto'; // 이미지를 원본 크기로 유지합니다.
// document.body.style.backgroundPosition = 'center'; // 이미지를 가운데 정렬합니다.

