# UI-Schema Demo w/ Bootstrap

[![Github actions Build](https://github.com/ui-schema/demo-bts/actions/workflows/blank.yml/badge.svg)](https://github.com/ui-schema/demo-bts/actions)

Simple demo project for [@ui-schema/react](https://github.com/ui-schema/ui-schema) with [Bootstrap 5](https://getbootstrap.com).

Files:

- [src/components/DemoEditor.jsx](./src/components/DemoEditor.jsx) setup `binding` and demo UI-Schema form
- [src/t.js](./src/t.js) dictionary setup

Run on [CodeSandbox](https://codesandbox.io/s/github/ui-schema/demo-bts/tree/master/?autoresize=1&fontsize=12&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FDemoEditor.jsx) or [StackBlitz](https://stackblitz.com/github/ui-schema/demo-bts?file=src%2Fcomponents%2FDemoEditor.jsx).

Explore more:

- [Quick Start](https://ui-schema.bemit.codes/quick-start?ds=mui)
- [Core Project](https://github.com/ui-schema/ui-schema)
- [Advanced Examples in TypeScript, with MUI](https://github.com/ui-schema/demo-ts)

## Setup

Install dependencies:

```shell
npm i
```

Start dev server:

```shell
npm start
```

Create bundle:

```shell
npm run build
```

For tests first install a playwright browser:

```shell
npx playwright install chromium --with-deps
```

Then run tests:

```shell
npm test
```

Then run tests in watch mode:

```shell
npm run tdd
```


