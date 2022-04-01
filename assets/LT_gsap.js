const tl = gsap.timeline();

tl.fromTo('#introText1',{opacity:0, lineHeight:"0.5"}, {duration:4, opacity:1, x:"55vw", y:"8vh", lineHeight:"1" })
tl.fromTo('#introText2',{opacity:0, lineHeight:"0.5"}, {duration:4, opacity:1, x:"-55vw", y:"8vh", lineHeight:"1"}, "-=4")
  .to('#introText1', {x:"52vw", ease: "bounce.out", duration:3, lineHeight:"1.4"})
  .to('#introText2', {x:"-52vw", flexDirection:"row", duration:3, lineHeight:"1.4",fontSize:"2vw"},"-=3")
  .to('.indicator_text1', {duration:4, y:"12vh", opacity:0},"-=6")
  .fromTo('.indicator_text2', {scale:0.9}, {scale:1, ease: "elastic.out", repeat: -1, duration:2})
  .fromTo('.logo_bee', {scale:0}, {scale:1}, "-=6")

gsap.from(".banner_gundam", {
  scrollTrigger:{
    trigger: ".banner_gundam",
    start: "top center",
    end: "bottom center",
    scrub: 1
  }, 
  xPercent:150,
  scale:0.5
});
