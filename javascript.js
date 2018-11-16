window.onload = ()=>{
    enableSmoothScroll();
    mobileFeatures()
}
function enableSmoothScroll(){
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}
function mobileFeatures(){
    let mq = matchMedia("(max-width: 700px)"), 
        mqVertical = matchMedia("(max-height:300px)"), 
        menu = document.getElementById("nav-side");

    if (mq.matches || mqVertical.matches) window.addEventListener("scroll", animateMenu);
    mq.addListener(() =>{ 
        if(mq.matches){ 
            window.addEventListener("scroll", animateMenu);
        }else{ 
            window.removeEventListener("scroll", animateMenu)
            menu.classList.remove("menu-mobile");
        }
    });
    mqVertical.addListener(() =>{ 
        if(mqVertical.matches){ 
            window.addEventListener("scroll", animateMenu);
        }else{ 
            window.removeEventListener("scroll", animateMenu)
            menu.classList.remove("menu-mobile");
        }
    });

}

function animateMenu(){
    let menu = document.getElementById("nav-side");
    window.pageYOffset > 10 ? menu.classList.add("menu-mobile") : menu.classList.remove("menu-mobile");
} 
