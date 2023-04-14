const images = document.querySelectorAll('.gallery img');
const popUp = document.querySelector('.pop-up');
const popUpImg = document.querySelector('.pop-up img');
const prevBtn = document.querySelector('.pop-up .prev-btn');
const nextBtn = document.querySelector('.pop-up .next-btn');

let currentImgIndex = 0;

// Add click event listener to each image
images.forEach((image, index) => {
  image.onclick = () =>{
    currentImgIndex = index;
    popUp.style.display = 'block';
    popUpImg.src = image.getAttribute('src');
    updateButtons();
  }
});

/*
// Add click event listener to the close button
document.querySelector('.pop-up span').onclick = () => {
  popUp.style.display = 'none';
}*/

// Add click event listeners to the previous and next buttons
prevBtn.onclick = () => {
  currentImgIndex--;
  popUpImg.src = images[currentImgIndex].getAttribute('src');
  updateButtons();
};

nextBtn.onclick = () => {
  currentImgIndex++;
  popUpImg.src = images[currentImgIndex].getAttribute('src');
  updateButtons();
};

// when the first image apperars then prev is hidden and when the last image then next is hidden
function updateButtons() {
  if (currentImgIndex === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }
  
  if (currentImgIndex === images.length -1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
}

// Add the backdrop functionality
popUp.addEventListener('click', (event) => {
  if (event.target === popUp) {
    popUp.style.display = 'none';
  }
});
