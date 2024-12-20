document.addEventListener("DOMContentLoaded", function() {
    const imagesData = [
        { src: "./assets/add.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" },
        { src: "./assets/img.png" }
    ];

    // Get the image container
    const imageContainer = document.getElementById('image-container');

    // Number of images per row (Optional for grouping images)
    const imagesPerRow = 10; // This value can be adjusted if you want more images per row, but we'll keep it dynamic

    let currentRow;

    imagesData.forEach((image, index) => {
        // Start a new row every `imagesPerRow` images (optional)
        if (index % imagesPerRow === 0) {
            currentRow = document.createElement('div'); // Create a new row
            currentRow.className = 'flex gap-2'; // Create a flex row with gaps
            imageContainer.appendChild(currentRow); // Append the row to the container
        }

        // Create the image element
        const imgElement = document.createElement('img');
        imgElement.src = image.src; // Set the image source
        imgElement.alt = 'Image';
        imgElement.className = 'w-24 h-18 object-cover rounded-lg'; // Styling for image size and rounded corners

        // Append the image to the current row
        currentRow.appendChild(imgElement);
    });

    // Apply horizontal scrolling to the image container
    imageContainer.classList.add('overflow-x-auto', 'flex', 'gap-2');
});

