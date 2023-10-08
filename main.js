const buttons = document.querySelectorAll(".btn");
let account = document.getElementById("account");
let count = 0;

const count_literal = {
  Reset: () => {
    count = 0;
    return count;
  },
  Increase: () => ++count,
  Decrease: () => --count,
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    account.textContent = count_literal[button.textContent]();
  });
});
