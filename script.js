// ============================================================
// Developer Portfolio - Main JavaScript
// Aman Vishwakarma (BeginnerAman)
// ============================================================

// ── Project Data (Curated High-Value Repositories) ───────────
const projectsData = [
  // ─── FEATURED / FLAGSHIP SYSTEMS ───
  {
    name: 'ADrop - Ultra Fast File Transfer',
    category: 'system',
    featured: true,
    icon: 'zap',
    description: 'Transfer files between phone and PC at 150+ MB/s without internet, cables, or apps to install. Ultra-fast offline local file sharing over WiFi with QR code pairing, smart clipboard, resumable uploads, and server recovery.',
    language: 'JavaScript',
    tags: ['Offline-First', 'P2P Sharing', 'WebSockets'],
    liveUrl: 'https://beginneraman.github.io/ADrop/',
    repoUrl: 'https://github.com/BeginnerAman/ADrop'
  },
  {
    name: 'AirDeck - Wireless Hardware Bridge',
    category: 'system',
    featured: true,
    icon: 'radio',
    description: 'Wireless hardware companion bridge and modular controller suite for Windows. Turn any smartphone or tablet into a high-performance trackpad, macro stream deck, numeric keypad, presentation remote, virtual webcam, and studio microphone without installing any mobile apps.',
    language: 'Python',
    tags: ['Windows Engine', 'Wireless Bridge', 'Hardware Control'],
    liveUrl: 'https://beginneraman.github.io/AirDeck/',
    repoUrl: 'https://github.com/BeginnerAman/AirDeck'
  },
  {
    name: 'RenameSense - Batch File Renamer',
    category: 'system',
    featured: true,
    icon: 'file-edit',
    description: 'Enterprise-grade, safe, and offline-first batch file renamer for Windows 10 & 11 with dynamic templates, sequential regex pipelines, and 1-click WAL transaction rollback for absolute data protection.',
    language: 'HTML/JS',
    tags: ['Offline-First', 'WAL Rollback', 'Regex Pipeline'],
    liveUrl: 'https://beginneraman.github.io/RenameSense/',
    repoUrl: 'https://github.com/BeginnerAman/RenameSense'
  },
  {
    name: 'smart-file-sync Engine',
    category: 'system',
    featured: true,
    icon: 'refresh-cw',
    description: 'High-performance, 100% offline file synchronization engine for Windows with block-level delta transfers, real-time filesystem watcher, USB auto-detect, and atomic safe writes.',
    language: 'Python',
    tags: ['Delta Transfers', 'Filesystem Watcher', 'Atomic Writes'],
    liveUrl: 'https://beginneraman.github.io/smart-file-sync/',
    repoUrl: 'https://github.com/BeginnerAman/smart-file-sync'
  },
  {
    name: 'VastraFlow - Retail POS & Inventory',
    category: 'webapp',
    featured: true,
    icon: 'shopping-bag',
    description: '100% Offline POS, barcode billing, and inventory management software designed for retail clothing shops, garment stores, and saree showrooms with thermal receipt printing.',
    language: 'HTML/JS',
    tags: ['Offline POS', 'Barcode Billing', 'Inventory Engine'],
    liveUrl: 'https://beginneraman.github.io/VastraFlow/',
    repoUrl: 'https://github.com/BeginnerAman/VastraFlow'
  },

  // ─── DESKTOP & SYSTEM TOOLS ───
  {
    name: 'StorageOrganizer',
    category: 'system',
    featured: false,
    icon: 'hard-drive',
    description: 'Intelligent desktop storage optimization, MD5 deduplication, and automated organization for Windows. 100% offline, privacy-first desktop utility.',
    language: 'Python',
    tags: ['MD5 Deduplication', 'Storage Optimization', 'Windows Utility'],
    liveUrl: 'https://beginneraman.github.io/StorageOrganizer/',
    repoUrl: 'https://github.com/BeginnerAman/StorageOrganizer'
  },

  // ─── WEB APPS & SAAS ───
  {
    name: 'Resume Forge Pro',
    category: 'webapp',
    featured: false,
    icon: 'file-text',
    description: 'A high-speed 1-page A4 ATS-friendly Resume & Biodata Builder with 20 executive templates, real-time live preview editor, and 4K vector PDF export.',
    language: 'JavaScript',
    tags: ['ATS-Friendly', 'PDF Vector Export', 'Live Editor'],
    liveUrl: 'https://beginneraman.github.io/resume-forge-pro',
    repoUrl: 'https://github.com/BeginnerAman/resume-forge-pro'
  },
  {
    name: 'LuxeStay Hotel Booking',
    category: 'webapp',
    featured: false,
    icon: 'building-2',
    description: 'A premium web application for room reservations and hotel booking featuring room filtering, amenities showcase, and fully responsive UX deployed on Vercel.',
    language: 'JavaScript',
    tags: ['Vercel Deployed', 'Hotel Booking', 'Responsive UX'],
    liveUrl: 'https://luxe-stay-hotel-weld.vercel.app',
    repoUrl: 'https://github.com/BeginnerAman/LuxeStay-Hotel'
  },
  {
    name: 'Group Messaging Platform',
    category: 'webapp',
    featured: false,
    icon: 'users',
    description: 'A real-time group messaging platform built with Firebase Realtime Database and vanilla web technologies. Fully installable as a Progressive Web App (PWA) with offline caching.',
    language: 'JavaScript',
    tags: ['Firebase DB', 'PWA', 'Real-Time Messaging'],
    liveUrl: 'https://beginneraman.github.io/group-messaging-platform/',
    repoUrl: 'https://github.com/BeginnerAman/group-messaging-platform'
  },
  {
    name: 'ShayariVerse',
    category: 'webapp',
    featured: false,
    icon: 'book-open',
    description: 'A modern Hindi/Urdu poetry and literature web app featuring ambient audio soundscapes, reels view, interactive themes, and instant search.',
    language: 'HTML/JS',
    tags: ['Ambient Audio', 'Poetry Reels', 'Instant Search'],
    liveUrl: 'https://beginneraman.github.io/ShayariVerse/',
    repoUrl: 'https://github.com/BeginnerAman/ShayariVerse'
  },
  {
    name: 'Garden Groves Banquet Bar',
    category: 'webapp',
    featured: false,
    icon: 'trees',
    description: 'Modern luxury hotel and event venue showcase website featuring elegant landing pages, interactive room catalogs, and event planning inquiries.',
    language: 'CSS/JS',
    tags: ['Venue Showcase', 'Landing Page', 'Event Booking'],
    liveUrl: 'https://beginneraman.github.io/garden-groves-banquet-bar/',
    repoUrl: 'https://github.com/BeginnerAman/garden-groves-banquet-bar'
  },

  // ─── UTILITIES & PRODUCTIVITY ───
  {
    name: 'Data Wizard Hub',
    category: 'utility',
    featured: false,
    icon: 'database',
    description: 'The ultimate 500+ data science tricks platform featuring interactive flashcards, 10-stage Data Analyst framework, and 8-stage Machine Learning pipeline.',
    language: 'HTML/JS',
    tags: ['Data Science', 'ML Pipeline', '500+ Tricks'],
    liveUrl: 'https://beginneraman.github.io/data-wizard-hub/',
    repoUrl: 'https://github.com/BeginnerAman/data-wizard-hub'
  },
  {
    name: 'Milk Rate Calculator & Ledger',
    category: 'utility',
    featured: false,
    icon: 'calculator',
    description: 'Milk Rate Calculator and Dairy Ledger — Fat, SNF, and CLR-based pricing calculator with daily farmer ledger, billing, receipt printing, and WhatsApp sharing. Works 100% offline.',
    language: 'HTML/JS',
    tags: ['Dairy Ledger', 'Fat/SNF Rates', 'WhatsApp Sharing'],
    liveUrl: 'https://beginneraman.github.io/milk-rate-calculator/',
    repoUrl: 'https://github.com/BeginnerAman/milk-rate-calculator'
  },
  {
    name: 'ProVault Hub (Playlist Suite)',
    category: 'utility',
    featured: false,
    icon: 'play-square',
    description: 'High-end bespoke YouTube playlist vault and study suite with Pomodoro timer, A-B segment looper, Web Audio focus soundscapes, speed engine, and notes.',
    language: 'JavaScript',
    tags: ['Pomodoro', 'Soundscapes', 'Study Suite'],
    liveUrl: 'https://beginneraman.github.io/aman-playlist-hub/',
    repoUrl: 'https://github.com/BeginnerAman/aman-playlist-hub'
  },
  {
    name: 'Image Compressor',
    category: 'utility',
    featured: false,
    icon: 'minimize-2',
    description: 'A client-side utility tool to optimize and compress image files (PNG/JPEG/WebP) directly in the browser before web uploads, saving bandwidth without quality loss.',
    language: 'JavaScript',
    tags: ['Client-Side', 'Image Compression', '100% Offline'],
    liveUrl: '',
    repoUrl: 'https://github.com/BeginnerAman/image-compressor'
  },

  // ─── CREATIVE & INTERACTIVE ───
  {
    name: 'Loopi - Motion DP Studio',
    category: 'creative',
    featured: false,
    icon: 'sparkles',
    description: 'Animated 1:1 Profile Picture (DP) and Motion Studio with particle physics, typography engine, customizable frames, and watermark-free GIF/MP4 export.',
    language: 'JavaScript',
    tags: ['Particle Physics', 'Motion Graphics', 'GIF Export'],
    liveUrl: 'https://beginneraman.github.io/Loopi/',
    repoUrl: 'https://github.com/BeginnerAman/Loopi'
  },
  {
    name: 'Fake Hacker Terminal',
    category: 'creative',
    featured: false,
    icon: 'terminal',
    description: 'A simulated command-line hacker console prank with custom scripts, interactive keystroke streaming, and retro green terminal animations.',
    language: 'JavaScript',
    tags: ['CLI Simulator', 'Terminal FX', 'Interactive Prank'],
    liveUrl: 'https://beginneraman.github.io/fake-hacker-terminal/',
    repoUrl: 'https://github.com/BeginnerAman/fake-hacker-terminal'
  }
];


// ── State & DOM References ───────────────────────────────────
let currentFilter = 'all';
let currentSearch = '';

const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectSearchInput = document.getElementById('projectSearch');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


// ============================================================
// Project Card Creation
// ============================================================

/**
 * Creates a single project card DOM element.
 * Uses Lucide icons, category badges, tags, and action buttons.
 *
 * @param {Object} project - Project data object
 * @returns {HTMLElement} The constructed card element
 */
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';

  // ── Card Header ──
  const header = document.createElement('div');
  header.className = 'card-header';

  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'card-icon';

  const iconEl = document.createElement('i');
  iconEl.setAttribute('data-lucide', project.icon);
  iconWrapper.appendChild(iconEl);

  const badgesContainer = document.createElement('div');
  badgesContainer.className = 'badges-container';

  if (project.featured) {
    const featBadge = document.createElement('span');
    featBadge.className = 'featured-badge';
    featBadge.innerHTML = '<i class="fas fa-star"></i> Featured';
    badgesContainer.appendChild(featBadge);
  }

  const badge = document.createElement('span');
  badge.className = 'tech-badge';
  badge.textContent = project.language;
  badgesContainer.appendChild(badge);

  header.appendChild(iconWrapper);
  header.appendChild(badgesContainer);

  // ── Card Body ──
  const body = document.createElement('div');
  body.className = 'card-body';

  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = project.name;

  const desc = document.createElement('p');
  desc.className = 'card-description';
  desc.textContent = project.description;

  body.appendChild(title);
  body.appendChild(desc);

  // Feature Tags
  if (project.tags && project.tags.length > 0) {
    const tagsWrapper = document.createElement('div');
    tagsWrapper.className = 'project-tags';
    project.tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'project-tag';
      tagSpan.textContent = tag;
      tagsWrapper.appendChild(tagSpan);
    });
    body.appendChild(tagsWrapper);
  }

  // ── Card Footer ──
  const footer = document.createElement('div');
  footer.className = 'card-footer';

  // Live Demo button (only when a live URL exists)
  if (project.liveUrl) {
    const liveLink = document.createElement('a');
    liveLink.href = project.liveUrl;
    liveLink.className = 'btn-live';
    liveLink.target = '_blank';
    liveLink.rel = 'noopener noreferrer';

    const liveIndicator = document.createElement('span');
    liveIndicator.className = 'live-indicator';

    liveLink.appendChild(liveIndicator);
    liveLink.appendChild(document.createTextNode(' Live Demo'));
    footer.appendChild(liveLink);
  }

  // Source / GitHub button (always present)
  const sourceLink = document.createElement('a');
  sourceLink.href = project.repoUrl;
  sourceLink.className = 'btn-source';
  sourceLink.target = '_blank';
  sourceLink.rel = 'noopener noreferrer';

  const ghIcon = document.createElement('i');
  ghIcon.className = 'fab fa-github';

  sourceLink.appendChild(ghIcon);
  sourceLink.appendChild(document.createTextNode(' Source'));
  footer.appendChild(sourceLink);

  // ── Assemble Card ──
  card.appendChild(header);
  card.appendChild(body);
  card.appendChild(footer);

  // ── Clickable Card Action ──
  if (project.liveUrl) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      const isSourceClick = e.target.closest('.btn-source');
      if (!isSourceClick) {
        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
      }
    });
  }

  return card;
}


// ============================================================
// Render Projects (Filter & Instant Search)
// ============================================================

/**
 * Renders project cards into the grid, filtered by category and search term.
 *
 * @param {string} filter - Category to filter by, or 'all' / 'featured'
 * @param {string} searchTerm - Search query to match
 */
function renderProjects(filter = currentFilter, searchTerm = currentSearch) {
  currentFilter = filter;
  currentSearch = typeof searchTerm === 'string' ? searchTerm.trim().toLowerCase() : '';

  projectsGrid.innerHTML = '';

  let filtered = projectsData;

  // 1. Category Filtering
  if (currentFilter === 'featured') {
    filtered = filtered.filter(p => p.featured);
  } else if (currentFilter !== 'all') {
    filtered = filtered.filter(p => p.category === currentFilter);
  }

  // 2. Search Query Filtering
  if (currentSearch) {
    filtered = filtered.filter(p => {
      const nameMatch = p.name.toLowerCase().includes(currentSearch);
      const descMatch = p.description.toLowerCase().includes(currentSearch);
      const langMatch = p.language.toLowerCase().includes(currentSearch);
      const tagsMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(currentSearch));
      return nameMatch || descMatch || langMatch || tagsMatch;
    });
  }

  // 3. Empty State Handling
  if (filtered.length === 0) {
    const emptyEl = document.createElement('div');
    emptyEl.className = 'no-results';
    emptyEl.innerHTML = `
      <i class="fas fa-search"></i>
      <h3 style="margin-bottom: 8px; color: var(--text-primary);">No matching projects found</h3>
      <p>Try searching with another keyword like "Python", "Offline", "POS", or clear the filter.</p>
    `;
    projectsGrid.appendChild(emptyEl);
    return;
  }

  // 4. Staggered Render
  filtered.forEach((project, index) => {
    const card = createProjectCard(project);

    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';

    projectsGrid.appendChild(card);

    setTimeout(() => {
      card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, Math.min(index * 40, 500));
  });

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}


// ============================================================
// Event Listeners: Filters & Search
// ============================================================

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter') || 'all';
    renderProjects(filter, currentSearch);
  });
});

if (projectSearchInput) {
  projectSearchInput.addEventListener('input', (e) => {
    renderProjects(currentFilter, e.target.value);
  });
}


// ============================================================
// Hamburger / Mobile Menu
// ============================================================

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}


// ============================================================
// Smooth Scrolling for Anchor Links
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ============================================================
// Intersection Observer - Fade-In Sections on Scroll
// ============================================================

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('section').forEach(section => {
  sectionObserver.observe(section);
});


// ============================================================
// Active Nav-Link Highlighting on Scroll
// ============================================================

function highlightActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  const scrollPos = window.scrollY + 100;

  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightActiveNavLink);


// ============================================================
// Close Mobile Menu on Resize
// ============================================================

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navMenu) {
    navMenu.classList.remove('active');
  }
});


// ============================================================
// Hero Subtitle Typing Effect
// ============================================================

function initTypingEffect() {
  const typedTextSpan = document.getElementById('typedText');
  if (!typedTextSpan) return;

  const textArray = [
    'Idea-Driven Developer',
    'AI-Collaborative Systems Builder',
    'Creator of ADrop & AirDeck',
    'Offline-First & Windows Tool Architect',
    '35+ Public Open-Source Repositories'
  ];
  const typingDelay = 90;
  const erasingDelay = 40;
  const newTextDelay = 1800;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 300);
    }
  }

  setTimeout(type, 500);
}


// ============================================================
// Initialisation
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  initTypingEffect();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
