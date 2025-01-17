gsap.fromTo(".color_bar", {scaleX:0.9, opacity:1}, {scaleX:1, opacity:.75, duration:1.5, stagger:0.3, yoyo:true, repeat:-1})
gsap.fromTo(".color_bar2", {scaleX:.9, opacity:1}, {scaleX:1, opacity:0.75, duration:1.5, stagger:0.3, yoyo:true, repeat:-1})

//kpop solo artists banner animation
console.clear();
let count = 0;
const targets = document.querySelectorAll(".LT_slides");
gsap.set(targets, { xPercent: -100 });
gsap.set(targets[0], { xPercent: 0 });

function slideIt() {
  gsap.to(targets[count], { xPercent: 100 });
  count = count < targets.length - 1 ? ++count : 0;
  gsap.fromTo(targets[count], { xPercent: -100, scale: 2, ease: 'Power2.out' }, { xPercent: 0, scale: 1, ease: 'Power2.out', duration:3 });
  gsap.to({}, { duration: 12, onComplete: slideIt });
}

gsap.delayedCall(12, () => slideIt());

//bts banner slide function
// let btsSlideCount = 0;
// const btsFocus = document.querySelectorAll(".LT_btsBanner");
// gsap.set(btsFocus, { opacity:0});
// gsap.set(btsFocus[0], {opacity:1});

// function btsSlide() {
//   gsap.to(btsFocus[btsSlideCount], { opacity:0 });
//   btsSlideCount = btsSlideCount < btsFocus.length - 1 ? ++btsSlideCount : 0;
//   gsap.fromTo(btsFocus[btsSlideCount], { scale: 3, opacity:0, ease: "Power2.out"}, {opacity:1, scale: 1, duration:3, ease: "Power2.out" });
//   gsap.to({}, {duration:10, onComplete: btsSlide });
// }
// gsap.delayedCall(10, () => btsSlide());

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