import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function eventcolor(){

var tl =  gsap.timeline()

gsap.set(".event-link", { alpha: 1})
;

tl.to(".event-link",{ alpha: 1, delay: 0.5}, 0)
return tl;
}

var mainTL = gsap.timeline();
mainTL.add(eventcolor())
;