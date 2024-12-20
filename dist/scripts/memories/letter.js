document.addEventListener("DOMContentLoaded", function () {
    const audioData = [
        [
            {
                "src": "/assets/Letter/letter1.avif",
                "tittle": "My First Soccer Victory",
                "content": "I remember the thrill of my first soccer victory. It was a moment of hard work paying off, and it reminds me that with determination, I can achieve anything. I’ve faced challenges before and conquered them, so I’m ready to take on whatever comes next."
            },
            {
                "src": "/assets/Letter/letter2.avif",
                "tittle": "A Memorable Birthday",
                "content": "My birthday was a celebration of love, happiness, and achievement. It reminds me that life is full of special moments, and I am capable of creating more of them. With every challenge, there’s an opportunity for joy and growth."
            },
            {
                "src": "/assets/Letter/letter3.webp",
                "tittle": "First Day of IIT",
                "content": "My first day at IIT was a moment of pride and excitement. It was a reminder that I am capable of achieving my dreams. I’ve worked hard to get here, and I’m ready to face any challenge that comes my way."
            },
            {
                "src": "/assets/Letter/letter4.avif",
                "tittle": "Earning My Scholarship",
                "content": "Earning my scholarship was a proud moment, the result of hard work and perseverance. It shows that when I put in the effort, I can overcome any obstacle. This achievement is a reminder that my determination will always lead to success."
            },
            {
                "src": "/assets/Letter/letter5.avif",
                "tittle": "First Business Milestone",
                "content": "Reaching my first $1,000 in sales was an important milestone. It proves that every step I take towards my goals is valuable. The hard work paid off, and this accomplishment motivates me to keep pushing forward, no matter how difficult the journey."
            },
            {
                "src": "/assets/Letter/letter6.avif",
                "tittle": "Buying My First Home",
                "content": "Buying my first home was a dream come true. It was a symbol of my dedication and perseverance. This achievement reminds me that I am capable of making my dreams a reality, and I will continue to face challenges head-on with strength and resilience."
            }
        ]

    ];

    // Get the letter container
    const letterContainer = document.getElementById('letter-container');

    // Number of letters per row (Optional for grouping)
    const lettersPerRow = 10; // You can adjust this number

    let currentRow;

    audioData[0].forEach((letter, index) => {
        // Start a new row every `lettersPerRow` letters (optional)
        if (index % lettersPerRow === 0) {
            currentRow = document.createElement('div'); // Create a new row
            currentRow.className = 'flex gap-4'; // Flex container with gaps
            letterContainer.appendChild(currentRow); // Append the row to the container
        }

        // Create the image element for letter
        const letterCard = document.createElement('div');
        letterCard.className = 'flex-none w-80 p-4 bg-white rounded-lg shadow-lg'; // Style for each letter card

        // Image for the letter
        const imgElement = document.createElement('img');
        imgElement.src = letter.src; // Set the image source
        imgElement.alt = 'Letter Image';
        imgElement.className = 'w-full h-48 object-cover rounded-lg'; // Styling for the image

        // Title for the letter
        const titleElement = document.createElement('h3');
        titleElement.className = 'mt-4 text-lg font-semibold text-gray-800';
        titleElement.innerText = letter.tittle;

        // Content for the letter
        const contentElement = document.createElement('p');
        contentElement.className = 'mt-2 text-sm text-gray-600 ';
        contentElement.innerText = letter.content;

        // Append all elements to the card
        letterCard.appendChild(imgElement);
        letterCard.appendChild(titleElement);
        letterCard.appendChild(contentElement);

        // Append the letter card to the current row
        currentRow.appendChild(letterCard);
    });

    // Apply horizontal scrolling to the letter container
    letterContainer.classList.add('overflow-x-auto', 'flex', 'gap-4');
});
