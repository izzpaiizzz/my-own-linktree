/*Efek Typing Agak Ganteng*/

document.addEventListener('DOMContentLoaded', () => {
  const text = "Student of SMK Talenta Bangsa";
  const speed = 70;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

  const card = document.querySelector('.card');

  /*Efek Tilt Kartu (Yang Ini AI Wkwkwk)*/
  
  /*!!card.addEventListener('mousemove', (e) => {
    if (e.target.closest('.footer-links, .links, .theme-switch-container')) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      return;
    }
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });

  card.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const targetEl = document.elementFromPoint(touch.clientX, touch.clientY) || e.target;
    if (targetEl && targetEl.closest('.footer-links, .links, .theme-switch-container')) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      return;
    }
    const rect = card.getBoundingClientRect();
    const x = touch.clientX - rect.left - rect.width / 2;
    const y = touch.clientY - rect.top - rect.height / 2;

    card.style.transform = `perspective(1000px) rotateX(${-y / 12}deg) rotateY(${x / 12}deg)`;
  });

  card.addEventListener('touchend', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });

  const interactiveElements = document.querySelectorAll('.footer-links, .links, .theme-switch-container');
  interactiveElements.forEach(el => {
    ['mousemove', 'touchstart', 'touchmove', 'pointermove'].forEach(evt => {
      el.addEventListener(evt, (e) => {
        e.stopPropagation();
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
    });
  });*/ /*Gw matiin dulu,banyak bug*/
  
  /*Fitur Speed / Eminem Mode*/
  
  const toggleSwitch = document.querySelector('#theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    toggleSwitch.checked = false;
  } else {
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});
