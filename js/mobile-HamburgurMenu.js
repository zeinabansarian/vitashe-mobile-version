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
      gsap.fromTo(e,{
        y: 80,
        opacity:0,

      }, {
        stagger: 1,
        y: 0,
        duration: 1.5,
        delay: 1,
        opacity:1,
      }
      
      );
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
        stagger:1,
        y: -80,
        opacity: 0,
        duration: 1.5,
        delay: 0,
      });
    });
  }
});
