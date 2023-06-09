const bodyScroll = document.getElementById("bodyScroll");

/* function to detect scrolling */
window.onscroll = function () {
  bodyScroll.classList.add(".is-scrolling");
  setTimeout(() => {
    bodyScroll.classList.remove(".is-scrolling");
  }, 100);
};

const cta_anim = gsap.fromTo(
  ".cta",
  { y: "0%" },
  { y: "-1.5em", repeat: -1, duration: 1, ease: "power2.inOut" }
);
cta_anim.yoyo(true);

/* opacity: 0 to make stuff invisible*/
/*---------------------------------------------CH1-------------------------------------------------------------*/
let ch1_hallway = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,

    start: "top",
    end: "+=" + window.innerHeight * 3,
    trigger: "#ch1",
  },
});
ch1_hallway
  .to(".door_open1", { opacity: 0, ease: "Power0.easeNone", duration: 0 })
  .to(".walking1", { opacity: 0, ease: "Power0.easeNone", duration: 0 }, "<")
  .to(".rising", {
    backgroundPosition: "-160vw 0px",
    ease: SteppedEase.config(8),
    duration: 1,
  })
  .to(".walking1", { opacity: 1, ease: "Power0.easeNone", duration: 0 })
  .to(".rising", { opacity: 0, ease: "Power0.easeNone", duration: 0 }, "<")
  .to(".walking1", { x: "235vmin", ease: "linear", duration: 8 }, "<")
  .to(".hallway1", { x: "-235vmin", ease: "linear", duration: 8 }, "<")
  .to(".door_closed1", { opacity: 0, ease: "Power0.easeNone", duration: 0 })
  .to(".door_open1", { opacity: 1, ease: "Power0.easeNone", duration: 0 })
  .to(".walking1", { x: "500vmin", ease: "Power0.easeNone", duration: 8 }, "<")
  .from(
    ".text_ch1",
    { opacity: 0, ease: "Power0.easeNone", duration: 2 },
    "-=8"
  )
  .from(".text_ch1", { y: "8vmin", ease: Power1.easeOut, duration: 2 }, "<");

/*---------------------------------------------CH2-------------------------------------------------------------*/
let ch2_road = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,

    start: "top",
    end: "+=" + window.innerHeight * 3,
    trigger: "#ch2",
  },
});
ch2_road
  .from(".road_ch2", { x: "-260vmin", ease: "Power0.easeNone", duration: 2 })
  .to(
    ".walking2",
    {
      backgroundImage: "url(../img/nothing)",
      ease: "Power0.easeNone",
      duration: 0,
    },
    "<"
  )
  .from(".building1", { y: "200vmin", ease: "Power0.easeNone", duration: 1 })
  .from(
    ".building2",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".bg_building1",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".building3",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".bg_building2",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".bg_building3",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".building4",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".bg_building4",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".bg_building5",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".building5",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".bg_building6",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".building6",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .from(
    ".bg_building7",
    { y: "200vmin", ease: "Power0.easeNone", duration: 1 },
    "-=0.7"
  )
  .to(".walking2", { x: "200vmin", ease: "Power0.easeNone", duration: 5 })
  .to(
    ".walking2",
    {
      backgroundImage: "url(../assets/img/chapitre1/walk_anim_spritesheet.png)",
      ease: "Power0.easeNone",
      duration: 0,
    },
    "<"
  )
  .to(".standing2", { opacity: 0, ease: "Power0.easeNone", duration: 0 }, "<");

/*---------------------------------------------CH3------------------------------------------------------------*/
let ch3_cars = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,

    start: "top",
    end: "+=" + window.innerHeight * 3,
    trigger: "#ch3",
  },
});

ch3_cars
  .to(".walking3", { x: "300vmin", ease: "linear", duration: 12 })
  .from(".car1", { x: "-260vmin", ease: "expo.in", duration: 2 }, "-=10")
  .from(".car2", { x: "-260vmin", ease: "expo.in", duration: 2 }, "-=7")
  .from(".car3", { x: "260vmin", ease: "expo.in", duration: 2 }, "-=-11");
/* .from("#wind_path", { drawSVG: "0% 0%", duration: 5 }, "<"); */
/*---------------------------------------------CH4------------------------------------------------------------*/
let ch4_walk = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,

    start: "top",
    end: "+=" + window.innerHeight * 3,
    trigger: "#ch4",
  },
});
ch4_walk
  .to(".standing5", { opacity: 0, ease: "Power0.easeNone", duration: 0 })
  .to(".standing4", { opacity: 0, ease: "Power0.easeNone", duration: 0 })
  .to(".walking4", { x: "93vmin", ease: "linear", duration: 2 })
  .to(".walking4", { x: "150vmin", y: "-4vmin", ease: "linear", duration: 2 })
  .to(".standing4", { opacity: 1, ease: "Power0.easeNone", duration: 0 })
  .to(
    ".walking4",
    {
      backgroundImage: "url(../img/nothing)",
      ease: "Power0.easeNone",
      duration: 0,
    },
    ">"
  )
  .to(".walking4", { y: "150vmin", ease: Circ.easeIn, duration: 6 })
  .to(".walking4", { opacity: 0, ease: Circ.easeIn, duration: 0 }, ">")
  .to(".standing4", { opacity: 0, ease: Circ.easeIn, duration: 0 });

/*---------------------------------------------CH5-------------------------------------------------------------*/
let ch5_walk = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,

    start: "top",
    end: "+=" + window.innerHeight * 3,
    trigger: "#ch5",
  },
});
ch5_walk
  .to(".standing5", { opacity: 1, ease: "Power0.easeNone", duration: 0 })
  .to(".walking5", {
    backgroundImage: "url(../img/nothing)",
    ease: "Power0.easeNone",
    duration: 0,
  })
  .from(".walking5", { y: "-140vmin", ease: "linear", duration: 15 })
  .to(".triangle1", { y: "-270vh", ease: "Power0.easeNone", duration: 12 }, "<")
  .to(".triangle2", { y: "-270vh", ease: "Power0.easeNone", duration: 12 }, "<")
  .to(".triangle3", { y: "-270vh", ease: "Power0.easeNone", duration: 12 }, "<")
  .to(
    ".parallax2",
    { backgroundPosition: "0px 40%", ease: "Power0.easeNone", duration: 15 },
    "<"
  )
  .from(".parallax3", { y: "240vmin", ease: "linear", duration: 8 }, "-=10")
  .from(".empty_walls", { y: "240vmin", ease: "linear", duration: 8 }, "<")
  .from(".bubble", { y: "240vmin", ease: "linear", duration: 8 }, "<")
  .to(
    ".walking5",
    {
      backgroundImage: "url(../assets/img/chapitre1/walk_anim_spritesheet.png)",
      ease: "Power0.easeNone",
      duration: 0,
    },
    "+=1.5"
  )
  .to(".standing5", { opacity: 0, ease: "Power0.easeNone", duration: 0 }, "<")
  .to(".parallax3", { x: "-240vmin", ease: "linear", duration: 8 })
  .to(".empty_walls", { x: "-160vmin", ease: "linear", duration: 5 }, "<")
  .to(".bubble", { x: "-200vmin", ease: "linear", duration: 5 }, "<")
  /* .to(
    "#bubble_path",
    { morphSVG: { shape: "#cat_path" }, ease: "linear", duration: 1 },
    "<"
  ) */
  .to(".empty_walls", { x: "-200vmin", ease: "linear", duration: 2 }, "-=4.5")
  .to(".walking5", { x: "120vmin", ease: "linear", duration: 3 }, "-=2.5")
  .to(".standing5", { opacity: 1, ease: "Power0.easeNone", duration: 0 })
  .to(".walking5", {
    backgroundImage: "url(../img/nothing)",
    ease: "Power0.easeNone",
    duration: 0,
  })
  .to(".walking5", { y: "100vmin", ease: Circ.easeIn, duration: 1 })
  .to(".standing5", { opacity: 0, ease: "Power0.easeNone", duration: 0 });

/*---------------------------------------------CH6------------------------------------------------------------*/
let ch6_fall = gsap.timeline({});
ch6_fall
  .to(".falling_spritesheet", {
    motionPath: {
      align: "#motionpath_path",
      path: "#motionpath_path",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      end: 1,
    },
    scrollTrigger: {
      pin: true,
      scrub: 1,

      start: "top",
      end: "+=" + window.innerHeight * 3,
      trigger: "#ch6",
    },
    duration: 5,
    ease: "linear",
  })
  .to(".cloud1", { y: "-150vmin", ease: "linear", repeat: -1, duration: 0.6 })
  .to(".cloud2", { y: "-150vmin", ease: "linear", repeat: -1, duration: 1 })
  .to(".cloud3", { y: "-150vmin", ease: "linear", repeat: -1, duration: 0.3 })
  .to(".cloud4", { y: "-150vmin", ease: "linear", repeat: -1, duration: 1 })
  .to(".cloud5", { y: "-150vmin", ease: "linear", repeat: -1, duration: 2 })
  .to(".cloud7", { y: "-150vmin", ease: "linear", repeat: -1, duration: 0.7 });
/*---------------------------------------------CH7-------------------------------------------------------------*/
let ch7_end = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,

    start: "top",
    end: "+=" + window.innerHeight * 3,
    trigger: "#ch7",
  },
});
ch7_end
  .to(".fade_to_black", { opacity: 0, ease: "linear", duration: 0 })
  .to(".text_ch7", { opacity: 0, ease: "linear", duration: 0 })
  .to(".felloff_spritesheet", { opacity: 0, ease: "linear", duration: 0 })
  .from(".walking7", { x: "-120vmin", ease: "linear", duration: 4 })
  .to(".walking7", { x: "85vmin", y: "-18vmin", ease: "linear", duration: 4 })
  .to(".walking7", {
    x: "85vmin",
    y: "-18vmin",
    ease: "linear",
    backgroundImage: "url(../img/nothing)",
    duration: 4,
  })
  .to(".felloff_spritesheet", { opacity: 1, ease: "linear", duration: 0 }, "<")
  .to(
    ".felloff_spritesheet",
    {
      backgroundPosition: "-260vw 0px",
      ease: SteppedEase.config(13),
      duration: 5,
    },
    "<"
  )
  .to(".fade_to_black", { opacity: 1, ease: "linear", duration: 4 })
  .to(
    ".felloff_spritesheet",
    { x: "-85vmin", ease: "Power1. easeOut", duration: 9 },
    "<"
  )
  .to(".text_ch7", { opacity: 1, ease: "linear", duration: 2 })
  .to(
    ".felloff_spritesheet",
    { opacity: 0, ease: "Power1. easeOut", duration: 5 },
    "<"
  )
  .to(".text_ch7", { opacity: 0, ease: "Power1. easeOut", duration: 5 });

/*my code sucks lol*/
