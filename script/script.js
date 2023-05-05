const cta_anim = gsap.fromTo(
  ".cta",
  { y: "0%" },
  { y: "-1.5em", repeat: -1, duration: 1, ease: "power2.inOut" }
);
cta_anim.yoyo(true);

/* opacity: 0 to make stuff invisible*/

let ch1_hallway = gsap.timeline();
ch1_hallway
  .to(".door_open1", { opacity: 0, ease: "Power0.easeNone", duration: 0 }, "<")
  .to(".hallway1", { x: "-235vmin", ease: "Power0.easeNone", duration: 1 }, "<")
  .to(".door_closed1", { opacity: 0, ease: "Power0.easeNone", duration: 0 })
  .to(".door_open1", { opacity: 1, ease: "Power0.easeNone", duration: 0 })
  .to(
    ".hallway1",
    { x: "-260vmin", ease: "Power0.easeNone", duration: 1 },
    "+=0.7"
  );

let ch1_text = gsap.timeline();
ch1_text.from(".text_ch1", {
  opacity: 0,
  ease: "Power0.easeNone",
  duration: 2,
});
ch1_text.from(
  ".text_ch1",
  { y: "8vmin", ease: Power1.easeOut, duration: 2 },
  "<"
);

let ch2_road = gsap.timeline();
ch2_road
  .from(".road_ch2", { x: "-260vmin", ease: "Power0.easeNone", duration: 2 })
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
  .to(".walking2", { x: "200vmin", ease: "Power0.easeNone", duration: 5 });

let ch3_cars = gsap.timeline();
ch3_cars
  .to(".walking3", { x: "300vmin", ease: "linear", duration: 17 })
  .from(".car1", { x: "-260vmin", ease: "expo.in", duration: 2 }, "-=16")
  .from(".car2", { x: "-260vmin", ease: "expo.in", duration: 2 }, "-=14")
  .from(".car3", { x: "260vmin", ease: "expo.in", duration: 2 }, "-=-18");

let ch4_walk = gsap.timeline();
ch4_walk
  .to(".standing4", { opacity: 0, ease: "Power0.easeNone", duration: 0 })
  .to(".walking4", { x: "93vmin", ease: "linear", duration: 2 })
  .to(".walking4", { x: "150vmin", y: "-4vmin", ease: "linear", duration: 2 })
  .to(".standing4", { opacity: 1, ease: "Power0.easeNone", duration: 0 })
  .to(
    ".walking4",
    {
      backgroundImage: "url(img/nothing)",
      ease: "Power0.easeNone",
      duration: 0,
    },
    ">"
  )
  .to(".walking4", { y: "150vmin", ease: Circ.easeIn, duration: 6 });

let ch5_walk = gsap.timeline();
ch5_walk
  .to(".standing5", { opacity: 1, ease: "Power0.easeNone", duration: 0 })
  .to(".walking5", {
    backgroundImage: "url(img/nothing)",
    ease: "Power0.easeNone",
    duration: 0,
  })
  .from(".walking5", { y: "-140vmin", ease: "linear", duration: 2 })
  .to(
    ".walking5",
    {
      backgroundImage: "url(assets/img/chapitre1/walk_anim_spritesheet.png)",
      ease: "Power0.easeNone",
      duration: 0,
    },
    "+=1.5"
  )
  .to(".standing5", { opacity: 0, ease: "Power0.easeNone", duration: 0 }, "<")
  .to(".parallax3", { x: "-240vmin", ease: "linear", duration: 8 })
  .to(".empty_walls", { x: "-160vmin", ease: "linear", duration: 5 }, "<")
  .to(".empty_walls", { x: "-200vmin", ease: "linear", duration: 2 }, "-=4.5")
  .to(".walking5", { x: "120vmin", ease: "linear", duration: 3 }, "-=2.5")
  .to(".standing5", { opacity: 1, ease: "Power0.easeNone", duration: 0 })
  .to(".walking5", {
    backgroundImage: "url(img/nothing)",
    ease: "Power0.easeNone",
    duration: 0,
  })
  .to(".walking5", { y: "100vmin", ease: Circ.easeIn, duration: 2 });

let ch6_fall = gsap.timeline();
ch6_fall
  .to(".falling_spritesheet", {
    x: "120vmin",
    ease: "ease: Power4. easeInOut",
    yoyo: true,
    repeat: -1,
    duration: 3,
  })
  .to(
    ".cloud1",
    { y: "-150vmin", ease: "linear", repeat: -1, duration: 0.6 },
    "<"
  )
  .to(
    ".cloud2",
    { y: "-150vmin", ease: "linear", repeat: -1, duration: 0.6 },
    "-=0.3"
  )
  .to(
    ".cloud3",
    { y: "-150vmin", ease: "linear", repeat: -1, duration: 0.6 },
    "-=0.1"
  )
  .to(
    ".cloud4",
    { y: "-150vmin", ease: "linear", repeat: -1, duration: 0.6 },
    "-=0.3"
  )
  .to(
    ".cloud5",
    { y: "-150vmin", ease: "linear", repeat: -1, duration: 0.6 },
    "-=0.4"
  )
  .to(
    ".cloud7",
    { y: "-150vmin", ease: "linear", repeat: -1, duration: 0.6 },
    "-=0.16"
  )
  .to(
    ".falling_spritesheet",
    {
      y: "20vmin",
      ease: "ease: Power4. easeInOut",
      yoyo: true,
      repeat: -1,
      duration: 3,
    },
    "-=2.5"
  );

let ch7_end = gsap.timeline();
ch7_end
  .to(".felloff_spritesheet", { opacity: 0, ease: "linear", duration: 0 })
  .from(".walking7", { x: "-120vmin", ease: "linear", duration: 4 })
  .to(".walking7", { x: "85vmin", y: "-18vmin", ease: "linear", duration: 4 })
  .to(".walking7", {
    x: "85vmin",
    y: "-18vmin",
    ease: "linear",
    backgroundImage: "url(img/nothing)",
    duration: 4,
  })
  .to(".felloff_spritesheet", { opacity: 1, ease: "linear", duration: 0 }, "<");
