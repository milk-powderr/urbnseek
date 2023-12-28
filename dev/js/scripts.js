// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// gsap.set("#volunteer-link", { transformOrigin: "center bottom" })

// var createButtonTL = gsap.timeline({ paused: true });
// createButtonTL
//   .to("#home-link", { duration: 0.25, alpha: 0, y: 50 }, "trigger")
//   .to("#event-link", { duration: 0.25, alpha: 0, y: 50 }, "trigger")
//   .to("#volunteer-link", { duration: 0.25, y: 100, scale: 2}, "trigger")



// var preregisterBtn = document.querySelector("#volunteer-link");

// preregisterBtn.addEventListener("mouseover", function () {
//   createButtonTL.play();
// })

// preregisterBtn.addEventListener("mouseout", function () {
//   createButtonTL.reverse();
// })

// function createAnimation() {
//   var tl = gsap.timeline();
//   tl.from("#home-link", { duration: 0.25, y: -100, alpha: 0 })
//     .from("#event-link", { duration: 0.25, y: -100, alpha: 0, delay: .25 })
//     .from("#volunteer-link", { duration: 0.25, y: 100, alpha: 0, scale: 2 }, "-=.5")

//   return tl;
// }

// var mainTimeline = gsap.timeline();
// mainTimeline.add(createAnimation());

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function eventcolor(){

var tl =  gsap.timeline()

gsap.set(".event-link", { alpha: 0})
;

tl.to(".event-link",{ alpha: 1, delay: 1.5}, 0)
return tl;
}

// var preregisterBtn = document.querySelector("#volunteer-link");

// preregisterBtn.addEventListener("mouseover", function () {
//   createButtonTL.play();
// })

// preregisterBtn.addEventListener("mouseout", function () {
//   createButtonTL.reverse();
// })

var mainTL = gsap.timeline();
mainTL.add(eventcolor())
;

// function test(){
//     console.log("complete");
// }