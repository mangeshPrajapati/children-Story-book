document.addEventListener("DOMContentLoaded", function () {
  const storyList = document.getElementById("story-list");

  // Loop through stories and create a card for each one
  stories.forEach((story, index) => {
    const storyCard = document.createElement("div");
    storyCard.className =
      "bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-100 transition transform hover:scale-105 cursor-pointer";

    const storyLink = document.createElement("a");
    storyLink.href = `story.html?storyIndex=${index}`;
    storyLink.className = "text-2xl font-bold text-blue-700 block mb-4";
    storyLink.textContent = story.title;

    const storyPreview = document.createElement("p");
    storyPreview.className = "text-gray-600";
    storyPreview.textContent = story.content.slice(0, 100) + "..."; // Short preview of the story

    // Append the link and preview to the card
    storyCard.appendChild(storyLink);
    storyCard.appendChild(storyPreview);

    // Append the card to the story list
    storyList.appendChild(storyCard);
  });
});
