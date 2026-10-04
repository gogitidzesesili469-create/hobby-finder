```javascript
const searchInput = document.getElementById("searchInput");
const hobbyCards = document.querySelectorAll(".hobby-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    let found = false;

    hobbyCards.forEach(function (card) {

        const hobbyName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const hobbyDescription = card
            .querySelector("p")
            .textContent
            .toLowerCase();

        const hobbyCategory = card
            .querySelector("span")
            .textContent
            .toLowerCase();

        if (
            hobbyName.includes(searchText) ||
            hobbyDescription.includes(searchText) ||
            hobbyCategory.includes(searchText)
        ) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    if (found || searchText === "") {
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }

});


// პატარა ანიმაცია ღილაკზე

const button = document.querySelector(".main-button");

button.addEventListener("click", function () {

    button.style.transform = "scale(0.95)";

    setTimeout(function () {
        button.style.transform = "scale(1)";
    }, 150);

});
```
