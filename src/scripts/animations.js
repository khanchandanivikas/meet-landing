import { gsap } from "gsap";

export function heroContentAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro-container",
      start: "top top",
      end: "150%",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });
  timeline
    .from(".logo-container", { duration: 1.5, opacity: 0 })
    .from(".hero-heading", { duration: 1.5, opacity: 0 }, 0.5)
    .from(".hero-description", { duration: 1, opacity: 0, y: 25 }, 1)
    .from(".link", { duration: 1, stagger: 0.2, opacity: 0, y: 25 }, 1.5);
  return timeline;
}

export function heroAvatarsAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro-container",
      start: "top top",
      end: "150%",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });
  timeline
    .from(".hero-left img:nth-child(2)", { duration: 1.5, scale: 0 }, 1.5)
    .from(".hero-right img:nth-child(4)", { duration: 1.5, scale: 0 }, "-=1")
    .from(".hero-left img:nth-child(4)", { duration: 1.5, scale: 0 }, "-=1")
    .from(".hero-right img:nth-child(2)", { duration: 1.5, scale: 0 }, "-=.75")
    .from(".hero-left img:nth-child(6)", { duration: 1.5, scale: 0 }, "-=1")
    .from(".hero-right img:nth-child(6)", { duration: 1.5, scale: 0 }, "-=1.5")
    .from(".hero-left img:nth-child(3)", { duration: 1.5, scale: 0 }, "-=1")
    .from(".hero-right img:nth-child(5)", { duration: 1.5, scale: 0 }, "-=1.25")
    .from(".hero-left img:nth-child(5)", { duration: 1.5, scale: 0 }, "-=.75")
    .from(".hero-right img:nth-child(1)", { duration: 1.5, scale: 0 }, "-=1.5")
    .from(".hero-left img:nth-child(1)", { duration: 1.5, scale: 0 }, "-=1.5")
    .from(".hero-right img:nth-child(3)", { duration: 1.5, scale: 0 }, "-=1");
  return timeline;
}

export function featureImgsAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery-container",
      start: "top 35%",
      // end: "150%",
      scrub: true,
    },
  });
  timeline
    .from(
      ".gallery",
      {
        duration: 1.5,
      },
      0
    )
    .from(
      ".gallery img:nth-child(1)",
      {
        duration: 0.7,
        width: 0,
      },
      0
    )
    .from(
      ".gallery img:nth-child(2)",
      {
        duration: 0.7,
        width: 0,
      },
      0
    )
    .from(
      ".gallery img:nth-child(3)",
      {
        duration: 0.7,
        width: 0,
      },
      0
    )
    .from(
      ".gallery img:nth-child(4)",
      {
        duration: 0.7,
        width: 0,
      },
      0
    );
    // .from(
    //   ".gallery img",
    //   {
    //     duration: 0.5,
    //     scale: 1.5,
    //     opacity: 0,
    //   },
    //   0
    // );
  return timeline;
}

export function featureContentAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-container",
      start: "top 80%",
      end: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  timeline
    .from(".info-container h4", { duration: 2, opacity: 0 }, 0)
    .from(".info-container h2", { duration: 2, opacity: 0 }, 0.3)
    .from(".info-container p", { duration: 1, opacity: 0, y: 15 }, 0.5);
  return timeline;
}

export function footerAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-container",
      start: "35% bottom",
      toggleActions: "play none none reset",
    },
  });
  timeline
    .from(".footer-container h2", {
      delay: 0.8,
      duration: 0.5,
      opacity: 0,
      stagger: 0.8,
    })
    .from(".footer-container p", {
      delay: 0.1,
      duration: 0.2,
      opacity: 0,
      stagger: 0.2,
    })
    .from(".footer-container button", {
      delay: 0.1,
      duration: 0.2,
      opacity: 0,
      stagger: 0.2,
    });
  return timeline;
}

export function dividerAnimationOne() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery-container .divider",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });
  timeline
    .from(".gallery-container .divider .divider-line", { duration: 0.7, opacity: 0, scaleY: 0 })
    .from(".gallery-container .divider .divider-number", { duration: 0.7, scale: 0 }, "-=.5")
    .from(".gallery-container .divider .divider-number span", { duration: 1, opacity: 0 }, "-=.1");
  return timeline;
}

export function dividerAnimationTwo() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".info-wrapper .divider",
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
  });
  timeline
    .from(".info-wrapper .divider .divider-line", { duration: 0.7, opacity: 0.5, scaleY: 0 })
    .from(".info-wrapper .divider .divider-number", { duration: 0.7, scale: 0 }, "-=.5")
    .from(".info-wrapper .divider .divider-number span", { duration: 1, opacity: 0 }, "-=.1");
  return timeline;
}
