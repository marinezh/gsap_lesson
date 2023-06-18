"use strict";

window.addEventListener("DOMContentLoaded", () => {
  fix100vh();
  findHeight();
  animation();
  window.addEventListener("resize", () => {
    fix100vh();
    findHeight();
  });
});

let promo = document.querySelector(".promo");

function fix100vh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function findHeight() {
  let fullHeight = document.documentElement.clientHeight,
    fullWidth = document.documentElement.clientWidth;
  if (fullWidth > 768 && fullWidth <= 1024) {
    if (fullHeight < 730) {
      promo.classList.add("no-full");
    } else {
      if (promo.classList.contains("no-full")) {
        promo.classList.remove("no-full");
      }
    }
  } else if (fullWidth > 576 && fullWidth <= 768) {
    if (fullHeight < 700) {
      promo.classList.add("no-full");
    } else {
      if (promo.classList.contains("no-full")) {
        promo.classList.remove("no-full");
      }
    }
  } else if (fullWidth <= 576) {
    if (fullHeight < 700) {
      promo.classList.add("no-full");
    } else {
      if (promo.classList.contains("no-full")) {
        promo.classList.remove("no-full");
      }
    }
  }
}

function animation() {
  //   //gsap.registerPlugin(ScrollTrigger);
  //   //method.to; //(от верстки к другой точке)
  //   gsap.to(".promo__text", {
  //     duration: 1,
  //     x: -150,
  //     xPercent: -50,
  //     color: "red",
  //     delay: 1,
  //   });

  // method .from (от точки к верстке)
  //   gsap.from(".promo__text", {
  //     duration: 2,
  //     xPercent: -50,
  //     color: "red",
  //   });

  // метод .fromTo (от одной точки к другой точке минуя верстку)
  //   gsap.fromTo(
  //     ".promo__text",
  //     { x: -200 },
  //     {
  //       duration: 2,
  //       x: 200,
  //     }
  //   );

  // dve animacii yf odnom elemente
  //   gsap.to(".promo__text", {
  //     duration: 1,
  //     xPercent: -50,
  //   });
  //   gsap.to(".promo__text", {
  //     duration: 1,
  //     scale: 0.5,
  //     delay: 1,
  //   });

  //taimline
  //   const tlPromo = gsap.timeline({});
  //   tlPromo
  //     .to(".promo__text", {
  //       duration: 3,
  //       xPercent: -50,
  //       color: "red",
  //     })
  //     .to(
  //       ".promo__text",
  //       {
  //         duration: 1,
  //         rotation: 180,
  //       },
  //       "-=1"
  //     );
  // .to(".promo__text", {
  //     duration: 1,
  //    rotation: 180
  //   }, '<');
  //   gsap.to(".rates__title", {
  //     duration: 1,
  //     color: "red",
  //     scrollTrigger: {
  //       trigger: ".rates",
  //       //   start: "top top",
  //       //   start: "30% top",
  //       // start: "30% 200px",
  //       start: "top center",
  //       end: "bottom bottom",
  //       pin: true, // fix block until smth happend
  //       scrub: true,
  //       toggleClass: 'active',
  //       markers: true,
  //     },
  //   });

  ////////
  //   gsap.set(".rates__card", {
  //     opacity: 0,
  //   });
  //   gsap.to(".rates__card", {
  //     opacity: 1,
  //     stagger: 0.1, // card appears one by one
  //     scrollTrigger: {
  //       trigger: ".rates",
  //       start: "top top",
  //       //   end: "bottom top",
  //       end: "+=200",
  //       pin: true, // fix block until smth happend
  //       //   scrub: true,
  //       markers: true,
  //     },
  //   });
  const tlPromo = gsap.timeline({});

  //   tlPromo
  //     .from(".promo__title span:first-child", {
  //       duration: 1.5,
  //       xPercent: 200,
  //       ease: "back.out(1.1)",
  //     })
  //     .from(
  //       ".promo__title span:last-child",
  //       {
  //         duration: 1.5,
  //         xPercent: -200,
  //         ease: "back.out(1.1)",
  //       },
  //       "<"
  //     );
  // another way to animate this element (better way) but first we need to add property in css style in spans like this :  transform: translateX(200%);
  tlPromo
    .to(".promo__title span:first-child", {
      duration: 1.5,
      x: 0,
      ease: "back.out(1.1)",
    })
    .to(
      ".promo__title span:last-child",
      {
        duration: 1.5,
        x: 0,
        ease: "back.out(1.1)",
      },
      "<"
    );

  const tlImages = gsap.timeline({
    scrollTrigger: {
      trigger: ".promo",
      start: "top top",
      end: "+=50%",
      // scrub: true,
      scrub: 2,
      pin: true,
      //   markers: true,
    },
  });
  tlImages
    .from(".promo__bottom", {
      duration: 1,
      opacity: 0,
      yPercent: 100,
    })
    .fromTo(
      ".promo__bottom img",
      { y: -80 },
      {
        y: 40,
      },
      "<"
    );

  const tlLines = gsap.timeline({});
  tlLines.to(".choose__wrap");

  // Mobile
  // code snippet copied from green sock documentation Simplistic desktop/mobile example
  let mediaAnimation = gsap.matchMedia();

  mediaAnimation.add("(min-width: 1025px)", () => {
    // desktop setup code here...
  });

  mediaAnimation.add("(max-width: 1024px)", () => {
    // mobile setup code here...
  });

  let end = "";
  let start = "";
  ScrollTrigger.matchMedia({
    "(min-width:768px)": function () {
      start = "top center";
      end = "bottom 20%";
      createScrollTriggers();
    },
    "(max-width:767px)": function () {
      start = "top 95%";
      end = "bottom center";
      createScrollTriggers();
    },
  });
}
