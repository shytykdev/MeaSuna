gsap.registerPlugin(ScrollTrigger);

// -------------------------
// --- SubPage Loader --- //
// -------------------------

function initSubLoader() {
  window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOMContentLoaded event fired");

    let windowWidth = window.innerWidth;
    console.log("Initial window width:", windowWidth);

    window.addEventListener("resize", function () {
      if (windowWidth !== window.innerWidth) {
        windowWidth = window.innerWidth;
        console.log("Window resized, new width:", windowWidth);
        // typeSplit.revert(); // Ensure typeSplit is defined or comment it out
        // runSplitType();     // Ensure runSplitType is defined or comment it out
      }
    });

    const subPageEase = "ease.inOut";

    const heroImage = gsap.timeline();
    heroImage.from('[elem="hero-image"]', {
      ease: subPageEase,
      scale: 1.2,
      delay: 0,
      duration: 1.875,
      opacity: 0,
    });
    console.log("Hero image animation initialized");

    const navDivider = gsap.timeline();
    navDivider.from('[elem="nav-divider"]', {
      ease: subPageEase,
      width: "0%",
      duration: "1.25",
      filter: "blur(2px)",
      ease: "power2.Out",
    });
    console.log("Nav Divider animation initialized");

    const heroTitle = gsap.timeline();
    $("[anim='letter']").each(function (index) {
      heroTitle.from($(this).find(".char"), {
        opacity: 0,
        stagger: { each: 0.025, from: "random" },
        duration: 1.25,
        force3D: true,
        filter: "blur(4px)",
        ease: subPageEase,
      });
    });
    console.log("Hero title animation initialized");

    $("[anim='letter-long']").each(function (index) {
      heroTitle.from($(this).find(".char"), {
        opacity: 0,
        stagger: { each: 0.2, from: "random" },
        duration: 2,
        force3D: true,
        filter: "blur(4px)",
        ease: subPageEase,
      });
    });
    console.log("Hero title animation initialized");

    const heroDescription = gsap.timeline();
    $("[anim='des-hero']").each(function (index) {
      heroDescription.from($(this).find(".word"), {
        opacity: 1,
        yPercent: 125,
        duration: 1.15,
        delay: 0.25,

        ease: subPageEase,
        force3D: true,
        stagger: { each: 0.01 },
      });
    });
    console.log("Hero description animation initialized");

    const heroButton = gsap.timeline();
    heroButton.from('[elem="hero-button"]', {
      y: "1rem",
      ease: subPageEase,
      scale: 1.05,
      filter: "blur(4px)",
      delay: 0.5,
      duration: 0.675,
      opacity: 0,
    });
    console.log("Hero button animation initialized");

    const heroDivider = gsap.timeline();
    heroDivider.from('[elem="hero-divider"]', {
      ease: subPageEase,
      height: "0%",
      delay: 0.65,
      duration: 1.5,
    });
    console.log("Hero divider animation initialized");

    const heroScrollIcon = gsap.timeline();
    heroScrollIcon.from('[elem="hero-scroll"]', {
      y: "1rem",
      scale: 1.1,
      filter: "blur(4px)",
      delay: 0,
      duration: 1.2,
      opacity: 0,
    });

    console.log("Hero scroll icon animation initialized");

    const heroScrollLabel = gsap.timeline();
    $("[anim='scroll-label']").each(function (index) {
      heroScrollLabel.from($(this).find(".char"), {
        opacity: 0,
        duration: 1.125,
        ease: subPageEase,
        force3D: true,
        stagger: { each: 0.05 },
      });
    });
    console.log("Hero scroll label animation initialized");
  });
}

initSubLoader();

// -------------------------
// --- Parallax Slider --- // --OFF
// -------------------------

// var swiperSlides = document.querySelectorAll(".swiper-slide.is--sroom");

// swiperSlides.forEach(function (swiperSlide) {
//   var images = swiperSlide.querySelectorAll("img");

//   images.forEach(function (image) {
//     image.setAttribute("data-swiper-parallax-x", "10%");
//   });
// });

// ---------------------------
// --- Track --Draggable --- // --OFF
// ---------------------------

// gsap.registerPlugin(Draggable);

// function initTrackDrag() {
//   if (window.innerWidth > 991) {
//     Draggable.create(".swiper.is--track", {
//       type: "x",
//       bounds: ".swiper-cover.is--track",
//       inertia: true, // Add inertia for smoothness
//     });
//   }
// }

// initTrackDrag();

// --------------------------
// --- Track --Desktop --- //
// -------------------------

let roll1, roll2;

function gallerySlide() {
  if (window.innerWidth > 991) {
    let direction = 1; // 1 = forward, -1 = backward scroll
    const desktopDuration = 15; // Duration in seconds for desktop
    const trackSelector = ".swiper-wrapper.is--track";
    const galleryV2Selector = ".swiper-wrapper.is--gallery-v2";

    let roll1, roll2;

    // Function to initialize gallery animations
    function initializeGalleryAnimations() {
      roll1 = roll(trackSelector, { duration: getDuration() });
      roll2 = roll(galleryV2Selector, { duration: getDuration() }, true);
    }

    // Function to reset and initialize everything
    function resetAndInitialize() {
      initializeGalleryAnimations();
    }

    // Initial setup
    resetAndInitialize();

    ScrollTrigger.create({
      onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1;
          gsap.to([roll1, roll2], { timeScale: direction, overwrite: true });
        }
      },
    });

    function roll(targets, vars, reverse) {
      const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 10);
        },
      });
      vars = vars || {};
      vars.ease = vars.ease || "none";

      const elements = gsap.utils.toArray(targets);
      if (elements.length === 0) return tl;

      elements.forEach((el) => {
        tl.to(el, { xPercent: reverse ? 50 : -50, ...vars }, 0);
      });

      return tl;
    }

    function getDuration() {
      return desktopDuration;
    }

    // Add hover event listeners to pause/resume animation
    const trackElements = document.querySelectorAll(".swiper-slide.is--track");

    trackElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        roll1.pause();
        roll2.pause();
      });

      element.addEventListener("mouseleave", () => {
        roll1.play();
        roll2.play();
      });

      // Add hover event listeners to all child elements
      element.querySelectorAll("*").forEach((child) => {
        child.addEventListener("mouseenter", () => {
          roll1.pause();
          roll2.pause();
        });

        child.addEventListener("mouseleave", () => {
          roll1.play();
          roll2.play();
        });
      });
    });
  } else {
    // For mobile screens
    const mobileDuration = 15; // Duration in seconds for mobile

    // Clear animations and reset styles for smaller screens
    gsap.set([".swiper-wrapper.is--track", ".swiper-wrapper.is--gallery-v2"], {
      clearProps: "all",
    });

    // Reinitialize animations with updated duration
    roll1 = roll(".swiper-wrapper.is--track", { duration: mobileDuration });
    roll2 = roll(
      ".swiper-wrapper.is--gallery-v2",
      { duration: mobileDuration },
      true
    );

    function roll(targets, vars, reverse) {
      const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 10);
        },
      });
      vars = vars || {};
      vars.ease = vars.ease || "none";

      const elements = gsap.utils.toArray(targets);
      if (elements.length === 0) return tl;

      elements.forEach((el) => {
        tl.to(el, { xPercent: reverse ? 50 : -50, ...vars }, 0);
      });

      return tl;
    }
  }
}

function checkViewportAndRunGallerySlide() {
  if (window.innerWidth > 991) {
    gallerySlide();
  }
}

window.addEventListener("load", checkViewportAndRunGallerySlide);
window.addEventListener("resize", checkViewportAndRunGallerySlide);

// -------------------------------
// --- Track Items --Desktop --- //
// -------------------------------

function initTrackDesk() {
  if (window.innerWidth > 991) {
    document.addEventListener("DOMContentLoaded", function () {
      const trackWrapper = document.querySelector(".swiper-wrapper.is--track");

      if (trackWrapper) {
        const slides = trackWrapper.querySelectorAll(".swiper-slide.is--track");

        slides.forEach((slide, index) => {
          slide.addEventListener("mouseenter", function () {
            // Remove previously added classes
            slides.forEach((s) => {
              s.classList.remove(
                "is--active",
                "swiper-slide-next",
                "swiper-slide-prev"
              );
            });

            // Add is--active class to the hovered element
            slide.classList.add("is--active");

            // Add swiper-slide-next class to the next element, if it exists
            if (index < slides.length - 1) {
              slides[index + 1].classList.add("swiper-slide-next");
            }

            // Add swiper-slide-prev class to the previous element, if it exists
            if (index > 0) {
              slides[index - 1].classList.add("swiper-slide-prev");
            }

            // Find parent track-section
            const trackSection = document.querySelector(".track-section");

            if (trackSection) {
              // Remove is--active class from all relevant child elements
              const trdesItems = trackSection.querySelectorAll(
                ".list.is--trdes .list-item.is--trdes"
              );
              const trnameItems = trackSection.querySelectorAll(
                ".list.is--trname .list-item.is--trname"
              );
              const xtrackItems = trackSection.querySelectorAll(
                ".list.is--xtrack .xtrack-name"
              );

              trdesItems.forEach((item) => item.classList.remove("is--active"));
              trnameItems.forEach((item) =>
                item.classList.remove("is--active")
              );
              xtrackItems.forEach((item) =>
                item.classList.remove("is--active")
              );

              // Calculate the adjusted index
              const adjustedIndex = index % trdesItems.length;

              // Add is--active class to the elements with the corresponding position
              if (trdesItems[adjustedIndex])
                trdesItems[adjustedIndex].classList.add("is--active");
              if (trnameItems[adjustedIndex])
                trnameItems[adjustedIndex].classList.add("is--active");
              if (xtrackItems[adjustedIndex])
                xtrackItems[adjustedIndex].classList.add("is--active");
            }
          });

          // Add mouseleave event listener to remove the classes
          slide.addEventListener("mouseleave", function () {
            slide.classList.remove("is--active");
            if (index < slides.length - 1) {
              slides[index + 1].classList.remove("swiper-slide-next");
            }
            if (index > 0) {
              slides[index - 1].classList.remove("swiper-slide-prev");
            }

            // Find parent track-section
            const trackSection = document.querySelector(".track-section");

            if (trackSection) {
              // Remove is--active class from all relevant child elements
              const trdesItems = trackSection.querySelectorAll(
                ".list.is--trdes .list-item.is--trdes"
              );
              const trnameItems = trackSection.querySelectorAll(
                ".list.is--trname .list-item.is--trname"
              );
              const xtrackItems = trackSection.querySelectorAll(
                ".list.is--xtrack .xtrack-name"
              );

              trdesItems.forEach((item) => item.classList.remove("is--active"));
              trnameItems.forEach((item) =>
                item.classList.remove("is--active")
              );
              xtrackItems.forEach((item) =>
                item.classList.remove("is--active")
              );
            }
          });
        });
      }
    });
  }
}

initTrackDesk();

window.addEventListener("resize", function () {
  initTrackDesk();
});

// -------------------------------
// --- Track Items --Mobile --- //
// -------------------------------

function initTrackMob() {
  if (window.innerWidth < 990) {
    document.addEventListener("DOMContentLoaded", function () {
      const trackWrapper = document.querySelector(".swiper-wrapper.is--track");

      if (trackWrapper) {
        const slides = trackWrapper.querySelectorAll(".swiper-slide.is--track");
        const totalSlides = slides.length;
        const groupSize = totalSlides / 2; // Assuming there are 8 slides, so groupSize will be 4
        let currentIndex = 0;
        let interval;

        const changeSlide = (index) => {
          // Calculate the indices for the active slides
          const firstActiveIndex = index % totalSlides;
          const secondActiveIndex = (index + groupSize) % totalSlides;

          // Remove previously added is--active classes
          slides.forEach((s) => s.classList.remove("is--active"));

          // Add is--active class to the current elements
          slides[firstActiveIndex].classList.add("is--active");
          slides[secondActiveIndex].classList.add("is--active");

          // Find parent track-section
          const trackSection = document.querySelector(".track-section");

          if (trackSection) {
            // Remove is--active class from all relevant child elements
            const trdesItems = trackSection.querySelectorAll(
              ".list.is--trdes .list-item.is--trdes"
            );
            const trnameItems = trackSection.querySelectorAll(
              ".list.is--trname .list-item.is--trname"
            );
            const xtrackItems = trackSection.querySelectorAll(
              ".list.is--xtrack .xtrack-name"
            );

            trdesItems.forEach((item) => item.classList.remove("is--active"));
            trnameItems.forEach((item) => item.classList.remove("is--active"));
            xtrackItems.forEach((item) => item.classList.remove("is--active"));

            // Calculate the adjusted index for each group
            const trdesIndex1 = firstActiveIndex % trdesItems.length;
            const trdesIndex2 = secondActiveIndex % trdesItems.length;
            const trnameIndex1 = firstActiveIndex % trnameItems.length;
            const trnameIndex2 = secondActiveIndex % trnameItems.length;
            const xtrackIndex1 = firstActiveIndex % xtrackItems.length;
            const xtrackIndex2 = secondActiveIndex % xtrackItems.length;

            // Add is--active class to the elements with the corresponding position
            if (trdesItems[trdesIndex1])
              trdesItems[trdesIndex1].classList.add("is--active");
            if (trdesItems[trdesIndex2])
              trdesItems[trdesIndex2].classList.add("is--active");
            if (trnameItems[trnameIndex1])
              trnameItems[trnameIndex1].classList.add("is--active");
            if (trnameItems[trnameIndex2])
              trnameItems[trnameIndex2].classList.add("is--active");
            if (xtrackItems[xtrackIndex1])
              xtrackItems[xtrackIndex1].classList.add("is--active");
            if (xtrackItems[xtrackIndex2])
              xtrackItems[xtrackIndex2].classList.add("is--active");
          }
        };

        const startAutoChange = () => {
          interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            changeSlide(currentIndex);
          }, 4000);
        };

        const resetAutoChange = () => {
          clearInterval(interval);
          startAutoChange();
        };

        // Initialize first slides as active
        changeSlide(currentIndex);
        startAutoChange();

        // Listen for scroll events to detect when the wrapper returns to its initial position
        trackWrapper.addEventListener("scroll", function () {
          if (trackWrapper.scrollLeft === 0) {
            currentIndex = 0;
            changeSlide(currentIndex);
            resetAutoChange();
          }
        });
      }
    });
  }
}

initTrackMob();

window.addEventListener("resize", function () {
  initTrackMob();
});

// ------------------------
// --- Swiper Sliders --- //
// ------------------------

function initReviewsDesk() {
  if (window.innerWidth > 100) {
    $(".slider-section").each(function (index) {
      const sliderInfo = new Swiper($(this).find(".swiper.is--gislide")[0], {
        speed: 500,
        loop: false,
        autoHeight: true,
        centeredSlides: true,
        followFinger: true,
        freeMode: false,
        slideToClickedSlide: false,
        slidesPerView: 1,
        spaceBetween: 16,
        rewind: false,
        parallax: false,
        effect: "fade",

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        // breakpoints: {
        //   // mobile landscape
        //   480: {
        //     slidesPerView: 1.1,
        //     spaceBetween: 12,
        //   },
        //   // tablet
        //   768: {
        //     slidesPerView: 1,
        //     spaceBetween: 14,
        //   },
        //   // desktop
        //   992: {
        //     slidesPerView: 1,
        //     spaceBetween: 16,
        //     centeredSlides: false,
        //   },
        // },
        navigation: {
          nextEl: $(this).find(".swiper-next")[0],
          prevEl: $(this).find(".swiper-prev")[0],
          disabledClass: "is--disabled",
        },
        pagination: {
          el: $(this).find(".swiper-bullets")[0],

          clickable: true,
        },
        slideActiveClass: "is--active",
        slideDuplicateActiveClass: "is--active",
      });

      const sliderMedia = new Swiper($(this).find(".swiper.is--gmslide")[0], {
        speed: 500,
        loop: false,
        autoHeight: true,
        centeredSlides: true,
        followFinger: true,
        freeMode: false,
        slideToClickedSlide: false,
        slidesPerView: 1,
        spaceBetween: 0,
        rewind: false,
        parallax: false,
        effect: "fade",
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },

        slideActiveClass: "is--active",
        slideDuplicateActiveClass: "is--active",
      });

      sliderMedia.controller.control = sliderInfo;
      sliderInfo.controller.control = sliderMedia;
    });
  }
}

initReviewsDesk();

window.addEventListener("resize", function () {
  initReviewsDesk();
});

// $(".swiper-cover.is--rooms").each(function (index) {
//   const roomSlider = new Swiper($(this).find(".swiper")[0], {
//     speed: 400,
//     loop: true,
//     autoHeight: false,
//     centeredSlides: true,
//     followFinger: true,
//     freeMode: false,
//     slideToClickedSlide: false,
//     slidesPerView: 1.5,
//     spaceBetween: 0,
//     rewind: false,
//     initialSlide: 0,
//     parallax: true,

//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },
//     breakpoints: {
//       // mobile landscape
//       480: {
//         slidesPerView: 2.25,
//         spaceBetween: 0,
//       },
//       // tablet
//       768: {
//         slidesPerView: 0,
//         spaceBetween: 2.25,
//       },
//       // desktop
//       992: {
//         spaceBetween: 0,
//         slidesPerView: 2,
//       },
//     },
//     navigation: {
//       nextEl: $(this).find(".swiper-next")[0],
//       prevEl: $(this).find(".swiper-prev")[0],
//       disabledClass: "is--disabled",
//     },
//     pagination: {
//       el: $(this).find(".swiper-bullets")[0],
//     },
//     slideActiveClass: "is--active",
//     slideDuplicateActiveClass: "is--active",
//   });
// });

$(".card.is--vcard").each(function (index) {
  const cardInfoPlan = new Swiper($(this).find(".swiper.is--vcard")[0], {
    speed: 500,
    loop: false,
    autoHeight: false,
    centeredSlides: false,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 1,
    spaceBetween: 0,
    rewind: false,
    parallax: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    //   breakpoints: {
    //     // mobile landscape
    //     480: {
    //       slidesPerView: 1.5,
    //       spaceBetween: 16,
    //     },
    //     // tablet
    //     768: {
    //       slidesPerView: 2.25,
    //       spaceBetween: 16,
    //     },
    //     // desktop
    //     992: {
    //       slidesPerView: 3,
    //       spaceBetween: 16,
    //       initialSlide: 1,
    //       centeredSlides: true,
    //     },
    //   },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is--disabled",
    },

    pagination: {
      el: $(this).find(".swiper-bullets")[0],
      clickable: true,
    },
    slideActiveClass: "is--active",
    slideDuplicateActiveClass: "is--active",
  });
});

$(".swiper-cover.is--gthumbs").each(function (index) {
  const galleryThumbs = new Swiper($(this).find(".swiper")[0], {
    speed: 500,
    loop: false,
    autoHeight: false,
    centeredSlides: true,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    rewind: false,
    parallax: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: "auto",
        spaceBetween: 0,
      },
      // tablet
      768: {
        slidesPerView: "auto",
        spaceBetween: 0,
      },
      // desktop
      992: {
        slidesPerView: "auto",
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is--disabled",
    },
    slideActiveClass: "is--active",
    slideDuplicateActiveClass: "is--active",
  });
});
