const increaseButtonE1 = document.querySelector(".counter__button--increase");
const decreaseButtonE1 = document.querySelector(".counter__button--decrease");
const counterValueE1 = document.querySelector(".counter__value");
const resetButtonE1 = document.querySelector(".counter__reset-button");

const MAX_LIMIT = 5;
const MIN_LIMIT = 0;

// reusable function to update counter
function updateCounter(change = 0, reset = false) {
    let value = reset ? 0 : +counterValueE1.textContent + change;

    // clamp value between min and max
    value = Math.max(MIN_LIMIT, Math.min(MAX_LIMIT, value));

    counterValueE1.textContent = value;

    // handle button states
    increaseButtonE1.disabled = value === MAX_LIMIT;
    decreaseButtonE1.disabled = value === MIN_LIMIT;
}

// BUTTON LISTENERS
increaseButtonE1.addEventListener("click", () => updateCounter(1));
decreaseButtonE1.addEventListener("click", () => updateCounter(-1));
resetButtonE1.addEventListener("click", () => updateCounter(0, true));

// KEYBOARD SUPPORT
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault(); // prevent page scrolling
    }

    if (e.key === "ArrowUp") updateCounter(1);
    if (e.key === "ArrowDown") updateCounter(-1);
});