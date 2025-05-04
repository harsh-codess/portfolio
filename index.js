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
  

document.addEventListener('DOMContentLoaded', () => {
  // Select all project cards
  const cards = document.querySelectorAll('.projects__card');
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      // If the card is visible
      if (entry.isIntersecting) {
        // Apply different animations based on card position
        // This creates a more interesting staggered effect
        const card = entry.target;
        
        // Delay based on card index for staggered appearance
        setTimeout(() => {
          // Pick different animation directions alternating by position or randomly
          const position = index % 3;
          
          if (position === 0) {
            card.classList.add('slide-in-from-left');
          } else if (position === 1) {
            card.classList.add('slide-in-from-right');
          } else {
            card.classList.add('slide-in-from-bottom');
          }
        }, index * 150); 
        
        observer.unobserve(card);
      }
    });
  }, {
    
    threshold: 0.1,
  
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe each card
  cards.forEach(card => {
    observer.observe(card);
  });
});




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
   
      


