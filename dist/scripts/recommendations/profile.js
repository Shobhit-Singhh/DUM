document.addEventListener("DOMContentLoaded", () => {
    // Example profile data
    const profiles = [
        { name: 'Dr. John Doe', specialization: 'Child Psychiatry', experience: '10 years', Connected: '2' },
        { name: 'Dr. Jane Smith', specialization: 'Adult Psychiatry', experience: '8 years', Connected: '4' },
        { name: 'Dr. Emily Brown', specialization: 'Psychotherapy', experience: '5 years', Connected: '3' },
        { name: 'Dr. Mark Wilson', specialization: 'Forensic Psychiatry', experience: '12 years', Connected: '1' },
        { name: 'Dr. Sarah Lee', specialization: 'Geriatric Psychiatry', experience: '7 years', Connected: '6' }
    ];

    const slider = document.querySelector('.slider');
    const template = document.querySelector('#profile-card-template');

    // Populate the slider with profile cards
    profiles.forEach(profile => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('#profile-name').textContent = profile.name;
        clone.querySelector('.specialization').textContent = `${profile.specialization}`;
        clone.querySelector('.experience').textContent = `Experience: ${profile.experience}`;
        clone.querySelector('.location').textContent = `Connected with: ${profile.Connected}`;

        clone.querySelector('.share-btn').addEventListener('click', function () {
            const customButtons = clone.querySelector('.custom-buttons');
            customButtons.classList.toggle('hidden');
        });
        slider.appendChild(clone);
    });
});

