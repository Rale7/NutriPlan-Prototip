import { generateHourArray, populateElement, centerScroll } from "./timeline.js";
import { settingButtons } from "./timeline.js";

let lastDropTarget = null;
let allDays = {};
let foodTimeline;
let activeDay = "Day 1";

function createDay(textContent) {
    let newDay = {};

    for (let i = 0; i < 24; i++) {
        const hour = (i < 10 ? "0" : "") + i + ":00";
        newDay[hour] = null;
    }

    allDays[textContent] = newDay;
}

function restoreContent(event) {
    const text = event.currentTarget.textContent;
    activeDay = text;
    foodTimeline = generateTimelineDragAndDrop(allDays[text]);
    addListeners(foodTimeline);
}

export function generateTimelineDragAndDrop(food) {
    const hoursArray = generateHourArray();

    let foodTimeline = document.getElementById("timeline");
    foodTimeline.innerHTML = "";

    hoursArray.forEach((hour) => {
        let foodTime = document.createElement("div");
        foodTime.classList.add("food-time");
        let img = document.createElement("h1");
        img.classList.add("food-time-img");
        if (food[hour] == null) {
            img.innerHTML = "&nbsp";
        } else {
            img.innerHTML = food[hour];
            img.draggable = true;
            img.addEventListener("dragstart", removeFromPlan);
            img.addEventListener("allowDrop", allowDrop);
            img.addEventListener("dragend", dragEnd);
        }

        populateElement(foodTime, img, hour);
        foodTime.addEventListener("click", () => {
            centerScroll(foodTime, foodTimeline);
            //changeFood(img);
        });
        foodTimeline.appendChild(foodTime);
    });

    return foodTimeline;
}

export function addDay() {
    const addButton = document.getElementById("addDay");
    const days = document.getElementById("days");
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("day-button");
    button.setAttribute("data-bs-toggle", "button");
    button.setAttribute("autocomplete", "off");
    const numberOfDays = days.querySelectorAll(".day-button").length;
    button.textContent = `Day ${numberOfDays}`;
    button.addEventListener("click", restoreContent);
    createDay(button.textContent);
    activeDay = button.textContent;
    foodTimeline = generateTimelineDragAndDrop(allDays[button.textContent]);
    addListeners(foodTimeline);

    days.insertBefore(button, addButton);
}

function allowDrop(event) {
    event.preventDefault();
    lastDropTarget = event.target;
}

function drag(event) {
    if (event.target === event.currentTarget) {
        let text = event.target.firstChild.data;
        event.dataTransfer.setData("html", text);
    } else {
        event.preventDefault();
    }
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("html");
    allDays[activeDay][event.currentTarget.children[1].children[1].innerText] = data;
    const myDiv = event.currentTarget;
    const header = myDiv.firstChild;
    header.draggable = true;
    header.addEventListener("dragstart", removeFromPlan);
    header.addEventListener("allowDrop", allowDrop);
    header.addEventListener("dragend", dragEnd);
    header.innerHTML = data;
    lastDropTarget = null;
}

function addListeners(foodTimeline) {
    var children = foodTimeline.children;
    for (var i = 0; i < children.length; i++) {
        var logo = children[i];
        logo.addEventListener("dragover", allowDrop);
        logo.addEventListener("drop", drop);
    }
}
function createListItem(logo, text) {
    const item = document.createElement("li");
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("search-item");
    const logoSpan = document.createElement("span");
    logoSpan.classList.add("food-drag");
    logoSpan.innerHTML = logo;
    logoSpan.draggable = true;
    logoSpan.addEventListener("dragstart", drag);
    const textSpan = document.createElement("span");
    textSpan.classList.add("food-drag-text");
    textSpan.innerText = text;
    itemDiv.appendChild(logoSpan);
    itemDiv.appendChild(textSpan);
    item.appendChild(itemDiv);

    return item;
}

function dragEnd(event) {
    const trashCan = document.getElementById("trash-can");
    if (lastDropTarget == null || lastDropTarget == trashCan) {
        allDays[activeDay][event.target.nextSibling.children[1].innerText] = null;
        event.target.draggable = false;
        event.target.innerHTML = "&nbsp;";
    }
}

function removeFromPlan(event) {
    if (event.target === event.currentTarget) {
        let text = event.target.firstChild.data;
        event.dataTransfer.setData("html", text);
    } else {
        event.preventDefault();
    }
}

function search(event) {
    event.preventDefault();
    const list = document.getElementById("search-food");
    list.innerHTML = "";
    list.appendChild(createListItem("&#127849", "Donut"));
    list.appendChild(createListItem("&#129367", "Salad"));
}

window.addDay = addDay;
window.drag = drag;
window.search = search;
window.allowDrop = allowDrop;
foodTimeline = generateTimelineDragAndDrop({});
addListeners(foodTimeline);
settingButtons();
