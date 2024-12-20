document.addEventListener("DOMContentLoaded", () => {
    // Append the right-side menu to the body
    const menuHTML = `
        <div id="right-side-menu"
            class= "fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-40">
            <div class="p-6">
                <!-- Close Button -->
                <button onclick="closeNav()" class="text-2xl absolute top-4 right-4">
                    &times;
                </button>

                <!-- Navigation Links -->
                <ul class="space-y-6 text-lg font-medium pt-20">
                    <li><a href="#home" onclick="window.location.href='index.html';" class="hover:text-green-700">Home</a></li>
                    <li><a href="#recommendation" onclick="window.location.href='recommendation.html';" class="hover:text-green-700">Recommendation</a></li>
                    <li><a href="#media" onclick="window.location.href='media.html';" class="hover:text-green-700">Media</a></li>
                    <li><a href="#profile" onclick="window.location.href='profile.html';" class="hover:text-green-700">Profile</a></li>
                    <li><a href="#community" onclick="window.location.href='community.html';" class="hover:text-green-700">Community</a></li>
                </ul>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', menuHTML);

    // Define toggleNav and closeNav functions
    window.toggleNav = function () {
        const menu = document.getElementById('right-side-menu');
        menu.classList.toggle('translate-x-full'); // Toggle the menu sliding in/out
    };

    window.closeNav = function () {
        const menu = document.getElementById('right-side-menu');
        menu.classList.add('translate-x-full'); // Slide the menu out
    };
});
