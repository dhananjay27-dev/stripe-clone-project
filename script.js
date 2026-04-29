const hamburger_icon = document.querySelector("#hamburger_icon");
const hamburger_content = document.querySelector("#hamburger_content");

hamburger_icon.addEventListener("click", (e) => {
    hamburger_icon.classList.toggle("cross_icon");
    hamburger_content.classList.toggle("activate_menu");
    // console.log(e.currentTarget.id);
    if(e.currentTarget.id === "hamburger_icon"){   
        if(e.currentTarget.className === "cross_icon"){
            console.log("Menu open");
            document.querySelector("body").classList.add("open-menu");
        }else{
            console.log("Menu close");
            document.querySelector("body").classList.remove("open-menu");
        }
    }
})

console.log("Clicked");
