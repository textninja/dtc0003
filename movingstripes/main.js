import './style.scss'
import { gsap } from 'gsap';


let timeline = gsap.timeline().repeat(-1);
timeline
    .to("html", { "--col2": "2fr", duration: 5 })
    .to("html", { "--col2": "1fr", duration: 5 });

let timeline2 = gsap.timeline().repeat(-1);
timeline2
    .to("html", { "--col4": "0.5fr", duration: 3 })
    .to("html", { "--col4": "1fr", duration: 3 })
