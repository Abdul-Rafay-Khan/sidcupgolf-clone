var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x -125 + "px";
    blur.style.top = dets.y  -125 + "px";
})


gsap.to("nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    }
  
});
gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -80%",
        scrub:2
    }
});
gsap.from("#about-us, #about-us-in",{
    y:90,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        start : "top 90%",
        end:"top 85%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    duration:1,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        start : "top 90%",
        end:"top 85%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 65%",
        end:"top 55%",
        scrub:4
    }

})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 65%",
        end:"top 55%",
        scrub:4
    }

})
gsap.from("#question h1",{
    y:80,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#question h1",
        scroller:"body",
        start:"top 100%",
        end:"top 95%",
        scrub:2
    }
})

let menu = document.querySelector(".ri-menu-line")
let close = document.querySelector(".ri-close-large-line")
let responav = document.querySelector(".respo-nav") 

let tl = gsap.timeline()
tl.to(".respo-nav",{
    right:0,
    duration:0.5
})
tl.from(".respo-nav h4",{
    x:150,
    opacity:0,
    stagger:0.2,
    duration:0.4
})
tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})