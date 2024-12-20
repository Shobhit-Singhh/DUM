document.addEventListener("DOMContentLoaded", function () {
    const gratitudeData = [
        {
            "tittle": "Grateful for Health and Energy",
            "content": "Today, I am grateful for my health and the energy I have to start the day. Every morning is a new opportunity to take care of my body and mind. I appreciate the strength within me that allows me to move forward with purpose and vitality."
        },
        {
            "tittle": "Grateful for Inner Peace",
            "content": "I am grateful for the peace within me. It helps me stay grounded amidst the chaos of daily life. I recognize that peace is a choice, and I choose to embrace calmness in every moment, knowing it leads to clarity and balance."
        },
        {
            "tittle": "Grateful for My Mindset",
            "content": "I am grateful for my mindset and the way I approach life. With a positive outlook, I see challenges as opportunities to grow. My perspective shapes my reality, and I’m thankful for the strength it gives me to face any obstacles with confidence."
        },
        {
            "tittle": "Grateful for the Present Moment",
            "content": "I am grateful for the present moment. Right now, I have the power to make choices that align with my values. I acknowledge the importance of being fully present, and I am thankful for the awareness to appreciate each moment as it comes."
        },
        {
            "tittle": "Grateful for Self-Growth",
            "content": "Today, I am grateful for the continuous growth I experience. Each day offers a chance to become better than yesterday, and I am thankful for the lessons that help me evolve. I embrace personal development and the journey of becoming the best version of myself."
        },
        {
            "tittle": "Grateful for Opportunities",
            "content": "I am grateful for the opportunities I have each day to learn, improve, and contribute. I recognize that every situation offers a chance to grow, and I am thankful for the potential that lies in each new challenge or interaction I encounter."
        }
    ]


    // Get the gratitude container
    const gratitudeContainer = document.getElementById('gratitude-container');

    // Number of letters per row (Optional for grouping)
    const lettersPerRow = 5; // Adjust as needed

    let currentRow;

    gratitudeData.forEach((letter, index) => {
        // Start a new row every `lettersPerRow` letters (optional)
        if (index % lettersPerRow === 0) {
            currentRow = document.createElement('div'); // Create a new row
            currentRow.className = 'flex gap-4'; // Flex container with gaps
            gratitudeContainer.appendChild(currentRow); // Append the row to the container
        }

        // Create the gratitude card
        const gratitudeCard = document.createElement('div');
        gratitudeCard.className = 'flex-none w-80 p-4 bg-white rounded-lg shadow-lg'; // Style for each gratitude card

        // Title for the gratitude card
        const titleElement = document.createElement('h3');
        titleElement.className = 'mt-4 text-lg font-semibold text-gray-800';
        titleElement.innerText = letter.tittle;

        // Content for the gratitude card
        const contentElement = document.createElement('p');
        contentElement.className = 'mt-2 text-sm text-gray-600';
        contentElement.innerText = letter.content;

        // Append the title and content to the card
        gratitudeCard.appendChild(titleElement);
        gratitudeCard.appendChild(contentElement);

        // Append the gratitude card to the current row
        currentRow.appendChild(gratitudeCard);
    });

    // Apply horizontal scrolling to the gratitude container
    gratitudeContainer.classList.add('overflow-x-auto', 'flex', 'gap-4');
});
