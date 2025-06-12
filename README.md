# Playwright Demo: TypeScript vs Python

This repo contains two side-by-side Playwright demo projects for testing both webpages and APIs:

- `playwright-ts-demo/` — **Playwright with TypeScript**
- `playwright-py-demo/` — **Playwright with Python + pytest**

---

## 🔧 Prerequisites

### TypeScript Demo
- Node.js (v16+)
- npm or yarn

### Python Demo
- Python 3.8+
- `pip install playwright pytest`

---

## ▶️ How to Run the Tests

### TypeScript

```bash
cd playwright-ts-demo
npm install
npx playwright install
npx playwright test
```

To view the test report:

```bash
npx playwright show-report
```

---

### Python

```bash
cd playwright-py-demo
pip install pytest playwright
playwright install
pytest
```

---

## ✅ What's Being Tested

Both projects contain:

- A **web test** that opens [example.com](https://example.com) and checks the page title
- An **API test** that calls `https://reqres.in/api/users/2` and asserts user email

---

## 🤔 Why TypeScript Is the Superior Choice for Playwright

| Feature | TypeScript | Python |
|--------|------------|--------|
| ✅ **Native Support** | Built in TS by Microsoft | Community bindings |
| 🚀 **Performance & Parallelism** | Fast with built-in parallelism, sharding | Manual setup |
| 🧠 **Intelligent Autocomplete** | Full IDE support, refactoring, types | Minimal |
| 📊 **Reporting** | Built-in HTML reports (`show-report`) | Needs plugins |
| 🔍 **Debugging Tools** | Inspector, trace viewer out of the box | Partial support |
| 🌐 **CI Integration** | Excellent GitHub Actions support | Also possible, more effort |
| 🔄 **Codegen & CLI Tools** | Powerful and seamless | Limited |
| 🧱 **Test Organization** | Page objects, fixtures, configs are built in | DIY with pytest/conftest |

If you're starting a modern, scalable test framework — **TypeScript is the future-proof choice.**

---

## 📁 Structure

```
playwright_demos/
├── playwright-ts-demo/
│   ├── playwright.config.ts
│   └── tests/
│       ├── example.spec.ts
│       └── api.spec.ts
├── playwright-py-demo/
│   └── tests/
│       ├── test_example.py
│       └── test_api.py
└── README.md
```
