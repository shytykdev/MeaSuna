// -------------------
// --- Preloader --- //
// -------------------

window.addEventListener("DOMContentLoaded", (event) => {
  // run the code when window width changes
  let windowWidth = window.innerWidth;
  window.addEventListener("resize", function () {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth;
      typeSplit.revert();
      runSplitType();
    }
  });

  const counterAnimation = gsap.timeline();
  counterAnimation.to('[elem="loader-progress"]', {
    ease: "ease.inOut",
    textContent: 100,
    delay: 0.25,
    duration: 2,
    snap: { textContent: 1 },
    stagger: 1,
  });
  counterAnimation.to('[elem="loader-progress"]', {
    ease: "ease",
    delay: 0,
    duration: 0.25,
    opacity: 0,
  });

  const logoAnimation = gsap.timeline();

  logoAnimation.to('[elem="loader-logo"]', {
    delay: 1.75,
    duration: 0.75,
    width: "auto",
    x: "0vw",
    duration: 0.75,
    ease: "power4.inOut",
  });

  const lineAnimation = gsap.timeline();

  lineAnimation.to('[elem="loader-line"]', {
    delay: 0.25,
    duration: 2,
    height: "90%",
    ease: "power4.inOut",
  });
  lineAnimation.to('[elem="loader-line"]', {
    delay: 0,
    duration: 0.25,
    opacity: 0,
    ease: "ease",
  });

  // loader name animation

  const loaderName = gsap.timeline();

  // V1

  // $("[data='loader-name']").each(function (index) {
  //   loaderName.from($(this).find(".char"), {
  //     opacity: 1,
  //     yPercent: 125,
  //     duration: 1,
  //     delay: 0.25,
  //     ease: "power2.out",
  //     force3D: true,
  //     stagger: { each: 0.05 },
  //     scrollTrigger: {
  //       trigger: $(this),
  //       start: "top 85%",
  //       end: "top 30%",
  //       scrub: false,
  //     },
  //     yoyo: true,
  //     repeat: 1
  //   });
  // });

  //V2

  $("[data='loader-name']").each(function (index) {
    // Define the initial animation
    loaderName.from($(this).find(".char"), {
      opacity: 1,
      yPercent: 125,
      duration: 1.65,
      delay: 0.25,
      ease: "power4.out",
      force3D: true,
      stagger: { each: 0.05 },
      scrollTrigger: {
        trigger: $(this),
        start: "top 85%",
        end: "top 30%",
        scrub: false,
      },
    });

    // Define the reverse animation
    loaderName.to(
      $(this).find(".char"),
      {
        opacity: 0,
        yPercent: 100,
        duration: 2,
        delay: 0,
        ease: "ease",
        force3D: true,
        stagger: { each: 0.025 },
      },
      "+=2.5"
    ); // Adjust the delay between animations as needed
  });

  // page load animation
  let homeLoadTl = gsap.timeline();

  homeLoadTl
    .to('[load-image="1"]', {
      left: "0vw",
      top: "0vw",
      scale: 1,
      delay: 0.3,
      opacity: 1,
      duration: 0.6,
      ease: "power4.inOut",
    })
    .to(
      '[load-image="2"]',
      {
        left: "0vw",
        top: "0vw",
        scale: 1,
        delay: 0.05,
        opacity: 1,
        duration: 0.6,
        ease: "power4.inOut",
      },
      "-=0.4"
    )

    .to(
      '[load-image="3"]',
      {
        left: "0vw",
        top: "0vw",
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power4.inOut",
      },
      "-=0.4"
    )
    .to(
      '[load-image="4"]',
      {
        left: "0vw",
        top: "0vw",
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power4.inOut",
      },
      "-=0.4"
    )
    .to(
      '[load-image="6"]',
      {
        left: "0vw",
        top: "0vw",
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power4.inOut",
      },
      "-=0.4"
    )
    .to(
      '[load-image="7"]',
      {
        left: "0vw",
        top: "0vw",
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power4.inOut",
      },
      "-=0.4"
    )
    // .to(
    //   '[elem="loader-imgs"]',
    //   {
    //     height: "0rem",
    //     delay: 0.5,
    //     width: "0rem",
    //     duration: 0.5,
    //     ease: "ease.inOut",
    //   },
    //   "-=0.4"
    // )

    .to('[elem="blank"]', {
      width: "auto",
      x: "0vw",
      delay: 1,
      duration: 0.75,
      ease: "ease",
      onComplete: () => {
        $(".loader").animate({ opacity: 0 }, 400, function () {
          $(this).css("display", "none");
        });
      },
    })

    .from(
      '[elem="hero-image"]',
      {
        delay: 0.5,
        duration: 1,
        height: "110vh",
        width: "110vw",
        // stagger: {
        //   each: 0.05,
        // },
        ease: "ease.inOut",
      },
      "<25%"
    )
    .to(
      '[elem="navbar"]',
      {
        delay: 0,
        color: "#fff",
        // stagger: {
        //   each: 0.05,
        // },
        ease: "ease.inOut",
      },
      "<25%"
    )
    .from(
      '[elem="nav-divider"]',
      {
        width: "0%",
        duration: "1.75",
        filter: "blur(2px)",
        ease: "power2.Out",
      },
      "<45%"
    )
    .from(
      '[anim="hero"] .char',
      // ".hero-h1.word",
      {
        opacity: 0,
        stagger: { each: 0.025, from: "random" },
        duration: 1.125,
        force3D: true,
        filter: "blur(4px)",
        ease: "ease.inOut",
      },
      "<45%"
    )
    .from(
      '[anim="des-hero"] .word',
      // ".hero-h1.word",
      {
        yPercent: 125,
        opacity: 0,
        duration: 0.75,
        stagger: {
          each: 0.0,
        },
        ease: "ease",
      },
      "<45%"
    )
    .from(
      '[elem="hero-button"]',
      // ".hero-h1.word",
      {
        y: "1rem",
        ease: "ease",
        scale: 1.05,
        filter: "blur(4px)",
        delay: 0.1,
        duration: 0.75,
        opacity: 0,
      },
      "<45%"
    )
    .from(
      '[data="hero-line"]',
      // ".hero-h1.word",
      {
        height: "0%",
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      },
      "<45%"
    )
    .from(
      '[data="scroll-icon"]',
      // ".hero-h1.word",
      {
        yPercent: 20,
        opacity: 0,
        duration: 0.8,
        ease: "ease",
      },
      "<45%"
    )
    .from(
      '[anim="scroll-label"] .char',
      // ".hero-h1.word",
      {
        opacity: 0,
        duration: 1,
        ease: "ease",
        force3D: true,
        stagger: { each: 0.05 },
      },
      "<45%"
    );

  // add paralllax to the hero image on scroll
  // let heroImageTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '[elem="hero-img"]',
  //     scrub: true,
  //     start: "top",
  //     end: "bottom",
  //   },
  // });

  // heroImageTl.to('[elem="hero-img"]', {
  //   scale: 1.15,
  //   ease: "none",
  // });
});

// ------------------------
// --- Ongoing --- //
// ------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   const navBar = document.querySelector('[elem="nav"]');
//   const logo = document.querySelector('[elem="logo-path"]');
//   const SCROLL_THRESHOLD = 600;

//   window.addEventListener("scroll", handleScroll);

//   function handleScroll() {
//     if (window.pageYOffset > SCROLL_THRESHOLD) {
//       applyScrollStyles();
//     } else {
//       resetStyles();
//     }
//   }

//   function applyScrollStyles() {
//     gsap.to(navBar, { backgroundColor: "#4f4f4d", duration: 0.25 });
//     gsap.to(logo, { color: "black", scale: 0.8, duration: 0.25 });
//   }

//   function resetStyles() {
//     gsap.to(navBar, { backgroundColor: "transparent", duration: 0.25 });
//     gsap.to(logo, { color: "currentColor", scale: 1, duration: 0.25 });
//   }

//   handleScroll();
// });
