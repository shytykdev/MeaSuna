
window.addEventListener("DOMContentLoaded", (event) => {
    // text splitting code
    let typeSplit;
  
    function runSplitType() {
      typeSplit = new SplitType("[split-text]", {
        types: "lines, words, chars",
        tagName: "span"
      });
    }
  
    runSplitType();
  
    // run the code when window width changes
    let windowWidth = window.innerWidth;
    window.addEventListener("resize", function () {
      if (windowWidth !== window.innerWidth) {
        windowWidth = window.innerWidth;
        typeSplit.revert();
        runSplitType();
      }
    });
  
    // page load animation
    let homeLoadTl = gsap.timeline();
  
    homeLoadTl
      .to(".loader_colums", {
        delay: 0.5,
        yPercent: -100,
        duration: 1.6,
        stagger: {
          each: 0.1
        },
        ease: "power4.inOut",
        onComplete: () => {
          $(".loader_component").css("display", "none");
        }
      })
      .from(
        ".hero_heading-wrapper .char",
        {
          yPercent: 100,
          duration: 0.8,
          stagger: {
            amount: 0.5
          },
          ease: "power3.out"
        },
        "-=1"
      )
      .from(
        ".hero_sub-text-wrap .word",
        {
          yPercent: 100,
          duration: 1,
          ease: "power2.out"
        },
        "<45%"
      )
      .from(
        ".hero_background-image-wrap",
        {
          scale: 1.5,
          ease: "power1.inOut",
          duration: 2.5
        },
        0
      );
  
    // animations that run on desktop and above
    function desktopAnimation() {
      // nav menu animation
      let navMenuTl = gsap.timeline({
        paused: true,
        onStart: () => {
          $(".nav_menu_component").css("display", "block");
        },
        onReverseComplete: () => {
          $(".nav_menu_component").css("display", "none");
        }
      });
  
      navMenuTl
        .from(".nav_menu_link", {
          xPercent: 100,
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          stagger: {
            each: 0.1
          }
        })
        .from(
          ".nav_menu_other-links .text-link_wrap",
          {
            opacity: 0,
            ease: "power2.out",
            yPercent: -40,
            duration: 0.3
          },
          ">-=0.5"
        )
        .from(
          ".nav_menu_close-trigger",
          {
            opacity: 0,
            ease: "power2.out",
            duration: 1.6
          },
          0
        );
  
      // nav menu icon animtion
      let navMenuIconTl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.8,
          ease: "power2.inOut"
        }
      });
  
      navMenuIconTl
        .to(".nav_icon-line:nth-of-type(2)", {
          yPercent: 100
        })
        .to(
          ".nav_icon-line:nth-of-type(1)",
          {
            rotate: 22.5
          },
          0
        )
        .to(
          ".nav_icon-line:nth-of-type(3)",
          {
            rotate: -22.5
          },
          0
        );
  
      // navbar first and second click
      $(".nav_bar").on("click", function () {
        $(this).toggleClass("clicked");
        if ($(this).hasClass("clicked")) {
          navMenuTl.timeScale(1).restart();
          navMenuIconTl.restart();
        } else {
          navMenuTl.timeScale(1.5).reverse();
          navMenuIconTl.reverse();
        }
      });
  
      // when nav close trigger is clicked
      $(".nav_menu_close-trigger").on("click", function () {
        navMenuTl.timeScale(1.5).reverse();
        navMenuIconTl.reverse();
      });
  
      //Set sticky section heights based on inner content width
      // Makes scroll timing feel more natural
      function setTrackHeights() {
        $(".horizontal-scroll_section-height").each(function (index) {
          let trackWidth = $(this).find(".horizontal-scroll_track").outerWidth();
          $(this).height(trackWidth);
        });
      }
      setTrackHeights();
      window.addEventListener("resize", function () {
        setTrackHeights();
      });
  
      // Add horizontal scroll to the page
      let horizontalMainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".horizontal-scroll_section-height",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });
      horizontalMainTl.to(".horizontal-scroll_track", {
        xPercent: -100,
        ease: "none",
        onUpdate: updateScrollProgress
      });
  
      // set progress to 0 on page load
      $(".nav_progress-number").text(0);
  
      // set scroll progess text
      function updateScrollProgress() {
        let progress = Math.round(horizontalMainTl.progress() * 100);
        $(".nav_progress-number").text(progress);
      }
  
      // add paralllax to the hero image on scroll
      let heroImageTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section_hero",
          containerAnimation: horizontalMainTl,
          scrub: true,
          start: "left left",
          end: "right left"
        }
      });
  
      heroImageTl.to(".hero_background-image", {
        x: "30vw",
        ease: "none"
      });
  
      // change nav state on scroll
      let navStatesTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section_hero",
          toggleActions: "restart none none reverse",
          containerAnimation: horizontalMainTl,
          start: "0.5rem left",
          end: "0.6rem left"
        }
      });
  
      navStatesTl
        .to(".nav_logo-wrap, .nav_logo-text.is-top", {
          opacity: 0,
          duration: 0.3,
          ease: "power3.out"
        })
        .to(".nav_logo-embed", {
          opacity: 1,
          duration: 0.3,
          ease: "power3.out"
        });
  
      // horizontal scroll image scales out
      $(".intro_image-wrap, .work_card, .article_card").each(function (index) {
        let cardImageTl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            containerAnimation: horizontalMainTl,
            start: "left right",
            end: "right right"
          }
        });
  
        cardImageTl.from($(this).find(".image-full-cover"), {
          scale: 1.3,
          ease: "power2.out",
          duration: 1
        });
      });
  
      // add paralllax to the image divider on scroll
      let dividerImageTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".image-divider_wrapper",
          containerAnimation: horizontalMainTl,
          scrub: true,
          start: "left right",
          end: "right left"
        }
      });
  
      dividerImageTl.from(".image-divider_image", {
        x: "-50%",
        ease: "none"
      });
  
      // jornal title letter stagger
      let journalTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".jornal_title-wrap",
          containerAnimation: horizontalMainTl,
          start: "left right",
          end: "right right"
        }
      });
  
      journalTl.from(".jornal_title-wrap .char", {
        yPercent: -120,
        duration: 0.8,
        stagger: {
          amount: 0.4
        },
        ease: "power3.out"
      });
    }
  
    function mobileAnimation() {
      // add paralllax to the hero image on scroll mobile
      let moileHeroImageTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section_hero",
          scrub: true,
          start: "top top",
          end: "bottom top"
        }
      });
  
      moileHeroImageTl.to(".hero_background-image", {
        y: "15vh",
        ease: "none"
      });
  
      //scroll image scales out
      $(".intro_image-wrap, .work_card, .article_card").each(function (index) {
        let monileCardImageTl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top 90%",
            end: "bottom top"
          }
        });
  
        monileCardImageTl.from($(this).find(".image-full-cover"), {
          scale: 1.5,
          ease: "power2.out",
          duration: 2
        });
      });
  
      // jornal title letter stagger
      let journalTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".jornal_title-wrap",
          start: "top 80%",
          end: "bottom top"
        }
      });
  
      journalTl.from(".jornal_title-wrap .char", {
        yPercent: -120,
        duration: 0.8,
        stagger: {
          amount: 0.25
        },
        ease: "power3.out"
      });
    }
    // declaring breakpoints for gsap animtion
    let mm = gsap.matchMedia();
  
    // for animations that should on tablet and above (desktopAnimation)
    mm.add("(min-width: 769px)", () => {
      desktopAnimation();
    });
  
    // for the animtions that should run of landscape and mobile
    mm.add("(max-width: 768px)", () => {
      mobileAnimation();
    });
  });