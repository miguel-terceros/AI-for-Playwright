# AI for Playwright Testing

Demo project for the Pluralsight course **AI for Playwright Testing**. It pairs a small sample trading web app with a Playwright test suite, showing how to use AI tooling — Playwright MCP, Playwright CLI, and specialized Claude agents — to explore, plan, generate, and heal tests.

This course covers:
1. Core AI foundations for AI + Playwright
2. Installing and using Playwright MCP
3. Creating and using specialized Markdown agents
4. Installing and using the Playwright CLI

## Getting started

```bash
npm install
npm start          # serves the sample app at http://localhost:3000
```

In a separate terminal, run the tests:

```bash
npx playwright test        # headless run
npm run uimode              # interactive UI mode
npm run codegen             # record new interactions
```

## Project structure

```
app/                sample "Trade" web app under test
tests/               Playwright test suite
  pages/             Page Object Model classes and fixtures
  trade-app/          specs for the trade & analytics flows
specs/               generated test plans and exploration notes
.claude/agents/      test planner, generator, and healer agent definitions
.vscode/mcp.json     Playwright MCP server configuration
```

## AI-assisted workflows

- **Playwright MCP** — drive a real browser from an AI agent to explore the app and generate tests without reading the app's source code.
- **Playwright CLI** (`npx playwright cli`) — the same browser-automation capabilities from the terminal, bundled with Playwright core since v1.62.
- **Claude agents** (`.claude/agents/`) — specialized agents for planning, generating, and healing tests.

## Resources

- [Playwright MCP repository](https://github.com/microsoft/playwright-mcp)
- [Practical Testing Docs](https://practical-testing.gitbook.io/)
