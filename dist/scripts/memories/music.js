document.addEventListener("DOMContentLoaded", function() {
    const audioData = [
        { src: "./assets/add.png" },
        { src: "./assets/music.png" },
        { src: "./assets/music.png" },
        { src: "./assets/music.png" },
        { src: "./assets/music.png" },
        { src: "./assets/music.png" },
        { src: "./assets/music.png" },
        { src: "./assets/music.png" },
        { src: "./assets/music.png" },
        { src: "./assets/music.png" }
    ];

    // Get the image container
    const musicContainer = document.getElementById('music-container');

    // Number of images per row (Optional for grouping)
    const imagesPerRow = 10; // Not used for horizontal scrolling but can be adjusted if you want multiple rows of images

    // Create a new row container for each set of images (you can choose not to group if it's just a single row)
    let currentRow;

    audioData.forEach((audio, index) => {
        // Start a new row every `imagesPerRow` images (optional for multi-row, not necessary for horizontal scroll)
        if (index % imagesPerRow === 0) {
            currentRow = document.createElement('div'); // Create a new row
            currentRow.className = 'flex gap-4'; // Ensure the row is a flex container with gaps
            musicContainer.appendChild(currentRow); // Append the row to the main container
        }

        // Create the image element
        const imgElement = document.createElement('img');
        imgElement.src = audio.src; // Set the source of the image
        imgElement.alt = 'Music image';
        imgElement.className = 'w-24 h-18 object-cover rounded-lg'; // Styling for size and rounded corners

        // Append the image to the current row
        currentRow.appendChild(imgElement);
    });

    // Apply horizontal scrolling to the music container
    musicContainer.classList.add('overflow-x-auto', 'flex'); // Enable horizontal scrolling with flex layout
});
