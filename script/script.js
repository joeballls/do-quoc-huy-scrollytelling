const cta_anim = gsap.fromTo('.cta', {y: "0%"},{ y: '-1.5em' , repeat: -1, duration: 1, ease:"power2.inOut" })
cta_anim.yoyo(true);