import { generateCalendar } from "./calendar.js";
import { generateFoodTimeline, settingButtons, food_finished } from "./timeline.js";

generateCalendar();
generateFoodTimeline();
settingButtons();
document.getElementById("change-meal-button").addEventListener("click", food_finished);
