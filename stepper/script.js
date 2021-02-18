let progress = document.querySelector(".progress");
let stepIndicator = document.querySelectorAll(".step-indicator");
let stepContents = document.querySelectorAll(".step-content");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let currentStep = 1;

next.addEventListener("click", () => {
  stepContents.forEach((item) => item.classList.remove("active-step"));

  stepIndicator[currentStep].classList.add("active");
  stepContents[currentStep].classList.add("active-step");

  currentStep++;

  prev.disabled = false;

  if (currentStep == stepIndicator.length) {
    next.disabled = true;
  }

  updateProgress();
});

prev.addEventListener("click", () => {
  stepContents.forEach((item) => item.classList.remove("active-step"));
  currentStep--;
  stepIndicator[currentStep].classList.remove("active");
  stepContents[currentStep - 1].classList.add("active-step");

  if (currentStep < stepIndicator.length) {
    next.disabled = false;
  }

  if (currentStep == 1) {
    prev.disabled = true;
  }

  updateProgress();
});

const updateProgress = function () {
  let activeSteps = document.querySelectorAll(".active");

  let progressPercentage =
    ((activeSteps.length - 1) / (stepIndicator.length - 1)) * 100;

  progress.style.width = progressPercentage + "%";
};
