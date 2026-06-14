document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Scroll Event for Navbar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggling
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
      } else {
        mobileMenu.classList.add('open');
        mobileMenuBtn.innerHTML = '<i data-lucide="x"></i>';
      }
      lucide.createIcons();
    });

    // Close menu when clicking links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
      });
    });
  }

  // Credentials Modal Logic
  const modalOverlay = document.getElementById('cert-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalSub = document.getElementById('modal-sub');
  const modalBody = document.getElementById('modal-body');
  const modalLink = document.getElementById('modal-link');

  const certCards = document.querySelectorAll('.cert-card');

  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const sub = card.getAttribute('data-sub');
      const file = card.getAttribute('data-file');
      const type = card.getAttribute('data-type');

      modalTitle.textContent = title;
      modalSub.textContent = sub;
      modalLink.setAttribute('href', file);

      if (type === 'pdf') {
        modalBody.innerHTML = `<iframe src="${file}#toolbar=0&view=FitH" height="500px" style="border: none; width: 100%;"></iframe>`;
      } else {
        modalBody.innerHTML = `<img src="${file}" alt="${title}" style="width: 100%; height: auto; max-height: 500px; object-fit: contain; background: #000; display: block;" />`;
      }

      modalOverlay.classList.add('open');
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    modalBody.innerHTML = '';
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Animated Stats Counter via Intersection Observer
  const statsSection = document.getElementById('hero');
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateCounter = (element) => {
    const target = parseFloat(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 1500; // 1.5 seconds
    const start = 0;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = progress * target;
      
      if (suffix === 'M+') {
        element.textContent = currentValue.toFixed(1) + suffix;
      } else {
        element.textContent = Math.floor(currentValue).toLocaleString() + suffix;
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statNumbers.forEach(num => animateCounter(num));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(statsSection);
  }
});
