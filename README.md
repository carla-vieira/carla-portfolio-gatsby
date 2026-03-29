<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Carla Vieira - Portfolio and blog
</h1>

Personal website/blog built with Gatsby v5, deployed on Netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/2fc5f055-3c52-41f0-a736-8ca4236e86d7/deploy-status)](https://app.netlify.com/sites/carla-gatsby-portfolio/deploys)

## Built with

- [Gatsby v5](https://www.gatsbyjs.com/)
- React 18
- SCSS Modules + styled-components
- Decap CMS (content management)
- Netlify (hosting)

## Requirements

- Node.js 18, 20, or 22 (Node 20 LTS recommended)
- npm 8+

> If you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use 20` before installing.

## Local setup

```bash
# 1. Clone the repo
git clone https://github.com/carlaprv/carla-portfolio-gatsby.git
cd carla-portfolio-gatsby

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start the development server
npm start
```

The site will be available at `http://localhost:8000`.

The GraphQL explorer is available at `http://localhost:8000/___graphql`.

## Available commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with hot reload |
| `npm run build` | Build the production site to `public/` |
| `npm run serve` | Serve the production build locally |
| `npm run clean` | Clear Gatsby cache and `public/` folder |

## Content management

Content lives in the `content/` directory, organized by type:

```
content/
├── bio/        # Biography page content
├── posts/      # Blog posts (Markdown)
├── talks/      # Speaking engagements
├── podcasts/   # Podcast appearances
├── news/       # Press / news mentions
├── youtube/    # YouTube videos
└── events/     # Events
```

Each entry is a Markdown file with frontmatter. You can also manage content through the Decap CMS admin panel at `/admin` (requires GitHub authentication).

## Deployment

The site deploys automatically to Netlify on every push to `main`. Build settings are defined in `netlify.toml`.

To deploy manually or connect a new Netlify site:
1. Push the repo to GitHub
2. Import the repository in [Netlify](https://app.netlify.com)
3. Netlify will detect `netlify.toml` and use the correct settings automatically
4. Add your custom domain in **Site settings → Domain management**
