# 🧠 AI Models — Complete Interactive Guide

A comprehensive, interactive web app covering every major AI model type and chatbot in existence (as of June 2026).

## What's Inside

| Tab | Content |
|-----|---------|
| 🗂️ 12 AI Model Types | LLMs, Diffusion, Multimodal, Vision, Audio, Code, Reasoning, RL, Video, Embedding, Domain-Specific, Edge Models |
| ⚙️ How They're Built | 6-stage training pipeline: data → pre-training → SFT → RLHF → safety testing → deployment |
| 💬 10 Major Chatbots | ChatGPT, Claude, Gemini, Grok, Perplexity, DeepSeek, Meta AI, Copilot, Mistral, Qwen |
| 📊 Side-by-Side | Feature comparison table + "Which AI for What" use-case guide |

---

## 🚀 Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher (v20 recommended)
- npm (comes with Node.js)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start development server (opens at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## ☁️ Deploy to Vercel (Recommended — Free)

### Option A — One-click via CLI
```bash
npm install -g vercel
vercel
# Follow the prompts — Vercel auto-detects Vite
```

### Option B — GitHub → Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** — done in ~60 seconds

`vercel.json` is already included for correct SPA routing.

---

## 🌐 Deploy to Netlify (Free)

### Option A — Drag & Drop
```bash
npm run build           # creates the /dist folder
```
Then drag the `/dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

### Option B — GitHub → Netlify Dashboard
1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site**
3. Connect GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy site**

`netlify.toml` is already included.

---

## 🐳 Deploy with Docker (Self-host anywhere)

```bash
# Build the Docker image
docker build -t ai-models-guide .

# Run it (serves on http://localhost:8080)
docker run -p 8080:80 ai-models-guide
```

Works on any server that supports Docker: AWS EC2, DigitalOcean Droplets, Railway, Render, fly.io, etc.

### Deploy to Railway (Free tier)
```bash
railway login
railway init
railway up
```

### Deploy to Render
1. Push to GitHub
2. Go to [render.com](https://render.com) → New → **Static Site**
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## 🏗️ Project Structure

```
ai-models-guide/
├── src/
│   ├── App.jsx          # Main React app (all UI components)
│   ├── data.js          # All data: model types, training steps, chatbots
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind + custom scrollbar styles
├── index.html           # HTML entry point
├── vite.config.js       # Vite build config
├── tailwind.config.js   # Tailwind CSS config
├── postcss.config.js    # PostCSS config
├── vercel.json          # Vercel deployment config
├── netlify.toml         # Netlify deployment config
├── Dockerfile           # Docker container config
├── nginx.conf           # Nginx config (used inside Docker)
├── .gitignore
├── .nvmrc               # Node version pin (v20)
└── package.json
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI framework |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |

No backend. No database. Pure static site — deploy anywhere.

---

## 📝 Updating the Data

All content lives in `src/data.js`. To update:

- **Add a new AI model type** → add an object to the `modelTypes` array
- **Update a chatbot** → find it in the `chatbots` array and edit its fields
- **Add a comparison row** → add an object to the `comparisons` array
- **Add a use-case** → add an object to the `useCaseGuide` array

---

## 📄 License

MIT — use freely, modify freely, deploy freely.
