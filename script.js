// --------------------------------
// --- Start With Top Posiion --- //
// --------------------------------

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

// ------------------------
// --- Remove Branding --- //
// ------------------------

function removeComments() {
  // Loop through document child nodes
  for (let i = 0; i < document.childNodes.length; i++) {
    const node = document.childNodes[i];
    if (node.nodeType === Node.COMMENT_NODE) {
      document.removeChild(node);
    }
  }
}

removeComments();

setTimeout(function () {
  removeComments();
}, 500);

document.addEventListener("DOMContentLoaded", function () {
  cleanHTMLTags();
});

function cleanHTMLTags() {
  var elements = document.querySelectorAll("[data-wf-domain], [data-wf-page]");

  elements.forEach(function (element) {
    element.removeAttribute("data-wf-domain");
    element.removeAttribute("data-wf-page");
  });
}

// --------------------------------
// --- Remove Link Information --- //
// ---------------------------------

// var aTags = document.querySelectorAll("span[data-href]");

// for (var i = 0; i < aTags.length; i++) {
//   var aTag = aTags[i];
//   aTag.addEventListener("click", function (e) {
//     var ele = e.target;
//     window.location.replace(ele.getAttribute("data-href"));
//   });
// }

// ------------------------
// --- Smooth Scroll --- //
// ------------------------

let lenis;

if (Webflow.env("editor") === undefined) {
  lenis = new Lenis({
    lerp: 0.25,
    wheelMultiplier: 0.95,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

const scrollBtn = document.querySelector(".footer_bottom_back-button");
const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

if (scrollBtn) {
  scrollBtn.addEventListener("click", toTop);
}

document.addEventListener("click", (event) => {
  const stopScrollElement = event.target.closest(".stop-scroll");
  const runScrollElement = event.target.closest(".run-scroll");
  const bookingPopupOpen = event.target.closest('[book-popup="open"]');
  const bookingPopupClose = event.target.closest('[book-popup="close"]');
  const contactPopupOpen = event.target.closest('[contact-popup="open"]');
  const contactPopupClose = event.target.closest('[contact-popup="close"]');

  if (stopScrollElement || bookingPopupOpen || contactPopupOpen) {
    lenis.stop();
  } else if (runScrollElement || bookingPopupClose || contactPopupClose) {
    lenis.start();
  }
});

$(document).ready(function () {
  lenis.start();
});

// ------------------------
// --- Swiper Slider --- //
// ------------------------
if ($(window).width() < 991) {
  $(".values-section").each(function (index) {
    const cardInfoValue = new Swiper($(this).find(".swiper.is--vitm")[0], {
      speed: 400,
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
        el: $(this).find(".swiper-bullets.is--pitm")[0],
        clickable: true,
      },
      slideActiveClass: "is--active",
      slideDuplicateActiveClass: "is--active",
    });
    const cardImgValue = new Swiper($(this).find(".swiper.is--vimg")[0], {
      speed: 400,
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
      effect: "fade",
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      slideActiveClass: "is--active",
      slideDuplicateActiveClass: "is--active",
    });

    cardImgValue.controller.control = cardInfoValue;
    cardInfoValue.controller.control = cardImgValue;
  });
}

$(document).ready(function () {
  function triggerClick(attribute) {
    var elements = $('[sw-value="' + attribute + '"]');
    var event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    elements.each(function () {
      this.dispatchEvent(event);
    });
  }

  $('[sw-value="prevf"]').click(function () {
    triggerClick("prevr");
  });

  $('[sw-value="nextf"]').click(function () {
    triggerClick("nextr");
  });
});

$(".card.is--plan-sm").each(function (index) {
  // const cardInfoPlan = new Swiper($(this).find(".swiper.is--pitm")[0], {
  //   speed: 500,
  //   loop: true,
  //   autoHeight: false,
  //   centeredSlides: false,
  //   followFinger: true,
  //   freeMode: false,
  //   slideToClickedSlide: false,
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   rewind: false,
  //   parallax: false,
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },
  //   //   breakpoints: {
  //   //     // mobile landscape
  //   //     480: {
  //   //       slidesPerView: 1.5,
  //   //       spaceBetween: 16,
  //   //     },
  //   //     // tablet
  //   //     768: {
  //   //       slidesPerView: 2.25,
  //   //       spaceBetween: 16,
  //   //     },
  //   //     // desktop
  //   //     992: {
  //   //       slidesPerView: 3,
  //   //       spaceBetween: 16,
  //   //       initialSlide: 1,
  //   //       centeredSlides: true,
  //   //     },
  //   //   },
  //   navigation: {
  //     nextEl: $(this).find(".swiper-next")[0],
  //     prevEl: $(this).find(".swiper-prev")[0],
  //     disabledClass: "is--disabled",
  //   },

  //   pagination: {
  //     el: $(this).find(".swiper-bullets.is--pitm")[0],
  //   },
  //   slideActiveClass: "is--active",
  //   slideDuplicateActiveClass: "is--active",
  // });

  const cardImgPlan = new Swiper($(this).find(".swiper.is--pimg")[0], {
    speed: 400,
    loop: true,
    autoHeight: false,
    centeredSlides: false,
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
    // autoplay: {
    //   delay: 4500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is--disabled",
    },
    pagination: {
      el: $(this).find(".swiper-bullets.is--pitm")[0],
      clickable: true,
    },
    slideActiveClass: "is--active",
    slideDuplicateActiveClass: "is--active",
  });

  // cardImgPlan.controller.control = cardInfoPlan;
  // cardInfoPlan.controller.control = cardImgPlan;
});

$(".card.is--plan").each(function (index) {
  // const cardInfoPlan = new Swiper($(this).find(".swiper.is--pitm")[0], {
  //   speed: 500,
  //   loop: true,
  //   autoHeight: false,
  //   centeredSlides: false,
  //   followFinger: true,
  //   freeMode: false,
  //   slideToClickedSlide: false,
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   rewind: false,
  //   parallax: false,
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },
  //   //   breakpoints: {
  //   //     // mobile landscape
  //   //     480: {
  //   //       slidesPerView: 1.5,
  //   //       spaceBetween: 16,
  //   //     },
  //   //     // tablet
  //   //     768: {
  //   //       slidesPerView: 2.25,
  //   //       spaceBetween: 16,
  //   //     },
  //   //     // desktop
  //   //     992: {
  //   //       slidesPerView: 3,
  //   //       spaceBetween: 16,
  //   //       initialSlide: 1,
  //   //       centeredSlides: true,
  //   //     },
  //   //   },
  //   navigation: {
  //     nextEl: $(this).find(".swiper-next")[0],
  //     prevEl: $(this).find(".swiper-prev")[0],
  //     disabledClass: "is--disabled",
  //   },

  //   pagination: {
  //     el: $(this).find(".swiper-bullets.is--pitm")[0],
  //   },
  //   slideActiveClass: "is--active",
  //   slideDuplicateActiveClass: "is--active",
  // });

  const cardImgPlan = new Swiper($(this).find(".swiper.is--pimg")[0], {
    speed: 450,
    loop: true,
    autoHeight: false,
    centeredSlides: false,
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
    // autoplay: {
    //   delay: 4500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is--disabled",
    },
    pagination: {
      el: $(this).find(".swiper-bullets.is--pitm")[0],
      clickable: true,
    },
    slideActiveClass: "is--active",
    slideDuplicateActiveClass: "is--active",
  });

  // cardImgPlan.controller.control = cardInfoPlan;
  // cardInfoPlan.controller.control = cardImgPlan;
});

$(".swiper-cover.is--review").each(function (index) {
  const reviewsPlans = new Swiper($(this).find(".swiper.is--reviews")[0], {
    speed: 850,
    loop: true,
    autoHeight: false,
    centeredSlides: false,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 1.1,
    spaceBetween: 16,
    rewind: false,
    parallax: false,
    // effect: "fade",
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      // tablet
      768: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      // desktop
      992: {
        slidesPerView: 1,
        spaceBetween: 22,
      },
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is--disabled",
    },

    pagination: {
      el: $(this).find(".swiper-bullets.is--pitm")[0],
      clickable: true,
    },
    slideActiveClass: "is--active",
    slideDuplicateActiveClass: "is--active",
  });
});

// -----------------------------------
// --- Horizontal Scroll Section --- //
// -----------------------------------

$(document).ready(function () {});

let learnMoreScrollPosition = window.innerWidth;

let globalTrackWidth = 0;

function setTrackHeights() {
  $(".hz-content").each(function (index) {
    let trackWidth = $(this).find(".hz-film").outerWidth();
    $(this).height(trackWidth);
  });
}

//set designer-friendly overflow to hidden
$(".hz-frame").each(function (index) {
  $(this).css("overflow", "hidden");
});

//reset tracks on window resize
setTrackHeights();

window.addEventListener("resize", function () {
  setTrackHeights();
});

// Handle the dynamic image modal...

$('[data-dynamic-image="true"]').click(function () {
  loadImage($(this).attr("src"));
});

$(".dynamic-image-modal-close").click(function () {
  $(".dynamic-image-modal").css("display", "none");
});

$(document).on("keydown", function (event) {
  if (event.key == "Escape") {
    $(".dynamic-image-modal").css("display", "none");
  }
});

function loadImage(imageURL) {
  $(".dynamic-image").prop("srcset", `${imageURL}`);
  $(".dynamic-image-modal").css("display", "flex");
  console.log(imageURL);
}

console.log("adding polish...");

let mm = gsap.matchMedia(),
  breakPoint = 100;

mm.add(
  {
    // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
    isDesktop: `(min-width: ${breakPoint}px)`,
    isMobile: `(max-width: ${breakPoint - 1}px)`,
    reduceMotion: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
    let { isDesktop, isMobile, reduceMotion } = context.conditions;

    // HORIZONTAL SCROLL

    const tlMain = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hz-content",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
      .to(".hz-film", {
        x: () => `${-($(".hz-film").width() - window.innerWidth)}`,
        ease: "none",
      });

    if (isDesktop) {
      // SCALE EFFECTS
      $("[data-scale-image-wrapper]").each(function () {
        gsap.from($(this).find("[data-scale-image]"), {
          scrollTrigger: {
            trigger: $(this),
            start: "left right",
            end: "right left",
            scrub: true,
            containerAnimation: tlMain,
          },
          scale: 1.7,
          ease: "none",
        });
      });

      // PARALAX ELEMENTS

      $("[data-parallax-element-wrapper]").each(function () {
        if (
          $(this).attr("data-parallax-lag") === "false" ||
          $(this).attr("data-parallax-lag") === undefined
        ) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: $(this),
                start: "left right",
                end: "right left",
                scrub: true,
                containerAnimation: tlMain,
              },
            })
            .fromTo(
              $(this).find('[data-parallax-element="true"]'),
              {
                x: `${
                  50 * $(this).attr("data-parallax-element-speed-modifier")
                }%`,
                ease: "none",
              },
              {
                x: `-${
                  50 * $(this).attr("data-parallax-element-speed-modifier")
                }%`,
                ease: "none",
              }
            );
        } else {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: $(this),
                start: "left right",
                end: "right left",
                scrub: true,
                containerAnimation: tlMain,
              },
            })
            .to($(this).find('[data-parallax-element="true"]'), {
              x: `${
                100 * $(this).attr("data-parallax-element-speed-modifier")
              }%`,
              ease: "none",
            });
        }
      });

      // HEADING COMPONENT FADE IN

      $("[data-fade-in-wrapper]").each(function () {
        gsap.from($(this).find("[data-fade-in-element='true']"), {
          scrollTrigger: {
            trigger: $(this),
            start: isDesktop ? "center right" : "top bottom",
            containerAnimation: tlMain,
          },
          opacity: 0,
          // scale: 0.93,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.21,
        });
      });

      // HOME LIST ITEMS FADE IN
      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: "[data-list-fade-in-wrapper]",
      //       start: "left right",
      //       end: "right left",
      //       containerAnimation: tlMain,
      //       // markers: true,
      //       // scrub: true,
      //     },
      //   })
      //   .from("[data-list-fade-in-element]", {
      //     opacity: 0,
      //     stagger: 0.11,
      //     duration: 1,
      //     ease: "power1.inOut",
      //   });

      // END IF ELSE
    }

    // HERO FADE IN

    $("[data-hero-fade-in-wrapper]").each(function () {
      gsap.from($(this).find("[data-hero-fade-in-element]"), {
        scrollTrigger: {
          trigger: $(this),
          start: isDesktop ? "center right" : "top bottom",
          containerAnimation: tlMain,
        },
        opacity: 0,
        // scale: 0.93,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.08,
      });
    });

    $("[data-fade-in-wrapper]").each(function () {
      gsap.from($(this).find("[data-title-line]"), {
        scrollTrigger: {
          trigger: $(this),
          start: isDesktop ? "center right" : "top bottom",
          containerAnimation: tlMain,
        },
        width: "0",
        // scale: 0.93,
        duration: 1,
        delay: 1,
        ease: "power1.inOut",
        stagger: 0.08,
      });
    });

    return () => {
      // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
      // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
    };
  }
);

// -------------------------
// --- Values Section --- //
// -------------------------

document.addEventListener("DOMContentLoaded", function () {
  const valuesSection = document.querySelector(".values-section");
  if (!valuesSection) return;

  const vitmElements = valuesSection.querySelectorAll(".swiper-slide.is--vitm");
  const vimgElements = valuesSection.querySelectorAll(".swiper-slide.is--vimg");

  if (vimgElements.length > 0) {
    vimgElements[0].classList.add("is--active");
  }

  vitmElements.forEach((vitmElement, index) => {
    vitmElement.addEventListener("mouseenter", function () {
      vimgElements.forEach((vimgElement) =>
        vimgElement.classList.remove("is--active")
      );
      if (vimgElements[index]) {
        vimgElements[index].classList.add("is--active");
      }
    });
  });
});

// -----------------
// --- Cursor --- //
// -----------------

const mouseFollowerSettings = {
  speed: 0.6,
  skewing: 1,
  skewingText: 3,
};

let cursor;

// const addButtonEventListeners = (elements, text) => {
//   elements.forEach((element) => {
//     element.addEventListener("mouseenter", () => {
//       cursor.setText(text);
//     });

//     element.addEventListener("mouseleave", () => {
//       cursor.removeText();
//     });
//   });
// };

const initializeMouseFollower = () => {
  const cursor = new MouseFollower({
    iconSvgClassName: "my-spritesheet",
    iconSvgNamePrefix: "-",
  });

  // Select all elements with the specified classes
  const leftElements = document.querySelectorAll(".swiper-prev.is--parrow");
  const rightElements = document.querySelectorAll(".swiper-next.is--parrow");

  // Add event listeners for left arrow elements
  leftElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.setIcon("arrow-left");
    });
    el.addEventListener("mouseleave", () => {
      cursor.removeIcon();
    });
  });

  // Add event listeners for right arrow elements
  rightElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.setIcon("arrow-right");
    });
    el.addEventListener("mouseleave", () => {
      cursor.removeIcon();
    });
  });
};

// Check viewport width before initializing
if (window.innerWidth > 990) {
  initializeMouseFollower();
}

// -------------------
// --- Nav Items--- //
// ------------------

$(document).ready(function () {
  $(".menu-item").hover(
    function () {
      $(".menu-item").not(this).css("opacity", 0.25);
    },
    function () {
      $(".menu-item").css("opacity", 1);
    }
  );
});

document.addEventListener("DOMContentLoaded", () => {
  // Find all parent elements with attribute [controller="field"]
  const parentElements = document.querySelectorAll('[controller="field"]');

  parentElements.forEach((parent) => {
    // Find all menu items within this parent
    const menuItems = parent.querySelectorAll(".controller-option");

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("mouseenter", () => {
        menuItems.forEach((item) => {
          if (item !== menuItem) {
            item.style.opacity = "0.25";
          }
        });
      });

      menuItem.addEventListener("mouseleave", () => {
        menuItems.forEach((item) => {
          item.style.opacity = "1";
        });
      });
    });
  });
});

// ----------------------
// --- Guest Counter--- //
// ----------------------

document.addEventListener("DOMContentLoaded", () => {
  const parentElements = document.querySelectorAll('[controller="field"]');

  parentElements.forEach((parent) => {
    const incButton = parent.querySelector('[controller="inc"]');
    const descButton = parent.querySelector('[controller="desc"]');
    const stepField = parent.querySelector(".step-field");

    if (stepField && stepField.type === "number") {
      if (stepField.value === "") {
        stepField.value = 2;
      }

      incButton.addEventListener("click", () => {
        let currentValue = parseInt(stepField.value, 10);
        if (currentValue < 100) {
          stepField.value = currentValue + 1;
        }
      });

      descButton.addEventListener("click", () => {
        let currentValue = parseInt(stepField.value, 10);
        document.addEventListener("DOMContentLoaded", (event) => {
          // Function to initialize video controls
          const initializeVideoControls = (
            wrapper,
            videoAttr,
            sizeButtonAttr
          ) => {
            const video = wrapper.querySelector(`video[name="${videoAttr}"]`);
            const soundButton = wrapper.querySelector('[video="sound"]');
            const sizeButton = wrapper.querySelector(
              `[video="${sizeButtonAttr}"]`
            );

            if (video) {
              video.addEventListener("click", () => {
                if (video.paused) {
                  video.play();
                } else {
                  video.pause();
                }
              });

              const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
              };

              const observerCallback = (entries, observer) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    video.play();
                  } else {
                    video.pause();
                  }
                });
              };

              const observer = new IntersectionObserver(
                observerCallback,
                observerOptions
              );
              observer.observe(video);

              soundButton.addEventListener("click", () => {
                video.muted = !video.muted;
                if (video.muted) {
                  soundButton.classList.remove("is--active");
                } else {
                  soundButton.classList.add("is--active");
                }
              });

              sizeButton.addEventListener("click", () => {
                video.muted = true;
                soundButton.classList.remove("is--active");
              });

              return { video, soundButton, sizeButton };
            }
            return null;
          };

          // Function to sync videos
          const syncVideos = (video1, video2) => {
            if (video1 && video2) {
              video1.addEventListener("play", () => {
                if (!video2.paused) {
                  video2.pause();
                }
                video2.currentTime = video1.currentTime;
                video2.play();
              });

              video1.addEventListener("pause", () => {
                video2.pause();
              });

              video2.addEventListener("play", () => {
                if (!video1.paused) {
                  video1.pause();
                }
                video1.currentTime = video2.currentTime;
                video1.play();
              });

              video2.addEventListener("pause", () => {
                video1.pause();
              });
            }
          };

          // Function to toggle video play/pause on size button click
          const toggleVideoOnSizeButtonClick = (
            video1,
            video2,
            sizeButton1,
            sizeButton2,
            soundButton1,
            soundButton2
          ) => {
            sizeButton1.addEventListener("click", () => {
              if (!video1.paused) {
                video1.pause().then(() => {
                  video2.currentTime = video1.currentTime;
                  video2.play();
                  video2.muted = false; // Ensure video2 plays with sound
                  soundButton2.classList.add("is--active");
                });
              }
            });

            sizeButton2.addEventListener("click", () => {
              if (!video2.paused) {
                video2.pause().then(() => {
                  video1.currentTime = video2.currentTime;
                  video1.play();
                  video1.muted = true; // Ensure video1 plays without sound
                  soundButton1.classList.remove("is--active");
                });
              }
            });
          };

          // Initialize the first video component
          const wrapper1 = document.querySelector('[video="component"]');
          const video1Details = initializeVideoControls(
            wrapper1,
            "measuna-video",
            "upscale"
          );

          // Initialize the second video component
          const wrapper2 = document.querySelector(
            '[video="component-lightbox"]'
          );
          const video2Details = initializeVideoControls(
            wrapper2,
            "measuna-video",
            "downscale"
          );

          if (video1Details && video2Details) {
            const {
              video: video1,
              soundButton: soundButton1,
              sizeButton: sizeButton1,
            } = video1Details;
            const {
              video: video2,
              soundButton: soundButton2,
              sizeButton: sizeButton2,
            } = video2Details;

            // Sync the two videos
            syncVideos(video1, video2);

            // Add toggle functionality on size button click
            toggleVideoOnSizeButtonClick(
              video1,
              video2,
              sizeButton1,
              sizeButton2,
              soundButton1,
              soundButton2
            );
          }
        });

        if (currentValue > 0) {
          stepField.value = currentValue - 1;
        }
      });
    }
  });
});

// -------------------------- //
// --- Mea Suna Home Video --- //
// -------------------------- //

document.addEventListener("DOMContentLoaded", (event) => {
  // Function to initialize video controls
  const initializeVideoControls = (wrapper, videoAttr, sizeButtonAttr) => {
    const video = wrapper.querySelector(`video[name="${videoAttr}"]`);
    const soundButton = wrapper.querySelector('[video="sound"]');
    const sizeButton = wrapper.querySelector(`[video="${sizeButtonAttr}"]`);

    if (video) {
      video.addEventListener("click", () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      observer.observe(video);

      soundButton.addEventListener("click", () => {
        video.muted = !video.muted;
        if (video.muted) {
          soundButton.classList.remove("is--active");
        } else {
          soundButton.classList.add("is--active");
        }
      });

      sizeButton.addEventListener("click", () => {
        video.muted = true;
        soundButton.classList.remove("is--active");
      });

      return { video, soundButton };
    }
    return null;
  };

  // Function to sync videos
  const syncVideos = (video1, video2) => {
    if (video1 && video2) {
      video1.addEventListener("play", () => {
        video2.currentTime = video1.currentTime;
        video2.play();
      });

      video1.addEventListener("pause", () => {
        video2.pause();
      });

      video2.addEventListener("play", () => {
        video1.currentTime = video2.currentTime;
        video1.play();
      });

      video2.addEventListener("pause", () => {
        video1.pause();
      });
    }
  };

  // Function to toggle video play/pause on size button click
  const toggleVideoOnSizeButtonClick = (
    video1,
    video2,
    sizeButton1,
    sizeButton2,
    soundButton1,
    soundButton2
  ) => {
    sizeButton1.addEventListener("click", () => {
      if (!video1.paused) {
        video1.pause();
        video2.currentTime = video1.currentTime;
        video2.play();
        video2.muted = false; // Ensure video2 plays with sound
        soundButton2.classList.add("is--active");
      }
    });

    sizeButton2.addEventListener("click", () => {
      if (!video2.paused) {
        video2.pause();
        video1.currentTime = video2.currentTime;
        video1.play();
        video1.muted = true; // Ensure video1 plays without sound
        soundButton1.classList.remove("is--active");
      }
    });
  };

  // Initialize the first video component
  const wrapper1 = document.querySelector('[video="component"]');
  const video1Details = initializeVideoControls(
    wrapper1,
    "measuna-video",
    "upscale"
  );

  // Initialize the second video component
  const wrapper2 = document.querySelector('[video="component-lightbox"]');
  const video2Details = initializeVideoControls(
    wrapper2,
    "measuna-video",
    "downscale"
  );

  if (video1Details && video2Details) {
    const { video: video1, soundButton: soundButton1 } = video1Details;
    const { video: video2, soundButton: soundButton2 } = video2Details;

    // Sync the two videos
    syncVideos(video1, video2);

    // Add toggle functionality on size button click
    const sizeButton1 = wrapper1.querySelector('[video="upscale"]');
    const sizeButton2 = wrapper2.querySelector('[video="downscale"]');
    toggleVideoOnSizeButtonClick(
      video1,
      video2,
      sizeButton1,
      sizeButton2,
      soundButton1,
      soundButton2
    );
  }
});

$(document).ready(function () {
  $('[video-lightbox="background"]').click(function () {
    var checkoutButton = $('[video="downscale"]')[0];
    var event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    checkoutButton.dispatchEvent(event);
  });
});

// ------------------------------ //
// --- Validate Booking Dates --- //
// ------------------------------ //
document.addEventListener("DOMContentLoaded", function () {
  const checkOutDateField = document.getElementById("check-out-date-bf");
  const checkInDateField = document.getElementById("check-in-date-bf");
  let scriptInitialized = false;
  let lastValue = "";

  function initializeScript() {
    if (scriptInitialized) return;
    scriptInitialized = true;

    // Add 'disabled' class to the link on page load
    const nextBtn = document.querySelector('[disabled-target="true"]');
    if (nextBtn) {
      nextBtn.classList.add("disabled");
    }

    if (checkOutDateField && checkInDateField) {
      // Set the field as readonly
      checkOutDateField.setAttribute("readonly", true);

      // Add click event to focus on check-in date field
      checkOutDateField.addEventListener("click", function () {
        checkInDateField.click();
      });

      // Polling function to check for value changes
      function pollForValueChange() {
        const currentValue = checkInDateField.value;
        if (currentValue !== lastValue) {
          console.log("Value changed to:", currentValue);
          lastValue = currentValue;

          // Remove the 'disabled' class from the link
          const nextBtn = document.querySelector('[disabled-target="true"]');
          if (nextBtn) {
            nextBtn.classList.remove("disabled");
          }
        }
        // Poll every 500ms
        setTimeout(pollForValueChange, 500);
      }

      // Start polling
      pollForValueChange();
    }
  }

  // Set up click event listener for the element with [disabled-target="true"]
  const disabledTargetElement = document.querySelector(
    '[disabled-target="true"]'
  );
  if (disabledTargetElement) {
    disabledTargetElement.addEventListener("click", function () {
      initializeScript();
    });
  }
});

// --------------------------------- //
// --- Video Full Screen Bug Fix --- //
// --------------------------------- //

// document.addEventListener("DOMContentLoaded", function () {
//   // Select all video elements with the class `custom-video`
//   const videos = document.querySelectorAll("video");

//   // Add event listeners to each video element
//   videos.forEach((video) => {
//     // Handle fullscreen changes
//     document.addEventListener("fullscreenchange", function () {
//       if (document.fullscreenElement) {
//         document.exitFullscreen();
//       }
//     });

//     // Optionally handle video play event to prevent fullscreen
//     video.addEventListener("play", function () {
//       // Check if fullscreen API is available and try to enter fullscreen mode
//       if (video.requestFullscreen) {
//         video.requestFullscreen().catch((err) => {
//           // Handle errors (e.g., user denied fullscreen)
//           console.log("Error attempting to enable fullscreen mode:", err);
//         });
//       }
//     });
//   });
// });

// ------------------------ //
// --- Menu Mobile Fix --- //
// ---------------------- //

document.addEventListener("DOMContentLoaded", function () {
  const navControllerElements = document.querySelectorAll(
    '[data="nav-controller"]'
  );

  navControllerElements.forEach(function (element) {
    element.addEventListener("click", function () {
      if (window.innerWidth < 990) {
        setTimeout(function () {
          window.scrollBy(0, 20);
        }, 1000);
      }
    });
  });
});

// ------------------ //
// --- Date Picker --- //
// ------------------ //

const DateTime = easepick.DateTime;
const bookedDates = [].map((d) => {
  if (d instanceof Array) {
    const start = new DateTime(d[0], "YYYY-MM-DD");
    const end = new DateTime(d[1], "YYYY-MM-DD");

    return [start, end];
  }

  return new DateTime(d, "YYYY-MM-DD");
});
const picker = new easepick.create({
  element: document.getElementById("check-in-date-bf"),
  css: [
    "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css",
    "https://easepick.com/css/demo_hotelcal.css",
    "https://93j2p8.csb.app/date-picker.css",
  ],
  plugins: ["RangePlugin", "LockPlugin"],
  RangePlugin: {
    tooltipNumber(num) {
      return num - 1;
    },
    locale: {
      one: "night",
      other: "nights",
    },
  },
  LockPlugin: {
    minDate: new Date(),
    minDays: 2,
    inseparable: true,
    filter(date, picked) {
      if (picked.length === 1) {
        const incl = date.isBefore(picked[0]) ? "[)" : "(]";
        return (
          !picked[0].isSame(date, "day") && date.inArray(bookedDates, incl)
        );
      }

      return date.inArray(bookedDates, "[)");
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  function addCSSRule(selector, property, value) {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
      `${selector} { ${property}: ${value} !important; }`,
      styleSheet.cssRules.length
    );
  }

  const nextButtons = document.querySelectorAll('[data-form="next-btn"]');

  nextButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      addCSSRule(".multistep-content", "overflow", "visible");
    });
  });

  document
    .querySelector('[book-popup="close"]')
    .addEventListener("click", function () {
      addCSSRule(".multistep-content", "overflow", "hidden");
    });
});

// Split the data into the both fields
// Define a variable to store the previous value of the input field
let previousValue = "";

// Function to check if the value of the input field has changed
function checkInputChange() {
  // Get the current value of the input field
  const currentValue = document.getElementById("check-in-date-bf").value;

  // If the value has changed, execute your desired code
  if (currentValue !== previousValue) {
    console.log("Input field value changed to:", currentValue);

    // Update the previous value to the current value
    previousValue = currentValue;

    // Split the value into two parts using " - " as the separator
    const dates = currentValue.split(" - ");

    // Check if both parts are present (for safety)
    if (dates.length === 2) {
      const checkInDate = dates[0];
      const checkOutDate = dates[1];

      // Set the value of the first input field (check-in date)
      document.getElementById("check-in-date-bf").value = checkInDate;

      // Set the value of the second input field (check-out date)
      document.getElementById("check-out-date-bf").value = checkOutDate;
    }

    // Add any additional code you want to run when the value changes here
  }
}

// Set an interval to check for changes every 500ms (half a second)
setInterval(checkInputChange, 500);

// -------------------------------------- //
// --- Hover Card Description Height --- //
// ------------------------------------ //

document
  .querySelectorAll(".card-wrapper.is--plan .description.is--pitm")
  .forEach(function (element) {
    var elementHeight = element.offsetHeight;
    element.style.marginBottom = `-${elementHeight}px`;
    element.style.opacity = "0.8";
  });

document
  .querySelectorAll(".card.is--plan.is--v2 .description.is--pitm")
  .forEach(function (element) {
    var elementHeight = element.offsetHeight;
    element.style.marginBottom = `-${elementHeight}px`;
    element.style.opacity = "0.8";
  });

document
  .querySelectorAll(".card.is--plan.is--v3 .description.is--pitm")
  .forEach(function (element) {
    var elementHeight = element.offsetHeight;
    element.style.marginBottom = `-${elementHeight}px`;
    element.style.opacity = "0.8";
  });

document
  .querySelectorAll(".card.is--plan .description.is--pitm")
  .forEach(function (element) {
    var elementHeight = element.offsetHeight;
    element.style.marginBottom = `-${elementHeight}px`;
    element.style.opacity = "0.8";
  });
