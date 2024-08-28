// -------------------------
// --------- Header ----- //
// -------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Check viewport width
  if (window.innerWidth > 100) {
    const navBar = document.querySelector('[data="nav"]');
    const logo = document.querySelector('[data="logo"]');
    const menuLines = document.querySelectorAll('[data="menu-line"]');
    const navButton = document.querySelectorAll('[data="nav-button"]');
    const navButtonBg = document.querySelectorAll('[data="nav-button-bg"]');

    // Calculate equivalent pixel value for 200vh
    const SCROLL_THRESHOLD = 10;

    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
      if (window.pageYOffset > SCROLL_THRESHOLD) {
        applyScrollStyles();
      } else {
        resetStyles();
      }
    }

    function applyScrollStyles() {
      gsap.to(navBar, {
        backgroundColor: "#FFFFFF",
        color: "#000D19",
        duration: 0.25,
      });
      gsap.to(logo, {
        opacity: 1,
        ease: "ease",
        color: "#000D19",
        duration: 0.2,
      });
      gsap.to(menuLines, {
        backgroundColor: "#000D19",
        duration: 0.25,
      });
      gsap.to(navButton, {
        backgroundColor: "#000D19",
        duration: 0.25,
      });
      gsap.to(navButtonBg, {
        backgroundColor: "#ffffff",
        duration: 0.25,
      });
    }

    function resetStyles() {
      gsap.to(navBar, {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        color: "#ffffff",
        duration: 0.25,
      });
      gsap.to(logo, {
        opacity: 1,
        ease: "ease",
        color: "#ffffff",
        duration: 0.2,
      });
      gsap.to(menuLines, {
        backgroundColor: "#ffffff",
        duration: 0.25,
      });
      gsap.to(navButton, {
        backgroundColor: "#ffffff",
        duration: 0.25,
      });
      gsap.to(navButtonBg, {
        backgroundColor: "#000D19",
        duration: 0.25,
      });
    }

    handleScroll();
  }
});

// ------------------------
// --- Split Text ------ //
// ------------------------

(function () {
  window.addEventListener("DOMContentLoaded", function () {
    let typeSplit;

    function runSplitType() {
      typeSplit = new SplitType("[split-type]", {
        types: "lines, words, chars",
        tagName: "span",
      });
    }

    runSplitType();

    // Link timelines to scroll position
    function createScrollTrigger(triggerElement, timeline) {
      // Reset tl when scroll out of view past bottom of screen
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        },
      });
      // Play tl when scrolled into view (60% from top of screen)
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 20%",
        onEnter: () => timeline.play(),
      });
    }

    // function shuffleArray(array) {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //   }
    // }
    $("[elem='navbar']").each(function (index, element) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "center 0%",
          end: "bottom 0%",
          scrub: true,
        },
      });
      tl.to(element, {
        color: "#4f4f4d",
        delay: 0.75,
        ease: "linear",
        force3D: true,
        toggleActions: "play none reverse none",
      });
    });

    // $("[anim='letter']").each(function (index) {
    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: $(this),
    //       start: "top 90%",
    //       end: "top 30%",
    //       scrub: false,
    //     },
    //   });
    //   tl.from($(this).find(".char"), {
    //     opacity: 0,
    //     duration: 1.15,
    //     stagger: { each: 0.025, from: "random" },
    //     force3D: true,
    //     ease: "ease",
    //   });
    // });

    $("[anim='sub']").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 90%",
          end: "top 30%",
          scrub: false,
        },
      });
      tl.from($(this).find(".char"), {
        opacity: 0,
        duration: 1.15,
        ease: "easeOut",
        force3D: true,
        stagger: { each: 0.02 },
      });
    });

    $("[anim='cta']").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 45%",
          end: "top 20%",
          scrub: true,
        },
      });
      tl.from($(this).find(".char"), {
        opacity: 0.1,
        duration: 1.15,
        ease: "easeOut",
        force3D: true,
        stagger: { each: 0.02 },
      });
    });

    $("[anim='des']").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 85%",
          end: "top 30%",
          scrub: false,
        },
      });
      tl.from($(this).find(".word"), {
        opacity: 1,
        yPercent: 125,
        duration: 1.65,
        delay: 0.25,
        ease: "power4.out",
        force3D: true,
        stagger: { each: 0.01 },
      });
    });

    // Value Slider Animation --On hover
    // $(document).ready(function () {
    //   if (window.innerWidth > 992) {
    //     $(".swiper-slide.is--vitm").hover(
    //       function () {
    //         // Mouse enter
    //         $(this)
    //           .find("[anim='value-sub']")
    //           .each(function (index) {
    //             let tl = gsap.timeline({
    //               scrollTrigger: {
    //                 trigger: $(this),
    //                 start: "top 85%",
    //                 end: "top 30%",
    //                 scrub: false,
    //               },
    //             });
    //             tl.from($(this).find(".char"), {
    //               opacity: 0,
    //               duration: 1,
    //               delay: 0.1,
    //               ease: "ease.inOut",
    //               force3D: true,
    //               stagger: { each: 0.025 },
    //             });
    //           });

    //         $(this)
    //           .find("[anim='value-description']")
    //           .each(function (index) {
    //             let tl = gsap.timeline({
    //               scrollTrigger: {
    //                 trigger: $(this),
    //                 start: "top 85%",
    //                 end: "top 30%",
    //                 scrub: false,
    //               },
    //             });
    //             tl.from($(this).find(".word"), {
    //               opacity: 1,
    //               yPercent: 125,
    //               duration: 0.875,
    //               delay: 0,
    //               ease: "ease.inOut",
    //               force3D: true,
    //               stagger: { each: 0.01 },
    //             });
    //           });
    //       },
    //       function () {
    //         // Mouse leave
    //       }
    //     );
    //   }
    // });

    $("[anim='title']").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 90%",
          end: "top 30%",
          scrub: false,
        },
      });
      tl.from($(this).find(".char"), {
        opacity: 0,
        stagger: { each: 0.025, from: "random" },
        duration: 1,
        force3D: true,
        filter: "blur(4px)",
        ease: "ease.inOut",
      });
    });

    $("[anim='label']").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 90%",
          end: "top 30%",
          scrub: false,
        },
      });
      tl.from($(this).find(".word"), {
        opacity: 0.25,
        yPercent: 135,
        duration: 1.25,
        delay: 0.2,
        ease: "ease",
        force3D: true,
        stagger: { each: 0.025 },
      });
    });

    $("[anim='title-review']").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "[anim='title-review']",
          start: "top 25%",
          end: "top 25%",
          scrub: false,
        },
      });
      tl.from($(this).find(".char"), {
        opacity: 0,
        stagger: { each: 0.025, from: "random" },
        duration: 1,
        force3D: true,
        filter: "blur(4px)",
        ease: "ease.inOut",
      });
    });

    $("[anim='name']").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 70%",
          end: "top 30%",
          scrub: false,
        },
      });
      tl.from($(this).find(".char"), {
        opacity: 0,
        stagger: { each: 0.08, from: "random" },
        duration: 1.5,
        scale: 0.95,
        force3D: true,
        filter: "blur(7px)",
        ease: "ease.inOut",
      });
    });
  });
})();

(function ($) {
  $(document).ready(function () {
    if (window.innerWidth > 992) {
      $(".swiper-slide.is--vitm").hover(
        function () {
          // Mouse enter
          $(this)
            .find("[anim='value-sub']")
            .each(function () {
              // Clear any previous timeline
              if ($(this).data("timeline")) {
                $(this).data("timeline").kill();
              }

              let tl = gsap.timeline();

              tl.fromTo(
                $(this).find(".char"),
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 1,
                  delay: 0.1,
                  ease: "ease.inOut",
                  force3D: true,
                  stagger: { each: 0.025 },
                }
              );

              // Store the timeline in the element's data
              $(this).data("timeline", tl);
            });

          $(this)
            .find("[anim='value-description']")
            .each(function () {
              // Clear any previous timeline
              if ($(this).data("timeline")) {
                $(this).data("timeline").kill();
              }

              let tl = gsap.timeline();

              tl.fromTo(
                $(this).find(".word"),
                { opacity: 0, yPercent: 125 },
                {
                  opacity: 1,
                  yPercent: 0,
                  duration: 0.875,
                  delay: 0,
                  ease: "ease.inOut",
                  force3D: true,
                  stagger: { each: 0.01 },
                }
              );

              // Store the timeline in the element's data
              $(this).data("timeline", tl);
            });
        },
        function () {
          // Mouse leave
          $(this)
            .find("[anim='value-sub']")
            .each(function () {
              // Clear the timeline on mouse leave
              if ($(this).data("timeline")) {
                $(this).data("timeline").kill();
                $(this).data("timeline", null);
              }
            });

          $(this)
            .find("[anim='value-description']")
            .each(function () {
              // Clear the timeline on mouse leave
              if ($(this).data("timeline")) {
                $(this).data("timeline").kill();
                $(this).data("timeline", null);
              }
            });
        }
      );
    }
  });
})(jQuery);

// Gallery Section --Items --ALL
gsap.to(".gallery-item.is--v1", {
  duration: 0.75,
  opacity: 0,
  delay: 1,
  ease: "ease",
  scrollTrigger: {
    trigger: ".gallery-content",
    start: "top top",
    end: "+=100%",
    scrub: true,
  },
});

gsap.to(".gallery-item.is--v2", {
  duration: 0.75,
  opacity: 0,
  delay: 1,
  ease: "ease",
  scrollTrigger: {
    trigger: ".gallery-content",
    start: "top top",
    end: "+=100%",
    scrub: true,
  },
});

gsap.to(".gallery-item.is--v3.is--up", {
  width: "100vw",
  height: "100vh",
  duration: 0.75,
  opacity: 1,
  delay: 1,
  ease: "ease",
  scrollTrigger: {
    trigger: ".gallery-content",
    start: "top top",
    end: "+=125%",
    scrub: true,
  },
});

gsap.to(".gallery-item.is--v4", {
  duration: 0.75,
  opacity: 0,
  delay: 1,
  ease: "ease",
  scrollTrigger: {
    trigger: ".gallery-content",
    start: "top top",
    end: "+=100%",
    scrub: true,
  },
});

gsap.to(".gallery-item.is--v5", {
  duration: 0.75,
  opacity: 0,
  delay: 1,
  ease: "ease",
  scrollTrigger: {
    trigger: ".gallery-content",
    start: "top top",
    end: "+=100%",
    scrub: true,
  },
});

gsap.to(".gallery-item.is--v6", {
  duration: 0.75,
  opacity: 0,
  delay: 1,
  ease: "ease",
  scrollTrigger: {
    trigger: ".gallery-content",
    start: "top top",
    end: "+=100%",
    scrub: true,
  },
});

// ---------------------------------
// --- Review Section Animation--- //
// ---------------------------------

gsap.from(".background.is--review", {
  duration: 0.75,
  opacity: 0,
  delay: 0.5,
  ease: "ease",
  scrollTrigger: {
    trigger: ".background.is--review",
    start: "top top",
    end: "+=100%",
    scrub: true,
  },
});

gsap.from(".line.is--review", {
  duration: 1.5,
  width: "0vw",
  opacity: 1,
  delay: 0.25,
  ease: "ease.inOut",
  scrollTrigger: {
    trigger: ".line.is--review",
    start: "top 25%",
    end: "top 25%",
    scrub: false,
  },
});

gsap.from(".line.is--review-v2", {
  duration: 2.35,
  width: "0vw",
  opacity: 1,
  delay: 0,
  ease: "ease",
  scrollTrigger: {
    trigger: ".line.is--review-v2",
    start: "top 28%",
    end: "top 25%",
    scrub: false,
  },
});

// gsap.from(".reviews-content", {
//   duration: 1.35,
//   delay: 0,
//   opacity: 0,
//   ease: "ease",
//   scrollTrigger: {
//     trigger: ".reviews-content",
//     start: "top 28%",
//     end: "top 25%",
//     scrub: false,
//   },
// });

// -------------------
// --- Nav Items--- //
// ------------------

$(document).ready(function () {
  $(".footer-nav").hover(
    function () {
      $(".footer-nav").not(this).css("opacity", 0.5);
    },
    function () {
      $(".footer-nav").css("opacity", 1);
    }
  );
});

$(document).ready(function () {
  $(".social-item").hover(
    function () {
      $(".social-item").not(this).css("opacity", 0.5);
    },
    function () {
      $(".social-item").css("opacity", 1);
    }
  );
});

// --------------------------
// --- HZ Scroll Trigger--- //
// --------------------------

gsap.from('[track="hero-line"]', {
  width: "0%",
  duration: 1,
  ease: "ease",
  scrollTrigger: {
    trigger: '[track="hero-line"]',
    start: "top 90%",
    end: "top 30%",
    scrub: false,
  },
});

gsap.from(".hz-scroll", {
  opacity: 0,
  ease: "ease",
  scrollTrigger: {
    trigger: ".horizontal-section",
    start: "top top",
    end: "bottom 0%",
    toggleActions: "play pause resume reset",
    scrub: false,
  },
});

gsap.from(".scroll-line", {
  width: "0%",
  duration: 1,
  opacity: 0,
  delay: 0,
  ease: "power.inOut",
  scrollTrigger: {
    trigger: ".horizontal-section",
    start: "top top",
    end: "bottom 0%",
    scrub: false,
    toggleActions: "play pause resume reset",
  },
});

gsap.to(".hz-scroll", {
  opacity: 0,
  ease: "ease",
  duration: 0.75,
  dealy: 0.7,
  scrollTrigger: {
    trigger: ".plan-section",
    start: "top top",
    end: "bottom 0%",
    toggleActions: "play pause resume reset",
    scrub: false,
  },
});

gsap.to(".scroll-line", {
  width: "0%",
  duration: 1,
  opacity: 0,
  ease: "power.inOut",
  scrollTrigger: {
    trigger: ".plan-section",
    start: "top top",
    toggleActions: "play pause resume reset",
    end: "bottom 0%",
    scrub: false,
  },
});

gsap.to(".scroll_item-wrapper", {
  left: "94%",
  ease: "power.inOut",
  scrollTrigger: {
    trigger: ".hz-content",
    start: "top top",
    end: "bottom 0%",
    scrub: true,
  },
});

// -----------------------
// --- Extra Title Type Animations--- //
// -----------------------

// $(document).ready(function () {
//   console.log("Document is ready.");

//   // Register ScrollTrigger plugin
//   if (gsap && gsap.registerPlugin) {
//     gsap.registerPlugin(ScrollTrigger);
//     console.log("GSAP and ScrollTrigger are registered.");
//   } else {
//     console.error("GSAP or ScrollTrigger failed to load.");
//     return;
//   }

//   // Check for elements with anim="letter"
//   const elements = $("[anim='letter']");
//   if (elements.length > 0) {
//     console.log("Found elements with anim='letter':", elements.length);
//   } else {
//     console.error("No elements found with anim='letter'.");
//     return;
//   }

//   elements.each(function (index) {
//     console.log("Processing element:", this, "Index:", index);

//     // Initialize GSAP timeline
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: $(this),
//         start: "top 90%",
//         end: "top 30%",
//         scrub: false,
//         onEnter: () => console.log(`Entering element ${index}`),
//         onLeave: () => console.log(`Leaving element ${index}`),
//         onEnterBack: () => console.log(`Entering back element ${index}`),
//         onLeaveBack: () => console.log(`Leaving back element ${index}`),
//       },
//     });

//     const chars = $(this).find(".char");
//     if (chars.length > 0) {
//       console.log("Found .char elements:", chars.length);
//     } else {
//       console.error("No .char elements found within:", this);
//     }

//     // Animation for characters
//     tl.from(chars, {
//       opacity: 0,
//       stagger: { each: 0.05, from: "random" },
//       duration: 2,
//       force3D: true,
//       ease: "ease",
//       onStart: () => console.log(`Animation started for element ${index}`),
//       onComplete: () => console.log(`Animation completed for element ${index}`),
//     });
//   });
// });

// ----------------------
// --- Global Gsap --- //
// ----------------------

gsap.from('[video="blur-bg"]', {
  opacity: 0,
  duration: 0.65,
  ease: "ease",
  scrollTrigger: {
    trigger: '[video="blur-bg"]',
    start: "top 90%",
    end: "top 30%",
    scrub: false,
  },
});

gsap.to('[video="component"]', {
  duration: 1,
  ease: "ease.inOut",
  scale: 1.075,
  scrollTrigger: {
    trigger: '[video="component"]',
    start: "top 90%",
    end: "top 5%",
    scrub: true,
  },
});
