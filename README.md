# श्री संत गजानन महाराज ध्यान मंदिर, कोंढाळी

Official website for **Shri Sant Gajanan Maharaj Dhyan Mandir, Kondhali** — a charitable Hindu temple trust serving the poor and needy in Maharashtra.

---

## 🛠 Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **Tailwind CSS** (styling)
- **GSAP** (animations)
- **React Router v7** (routing)
- **Lucide React** (icons)

---

## 📁 Project Structure

```
├── public/
│   ├── images/          # Temple images, deity photos, donation posters, QR code
│   └── _redirects       # Netlify SPA routing fallback
├── src/
│   ├── components/      # Reusable UI components (FloatingWhatsApp, DecorativeDivider)
│   ├── pages/           # Route-level pages (Home, Donate)
│   ├── sections/        # Page sections (Hero, About, Navigation, Contact, Footer…)
│   ├── App.tsx          # Root router
│   └── main.tsx         # Entry point
├── index.html           # HTML shell with Google Fonts
├── netlify.toml         # Netlify build + redirect config
├── vercel.json          # Vercel build + rewrite config
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5000)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Netlify

### Option 1 — Connect GitHub (Recommended)

1. Push this repo to GitHub (see [GitHub Upload](#-upload-to-github) below)
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**
3. Select your GitHub repository
4. Netlify will auto-detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site** ✅

### Option 2 — Drag & Drop

```bash
npm run build
```
Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

> **SPA Routing:** `netlify.toml` and `public/_redirects` both handle React Router redirects so direct URLs like `/donate` work correctly.

---

## ▲ Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite. Build settings from `vercel.json` are applied automatically.
5. Click **Deploy** ✅

---

## 📤 Upload to GitHub

```bash
# Initialize git (skip if already initialized)
git init

# Add all files
git add .

# First commit
git commit -m "feat: initial production-ready release"

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push
git push -u origin main
```

---

## 🔐 Environment Variables

This project has no required environment variables for the static build.

If you add backend features in the future, create a `.env` file:

```env
VITE_EXAMPLE_KEY=your_value_here
```

Access in code via `import.meta.env.VITE_EXAMPLE_KEY`.

> Never commit `.env` files — they are listed in `.gitignore`.

---

## 📱 Features

- **Fully responsive** — mobile, tablet, desktop
- **Marathi language** throughout (Unicode Devanagari)
- **GSAP animations** with scroll triggers
- **Donation page** with:
  - My Parikrama app link (Play Store)
  - PhonePe QR code
  - Real bank details (Arvind Sahakari Bank)
- **Floating WhatsApp button** (+91 9923586208)
- **YouTube video embed** in Hero
- **Photo gallery** with temple images
- **Contact section** with address, email, phone, Instagram, Facebook

---

## 🏛 Trust Details

- **Name:** श्री संत गजानन महाराज सेवा ट्रस्ट
- **Registration:** र. नं. E - 0004410 (NGP)
- **Contact:** +91 9923586208
- **Email:** gajananmaharajkondhali@gmail.com
- **Instagram:** [@gajanan_maharaj_kondhali2023](https://www.instagram.com/gajanan_maharaj_kondhali2023/)
- **Facebook:** [facebook.com/share/1LJ2if3ci6/](https://www.facebook.com/share/1LJ2if3ci6/)

---

## 📄 License

All rights reserved © श्री संत गजानन महाराज सेवा ट्रस्ट, कोंढाळी, महाराष्ट्र.
