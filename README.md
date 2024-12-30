# 🚀 React Webpack Typescript Boilerplate

Modern, feature rich React boilerplate. Skip the redundant setup of React projects, testing frameworks, and CI/CD
workflows. Start building your app right away!

# 📑 Table of Contents

<ul>
  <li><a href="#features">🌟 Features</a></li>
  <li><a href="#folder-structure">📂 Folder Structure</a></li>
  <li><a href="#getting-started">🚀 Getting Started</a></li>
  <li><a href="#ci-cd">🏗️ CI/CD</a></li>
  <li><a href="#customization">⚙️ Customization</a></li>
  <li><a href="#contributing">🤝 Contributing</a></li>
  <li><a href="#license">📜 License</a></li>
</ul>

---

# Features

- ⚙️ **Webpack**: A powerful module bundler pre-configured for both development and production, ensuring fast builds and
  optimized output.
- ⚛️ **React 19**: The latest version of React, designed for modern development with improved performance and features.
- 🛡️ **TypeScript**: Strongly typed development for safer, scalable, and maintainable code.
- 🎨 **Tailwind CSS**: Utility-first CSS framework for fast, responsive, and consistent styling.
- 🧪 **Jest and React Testing Library**: Write maintainable and reliable tests with tools optimized for React
  applications.
- 🧭 **Playwright**: Comprehensive end-to-end testing to ensure robust app quality and stability.
- 🚀 **GitHub Actions**: Integrated CI/CD pipeline for seamless automated testing and deployment workflows.
- 🧹 **ESLint with React**: Enforces coding standards and best practices, ensuring clean, consistent, and error-free
  code.
- ✍️ **Conventional Commits**: A standardized commit message format to improve readability, automation, and project
  collaboration.

# Folder Structure

```
├── .github/               # GitHub Actions workflows
├── .husky/                # Git hooks configuration
├── config/                # Configuration files
│   ├── jest/              # Jest configuration
│   ├── webpack/           # Webpack configuration
│   └── babel.config.js    # Babel configuration
├── e2e/                   # End-to-end tests
│   ├── pages/             # Page Object Model (POM) files
│   └── tests/             # E2E test files
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   └── __tests__/     # Unit tests for components
│   ├── config/            # Environment and app configuration
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── router/            # Routing setup
│   ├── store/             # Redux store and state management
│   ├── utils/             # Utility functions
│   ├── entry.tsx          # Entry point for the app
│   ├── index.html         # HTML template
│   └── styles.css         # Global styles (Tailwind)
├── types/                 # TypeScript type declarations
├── .gitignore             # Files to ignore in Git
├── .lintstagedrc.json     # Linting configuration for staged files
├── .prettierignore        # Prettier ignore file
├── .prettierrc.cjs        # Prettier configuration
├── commitlint.config.ts   # Commit message linting
├── eslint.config.mjs      # ESLint configuration
├── jest.config.js         # Jest configuration
├── netlify.toml           # Netlify deployment configuration
├── package-lock.json      # Locked dependencies
├── package.json           # Project metadata and dependencies
├── playwright.config.ts   # Playwright E2E testing configuration
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── tsconfig.paths.json    # TypeScript paths configuration

```

# Getting Started

## Prerequisites

Ensure that you have the following versions installed:

- **Node.js**: Version 20 or higher
- **npm**: Version 10 or higher

## 1. Clone the Repository

Start by cloning the repository to your local machine:

```
git clone https://github.com/Borislav99/react-webpack-ts-boilerplate.git
cd react-webpack-ts-boiler-plate
```

## 2. Install Dependencies

Install the required dependencies:

```
npm install
```

### Install Playwright Browsers

Playwright requires certain browsers for end-to-end testing. Install them by running:

```
npx playwright install
```

## 2. Start the Development Server

Start the development server to view the app in your browser:

```
npm start
```

## 3. Build for Production

Build the app for production:

```
npm run build
```

## 4. Run unit tests

Run the unit tests with the following command:

```
npm run test
```

## 4. Run e2e tests

Run the end-to-end tests using Playwright:

```
npm run e2e
```

# CI-CD

This project is integrated with GitHub Actions to automate testing and deployment.

### 🔄 Automated Workflows

- **Push to `master` or Pull Request**:  
  Whenever there’s a push to the `master` branch or a pull request is created, the following tasks are triggered:

  - **App Build**: The app is built for both development and production environments.
  - **Unit and E2E Tests**: Ensures the app is stable and all tests pass.

- **Manual PR-Link Workflow**:  
  You can manually trigger the `pr-link` workflow to create a preview link for testing a pull request. This is helpful
  for reviewing changes before merging.

- **Push Tags**:  
  When a new tag is pushed, the **Release Workflow** is triggered, which automatically deploys a new version of the app
  to **Netlify**.

### 🔑 Required Secrets

To enable the **pr-link** and **release** workflows, you need to add the following secrets to your GitHub repository’s
**Secrets and Variables** under **Actions**:

- **NETLIFY_AUTH_TOKEN**: Your Netlify authentication token.
- **NETLIFY_SITE_ID**: The Netlify site ID for your project.

These secrets are necessary for the workflows to function correctly and automatically deploy to Netlify.

---

With this setup, your project’s deployment process is streamlined, and testing is automated, ensuring smooth and
efficient development!

# Customization

Ready to make this boilerplate your own? 🔥 Feel free to tweak and extend it to suit your project’s needs. You’ll find
the core configuration files for Webpack, Tailwind CSS, and TypeScript in the root directory, so you can easily modify
them to match your preferences. Whether you're building a complex app or a simple project, this template is flexible
enough to grow with you. 🚀

- Webpack: Configure your bundling, optimization, and development server settings.
- Tailwind CSS: Customize your design system and extend utility classes.
- TypeScript: Adjust compiler options, type definitions, and more.

# Contributing

Contributions to this project are appreciated ❤️! If you have ideas for improvements, new features, or if you find a
bug, please open an issue or submit a pull request. Your contributions help make this project even better for the
community. 🙌

Here’s how you can get involved:

1. Fork the repo and clone it to your local machine.
2. Create a new branch for your feature or fix.
3. Make your changes and write tests if necessary.
4. Submit a pull request with a clear description of what you’ve done.

# License

This project is licensed under the <b>MIT License</b> – feel free to use, modify, and distribute it.

---

Happy coding! 🎉

---
