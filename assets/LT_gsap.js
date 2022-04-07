gsap.fromTo(".color_bar", {scaleX:0.85, opacity:1}, {scaleX:1, opacity:.5, duration:1.5, stagger:0.3, yoyo:true, repeat:-1})
gsap.fromTo(".color_bar2", {scaleX:.85, opacity:1}, {scaleX:1, opacity:0.5, duration:1.5, stagger:0.3, yoyo:true, repeat:-1})

// let btstl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#db_banner",
//       start: "bottom 70%",
//       end: "bottom 15%",
//       scrub: 1
//     }
//   });
//   btstl.from("#bts_banner", {scale:5, opacity:.0, x: '-200%'})
//   .from("#ds_banner", {scale:4, opacity:0, x:'200%'})
//   .from("#gundam_banner", {scale:4, opacity:0, x:'-200%'}, "+=1")