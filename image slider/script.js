const images = [
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=600"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update image
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Show first image initially
updateImage();

// Next button click
nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
    updateImage();
});

// Previous button click
prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to last image
    updateImage();
});
