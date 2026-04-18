const icon = document.querySelector(".icon");
const showContent = document.querySelector(".content_container");

icon.addEventListener("click", (e) => {
    icon.classList.toggle("cross");
    showContent.classList.toggle("show_content");
    document.querySelector("body").classList.toggle("activate")
})

console.log("Clicked");
