const reminderCardsData = [
    {
        title: "Stay Hydrated",
        icon: "/assets/Reminder Cards/Reminder=Water.png",
    },
    {
        title: "Take a Break",
        icon: "/assets/Reminder Cards/Reminder=Break.png",
    },
    {
        title: "Deep Breaths",
        icon: "/assets/Reminder Cards/Reminder=Breath.png",
    },
    {
        title: "Eye Rest",
        icon: "./assets/Reminder Cards/Reminder=Eye rest.png",
    },
    {
        title: "Meditate",
        icon: "./assets/Reminder Cards/Reminder=Meditate.png",
    },
];

// Reference to the container
const reminderCardsContainer = document.getElementById('reminder-cards-container');

// Generate and insert cards
reminderCardsData.forEach(reminderCard => {

    const cardElement = `
                    <div class="shrink-0 flex flex-col items-center justify-between">
                        <img class=" w-[200px] object-cover rounded-xl mb-2" src="${reminderCard.icon}" alt="${reminderCard.title}">
                        <a class="font-semibold -mt-12 p-2">${reminderCard.title}</a>
                    </div>
                `;

    reminderCardsContainer.innerHTML += cardElement;
});
