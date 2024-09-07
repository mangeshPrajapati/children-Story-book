const urlParams = new URLSearchParams(window.location.search);
const storyIndex = urlParams.get("storyIndex");

if (storyIndex !== null && stories[storyIndex]) {
  const story = stories[storyIndex];
  document.getElementById("story-title").textContent = story.title;
  document.getElementById("story-content").textContent = story.content;
} else {
  // Redirect back to index if storyIndex is invalid
  window.location.href = "index.html";
}
