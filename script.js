// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier:0.3
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var page3_font=0;



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        markers:false,
        start:"top -75%",
        // end:"top -20%",
        pin:true,
        scrub:3,

    }
})

tl.to("#img-part2",{
    width:"600vw",
    height:"100%"
},"anim")
tl.to("#img-part1",{
    x:-200
},"anim")
tl.to("#img-part3",{
    x:200
},"anim")

tl.to("#image-holders h2",{
    y:-350,
})

var p3_ic=document.querySelector("#play_icon").style.color="white";
var p3_ic=document.querySelector("#play_icon2").style.color="white";
var p3_ic=document.querySelector("#play_icon3").style.color="white";

gsap.to("#page3",{
  backgroundColor:"white",
  color:"black",
  
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    markers:true,
    start:"top 0%",
    end:"top 1%",
    scrub:2,

  }
})



