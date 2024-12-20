document.addEventListener("DOMContentLoaded", () => {
    // Append the bottom navigation bar to the body
    const navHTML = `
        <nav class="sm:hidden fixed bottom-0 left-0 w-full h-12 bg-slate-200 flex items-center px-6 shadow-md z-50">
            <div class="w-full flex justify-between items-center">
                <!-- Left Side Icons -->
                <div class="m-1 flex items-center justify-between w-28">
                    <img class="w-6" src="./assets/Nav/Nav =Home.png" onclick="window.location.href='home.html';" alt="home">
                    <img class="w-6" src="./assets/Nav/Nav =Recommendation.png" onclick="window.location.href='recommendation.html';" alt="recommendation">
                </div>

                <!-- AI Chat Icon in the Middle -->
                <div
                    id="ai-chat-icon"
                    class="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg z-0 -mt-12 cursor-pointer">
                    <img class="w-6 " src="./assets/Nav/Nav =Sage Bot.png" alt="AI chat">
                </div>
                

                <!-- Right Side Icons -->
                <div class="m-1 flex items-center justify-between w-28">
                    <img class="w-6" src="./assets/Nav/Nav =Media.png" onclick="window.location.href='media.html';" alt="media">
                    <img class="w-6" src="./assets/Nav/Nav =Profile.png" onclick="window.location.href='profile.html';" alt="profile">
                </div>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('beforeend', navHTML);

    // Append the chatbox tray to the body
    const chatboxHTML = `
        <div id="chatBoxTray" class="fixed -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full w-96 bg-green-500 rounded-t-xl transition-transform duration-300 ease-in-out z-30">
            <div class="bg-green-500 m-6 flex flex-col items-center justify-center rounded-xl">
                <!-- Chat Interface -->
                <div class=" w-[360px] bg-white rounded-lg shadow-lg flex flex-col mb-16 mx-8">
                    <!-- Chat Display Area -->
                    <div class="p-4 h-[625px] overflow-y-scroll border-b space-y-4">
                <!-- Simulated Chat Log -->
                <div class="text-gray-700">
                    <p><strong>Bot:</strong> Hi! How can I assist you today?</p>
                </div>
                <div class="text-gray-900">
                    <p><strong>You:</strong> I need help understanding my account statement.</p>
                </div>
                <div class="text-gray-700">
                    <p><strong>Bot:</strong> Sure, could you provide more details?</p>
                </div>
                <div class="text-gray-900">
                    <p><strong>You:</strong> I noticed a charge I don’t recognize.</p>
                </div>
                <div class="text-gray-700">
                    <p><strong>Bot:</strong> I understand. Can you share the date and amount of the charge?</p>
                </div>
                <div class="text-gray-900">
                    <p><strong>You:</strong> It's from November 10th for $120.</p>
                </div>
                <div class="text-gray-700">
                    <p><strong>Bot:</strong> Thank you! I’ll check that for you. One moment, please.</p>
                </div>
                <div class="text-gray-900">
                    <p><strong>You:</strong> Okay, thank you.</p>
                </div>
                <div class="text-gray-700">
                    <p><strong>Bot:</strong> It seems this charge is from a subscription to “Premium Service.” Would you like me to cancel it?</p>
                </div>
                <div class="text-gray-900">
                    <p><strong>You:</strong> Yes, please cancel it.</p>
                </div>
                <div class="text-gray-700">
                    <p><strong>Bot:</strong> The subscription has been canceled. Anything else I can help you with?</p>
                </div>
                <div class="text-gray-900">
                    <p><strong>You:</strong> No, that’s all for now. Thanks!</p>
                </div>
                <div class="text-gray-700">
                    <p><strong>Bot:</strong> You’re welcome! Have a great day!</p>
                </div>
                <!-- Repeat messages to simulate longer chat -->
                <div class="text-gray-900">
                    <p><strong>You:</strong> Thank you, goodbye!</p>
                </div>
                <div class="text-gray-700">
                    <p><strong>Bot:</strong> Goodbye!</p>
                </div>
                <!-- Add more messages here if needed -->
            </div>
            
            <!-- Input Area -->
            <div class="flex items-center p-4">
                <input 
                    type="text" 
                    class="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
                    placeholder="Type your message here...">
                <button 
                    class="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none">
                    Send
                </button>
            </div>
                </div>
            </div>
        </div>

        <!-- Toggle Button -->
        <button id="toggleChatBtn" class="hidden">Open Chat</button>
    `;

    // Insert the chatbox HTML into the body
    document.body.insertAdjacentHTML('beforeend', chatboxHTML);

    // Define toggleChatBox function to open and close the chatbox
    function toggleChatBox() {
        const chatBoxTray = document.getElementById("chatBoxTray");
        chatBoxTray.classList.toggle("translate-y-full"); // Slide the chatbox up or down
    }

    // Add event listener to the AI chat icon to trigger the chatbox
    const aiChatIcon = document.getElementById("ai-chat-icon");
    aiChatIcon.addEventListener("click", toggleChatBox);
});
