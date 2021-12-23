const arrow = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrow.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        clickCounter++;
        if (itemNumber - (6 + clickCounter) >= 0)
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value -
                300
            }px)`;
        else {
            clickCounter = 0;
            movieLists[i].style.transform = "translateX(0)";
        }
    });
});
