# Portfolio site | Next JS 12+, Tailwind CSS 2.0 and TypeScript
### Built using

Tech stack:

- [Next.js](https://nextjs.org) for Static Site Generator
- Integrate with [Tailwind CSS](https://tailwindcss.com) (w/ JIT mode)
- PostCSS for processing Tailwind CSS and integrated to `styled-jsx`
- Type checking [TypeScript](https://www.typescriptlang.org)
- Strict Mode for TypeScript and React 17
- Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- Code Formatter with [Prettier](https://prettier.io)
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files
- VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- SEO metadata, JSON-LD and Open Graph tags with Next SEO
- [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- Include a FREE minimalist theme
- Maximize lighthouse score

Built-in feature from Next.js:

- Minify HTML & CSS
- Live reload
- Cache busting

### Requirements

- Node.js and npm

### Getting started

Run on your environment:

```
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # SEO & meta data
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Page template
│   ├── components           # Site components
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.



### License

Licensed under the MIT License, Copyright © 2022

---

Forked and modified from [Next JS Boilerplate](https://github.com/ixartz/Next-js-Boilerplate)
