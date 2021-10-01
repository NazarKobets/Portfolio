const stars = document.querySelectorAll("#star");
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

stars.forEach(star => {
    //from 0.6 to 1.2
    let duration = Math.random() * (0.6) + 0.6;
    //console.log(duration);
    star.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener("load", ()=>{
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");

    setTimeout(()=>{
        popup.style.display = "block";
    }, 2000);

    // setInterval(()=>{
    //     popup.style.display = "block";
    // }, 4000);
});

close.addEventListener("click", () => {
    popup.style.display = "none";
});
