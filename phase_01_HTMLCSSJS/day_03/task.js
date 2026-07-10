const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const likeCount = document.getElementById("likeCount");
const dislikeCount = document.getElementById("dislikeCount");

let likes = 8;
let dislikes = 0;

likeBtn.addEventListener("click", () => {
	likes += 1;
	likeCount.textContent = `Count: ${likes}`;
});

dislikeBtn.addEventListener("click", () => {
	dislikes += 1;
	dislikeCount.textContent = `Count: ${dislikes}`;
});
