(() => {
  const iconLibrary = window.lucide;

  function renderIcons() {
    if (iconLibrary) {
      iconLibrary.createIcons();
    }
  }

  function setupTheme() {
    const buttons = document.querySelectorAll('[data-theme-toggle]');
    const setButtonState = () => {
      const isDark = document.documentElement.classList.contains('dark');
      buttons.forEach((button) => {
        button.setAttribute('aria-label', isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
        button.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}" class="h-[18px] w-[18px]"></i>`;
      });
      renderIcons();
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        try {
          localStorage.setItem('ikonik-theme', isDark ? 'dark' : 'light');
        } catch (error) {
          console.warn('Pilihan tema tidak dapat disimpan.', error);
        }
        setButtonState();
      });
    });

    setButtonState();
  }

  function setupHeader() {
    const header = document.querySelector('[data-header]');
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.querySelector('#mobile-menu');

    const updateHeader = () => {
      if (header) {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
      }
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isExpanded));
        menuToggle.setAttribute('aria-label', isExpanded ? 'Buka menu' : 'Tutup menu');
        mobileMenu.classList.toggle('hidden', isExpanded);
        menuToggle.innerHTML = `<i data-lucide="${isExpanded ? 'menu' : 'x'}" class="h-5 w-5"></i>`;
        renderIcons();
      });

      mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute('aria-label', 'Buka menu');
          mobileMenu.classList.add('hidden');
          menuToggle.innerHTML = '<i data-lucide="menu" class="h-5 w-5"></i>';
          renderIcons();
        });
      });
    }
  }

  function setupSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) {
          return;
        }
        event.preventDefault();
        const header = document.querySelector('[data-header]');
        const offset = header ? header.getBoundingClientRect().height + 12 : 12;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        history.replaceState(null, '', link.getAttribute('href'));
      });
    });
  }

  function setupReveal() {
    const elements = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
  }

  function setupCarousels() {
    const carousels = document.querySelectorAll('[data-carousel]');
    if (!carousels.length) {
      return;
    }

    let verticalScrollTimer;
    let lastVerticalScroll = 0;
    window.addEventListener('scroll', () => {
      lastVerticalScroll = Date.now();
      window.clearTimeout(verticalScrollTimer);
      verticalScrollTimer = window.setTimeout(() => {
        lastVerticalScroll = 0;
      }, 180);
    }, { passive: true });

    carousels.forEach((carousel) => {
      const cards = Array.from(carousel.children);
      const dotsContainer = carousel.parentElement.querySelector('[data-dots]');
      let activeIndex = 0;
      let timer;
      let resumeTimer;
      let isVisible = false;
      let isPaused = false;

      const isMobile = () => window.innerWidth < 640;
      const cardCenter = (card) => carousel.scrollLeft + card.getBoundingClientRect().left - carousel.getBoundingClientRect().left + card.offsetWidth / 2;
      const nearestIndex = () => {
        const center = carousel.scrollLeft + carousel.clientWidth / 2;
        return cards.reduce((nearest, card, index) => {
          const currentDistance = Math.abs(cardCenter(cards[nearest]) - center);
          return Math.abs(cardCenter(card) - center) < currentDistance ? index : nearest;
        }, 0);
      };

      const updateDots = (index) => {
        activeIndex = index;
        if (dotsContainer) {
          dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, dotIndex) => {
            dot.setAttribute('aria-current', String(dotIndex === index));
          });
        }
      };

      if (dotsContainer) {
        cards.forEach((card, index) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'carousel-dot';
          dot.setAttribute('aria-label', `Tampilkan kartu ${index + 1}`);
          dot.setAttribute('aria-current', String(index === 0));
          dot.addEventListener('click', () => {
            const left = carousel.scrollLeft + cardCenter(card) - carousel.clientWidth / 2;
            carousel.scrollTo({ left, behavior: 'smooth' });
            updateDots(index);
          });
          dotsContainer.appendChild(dot);
        });
      }

      const stopTimer = () => {
        window.clearInterval(timer);
        timer = undefined;
      };

      const startTimer = () => {
        stopTimer();
        if (!isMobile() || !isVisible || isPaused) {
          return;
        }
        timer = window.setInterval(() => {
          if (Date.now() - lastVerticalScroll < 180) {
            return;
          }
          const nextIndex = (nearestIndex() + 1) % cards.length;
          const card = cards[nextIndex];
          const left = carousel.scrollLeft + cardCenter(card) - carousel.clientWidth / 2;
          carousel.scrollTo({ left, behavior: 'smooth' });
          updateDots(nextIndex);
        }, 3500);
      };

      const pauseAndResume = () => {
        isPaused = true;
        stopTimer();
        window.clearTimeout(resumeTimer);
        resumeTimer = window.setTimeout(() => {
          isPaused = false;
          startTimer();
        }, 4000);
      };

      carousel.addEventListener('scroll', () => {
        updateDots(nearestIndex());
      }, { passive: true });
      carousel.addEventListener('touchstart', pauseAndResume, { passive: true });
      carousel.addEventListener('pointerdown', pauseAndResume, { passive: true });
      carousel.addEventListener('touchend', pauseAndResume, { passive: true });
      carousel.addEventListener('pointerup', pauseAndResume, { passive: true });
      carousel.addEventListener('pointercancel', pauseAndResume, { passive: true });

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.6;
            if (isVisible) {
              startTimer();
            } else {
              stopTimer();
            }
          });
        }, { threshold: 0.6 });
        observer.observe(carousel);
      } else {
        isVisible = true;
        startTimer();
      }

      window.addEventListener('resize', startTimer, { passive: true });
    });
  }

          

          

  function setupPortfolioFilters() {
    const filters = document.querySelectorAll('[data-filter]');
    const cards = document.querySelectorAll('[data-category]');
    if (!filters.length || !cards.length) {
      return;
    }

    filters.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filters.forEach((filterButton) => {
          const isActive = filterButton === button;
          filterButton.classList.toggle('active', isActive);
          filterButton.setAttribute('aria-pressed', String(isActive));
        });
        cards.forEach((card) => {
          const visible = filter === 'all' || card.dataset.category === filter;
          card.hidden = !visible;
          if (visible) {
            card.classList.add('is-visible');
          }
        });
      });
    });
  }

  function setupYear() {
    document.querySelectorAll('[data-current-year]').forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderIcons();
    setupTheme();
    setupHeader();
    setupSmoothAnchors();
    setupReveal();
    setupCarousels();
          
    setupPortfolioFilters();
    setupYear();
  });
})();
