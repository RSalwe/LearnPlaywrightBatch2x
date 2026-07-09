# Chapter 32: Playwright Fundamentals

Introduction to Playwright — a modern end-to-end testing framework for web applications. This chapter covers Playwright setup, configuration, and writing basic tests.

## Files

| File | Description |
|------|-------------|
| `playwright.config.ts` | Playwright configuration — browser projects, test directory, retries, reporters |
| `tsconfig.json` | TypeScript configuration for Playwright test files |
| `package.json` | Project dependencies (Playwright, @playwright/test) |
| `.gitignore` | Ignores node_modules, test-results, playwright-report |
| `tests/example.spec.ts` | Sample Playwright test — page navigation, assertions, and basic interactions |

## Setup

```bash
npm install
npx playwright install    # Downloads browser binaries
npx playwright test       # Runs all tests
```

## Key Concepts

- **Cross-browser testing** — run tests on Chromium, Firefox, and WebKit
- **Auto-waiting** — Playwright waits for elements to be actionable before interacting
- **Test runner** — built-in test runner with fixtures, hooks, and parallel execution
- **Assertions** — `expect()` with auto-retrying matchers for robust assertions
- **Configuration** — browser projects, base URL, viewport, screenshot on failure
