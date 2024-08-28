(function () {
  window.addEventListener("DOMContentLoaded", function () {
    const galleryItemEase = "ease.inOut";

    function createGalleryScroll(triggerItem, timelineItem) {
      if (
        !timelineItem ||
        typeof timelineItem.progress !== "function" ||
        typeof timelineItem.pause !== "function" ||
        typeof timelineItem.play !== "function"
      ) {
        console.error("Invalid GSAP timeline provided");
        return;
      }

      ScrollTrigger.create({
        trigger: triggerItem,
        start: "top 20%",
        end: "bottom bottom",
        onEnter: () => timelineItem.play(),
        onLeaveBack: () => {
          timelineItem.progress(0);
          timelineItem.pause();
        },
      });
    }

    $(".sgallery-item").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 90%",
          end: "top 30%",
          scrub: false,
        },
      });

      // Animate the .sgallery-item element
      tl.from($(this), {
        opacity: 0.2,
        stagger: { each: 0.025, from: "random" },
        duration: 0.8,
        force3D: true,
        filter: "blur(8px)",
        ease: galleryItemEase,
      });

      tl.from(
        $(this).find("img"),
        {
          duration: 1,
          scale: 1.1,
          ease: galleryItemEase,
        },
        "<"
      ); // The "<" symbol ensures this animation starts at the same time as the previous one
    });
  });
})();
