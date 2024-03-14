let current_meal = null;

export function generateHourArray() {
    const hoursArray = [];

    for (let i = 0; i < 24; i++) {
        const hour = (i < 10 ? "0" : "") + i + ":00";
        hoursArray.push(hour);
    }

    return hoursArray;
}

export function populateElement(foodTime, img, hour) {
    let legend = document.createElement("div");
    legend.classList.add("timeline-legend");
    let circle = document.createElement("div");
    circle.classList.add("circle-border");
    let doth = document.createElement("div");
    doth.classList.add("circle-border");
    doth.classList.add("doth");
    circle.appendChild(doth);
    let timedisp = document.createElement("h6");
    timedisp.innerText = hour;
    legend.appendChild(circle);
    legend.appendChild(timedisp);
    foodTime.appendChild(img);
    foodTime.appendChild(legend);
}

export function generateFoodTimeline() {
    const hoursArray = generateHourArray();

    let foodTimeline = document.getElementById("timeline");

    hoursArray.forEach((hour) => {
        let foodTime = document.createElement("div");
        foodTime.classList.add("food-time");
        let img = document.createElement("h1");
        let overlay = document.createElement("span");
        img.classList.add("food-time-img");
        overlay.classList.add("h1");
        overlay.classList.add("overlay");
        overlay.innerHTML = "✔️";
        if (hour == "09:00") {
            img.innerHTML = "&#127834";
            img.appendChild(overlay);
        } else if (hour == "10:00") {
            img.innerHTML = "&#129370";
        } else if (hour == "16:00") {
            img.innerHTML = "&#127834";
        } else if (hour == "20:00") {
            img.innerHTML = "&#129383";
        } else {
            img.innerHTML = "&nbsp";
        }

        populateElement(foodTime, img, hour);
        foodTime.addEventListener("click", () => {
            centerScroll(foodTime, foodTimeline);
            changeFood(img);
        });
        foodTimeline.appendChild(foodTime);
    });
}
export function centerScroll(item, container) {
    const itemRect = item.getBoundingClientRect();
    const containerWidth = container.offsetWidth;
    const shiftAmount = itemRect.left - containerWidth / 2;

    container.scrollBy({
        left: shiftAmount,
        behavior: "smooth",
    });
}

function changeFood(cell) {
    current_meal = cell;
    let curr_pict = document.getElementById("meal-appearance");
    change_chart(document.getElementById("fat-progress"), "50%");
    change_chart(document.getElementById("carbs-progress"), "40%");
    change_chart(document.getElementById("protein-progress"), "30%");
    if (cell.innerHTML == "&nbsp;") {
        curr_pict.innerHTML = "&#x2753;";
    } else if (cell.innerHTML.includes("<span")) {
        const content = cell.innerHTML;
        const textBeforeSpan = content.substring(0, content.indexOf("<span"));
        curr_pict.innerHTML = textBeforeSpan;
    } else {
        curr_pict.innerHTML = cell.innerHTML;
    }
    let food_name = document.getElementById("food-name");
    food_name.innerHTML = "Meal";
}

export function food_finished(event) {
    let s = document.createElement("span");
    s.classList.add("h1");
    s.classList.add("overlay");
    s.innerHTML = "✔️";
    current_meal.appendChild(s);
}

function change_chart(progressBar, percentage) {
    progressBar.classList.remove("animation");
    void progressBar.offsetWidth;
    progressBar.style.width = percentage;
    progressBar.classList.add("animation");
    progressBar.innerHTML = percentage;
}

export function settingButtons() {
    let buttonLeft = document.getElementById("left-button");
    let buttonRight = document.getElementById("right-button");
    let container = document.getElementById("timeline");

    buttonLeft.addEventListener("click", function () {
        container.scrollBy({
            left: -container.offsetWidth * 0.1,
            behavior: "smooth",
        });
    });

    buttonRight.addEventListener("click", function () {
        container.scrollBy({
            left: container.offsetWidth * 0.1,
            behavior: "smooth",
        });
    });
}
