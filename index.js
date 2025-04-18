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






  const track = document.querySelector(".skills_track");
  const skillItems = document.querySelectorAll(".skill_item");
  const scrollSpeed = 0.8; // Faster speed
  
  // Duplicate content
  skillItems.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
  
  // Set the scroll amount
  let scrollAmount = 0;
  
  // Animate the carousel
  function scrollCarousel() {
    scrollAmount += scrollSpeed;
  
    // When scroll hits half, reset without visible jump
    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
    }
  
    track.style.transform = `translateX(-${scrollAmount}px)`;
  
    requestAnimationFrame(scrollCarousel);
  }
  
  scrollCarousel();

  






