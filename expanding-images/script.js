let images = document.querySelectorAll(".image")
let titles = document.querySelectorAll(".title")

document.addEventListener("click", e => {
     images.forEach((image) => {
       image.classList.remove("active");
     });

     titles.forEach((title) => {
       title.classList.remove("show-title");
     });

     e.target.classList.add("active");
    e.target.firstElementChild.classList.add("show-title");
})

