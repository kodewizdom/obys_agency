function loadingAnimation(){
  /*-------- loader page -------*/

  let tl = gsap.timeline()
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  })

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      let h5timer = document.querySelector('#line1-part1 h5')
      let grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++
        } else {
          h5timer.innerHTML = grow
        }
      }, 35)
    },
  });
  tl.to(".line h2",{
    animationName:'anime',
    opacity:1,
  })
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    // delay: 4,
  })
  tl.from('#page1', {
    delay: 0.2,
    y: 1200,
    opacity: 0,
    duration: 0.5,
    // ease:power9
  })
  tl.to("#loader",{
    display:"none"
  })

  /*-------- Nav -------*/
  tl.from("#nav",{
    opacity:0,
  })

  /*-------- hero -------*/
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:100,
    stagger:0.2,
  })

}

function cursorAnimation(){
  document.addEventListener("mousemove",(dets)=>{
    gsap.to("#crsr",{
      left:dets.x,
      top:dets.y
    })
  })
  
  Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
    //Parameters are optional.
    scale:4,
  });
}



loadingAnimation()
cursorAnimation()




