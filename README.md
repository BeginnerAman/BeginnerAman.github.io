# Aman Vishwakarma (BeginnerAman) - Developer Portfolio

A high-performance, responsive portfolio website showcasing 35+ public projects, offline systems, and web applications. Built with modern vanilla web technologies and AI-collaborative engineering.

**Live Website**: [https://beginneraman.github.io/](https://beginneraman.github.io/)

---

## Highlights & Features

- **Instant Search & Real-Time Filtering** - Filter projects instantly by keyword, tech stack (e.g. Python, POS, Offline), or category.
- **Glassmorphic Dark UI** - Modern glassmorphic theme with glowing terminal caret and purple accent design tokens.
- **Dynamic Category Count Badges** - Real-time project counts rendered dynamically for each category.
- **Production-Grade SEO Infrastructure**:
  - `robots.txt` and `sitemap.xml` for search engine crawler discovery.
  - Open Graph (OG) & Twitter Cards with 1200x630 banner preview (`og-image.png`).
  - Schema.org JSON-LD structured data for Google Search rich snippets (`Person` & `WebSite` graph).
  - Canonical link tag to prevent duplicate content indexing.
- **Zero Bloat & Ultra Fast** - Built with 100% vanilla HTML5, CSS3, and modern JavaScript (no heavy runtime framework).
- **Responsive & Accessible** - Fluid layout adapting to mobile, tablet, and widescreen desktop monitors.

---

## Featured Flagship Repositories

| Project | Type | Description |
|---|---|---|
| **[ADrop](https://github.com/BeginnerAman/ADrop)** | P2P Network | 150+ MB/s offline local file sharing over WiFi with QR code & smart clipboard. |
| **[AirDeck](https://github.com/BeginnerAman/AirDeck)** | Windows Bridge | Wireless controller suite turning smartphones into trackpad, stream deck & webcam. |
| **[RenameSense](https://github.com/BeginnerAman/RenameSense)** | Windows Utility | Enterprise-grade batch file renamer with sequential regex & 1-click WAL rollback. |
| **[smart-file-sync](https://github.com/BeginnerAman/smart-file-sync)** | Python Engine | Offline file sync engine with block-level delta transfers & filesystem watcher. |
| **[VastraFlow](https://github.com/BeginnerAman/VastraFlow)** | Offline POS | Retail POS, barcode billing & inventory management for garment showrooms. |
| **[StorageOrganizer](https://github.com/BeginnerAman/StorageOrganizer)** | Desktop Utility | Desktop storage optimization & MD5 content deduplication for Windows. |

---

## Project Structure

```
Portfolio/
├── index.html           # Semantic HTML5 with complete SEO & JSON-LD
├── styles.css           # Glassmorphic dark design system & responsive layout
├── script.js            # Curated projects database, search engine & typing fx
├── robots.txt           # Search engine crawler permissions
├── sitemap.xml          # XML sitemap for Google Search Console
├── og-image.png         # 1200x630 social media sharing preview banner
├── apple-touch-icon.png # 180x180 iOS/Safari home-screen icon
└── README.md            # Documentation & project guide
```

---

## How to Manage Projects

### Add a New Project
In `script.js`, append an object to `projectsData`:

```javascript
{
  name: 'Project Title',
  category: 'system', // 'system' | 'webapp' | 'utility' | 'creative'
  featured: true,     // true | false
  icon: 'zap',        // Lucide icon name
  description: 'Project summary...',
  language: 'Python',
  tags: ['Offline-First', 'Engine', 'Windows'],
  liveUrl: 'https://beginneraman.github.io/repo-name/',
  repoUrl: 'https://github.com/BeginnerAman/repo-name'
}
```

### Categories Available

| Category Key | Display Name | Examples |
|---|---|---|
| `featured` | Featured | Flagship high-impact applications |
| `system` | Desktop & Systems | AirDeck, RenameSense, smart-file-sync |
| `webapp` | Web Apps | VastraFlow, Resume Forge Pro, LuxeStay |
| `utility` | Tools & Utilities | Data Wizard Hub, Milk Rate Calculator |
| `creative` | Creative | Loopi Motion DP Studio, Fake Hacker Terminal |

---

## Contact & Links

- **GitHub**: [@BeginnerAman](https://github.com/BeginnerAman)
- **Instagram**: [@amanv_data](https://www.instagram.com/amanv_data/)
- **Email**: amanvishwakarma.data@gmail.com
