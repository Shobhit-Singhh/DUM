document.addEventListener("DOMContentLoaded", () => {
    // Append the recommendation section to the main container
    const recommendationHTML = `
        <section id="recommendation" class="py-10 bg-pink-50 m-4 rounded-xl pb-14">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center text-green-800">Recommendation</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    <!-- Card 1 -->
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div class='flex items-center justify-center mt-6 rounded-md'>
                            <img class="h-44" src="/assets/Recommendation/r2.avif" alt="">
                            <img class="h-44" src="/assets/Recommendation/r1.avif" alt="">
                        </div>
                        <div class="p-4">
                            <h3 class="text-xl font-bold text-green-800">Personal Recommendation</h3>
                            <p class="mt-2 text-gray-600"> Personalized prompt for gratitude journaling, self-letter
                                writing, and your preserved memories.</p>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div class='flex items-center justify-center mt-6 rounded-md '>
                            <img class="w-2/3 h-44" src="/assets/Recommendation/r5.avif" alt="">
                            <img class="h-44" src="/assets/Recommendation/r6.avif" alt="">
                        </div>
                        <div class="p-4">
                            <h3 class="text-xl font-bold text-green-800">Media Recommendation</h3>
                            <p class="mt-2 text-gray-600"> Recommendations for movies, music, and books based on your
                                mood and preferences.</p>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div class='flex items-center justify-center mt-6 rounded-md '>
                            <img class="h-44" src="/assets/Recommendation/r3.avif" alt="">
                            <img class="h-44" src="/assets/Recommendation/r4.avif" alt="">
                        </div>
                        <div class="p-4">
                            <h3 class="text-xl font-bold text-green-800">Article</h3>
                            <p class="mt-2 text-gray-600"> Educational articles help you understand how different
                                CBT techniques work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    document.body.insertAdjacentHTML('beforeend', recommendationHTML);
});
