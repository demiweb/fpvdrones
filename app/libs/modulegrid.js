const gridItems = [...document.querySelectorAll('.grid-invest > .img-invest')];


// document.body.classList.remove('loading');

// Smooth scrolling initialization (using Lenis https://github.com/studio-freight/lenis)

const scrollFn = () => {

    requestAnimationFrame(scrollFn);
};
requestAnimationFrame(scrollFn);

function imgRotating3d() {
    if (gridItems.length) {
        gridItems.forEach((item, k) => {
            let m = 1;
            if (k % 2 === 0) {
                m = -1;
            }
            const image = item.querySelector('.img-grid');

            gsap.timeline()
                .set(image, {
                    transformOrigin: `0% 100%`,
                    translateX: 0
                })

                .to(image, {
                    ease: 'back.in(2)',
                    scaleX: 1,
                    scaleY: 1,
                    skewY: gsap.utils.random(-5, 5),
                    translateX: `${m * 200}%`,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 70%",
                        end: "bottom top",
                        scrub: 0.1,
                    }
                });

        });
    }
}

imgRotating3d();
var controller2 = new ScrollMagic.Controller();
let gridText = [...document.querySelectorAll('.grid-text .txt')];

function gridScrollText() {
    if (gridText.length) {
        gridText.forEach((btn, k) => {
            let trig = document.querySelector(`.trig-${k}`);
            let h = trig.offsetHeight;
            console.log(h);

            new ScrollMagic.Scene({
                triggerElement: trig,
                triggerHook: 0.86, // show, when scrolled 10% into view
                duration: `${h * 0.92}px`, // hide 10% before exiting view (80% + 10% from bottom)
                offset: 50 // move trigger to center of element
            })
                .setClassToggle(btn, "visible") // add class to reveal
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller2);

        })
    }
}

gridScrollText();


