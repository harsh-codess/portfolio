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






  // Enhanced infinite scroll carousel
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector(".skills_track");
  const skillItems = document.querySelectorAll(".skill_item");
  
  // Variables for the animation
  const scrollSpeed = 0.8; // Speed of scrolling
  let scrollPosition = 0;
  let totalWidth = 0;
  let initialSetupDone = false;

  // Calculate total width of original items
  skillItems.forEach(item => {
    totalWidth += item.offsetWidth + parseInt(window.getComputedStyle(item).marginRight);
  });

  // Clone enough items to ensure smooth infinite scrolling
  function setupInfiniteScroll() {
    if (initialSetupDone) return;
    
    // Clear existing clones to prevent duplication if function runs multiple times
    const existingClones = track.querySelectorAll('.skill_item-clone');
    existingClones.forEach(clone => clone.remove());
    
    // Create enough clones to fill the screen at least twice
    const viewportWidth = window.innerWidth;
    const requiredSets = Math.ceil((viewportWidth * 3) / totalWidth);
    
    for (let i = 0; i < requiredSets; i++) {
      skillItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.classList.add('skill_item-clone');
        track.appendChild(clone);
      });
    }
    
    // Position track initially to show first set of items
    scrollPosition = 0;
    track.style.transform = `translateX(0px)`;
    
    initialSetupDone = true;
  }

  // Animate the carousel - truly infinite loop
  function animateCarousel() {
    // Move the track
    scrollPosition += scrollSpeed;
    
    // When the first complete set of items is scrolled out, reset position
    if (scrollPosition >= totalWidth) {
      // Reset position to create seamless loop
      scrollPosition = 0;
    }
    
    track.style.transform = `translateX(-${scrollPosition}px)`;
    requestAnimationFrame(animateCarousel);
  }

  // Set up the carousel
  setupInfiniteScroll();
  
  // Start animation
  animateCarousel();
  
  // Handle window resize
  window.addEventListener('resize', function() {
    // Recalculate on major resizes
    if (!initialSetupDone) {
      setupInfiniteScroll();
    }
  });
});
  






