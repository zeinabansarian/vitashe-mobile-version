let menuList = document.querySelectorAll(".menuList ul li a");
let menuBar = document.querySelector(".menuBar");
let open = false;
menuBar.addEventListener("click", function (e) {

  menuBar.classList.toggle("closeClick");
  if(menuBar.classList.contains("closeClick")){

    gsap.to(".openHamburgurMenu", {
      y: 0,
      duration: 1.5,
    });
    menuList.forEach(function (e) {
      gsap.to(e, {
        stagger: 0.7,
        y: 0,
        duration: 1.2,
        delay: 1,
      });
      console.log("open");
    });
  }else{
    gsap.to(".openHamburgurMenu", {
      y: '-100%',
      duration: 2,
      delay:0.5,
    });
    menuList.forEach(function (e) {
        console.log("close");
      gsap.to(e, {
        // opacity: 0,
        stagger:1.1,
        y: -50,
        duration: 1.7,
        delay: 0,
      });
    });
  }
});
