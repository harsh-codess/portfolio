// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'

  
})



  const typewriterElement = document.getElementById("typewriter-text");

  const typewriterParagraphs = [
    `Hey! It's <strong>Harsh</strong> and I'm an <strong>Integrated BTech student</strong> located in Pune, India. I'm currently working on <strong>NLP & AI</strong> projects to strengthen, improve, and build my skills in <strong>AI</strong> and <strong>Machine Learning</strong>.`,
    
  ];

  let paragraphIndex = 0;
  let charIndex = 0;
  const typingSpeed = 25;
  const paragraphDelay = 1000;
  const loopDelay = 2500;

  function typeParagraph() {
    const text = typewriterParagraphs[paragraphIndex];

    if (charIndex < text.length) {
      const currentChar = text.charAt(charIndex);

      if (currentChar === "<") {
        const endTag = text.indexOf(">", charIndex);
        typewriterElement.innerHTML += text.slice(charIndex, endTag + 1);
        charIndex = endTag + 1;
      } else {
        typewriterElement.innerHTML += currentChar;
        charIndex++;
      }

      setTimeout(typeParagraph, typingSpeed);
    } else {
      paragraphIndex++;

      if (paragraphIndex < typewriterParagraphs.length) {
        charIndex = 0;
        typewriterElement.innerHTML += "<br><br>";
        setTimeout(typeParagraph, paragraphDelay);
      } else {
        setTimeout(() => {
          typewriterElement.innerHTML = "";
          paragraphIndex = 0;
          charIndex = 0;
          typeParagraph();
        }, loopDelay);
      }
    }
  }

  window.addEventListener("DOMContentLoaded", typeParagraph);





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

  






