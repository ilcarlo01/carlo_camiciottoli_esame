window.onload = () => { 
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

    const hideLoading = () => { 
        loading.style.display = "none"; 
        content.style.opacity = 1;   };
    setTimeout(hideLoading, 2000);
};


const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')

const toggleMenu = () => {
    toggle.classList.toggle('is-active')
    menu.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', toggleMenu)
})


const setupReadMore = () => {
    const list = document.querySelectorAll(".accordion")
    list.forEach(function (accordion, index) {
        const link = accordion.querySelector('button.more')
        const p = accordion.querySelector('p.more')
        
        link.addEventListener('click', () => {
            if (p.style.display === "block") {
                p.style.display = "none";
            } else {
                p.style.display = "block";
            }

        })
    })
}

document.addEventListener("DOMContentLoaded", setupReadMore);


 