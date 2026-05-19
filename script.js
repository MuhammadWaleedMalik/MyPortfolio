// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const resumeElement = document.querySelector('.resume');

function updateResumeText() {
  if (window.matchMedia('(max-width: 768px)').matches) {

    resumeElement.innerHTML = 'resume';
  } else {

    resumeElement.innerHTML = 'Get my resume online';
  }
}


updateResumeText();

window.addEventListener('resize', updateResumeText);


// Using Gsap Animation

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1", // element to trigger the animation
    start: "top 10%", // when the top of the element reaches the center of the viewport
    end: "bottom center", // when the bottom of the element reaches the center of the viewport
    scrub: true, // enable scrubbing (smooth animation)
  }
});


const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2", // element to trigger the animation
    start: "top center%", // when the top of the element reaches the center of the viewport
    end: "bottom center", // when the bottom of the element reaches the center of the viewport
    scrub: true, // enable scrubbing (smooth animation)
    // markers:true
  }
})

tl1.to('.svg', {
  rotate: "90deg",
  duration: 2
}, 'with')
  .to('.img', {
    scale: '1',
    duration: 2
  }, 'with')

tl2.to('.slider-container', {
  left: "50%",
  duration: 0.2
})
// tl2.to('#data',{
//   opacity:1,
//   duration:2,
//   delay:0.5
//   })

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3", // element to trigger the animation
    start: "top center%", // when the top of the element reaches the center of the viewport
    end: "bottom center", // when the bottom of the element reaches the center of the viewport
    scrub: true, // enable scrubbing (smooth animation)
    // markers:true
  }
})



const video = document.getElementById('video');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

// Function to handle touch and hold event
function handleTouchAndHold(video, callback) {
  let touchStartTime;
  let timer;

  video.addEventListener('touchstart', function (event) {
    touchStartTime = Date.now();
    timer = setTimeout(function () {
      if (Date.now() - touchStartTime > 500) { // 500ms delay
        callback();
      }
    }, 500);
  });

  video.addEventListener('touchend', function () {
    clearTimeout(timer);
  });
}

// Add event listeners for each video
video.addEventListener('mouseover', function () {
  video.play();
});
video.addEventListener('mouseout', function () {
  video.pause();
});
video.addEventListener('click', function () {
  window.location.href = 'https://muhammadwaleedmalik.github.io/my-fruit-Tala-website/';
});
handleTouchAndHold(video, function () {
  video.play();
});

video1.addEventListener('click', function () {
  window.location.href = 'https://muhammadwaleedmalik.github.io/lazarev/';
});
video1.addEventListener('mouseover', function () {
  video1.play();
});
video1.addEventListener('mouseout', function () {
  video1.pause();
});
handleTouchAndHold(video1, function () {
  video1.play();
});

video2.addEventListener('click', function () {
  window.location.href = 'https://muhammadwaleedmalik.github.io/';
});
video2.addEventListener('mouseover', function () {
  video2.play();
});
video2.addEventListener('mouseout', function () {
  video2.pause();
});
handleTouchAndHold(video2, function () {
  video2.play();
});

const resume = document.querySelector('.resume');

resume.addEventListener('click', function () {
  const url = './resume/WALEED AWAN.pdf'; // adjust the URL to your file
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resume_file.pdf'; // set the download filename
  a.click();

  // Add some error handling
  a.addEventListener('error', function () {
    console.error('Error downloading file:', url);
  });
});

hi = document.querySelector('.hi')
hi.addEventListener('click', function () {
  window.open('https://www.linkedin.com/in/muhammad-waleed-akhtar-3a134424a/', '_blank');
});
repo = document.querySelector('.repo')
repo.addEventListener('click', function () {
  window.open('https://github.com/MuhammadWaleedMalik/', '_blank');
});


back = document.querySelector('.svg')
back.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



email = document.querySelector('.email');
email.addEventListener('click', function () {
  window.location.href = 'mailto:muhammadwaleedakhtar240@gmail.com';
});


linkedin = document.querySelector('.link')
linkedin.addEventListener('click', function () {
  window.open('https://www.linkedin.com/in/muhammad-waleed-akhtar-3a134424a/', '_blank');
});


insta = document.querySelector('.insta')
insta.addEventListener('click', function () {
  window.open('https://www.instagram.com/invites/contact/?igsh=1uprpjpj78ngb&utm_content=v8s7xsu', '_blank');
});


gsap.from(".web_svg img", {
  scrollTrigger: {
    trigger: ".web_svg",
    start: "top 80%",
    end: "bottom center",
    scrub: 1,
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
  duration: 2
});

gsap.from(".devops_svg img", {
  scrollTrigger: {
    trigger: ".devops_svg",
    start: "top 80%",
    end: "bottom center",
    scrub: 1,
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
  duration: 2
});

// New Animations
gsap.from("#data", {
  scrollTrigger: {
    trigger: "#data",
    start: "top 85%",
    toggleActions: "play none none reverse"
  },
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".btn > div", {
  scrollTrigger: {
    trigger: ".btn",
    start: "top 90%",
    toggleActions: "play none none reverse"
  },
  y: 50,
  scale: 0.8,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "back.out(1.7)"
});

gsap.from(".web_proj .pic", {
  scrollTrigger: {
    trigger: ".web_proj",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 100,
  opacity: 0,
  rotationX: -20,
  stagger: 0.15,
  duration: 1.2,
  transformOrigin: "center bottom",
  ease: "power3.out"
});

gsap.from(".projects > div", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  x: (i) => i % 2 === 0 ? -100 : 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1.5,
  ease: "power3.out"
});

gsap.from(".info", {
  scrollTrigger: {
    trigger: "#page6",
    start: "top 70%",
    toggleActions: "play none none reverse"
  },
  scale: 0.8,
  opacity: 0,
  duration: 1.5,
  ease: "expo.out"
});
