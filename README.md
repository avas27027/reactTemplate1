# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Some useful pages

[UI Colors](https://uicolors.app/create): Color Palletes\
[My Atlist](https://my.atlist.com/map/ea593591-de3c-4a07-be50-bd4c47eb8294): To create fancy maps `Pay $24`. \
[CSS Gradients](https://cssgradient.io/): To generate background with some fade. \
[What the Font](https://www.myfonts.com/pages/whatthefont): To search and specific font with a picture. \
[Elfsight](https://dash.elfsight.com/apps/countdown-timer?installTab=website): PreMade sections implemented in Iframes `Pay $60`. \
[SVGator](https://app.svgator.com/auth/login?url=%2Feditor#/): Animate SVG `Pay $240`. \
[Spline](https://app.spline.design/): 3D desinging. \
[Miro](https://miro.com/app/board/uXjVKQvZcOY=/): Boards for organization.\
[FontJoy](https://fontjoy.com/): Find some fonts\
[RealTimeColors](https://www.realtimecolors.com/): Look Colors on a webpage\
[BannerBoo](https://svganimator.bannerboo.com/): Animate SVG `Free`\
[Recraft](https://app.recraft.ai/): Create SVG with AI\
[Boxy-SVG](https://boxy-svg.com/): Convert fonts into SVG

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
