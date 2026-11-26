(() => {
  const iconLibrary = window.lucide;
  const LANG_STORAGE_KEY = 'ikonik-lang';

  const translations = {
    id: {
      'meta.home.title': 'IKONIK. — Arsitek, Kontraktor & Interior Malang',
      'meta.portfolio.title': 'Portofolio — IKONIK. Malang',
      'meta.services.title': 'Layanan — IKONIK. Malang',

      'nav.about': 'Tentang',
      'nav.work': 'Pekerjaan',
      'nav.portfolio': 'Portofolio',
      'nav.services': 'Layanan',
      'nav.trackRecord': 'Rekam Jejak',

      'cta.consultWa': 'Konsultasi via WA',
      'cta.exploreProjects': 'Jelajahi proyek',
      'cta.discussProject': 'Diskusikan proyek',
      'cta.consultNeeds': 'Konsultasikan kebutuhan',

      'hero.kicker': 'INTERIOR <span>•</span> KONTRAKTOR <span>•</span> ARSITEK',
      'hero.tagline': 'Merancang ruang yang bermakna.<br>Membangun dengan ketelitian.',
      'hero.viewPortfolio': 'Lihat Portofolio',

      'about.eyebrow': 'TENTANG KAMI',
      'about.heading': 'HALO, KAMI<br>DARI IKONIK',
      'about.body': 'IKONIK adalah jasa kontraktor, arsitek, dan desain interior di Malang. Kami membantu mewujudkan hunian, kantor, dan ruang komersial—mulai dari perencanaan desain hingga pembangunan dan pengerjaan interior.',

      'work.eyebrow': 'PILIHAN LAYANAN',
      'work.heading': 'PEKERJAAN<br>KAMI',
      'work.service1': 'Arsitektur & Gambar 3D',
      'work.service2': 'Kontraktor Bangun & Renovasi',
      'work.service3': 'Interior & Custom Furniture',

      'exp.eyebrow': 'WORK EXPERIENCE',
      'exp.heading': 'REKAM<br>JEJAK',
      'exp.body': 'Pengalaman lapangan kami mencakup bangunan komersial, area konstruksi, renovasi eksterior, dan pengerjaan interior. Setiap proyek dimulai dengan ruang lingkup yang jelas dan komunikasi yang terbuka.',
      'exp.card1': 'Konstruksi & Gudang',
      'exp.card2': 'Arsitektur & Renovasi Eksterior',

      'portfolio.eyebrow': 'IKONIK / PILIHAN PROYEK',
      'portfolio.heading': 'PORTOFOLIO',
      'portfolio.subtitle': 'Beberapa ruang dan bangunan yang merepresentasikan pekerjaan kami di Malang.',
      'portfolio.filter.all': 'Semua',
      'portfolio.filter.architecture': 'Arsitektur & Bangun Baru',
      'portfolio.filter.construction': 'Konstruksi & Gudang',
      'portfolio.filter.renovation': 'Arsitektur & Renovasi Eksterior',
      'portfolio.filter.interior': 'Interior & Custom Furniture',
      'portfolio.item1.cat': 'ARSITEKTUR & BANGUN BARU',
      'portfolio.item1.title': 'Bangunan bertingkat',
      'portfolio.item1.desc': 'Perencanaan dan pelaksanaan bangunan dengan karakter modern.',
      'portfolio.item2.cat': 'KONSTRUKSI & GUDANG',
      'portfolio.item2.title': 'Area konstruksi',
      'portfolio.item2.desc': 'Penataan struktur gudang dan area operasional konstruksi.',
      'portfolio.item3.cat': 'ARSITEKTUR & RENOVASI EKSTERIOR',
      'portfolio.item3.title': 'Fasad komersial',
      'portfolio.item3.desc': 'Pengolahan fasad dan lanskap untuk lingkungan komersial.',
      'portfolio.item4.cat': 'INTERIOR & CUSTOM FURNITURE',
      'portfolio.item4.title': 'Panel dan detail interior',
      'portfolio.item4.desc': 'Panel dinding kayu custom yang menyatu dengan kebutuhan ruang.',

      'services.eyebrow': 'IKONIK / RUANG LINGKUP',
      'services.heading': 'LAYANAN',
      'services.subtitle': 'Satu tim untuk menerjemahkan kebutuhan ruang menjadi rencana, bangunan, dan interior yang berfungsi.',
      'services.s1.eyebrow': '01 / ARSITEKTUR',
      'services.s1.title': 'Arsitektur & Gambar 3D',
      'services.s1.desc': 'Perencanaan ruang dan bentuk bangunan yang dimulai dari kebutuhan pengguna dan kondisi lokasi.',
      'services.s1.li1': 'Denah tata ruang dan gambar kerja',
      'services.s1.li2': 'Visualisasi eksterior dan interior 3D',
      'services.s1.li3': 'Koordinasi kebutuhan struktur dan material',
      'services.s2.eyebrow': '02 / KONTRAKTOR',
      'services.s2.title': 'Kontraktor Bangun & Renovasi',
      'services.s2.desc': 'Pelaksanaan pembangunan dan renovasi hunian maupun ruang komersial dengan lingkup dan jadwal yang disepakati.',
      'services.s2.li1': 'Bangun baru dan pekerjaan struktur',
      'services.s2.li2': 'Renovasi ruang, fasad, dan bangunan',
      'services.s2.li3': 'Pekerjaan sipil serta finishing',
      'services.s3.eyebrow': '03 / INTERIOR',
      'services.s3.title': 'Interior & Custom Furniture',
      'services.s3.desc': 'Desain interior dan furnitur yang mempertimbangkan ukuran, alur aktivitas, serta karakter ruang.',
      'services.s3.li1': 'Kitchen set, wardrobe, dan meja kerja',
      'services.s3.li2': 'Custom wall panel dan partisi',
      'services.s3.li3': 'Produksi dan pemasangan furnitur',
      'services.cta.eyebrow': 'PUNYA RENCANA PROYEK?',
      'services.cta.heading': 'Mari mulai dari percakapan.',

      'footer.description': 'Arsitektur, konstruksi, dan interior untuk ruang hidup dan kerja di Malang.',
      'footer.exploreHeading': 'Jelajahi',
      'footer.aboutIkonik': 'Tentang IKONIK',
      'footer.visitHeading': 'Kunjungi IKONIK Malang',
      'footer.openMaps': 'Buka di Google Maps',
      'footer.rights': 'IKONIK. Hak cipta dilindungi.'
    },
    en: {
      'meta.home.title': 'IKONIK. — Architect, Contractor & Interior Design in Malang',
      'meta.portfolio.title': 'Portfolio — IKONIK. Malang',
      'meta.services.title': 'Services — IKONIK. Malang',

      'nav.about': 'About',
      'nav.work': 'Work',
      'nav.portfolio': 'Portfolio',
      'nav.services': 'Services',
      'nav.trackRecord': 'Track Record',

      'cta.consultWa': 'Consult via WA',
      'cta.exploreProjects': 'Explore projects',
      'cta.discussProject': 'Discuss project',
      'cta.consultNeeds': 'Consult your needs',

      'hero.kicker': 'INTERIOR <span>•</span> CONTRACTOR <span>•</span> ARCHITECT',
      'hero.tagline': 'Designing meaningful spaces.<br>Building with precision.',
      'hero.viewPortfolio': 'View Portfolio',

      'about.eyebrow': 'ABOUT US',
      'about.heading': 'HELLO, WE<br>ARE IKONIK',
      'about.body': 'IKONIK is an architecture, general contracting, and interior design studio in Malang. We bring residential, office, and commercial spaces to life—from initial design planning through construction and interior execution.',

      'work.eyebrow': 'SELECTED SERVICES',
      'work.heading': 'OUR<br>WORK',
      'work.service1': 'Architecture & 3D Visualization',
      'work.service2': 'Construction & Renovation',
      'work.service3': 'Interior & Custom Furniture',

      'exp.eyebrow': 'WORK EXPERIENCE',
      'exp.heading': 'TRACK<br>RECORD',
      'exp.body': 'Our field experience spans commercial buildings, construction sites, exterior renovations, and interior craftsmanship. Every project begins with a clear scope and transparent communication.',
      'exp.card1': 'Construction & Warehouse',
      'exp.card2': 'Architecture & Exterior Renovation',

      'portfolio.eyebrow': 'IKONIK / SELECTED PROJECTS',
      'portfolio.heading': 'PORTFOLIO',
      'portfolio.subtitle': 'Selected spaces and buildings representing our architectural and construction work in Malang.',
      'portfolio.filter.all': 'All',
      'portfolio.filter.architecture': 'Architecture & New Build',
      'portfolio.filter.construction': 'Construction & Warehouse',
      'portfolio.filter.renovation': 'Architecture & Exterior Renovation',
      'portfolio.filter.interior': 'Interior & Custom Furniture',
      'portfolio.item1.cat': 'ARCHITECTURE & NEW BUILD',
      'portfolio.item1.title': 'Multi-story building',
      'portfolio.item1.desc': 'Planning and execution of a multi-story building with modern architectural character.',
      'portfolio.item2.cat': 'CONSTRUCTION & WAREHOUSE',
      'portfolio.item2.title': 'Construction site',
      'portfolio.item2.desc': 'Structural layout of warehouse facilities and construction operational zones.',
      'portfolio.item3.cat': 'ARCHITECTURE & EXTERIOR RENOVATION',
      'portfolio.item3.title': 'Commercial facade',
      'portfolio.item3.desc': 'Facade treatment and landscaping tailored for a commercial environment.',
      'portfolio.item4.cat': 'INTERIOR & CUSTOM FURNITURE',
      'portfolio.item4.title': 'Interior panels & detailing',
      'portfolio.item4.desc': 'Custom timber wall paneling seamlessly integrated with spatial requirements.',

      'services.eyebrow': 'IKONIK / SCOPE OF WORK',
      'services.heading': 'SERVICES',
      'services.subtitle': 'One unified team translating spatial needs into functional plans, buildings, and interiors.',
      'services.s1.eyebrow': '01 / ARCHITECTURE',
      'services.s1.title': 'Architecture & 3D Visualization',
      'services.s1.desc': 'Spatial planning and architectural form rooted in user requirements and site conditions.',
      'services.s1.li1': 'Spatial floor plans and working drawings',
      'services.s1.li2': '3D exterior and interior visualizations',
      'services.s1.li3': 'Structural and material specification coordination',
      'services.s2.eyebrow': '02 / CONTRACTING',
      'services.s2.title': 'Construction & Renovation',
      'services.s2.desc': 'Execution of new builds and renovations for residential and commercial properties on an agreed scope and schedule.',
      'services.s2.li1': 'New construction and structural works',
      'services.s2.li2': 'Interior, facade, and full-building renovations',
      'services.s2.li3': 'Civil engineering and architectural finishing',
      'services.s3.eyebrow': '03 / INTERIOR',
      'services.s3.title': 'Interior & Custom Furniture',
      'services.s3.desc': 'Interior design and bespoke furniture tailored to proportions, workflow, and spatial character.',
      'services.s3.li1': 'Kitchen sets, wardrobes, and workstations',
      'services.s3.li2': 'Custom wall panels and spatial partitions',
      'services.s3.li3': 'Furniture fabrication and on-site installation',
      'services.cta.eyebrow': 'HAVE A PROJECT IN MIND?',
      'services.cta.heading': 'Let’s start with a conversation.',

      'footer.description': 'Architecture, construction, and interior design for living and working spaces in Malang.',
      'footer.exploreHeading': 'Explore',
      'footer.aboutIkonik': 'About IKONIK',
      'footer.visitHeading': 'Visit IKONIK Malang',
      'footer.openMaps': 'Open in Google Maps',
      'footer.rights': 'IKONIK. All rights reserved.'
    }
  };

  function renderIcons() {
    if (iconLibrary) {
      iconLibrary.createIcons();
    }
  }

  function applyLanguage(lang) {
    const activeLang = lang === 'en' ? 'en' : 'id';
    const dictionary = translations[activeLang] || translations.id;

    document.documentElement.lang = activeLang;

    const titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) {
      const titleKey = titleEl.getAttribute('data-i18n-title');
      if (dictionary[titleKey]) {
        document.title = dictionary[titleKey];
      }
    }

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (dictionary[key] !== undefined) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const key = element.getAttribute('data-i18n-html');
      if (dictionary[key] !== undefined) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll('[data-lang-btn]').forEach((button) => {
      const isSelected = button.getAttribute('data-lang-btn') === activeLang;
      button.classList.toggle('is-active', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });
  }

  function setupLanguage() {
    let savedLang = 'id';
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === 'en' || stored === 'id') {
        savedLang = stored;
      }
    } catch (error) {
      savedLang = 'id';
    }

    document.querySelectorAll('[data-lang-btn]').forEach((button) => {
      button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang-btn') === 'en' ? 'en' : 'id';
        try {
          localStorage.setItem(LANG_STORAGE_KEY, selectedLang);
        } catch (error) {
          console.warn('Pilihan bahasa tidak dapat disimpan.', error);
        }
        applyLanguage(selectedLang);
      });
    });

    applyLanguage(savedLang);
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
    const heroElements = document.querySelectorAll('.home-hero .reveal, .hero-reveal');
    heroElements.forEach((element) => {
      element.classList.add('is-visible');
    });

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
    setupLanguage();
    setupHeader();
    setupSmoothAnchors();
    setupReveal();
    setupCarousels();
    setupPortfolioFilters();
    setupYear();
  });
})();