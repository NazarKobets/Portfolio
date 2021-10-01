const stars = document.querySelectorAll("#star");

stars.forEach(star => {
    //from 0.6 to 1.2
    let duration = Math.random() * (0.6) + 0.6;
    //console.log(duration);
    star.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener("load", ()=>{
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");
});