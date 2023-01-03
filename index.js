const mainContainer = document.querySelector(".main");
const resultContainer = document.querySelector(".result");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
let rated = document.getElementById("rated");
const radioBtn = document.querySelectorAll('input[type="radio"]');
let score = 0;



submit.addEventListener("click", function(){
    mainContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    radioBtn.forEach(button => {
        button.addEventListener('change', event => {
          score = parseInt(event.target.value);
          rated.textContent = `${score}`;
        });
      });

})

rateAgain.addEventListener("click", function(){
    resultContainer.classList.add("hidden");
    mainContainer.classList.remove("hidden");
})

