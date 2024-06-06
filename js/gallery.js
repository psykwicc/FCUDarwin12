// Add click event listener to each gallery item
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', event => {
        // Get the clicked image source
        const imgSrc = event.currentTarget.querySelector('img').getAttribute('src');
        // Set the modal image source to the clicked image source
        document.getElementById('full-image').setAttribute('src', imgSrc);
        // Show the modal
        document.getElementById('image-viewer').style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all gallery items
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Delay between each item animation (in milliseconds)
    let delay = 0;

    // Loop through each gallery item
    galleryItems.forEach(function(item) {
        // Set a timeout to add the 'animate' class to each item with a delay
        setTimeout(function() {
            item.classList.add("animate");
        }, delay);

        // Increase delay for the next item
        delay += 150; // Adjust the delay as needed for a staggered effect
    });
});

