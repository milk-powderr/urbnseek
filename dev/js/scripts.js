import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function eventcolor(){

var tl =  gsap.timeline()

// gsap.set(".event-link", { alpha: 1})
gsap.set(".cross", {rotation: 0})
;

var eventcolor = document.querySelector(".cross");

eventcolor.addEventListener("click", function () {
  mainTL.play();
})

eventcolor.addEventListener("click", function () {
  mainTL.reverse();
})


tl.to(".cross", {rotation: 45, delay: 0.5}, "trigger")
// to(".event-link",{ alpha: 1, delay: 0.5}, 0)

return tl;
}

var mainTL = gsap.timeline();
mainTL.add(eventcolor())
;