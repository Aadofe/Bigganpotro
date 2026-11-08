# Bigganpotro / বিজ্ঞানপত্র

Professional Bengali science journal built with Astro, Tailwind, Markdown and KaTeX.

## Install into your existing Astro project (Windows PowerShell)
1. Back up the project first, or commit your current changes.
2. Extract this ZIP and copy its **contents** into `C:\Users\Test\Documents\Bigganpotro` (merge folders; approve replacing relevant sample files).
3. From the project root:

```powershell
npm install @tailwindcss/vite tailwindcss remark-math rehype-katex katex
npm run dev
```

If your existing Astro config uses `@astrojs/mdx`, either keep that integration in `astro.config.mjs` or use `.md` files as in this example. All included articles are `.md`.

## Publish/update articles
New article file: `src/content/blog/physics/my-new-article.md`.
Place images beside it: `src/content/blog/physics/my-figure.svg`.
In Markdown: `![চিত্রের বিবরণ](./my-figure.svg)`.
The journal automatically lists every article in the content collection.

Frontmatter keys required: title, description, pubDate, category. Optional: author, readingTime, featured, tags, updatedDate.

## Author section
Edit `src/pages/about.astro`: replace `আপনার নাম` and biography placeholder, add your own photo if desired. Change GitHub profile URL.

## Repo settings
In `astro.config.mjs`, replace `Rakat-3` and `Bigganpotro` if your GitHub username/repo differs.
In GitHub repository: Settings > Pages > Source: GitHub Actions.

## Git commands

```powershell
git add .
git commit -m "Publish new Bengali article"
git push origin main
```

If your project isn't connected yet:

```powershell
git init
git branch -M main
git add .
git commit -m "Initial Bigganpotro website"
git remote add origin https://github.com/Rakat-3/Bigganpotro.git
git push -u origin main
```

Never commit `node_modules` or `.astro`; existing `.gitignore` normally handles them.
