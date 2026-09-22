# AI for Playwright Testing 🤖🎭

Demo repo for the **"AI for Playwright Testing" Pluralsight course** — a hands-on playground for using AI tooling alongside Playwright: exploring apps and generating tests via Playwright MCP and CLI, and planning, generating, and healing tests with specialized Claude agents.

The repo ships with a small demo web app (a mock stock trading dashboard) and a suite of TypeScript tests written against it, plus agent definitions and AI-generated test plans.

## ✨ What's inside

- **A demo app** — a static stock trading + analytics dashboard, served locally with Express.
- **Playwright MCP** examples — driving a real browser from an AI agent to explore the app and author tests without reading its source code.
- **Playwright CLI** (`npx playwright cli`) examples — the same browser-automation workflow, run straight from the terminal.
- **Specialized Claude agents** (`.claude/agents/`) for planning, generating, and healing Playwright tests.
- **Page Object Model (POM)** examples, including fixture-based composition.
- **AI-generated test plans and exploration notes** (`specs/`), produced by driving the app through the browser only.

## 🧰 Tech stack

- [Playwright](https://playwright.dev/) (`@playwright/test`)
- TypeScript
- [Express](https://expressjs.com/) — serves the demo app on `localhost:3000`
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) — AI-driven browser automation

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

## 🚀 Getting started

1. **Clone the repo**

   ```bash
   git clone https://github.com/miguel-terceros/AI-for-Playwright.git
   cd AI-for-Playwright
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

4. **Run the tests**

   ```bash
   npx playwright test
   ```

   Playwright automatically starts the demo app (`npm start`) on `http://localhost:3000` before the test run, via its built-in `webServer` config.

## 🧪 Available scripts

| Command             | Description                                             |
| -------------------- | -------------------------------------------------------- |
| `npm start`          | Runs the demo app standalone (Express, port 3000).       |
| `npx playwright test`| Runs the full Playwright test suite.                     |
| `npm run uimode`     | Opens the Playwright UI mode for interactive debugging.  |
| `npm run codegen`    | Launches Playwright Codegen to record new tests.         |

## 📁 Project structure

```
├── app/                     # Demo stock trading & analytics web app
├── tests/
│   ├── pages/               # Page objects and shared fixtures
│   └── trade-app/           # Specs for the trade & analytics flows
├── specs/                   # AI-generated test plans and exploration notes
├── .claude/agents/          # Test planner, generator, and healer agent definitions
├── .vscode/mcp.json         # Playwright MCP server configuration
├── server.js                # Minimal Express server for the demo app
└── playwright.config.ts     # Playwright test runner configuration
```

## 🤖 AI-assisted workflows

- **Playwright MCP** — lets an AI agent drive a real browser to explore the app and generate tests without reading the app's source code.
- **Playwright CLI** (`npx playwright cli`) — the same browser-automation capabilities from the terminal, bundled with Playwright core since v1.62.
- **Claude agents** (`.claude/agents/`) — specialized agents for planning, generating, and healing tests.

## 📚 Resources

- [Playwright MCP repository](https://github.com/microsoft/playwright-mcp)
- [Practical Testing Docs](https://practical-testing.gitbook.io/)

## 📄 License

Licensed under the [ISC License](https://opensource.org/licenses/ISC).
