document.addEventListener("DOMContentLoaded", function () {
    const imageCaptionData = [
        { 
            "src": "/assets/Graph/graph1.png", 
            "caption": "Beats per minute (BPM)"
        },
        { 
            "src": "/assets/Graph/graph3.png",
            "caption": "Daily Blood Pressure (BP) ranges"
        },
        { 
            "src": "/assets/Graph/graph2.png",
            "caption": "Daily steps Count"
        },
        { 
            "src": "/assets/Graph/graph1.png", 
            "caption": "Daily Sleep Duration"
        }
    ];

    // Get the container for images and captions
    const imageContainer = document.getElementById('image-caption-container');

    imageCaptionData.forEach(item => {
        // Create a card container for each image and caption
        const card = document.createElement('div');
        card.className = 'flex-none w-80 p-4 bg-pink-100 rounded-xl shadow-ld text-center'; // Style for card

        // Create the image element
        const imageElement = document.createElement('img');
        imageElement.className = 'rounded-lg w-full h-44 object-cover'; // Style for image
        imageElement.src = item.src;
        imageElement.alt = item.caption;

        // Create the caption element
        const captionElement = document.createElement('p');
        captionElement.className = 'mt-2 text-sm text-gray-600'; // Style for caption
        captionElement.innerText = item.caption;

        // Append the image and caption to the card
        card.appendChild(imageElement);
        card.appendChild(captionElement);

        // Append the card to the container
        imageContainer.appendChild(card);
    });

    // Apply horizontal scrolling to the container
    imageContainer.classList.add('overflow-x-auto', 'flex', 'gap-6');
});
