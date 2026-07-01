var form = document.getElementById("form");
var movieCards = document.getElementById("moviecards");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var image = document.getElementById("movie").value;
    var title = document.getElementById("title").value;
    var rating = document.getElementById("rating").value;

    movieCards.innerHTML += `
    <div class="card">
        <img src="${image}" alt="${title}">
        <p>Movie: ${title}</p>
        <h3>Rating: ${rating}</h3>
    </div>
    `;

    form.reset();
});