document.addEventListener('DOMContentLoaded', () => {
    var toggleBtn = document.getElementById('toggle');
    var collapseMenu = document.getElementById('collapseMenu');
    var menuItems = document.querySelectorAll('#collapseMenu li');

    var tl = gsap.timeline({ paused: true });

    tl.to('#collapseMenu', {
      y: 0
    })    

    tl.reverse();

    toggleBtn.addEventListener('click', () => tl.reversed(!tl.reversed()));

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
          if(document.body.offsetWidth < 1024) {
              console.log('Тута' , document.body.offsetWidth)
              tl.reversed(!tl.reversed())
            }
        })
    })
})

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
  gsap.from(".anim-banner", {
    scrollTrigger: ".anim-banner",
    y: 50,
    opacity: 0,
  });
  gsap.from(".anim-title", {
    scrollTrigger: ".anim-title",
    y: 50,
    opacity: 0,
    delay: .5
  });
  gsap.from(".anim-p", {
    scrollTrigger: ".anim-p",
    y: 50,
    opacity: 0,
    delay: 1
  });

  gsap.from(".cart1", {
    scrollTrigger: ".cart1",
    stagger: 0.4,
    y: 100,
    opacity: 0,
    delay: 1.5
  });
  
 
  document.querySelectorAll('.benefit').forEach((item, i) => {
    item.addEventListener('click', () => {
      let width = document.querySelector('.wrapper-cards').offsetWidth
      console.log(i)
      let start = document.getElementById('benefits')
      start.scrollIntoView()

      document.querySelectorAll('.benefit').forEach((item, j) => {
        // if(i === j) return
        gsap.to(`.benefit-${j}`, {
          opacity: 0,
          duration: 0.1
        });
        if(i !== j) {
          gsap.to(`.benefit-${j}`, {
            opacity: 0.2,
            duration: 0.1,
            delay: 1.5
          });
        }
      })
      gsap.to(`.benefit-${i}`, {
        position: 'absolute',
        zIndex: 11,
        width,
        duration: 0.1,
        delay: 0.2
      });
      gsap.to(`.benefit-${i}`, {
        opacity: 1,
        duration: 0.3,
        delay: 0.7
      });
      gsap.to(`.benefit-${i} .close`, {
        display: 'inline-block',
        duration: 0.1,
        delay: 0.7
      });
      gsap.to(`.benefit-${i} .more`, {
        opacity: 1,
        display: 'block',
        duration: 0.1,
        delay:0.5
      });

      gsap.to(`.benefit-${i} .benefit`, {
        display: 'none',
        duration: 0.1,
        delay: 0.5
      });
    })
  })
  document.querySelectorAll('.benefit + .close').forEach((item, i) => {
    item.addEventListener('click', () => {
      let start = document.getElementById('benefits')
      start.scrollIntoView()

      document.querySelectorAll('.benefit').forEach((item, j) => {
        if(i !== j) {
          gsap.to(`.benefit-${j}`, {
            opacity: 0,
            duration: 0.5
          });
        }
        if(i === j) {
          gsap.to(`.benefit-${j}`, {
            opacity: 0,
            duration: 0.5,
          });
        }
        gsap.to(`.benefit-${j}`, {
          opacity: 1,
          duration: 1,
          delay: 1
        });
      })
      gsap.to(`.benefit-${i}`, {
        position: 'static',
        zIndex: 10,
        width: '100%',
        duration: 0.1,
        delay: 0.8
      });
      gsap.to(`.benefit-${i} .benefit`, {
        display: 'inline-block',
        delay: 1
      });
      gsap.to(`.benefit-${i} .more`, {
        display: 'none',
        duration: 0.1,
        delay: 0.5
      });
      gsap.to(`.benefit-${i} .close`, {
        display: 'none',
        duration: 0.2,
        delay: 0.5
      });
    })
  })
 });

 

