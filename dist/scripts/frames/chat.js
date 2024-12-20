document.addEventListener("DOMContentLoaded", () => {
    // Append the chatbox tray to the body
    const chatboxHTML = `
        <div id="chatBoxTray" class="fixed bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-96 bg-green-500 rounded-t-xl transition-transform duration-300 ease-in-out z-50">
            <!-- Handle for Dragging -->
            <div class="w-16 h-2 bg-gray-300 rounded-full mx-auto mt-2 cursor-pointer"></div>

            <!-- Chatbox Content -->
            <div class="bg-green-500 m-6 flex flex-col items-center justify-center rounded-xl">
                <!-- Icon Section -->
                <div class="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full z-30 -m-8">
                    <img 
                        class="w-8" 
                        src="/assets/Nav/Nav =Sage Bot.png" 
                        onclick="window.location.href='chat.html';" 
                        alt="AI chat">
                </div>

                <!-- Chat Interface -->
                <div class="mt-10 w-96 bg-white rounded-lg shadow-lg flex flex-col">
                    <!-- Chat Display Area -->
                    <div class="p-4 h-[400px] overflow-y-scroll border-b space-y-4">
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
        <button id="toggleChatBtn" class="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-green-500 text-white rounded-lg">
            Open Chat
        </button>
    `;

    document.body.insertAdjacentHTML('beforeend', chatboxHTML);

    // Define toggleChatBox function
    window.toggleChatBox = function () {
        const chatBoxTray = document.getElementById("chatBoxTray");
        chatBoxTray.classList.toggle("translate-y-full"); // Slide the chatbox up or down
    };

    // Attach event listener to the toggle button
    const toggleButton = document.getElementById("toggleChatBtn");
    toggleButton.addEventListener("click", toggleChatBox);
});
