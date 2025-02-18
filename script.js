const shareBtnDesktop = document.getElementById("sharebtn-desktop");
const boxShareDesktop = document.getElementById("desktopShare");
const exitBtn = document.getElementById("exit-btn");
const boxMobile = document.getElementById("box-mobile");
const informationSection = document.querySelector(".information");
let isVisible = false;
// Desktop event listener
shareBtnDesktop.addEventListener("click", () => {
  if (window.innerWidth >= 700) {
    if (!isVisible) {
      boxShareDesktop.classList.add("visible");
      isVisible = true;
    } else {
      boxShareDesktop.classList.remove("visible");
      isVisible = false;
    }
  }
});

// Mobile event listener
shareBtnDesktop.addEventListener("click", () => {
  if (window.innerWidth < 700) {
    informationSection.classList.add("hidden");
    boxMobile.classList.add("visible");
    exitBtn.addEventListener("click", () => {
      informationSection.classList.remove("hidden");
      boxMobile.classList.remove("visible");
    });
  }
});
