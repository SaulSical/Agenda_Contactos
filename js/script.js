const container = document.querySelector(".container");
const btnSingIn = document.querySelector("#btn-sing-in");
const btnSingUp = document.querySelector("#btn-sing-up");

btnSingIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});

btnSingUp.addEventListener("click", () => {
    container.classList.add("toggle");
    
});