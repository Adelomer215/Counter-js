const number = document.getElementById("number");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increment = document.getElementById("increment");

function changeNumber(btn) {
  const button = btn;
  number.textContent = 0;
  button.addEventListener("click", () => {
    if (button.getAttribute("id") === "decrease") {
      number.textContent--;
    } else if (button.getAttribute("id") === "increment") {
      number.textContent++;
    } else {
      number.textContent = 0;
    }
    number.textContent >= 1
      ? (number.style.color = "blue")
      : number.textContent < 0
      ? (number.style.color = "red")
      : (number.style.color = "black");
  });
}

changeNumber(decrease);
changeNumber(reset);
changeNumber(increment);
