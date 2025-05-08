  // Hamburger menu functionality
  const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
  const smallMenu = document.querySelector('.header__sm-menu');
  const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
  const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
  const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

  hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
      smallMenu.classList.remove('header__sm-menu--active');
    } else {
      smallMenu.classList.add('header__sm-menu--active');
    }
    
    if (headerHamMenuBtn.classList.contains('d-none')) {
      headerHamMenuBtn.classList.remove('d-none');
      headerHamMenuCloseBtn.classList.add('d-none');
    } else {
      headerHamMenuBtn.classList.add('d-none');
      headerHamMenuCloseBtn.classList.remove('d-none');
    }
  });

  // Close mobile menu when clicking a link
  for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener('click', () => {
      smallMenu.classList.remove('header__sm-menu--active');
      headerHamMenuBtn.classList.remove('d-none');
      headerHamMenuCloseBtn.classList.add('d-none');
    });
  }

  // Logo/site title click to home
  const headerLogoContainer = document.querySelector('.header__logo-container');
  headerLogoContainer.addEventListener('click', () => {
    location.href = 'index.html';
  });

  // NEW CODE: Hide header on scroll down, show on scroll up
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;
  let scrollingTimer;

  // Only apply scroll behavior on mobile devices
  function handleScroll() {
    // Check if viewport width is mobile-sized
    if (window.innerWidth <= 600) {
      // Current scroll position
      const currentScrollY = window.scrollY;
      
      // Don't hide header at the top of the page
      if (currentScrollY < 100) {
        header.classList.remove('header--hidden');
        lastScrollY = currentScrollY;
        return;
      }
      
      // Don't hide header when menu is open
      if (smallMenu.classList.contains('header__sm-menu--active')) {
        lastScrollY = currentScrollY;
        return;
      }
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        header.classList.add('header--hidden');
      } else {
        // Scrolling up - show header
        header.classList.remove('header--hidden');
      }
      
      lastScrollY = currentScrollY;
    }
  }

  // Add throttled scroll listener to improve performance
  window.addEventListener('scroll', () => {
    if (!scrollingTimer) {
      scrollingTimer = setTimeout(() => {
        handleScroll();
        scrollingTimer = null;
      }, 100);
    }
  });

  // Also handle resize events to apply/remove based on screen size
  window.addEventListener('resize', handleScroll);
  
  // Initial check
  handleScroll();



const typewriterElement = document.getElementById("typewriter-text");

const typewriterParagraphs = [
  `Hey! It's <strong>Harsh</strong> and I'm an <strong>Integrated BTech student</strong> located in Pune, India. I'm currently working on <strong>NLP & AI</strong> projects to strengthen, improve, and build my skills in <strong>AI</strong> and <strong>Machine Learning</strong>.`,
];

let paragraphIndex = 0;
let charIndex = 0;
const typingSpeed = 25;
const paragraphDelay = 1000;
const loopDelay = 2500;
let isInTag = false;

function typeParagraph() {
  const text = typewriterParagraphs[paragraphIndex];

  // Handle tag-based typing
  if (charIndex < text.length) {
    const currentChar = text.charAt(charIndex);

    if (currentChar === "<") {
      // Start reading an HTML tag
      isInTag = true;
    }

    if (isInTag) {
      // Append the entire tag until '>'
      const endTag = text.indexOf(">", charIndex);
      typewriterElement.innerHTML += text.slice(charIndex, endTag + 1);
      charIndex = endTag + 1;
      isInTag = false;
    } else {
      // Append a normal character
      typewriterElement.innerHTML += currentChar;
      charIndex++;
    }

    requestAnimationFrame(() => typeParagraph());
  } else {
    // Paragraph completed, move to next
    paragraphIndex++;

    if (paragraphIndex < typewriterParagraphs.length) {
      charIndex = 0;
      typewriterElement.innerHTML += "<br><br>";
      setTimeout(() => requestAnimationFrame(typeParagraph), paragraphDelay);
    } else {
      // All paragraphs finished, restart the cycle
      setTimeout(() => {
        typewriterElement.innerHTML = "";
        paragraphIndex = 0;
        charIndex = 0;
        requestAnimationFrame(typeParagraph);
      }, loopDelay);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(typeParagraph);
});






 // REVOLUTIONARY SKILLS CAROUSEL
// Enhanced with 3D effects, parallax, and interactive elements
// No HTML changes required - this works with your existing markup

// Apply these styles first to enhance the visual experience
const styleElement = document.createElement('style');
styleElement.textContent = `
  /* Advanced Skills Container */
  .skills {
    background: linear-gradient(125deg, #000000, #1a1a1a, #333333);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    padding: 8rem 2rem;
    position: relative;
    overflow: hidden;
    color: white;
    perspective: 1000px; /* 3D perspective */
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Cosmic particle overlay */
  .skills::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03) 0%, transparent 20%),
      radial-gradient(circle at 80% 30%, rgba(255,255,255,0.03) 0%, transparent 20%),
      radial-gradient(circle at 40% 70%, rgba(255,255,255,0.03) 0%, transparent 30%),
      radial-gradient(circle at 70% 80%, rgba(255,255,255,0.03) 0%, transparent 20%);
    pointer-events: none;
    z-index: 1;
  }

  /* Animated background lines */
  .skills::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.03) 95%, rgba(255,255,255,0.03) 96%, transparent 96%),
      linear-gradient(0deg, transparent 95%, rgba(255,255,255,0.03) 95%, rgba(255,255,255,0.03) 96%, transparent 96%);
    background-size: 50px 50px;
    opacity: 0.5;
    pointer-events: none;
    z-index: 1;
  }

  /* Enhanced 3D Track */
  .skills_track {
    display: flex;
    padding: 2rem 0;
    margin: 0;
    will-change: transform;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.2s ease-out;
  }

  /* Revolutionary Skill Item */
  .skill_item {
    flex: 0 0 auto;
    background: rgba(30, 30, 30, 0.6);
    color: #fff;
    padding: 1.8rem 2.2rem;
    border-radius: 20px;
    font-weight: 500;
    text-align: center;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    min-width: 150px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(8px);
    margin-right: 2rem;
    position: relative;
    overflow: hidden;
    border: 1px solid transparent;
    transform-style: preserve-3d;
    transform: translateZ(0);
  }

  .skill_item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(125deg, 
      rgba(255,255,255,0.1) 0%, 
      rgba(255,255,255,0.05) 20%, 
      rgba(255,255,255,0) 60%);
    opacity: 0.4;
    z-index: 0;
  }

  .skill_item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      rgba(100,255,218,0), 
      rgba(100,255,218,0.6), 
      rgba(100,255,218,0));
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 2;
  }

  .skill_item:hover {
    transform: translateY(-15px) translateZ(20px);
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.3);
    background: rgba(40, 40, 40, 0.6);
    border-color: rgba(100, 255, 218, 0.2);
  }

  .skill_item:hover::after {
    transform: scaleX(0.8);
  }

  /* Enhanced Skill Icon */
  .skill_icon {
    position: relative;
    z-index: 2;
    margin-bottom: 1rem;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4));
    transition: all 0.4s ease;
  }

  .skill_icon img {
    width: 50px;
    height: 50px;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: brightness(1.2);
  }

  .skill_item:hover .skill_icon img {
    transform: scale(1.3) translateY(-5px) rotate(8deg);
    filter: brightness(1.5) drop-shadow(0 8px 12px rgba(0, 0, 0, 0.5));
  }

  /* Dynamic glow effect */
  .skill_item:hover .skill_icon::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, rgba(100,255,218,0.3) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    z-index: -1;
    animation: pulse 1.5s infinite ease-out;
  }

  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
  }

  /* Advanced animation keyframes */
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }

  @keyframes shimmer {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }

  /* Responsive enhancements */
  @media (max-width: 768px) {
    .skill_item {
      min-width: 140px;
      padding: 1.5rem 1.8rem;
      margin-right: 1.5rem;
    }
  }

  @media (max-width: 576px) {
    .skill_item {
      min-width: 120px;
      padding: 1.2rem 1.5rem;
      margin-right: 1.2rem;
    }
  }

  /* Slide-in animations */
  .slide-in-from-bottom {
    animation: slideInFromBottom 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }
  
  .slide-in-from-left {
    animation: slideInFromLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }
  
  .slide-in-from-right {
    animation: slideInFromRight 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }
  
  @keyframes slideInFromBottom {
    0% { transform: translateY(60px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideInFromLeft {
    0% { transform: translateX(-60px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideInFromRight {
    0% { transform: translateX(60px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
`;
document.head.appendChild(styleElement);

// Revolutionary Infinite Carousel with 3D Effects and Parallax Scrolling
document.addEventListener('DOMContentLoaded', function() {
  // Create a particle background
  createParticleBackground();
  
  // Initialize the advanced carousel
  initAdvancedCarousel();
  
  // Initialize the card animations
  initProjectsCardAnimation();
});

// Create an amazing particle background effect
function createParticleBackground() {
  const skillsSection = document.querySelector('.skills');
  if (!skillsSection) return;
  
  // Create particle container
  const particleContainer = document.createElement('div');
  particleContainer.className = 'particle-container';
  particleContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  `;
  skillsSection.prepend(particleContainer);
  
  // Create particles
  const particleCount = Math.min(window.innerWidth / 12, 50);
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const speed = Math.random() * 1.5 + 0.5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
    
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1});
      border-radius: 50%;
      top: ${y}%;
      left: ${x}%;
      pointer-events: none;
      box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1});
      animation: floatParticle ${speed + 3}s ease-in-out infinite;
      animation-delay: -${delay}s;
      opacity: ${Math.random() * 0.6 + 0.2};
    `;
    
    particleContainer.appendChild(particle);
  }
  
  // Add the floating animation
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes floatParticle {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
      50% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
      75% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
    }
  `;
  document.head.appendChild(styleSheet);
}

// Initialize the advanced carousel with dynamic effects
function initAdvancedCarousel() {
  const track = document.querySelector(".skills_track");
  if (!track) return;
  
  const skillItems = document.querySelectorAll(".skill_item");
  if (!skillItems.length) return;
  
  // Initialize variables
  let scrollPosition = 0;
  let scrollSpeed = 0.6; // Base speed
  let scrollPaused = false;
  let mouseOver = false;
  let mousePosX = 0;
  let totalWidth = 0;
  let carouselInitialized = false;
  let skillsSpeedMultiplier = 1;
  
  // Calculate total carousel width
  skillItems.forEach(item => {
    const itemWidth = item.offsetWidth;
    const marginRight = parseInt(window.getComputedStyle(item).marginRight);
    totalWidth += itemWidth + marginRight;
  });
  
  // Add hover effect to each skill item with 3D parallax
  skillItems.forEach((item, index) => {
    // Add mousemove event for 3D effect
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate rotation based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      // Apply 3D transform
      item.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(20px)
        scale(1.05)
      `;
      
      // Dynamic highlight based on mouse position
      const highlight = document.createElement('div');
      highlight.className = 'dynamic-highlight';
      highlight.style.cssText = `
        position: absolute;
        top: ${y - 50}px;
        left: ${x - 50}px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: 1;
        transition: all 0.3s ease;
      `;
      
      // Remove any existing highlights
      const existingHighlights = item.querySelectorAll('.dynamic-highlight');
      existingHighlights.forEach(el => el.remove());
      
      item.appendChild(highlight);
      
      // Disable the auto scroll when hovering
      mouseOver = true;
      scrollPaused = true;
    });
    
    // Reset transform on mouseout
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
      
      // Remove dynamic highlights
      const highlights = item.querySelectorAll('.dynamic-highlight');
      highlights.forEach(highlight => {
        highlight.style.opacity = '0';
        setTimeout(() => highlight.remove(), 300);
      });
      
      // Resume scrolling
      mouseOver = false;
      setTimeout(() => {
        if (!mouseOver) {
          scrollPaused = false;
        }
      }, 500);
    });
    
    // Add a subtle float animation with unique timing for each item
    item.style.animation = `float ${5 + index % 3}s ease-in-out infinite`;
    item.style.animationDelay = `${index * 0.2}s`;
  });
  
  // Set up the infinite scroll
  function setupAdvancedInfiniteScroll() {
    if (carouselInitialized) return;
    
    // Clone items in a smarter way
    const viewportWidth = window.innerWidth;
    const requiredSets = Math.ceil((viewportWidth * 3) / totalWidth) + 1;
    
    // Clear existing clones
    const existingClones = track.querySelectorAll('.skill_item-clone');
    existingClones.forEach(clone => clone.remove());
    
    // Create enough clones for smooth infinite scrolling
    for (let i = 0; i < requiredSets; i++) {
      skillItems.forEach((item, index) => {
        const clone = item.cloneNode(true);
        clone.classList.add('skill_item-clone');
        
        // Add the same 3D interactive effect to clones
        clone.addEventListener('mousemove', (e) => {
          const rect = clone.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          clone.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(20px)
            scale(1.05)
          `;
          
          mouseOver = true;
          scrollPaused = true;
        });
        
        clone.addEventListener('mouseleave', () => {
          clone.style.transform = '';
          mouseOver = false;
          setTimeout(() => {
            if (!mouseOver) {
              scrollPaused = false;
            }
          }, 500);
        });
        
        // Add float animation with unique timing
        clone.style.animation = `float ${5 + (index + i) % 3}s ease-in-out infinite`;
        clone.style.animationDelay = `${(index + i) * 0.2}s`;
        
        track.appendChild(clone);
      });
    }
    
    carouselInitialized = true;
  }
  
  // Parallax scrolling effect
  const skillsSection = document.querySelector('.skills_section');
  
  if (skillsSection) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      const sectionTop = skillsSection.offsetTop;
      const sectionHeight = skillsSection.offsetHeight;
      
      // Check if the section is in view
      if (scrollPos + window.innerHeight > sectionTop && 
          scrollPos < sectionTop + sectionHeight) {
        // Calculate how far the section is in view
        const viewportPosition = (scrollPos + window.innerHeight - sectionTop) / (window.innerHeight + sectionHeight);
        
        // Adjust scroll speed based on viewport position
        skillsSpeedMultiplier = 1 + (viewportPosition * 0.5);
      }
    });
  }
  
  // Add mouse-controlled speed
  const carousel = document.querySelector('.skills_carousel');
  
  if (carousel) {
    carousel.addEventListener('mousemove', (e) => {
      const carouselWidth = carousel.offsetWidth;
      const mouseX = e.clientX - carousel.getBoundingClientRect().left;
      mousePosX = mouseX;
      
      // Calculate the speed based on mouse position
      // Center of carousel = normal speed, edges = faster
      const centerX = carouselWidth / 2;
      const distanceFromCenter = mousePosX - centerX;
      const speedFactor = distanceFromCenter / centerX;
      
      // Only change direction when mouse is near edges
      if (Math.abs(speedFactor) > 0.5) {
        scrollSpeed = 0.8 * speedFactor;
      } else {
        scrollSpeed = 0.6; // Default speed
      }
    });
  }
  
  // Advanced animation loop with smoother transitions
  function advancedAnimateCarousel() {
    if (!scrollPaused) {
      // Apply the current speed and update position
      scrollPosition += scrollSpeed * skillsSpeedMultiplier;
      
      // Reset when scrolled past first complete set
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      // Handle backwards scrolling
      if (scrollPosition < 0) {
        scrollPosition = totalWidth;
      }
      
      // Apply smoother transform with easing
      track.style.transform = `translateX(-${scrollPosition}px)`;
    }
    
    requestAnimationFrame(advancedAnimateCarousel);
  }
  
  // Set up and start the carousel
  setupAdvancedInfiniteScroll();
  advancedAnimateCarousel();
  
  // Optimize for window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    
    resizeTimeout = setTimeout(() => {
      // Recalculate totalWidth
      totalWidth = 0;
      skillItems.forEach(item => {
        const itemWidth = item.offsetWidth;
        const marginRight = parseInt(window.getComputedStyle(item).marginRight);
        totalWidth += itemWidth + marginRight;
      });
      
      // Reset the carousel
      carouselInitialized = false;
      setupAdvancedInfiniteScroll();
    }, 250);
  });
}

// Enhanced project cards animation - completely different from your friend's
function initProjectsCardAnimation() {
  const cards = document.querySelectorAll('.projects__card');
  if (!cards.length) return;
  
  // Create a custom animation sequence
  const animations = [
    'fade-and-scale',
    'slide-and-rotate',
    'zoom-and-flip',
    'bounce-and-fade'
  ];
  
  // Add custom animation styles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    .projects__card {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    
    .fade-and-scale {
      animation: fadeAndScale 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    
    .slide-and-rotate {
      animation: slideAndRotate 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    
    .zoom-and-flip {
      animation: zoomAndFlip 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }
    
    .bounce-and-fade {
      animation: bounceAndFade 1.1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    }
    
    @keyframes fadeAndScale {
      0% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes slideAndRotate {
      0% { opacity: 0; transform: translateX(-100px) rotate(-5deg); }
      100% { opacity: 1; transform: translateX(0) rotate(0); }
    }
    
    @keyframes zoomAndFlip {
      0% { opacity: 0; transform: scale(0.5) rotateY(90deg); }
      100% { opacity: 1; transform: scale(1) rotateY(0); }
    }
    
    @keyframes bounceAndFade {
      0% { opacity: 0; transform: translateY(100px); }
      60% { opacity: 1; transform: translateY(-20px); }
      80% { transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(styleSheet);
  
  // Create Intersection Observer with enhanced options
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        // Add custom delay based on Fibonacci sequence for natural feel
        const fibSequence = [0, 1, 1, 2, 3, 5, 8];
        const delayIndex = index % fibSequence.length;
        const delay = fibSequence[delayIndex] * 100;
        
        // Apply random animation with staggered delay
        setTimeout(() => {
          card.classList.add(randomAnimation);
        }, delay);
        
        observer.unobserve(card);
      }
    });
  }, observerOptions);
  
  // Observe each card
  cards.forEach(card => {
    observer.observe(card);
  });
}



document.addEventListener('DOMContentLoaded', () => {
  // Select all project cards
  const projectCards = document.querySelectorAll('.projects__card');
  
  // Add click event listeners to all cards
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Only trigger if they didn't click on the button
      if (!e.target.classList.contains('projects__card-btn')) {
        // Get the position of the click
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Get the card type to match confetti colors
        let colors;
        if (card.classList.contains('projects__card--ml')) {
          colors = ['#00bcd4', '#80deea', '#007c91'];
        } else if (card.classList.contains('projects__card--python')) {
          colors = ['#4caf50', '#a5d6a7', '#2e7d32'];
        } else if (card.classList.contains('projects__card--nlp')) {
          colors = ['#9c27b0', '#e1bee7', '#6a0080'];
        } else if (card.classList.contains('projects__card--web')) {
          colors = ['#ff5722', '#ffccbc', '#c41c00'];
        } else if (card.classList.contains('projects__card--data')) {
          colors = ['#3f51b5', '#c5cae9', '#1a237e'];
        } else {
          colors = ['#ffffff', '#dddddd'];
        }
        
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x, y },
          colors: colors,
          disableForReducedMotion: true
        });
      }
    });
  });
});


      document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('resumeBtn');
        const particles = document.querySelector('.particles');
        
        // Create particle elements
        for (let i = 0; i < 15; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particles.appendChild(particle);
        }
        
        // Button click effect with particles
        button.addEventListener('click', (e) => {
          // Prevent immediate navigation to allow animation
          e.preventDefault();
          
          // Create ripple effect
          const x = e.clientX - button.getBoundingClientRect().left;
          const y = e.clientY - button.getBoundingClientRect().top;
          
          const ripple = document.createElement('span');
          ripple.style.position = 'absolute';
          ripple.style.width = '1px';
          ripple.style.height = '1px';
          ripple.style.borderRadius = '50%';
          ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
          ripple.style.transform = 'scale(0)';
          ripple.style.left = `${x}px`;
          ripple.style.top = `${y}px`;
          ripple.style.animation = 'ripple 0.6s linear';
          button.appendChild(ripple);
          
          // Animate particles
          const particleElements = document.querySelectorAll('.particle');
          particleElements.forEach(particle => {
            // Random position within button
            const px = Math.random() * button.offsetWidth;
            const py = Math.random() * button.offsetHeight;
            
            // Random direction
            const vx = (Math.random() - 0.5) * 20;
            const vy = (Math.random() - 0.5) * 20;
            
            // Set initial position
            particle.style.left = `${px}px`;
            particle.style.top = `${py}px`;
            particle.style.opacity = '1';
            
            // Animate
            let posX = px;
            let posY = py;
            
            const animate = () => {
              posX += vx;
              posY += vy;
              
              particle.style.left = `${posX}px`;
              particle.style.top = `${posY}px`;
              particle.style.opacity = parseFloat(particle.style.opacity) - 0.02;
              
              if (parseFloat(particle.style.opacity) > 0) {
                requestAnimationFrame(animate);
              } else {
                particle.style.opacity = '0';
              }
            };
            
            requestAnimationFrame(animate);
          });
          
          // Trigger download after animation
          setTimeout(() => {
            // Create a temporary anchor element
            const downloadLink = document.createElement('a');
            downloadLink.href = './assets/png/resume.png';
            downloadLink.download = 'Harsh_Gidwani_Resume.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          }, 600);
        });
    
        // Add hover effect
        button.addEventListener('mousemove', (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left; 
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const angleX = (x - centerX) / centerX * 10;
          const angleY = (y - centerY) / centerY * 10;
          
          button.style.transform = `perspective(1000px) rotateX(${-angleY}deg) rotateY(${angleX}deg) translateY(-3px)`;
        });
        
        button.addEventListener('mouseleave', () => {
          button.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
        
        // Keyboard shortcut
        document.addEventListener('keydown', function(e) {
          if (e.key === 'r' && e.ctrlKey) {
            e.preventDefault();
            button.click();
          }
        });
      });
   
      


// Dark Theme Particle Animation
// Add this HTML element to your page (right after the body tag):
// <canvas id="particleCanvas"></canvas>
//
// Add this CSS to ensure the canvas covers the whole page:
// #particleCanvas {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   pointer-events: none;
// }

// Immediately-invoked function expression to ensure it runs on every page
(function() {
  // Function to initialize particle effect
  function initParticleEffect() {
    // Create canvas if it doesn't exist
    let canvas = document.getElementById('particleCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'particleCanvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '-1';
      canvas.style.pointerEvents = 'none';
      document.body.prepend(canvas);
    }

  const ctx = canvas.getContext('2d');
  
  // Set canvas to full window size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Mouse tracking
  const mouse = {
    x: undefined,
    y: undefined,
    radius: 150
  };
  
  window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });
  
  // Particle class
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.baseX = this.x;
      this.baseY = this.y;
      this.size = Math.random() * 3 + 1;
      this.density = (Math.random() * 20) + 5;
      this.color = this.getRandomColor();
      this.angle = Math.random() * Math.PI * 2;
      this.velocity = 0.05;
    }
    
    getRandomColor() {
      // Colors that work well with dark background
      const colors = [
        'rgba(255, 255, 255, 0.7)',  // White
        'rgba(176, 224, 230, 0.6)',  // Powder Blue
        'rgba(135, 206, 250, 0.6)',  // Light Sky Blue
        'rgba(100, 255, 218, 0.6)',  // Aqua
        'rgba(147, 112, 219, 0.5)',  // Medium Purple
        'rgba(153, 102, 204, 0.5)'   // Amethyst
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    
    update() {
      // Mouse repulsion
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      
      // Distance past which particles are not affected
      const maxDistance = mouse.radius;
      const force = (maxDistance - distance) / maxDistance;
      
      // If mouse is close enough, move particles away
      if (distance < maxDistance && mouse.x !== undefined) {
        const directionX = forceDirectionX * force * this.density * -1;
        const directionY = forceDirectionY * force * this.density * -1;
        this.x += directionX;
        this.y += directionY;
      } else {
        // Drift effect when mouse is far
        this.angle += this.velocity;
        this.x = this.baseX + Math.cos(this.angle) * 15;
        this.y = this.baseY + Math.sin(this.angle) * 15;
        
        // Return to original position
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX;
          this.x -= dx/20;
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY;
          this.y -= dy/20;
        }
      }
      
      this.draw();
    }
  }
  
  // Create particles
  
  
  
  
  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Optional: Add a subtle gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(10, 10, 20, 0.8)');
    gradient.addColorStop(1, 'rgba(5, 5, 15, 0.8)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
    
    connect();
    requestAnimationFrame(animate);
  }
  
  // Initialize and start animation
  init();
  animate();
  
  // Re-initialize particles when window is resized
  window.addEventListener('resize', function() {
    resizeCanvas();
    init();
  });
  
  // Check if particles should be reinitialized on page navigation (for SPAs)
  if (window.MutationObserver) {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Reinitialize particles when content changes significantly
          resizeCanvas();
          init();
        }
      });
    });
    
    // Observe changes to the body element
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

// Run the initialization function
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParticleEffect);
} else {
  initParticleEffect();
}

// Handle navigation events for SPAs
window.addEventListener('popstate', function() {
  setTimeout(function() {
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
      resizeCanvas();
      init();
    } else {
      initParticleEffect();
    }
  }, 100);
});

// Add script to head to ensure it loads early
if (typeof window !== 'undefined') {
  const scriptTag = document.createElement('script');
  scriptTag.textContent = '(' + arguments.callee.toString() + ')();';
  document.head.appendChild(scriptTag);
}
})();










// Fix for existing Back to Top button
document.addEventListener('DOMContentLoaded', function() {
  // Add CSS to properly position the existing Back to Top button
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Fix for Footer and Back to Top Button */
    .footer__bottom {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 20px 0;
      z-index: 10;
    }
    
    .footer__scroll-container {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
    }
    
    .footer__scroll-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #64ffda;
      opacity: 0.8;
      transition: all 0.3s ease;
    }
    
    .footer__scroll-top:hover {
      opacity: 1;
      transform: translateY(-5px);
    }
    
    .footer__scroll-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(30, 30, 30, 0.6);
      border-radius: 50%;
      margin-bottom: 8px;
      border: 1px solid rgba(100, 255, 218, 0.2);
      transition: all 0.3s ease;
    }
    
    .footer__scroll-top:hover .footer__scroll-icon {
      background: rgba(40, 40, 40, 0.8);
      border-color: rgba(100, 255, 218, 0.5);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    
    .footer__scroll-icon svg {
      width: 20px;
      height: 20px;
      stroke: #64ffda;
    }
    
    .footer__scroll-top span {
      font-size: 14px;
      font-weight: 500;
    }
    
    /* Make sure the footer is positioned correctly */
    footer, .footer {
      position: relative;
      z-index: 10;
    }
  `;
  document.head.appendChild(styleElement);
});

















































