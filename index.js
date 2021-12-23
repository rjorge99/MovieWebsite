const arrow = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrow.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        clickCounter++;
        const ratio = Math.floor(window.innerWidth / 270);
        if (itemNumber - (6 + clickCounter) + (6 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value -
                300
            }px)`;
        } else {
            clickCounter = 0;
            movieLists[i].style.transform = "translateX(0)";
        }
    });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle, .toggle-ball"
);

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
});
