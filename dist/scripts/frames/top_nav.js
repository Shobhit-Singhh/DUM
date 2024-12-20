document.addEventListener("DOMContentLoaded", () => {
    // Append the top navigation bar to the body
    const navHTML = `
        <nav class="fixed top-0 left-0 w-full h-14 bg-slate-200 flex items-center px-6 shadow-md z-50">
            <div class="w-full flex justify-between items-center">

                <!-- Part 1: Greeting -->
                <div class="text-2xl font-bold text-green-800">
                    Hi John &#x1F44B;
                </div>

                <!-- Part 2: Navigation Tabs (default visible on larger screens) -->
                <ul class="hidden sm:flex space-x-6 text-sm font-medium">
                    <li><a href="#home" onclick="window.location.href='home.html';" class="hover:text-green-700">Home</a></li>
                    <li><a href="#recommendation" onclick="window.location.href='recommendation.html';" class="hover:text-green-700">Recommendation</a></li>
                    <li><a href="#media" onclick="window.location.href='media.html';" class="hover:text-green-700">Media</a></li>
                    <li><a href="#profile" onclick="window.location.href='profile.html';" class="hover:text-green-700">Profile</a></li>
                    <li><a href="#community" onclick="window.location.href='community.html';" class="hover:text-green-700">Community</a></li>

                </ul>

                <!-- Part 3: SOS Button and Hamburger Menu -->
                <div class="flex items-center space-x-4">
                    <!-- SOS Button -->
                    <button>
                        <img onclick="window.location.href='sos.html';" class="h-10 w-10 object-contain" src="./assets/SOS Icon.png" alt="SOS">
                    </button>

                    <!-- Hamburger Icon (visible only on small screens) -->
                    <button class="sm:hidden" onclick="toggleNav()">
                        <img class="h-8 w-8 object-contain" src="./assets/hamburger icon.png" alt="menu">
                    </button>
                </div>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Define the toggleNav function
    window.toggleNav = function () {
        alert("Toggle navigation function triggered!");
        // You can expand this function to handle the hamburger menu action
    };
});
