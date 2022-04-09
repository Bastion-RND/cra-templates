# React template for create-react-app with typescript

This is the TypeScript template for [Create React App](https://github.com/facebook/create-react-app) created by Bastion team.

## Stack

- eslint (Airbnb)
- prettier
- typescript
- sass

## Install

To use this template, add `--template bast-typescript` when creating a new app.

For example:

```sh
npx create-react-app bastion-app-name --template bast-typescript

# or

yarn create react-app bastion-app-name --template bast-typescript
```

## File architecture

Recommended file architecture is below.

- assets
- components
- i18n
- services
- utils

```text
── /src
    ├── /assets
    ├── /components
    │   ├── /forms
    │   │   ├── /TextField
    │   │   │   ├── TextField.ts
    │   │   │   ├── TextField.module.scss
    │   │   │   └── TextField.test.ts
    │   │   ├── /Select
    │   │   │   ├── Select.ts
    │   │   │   ├── Select.styles.ts
    │   │   │   └── Select.test.ts
    │   │   └── index.ts
    │   ├── /routing
    │   │   └── /PrivateRoute
    │   │       ├── /PrivateRoute.ts
    │   │       └── /PrivateRoute.test.ts
    │   └── /layout
    │       └── /navigation
    │           └── /NavBar
    │              ├── NavBar.ts
    │              ├── NavBar.module.scss
    │              └── NavBar.test.ts
    ├── /i18n
    ├── /services
    │   ├── /LocalStorage
    │   │   ├── LocalStorage.ts
    │   │   └── LocalStorage.test.ts
    │   └── index.ts
    ├── /utils
    │   ├── /constants
    │   │   └── countries.ts
    │   └── /helpers
    │       ├── validation.ts
    │       ├── currency.ts
    │       └── array.ts
    ├── App.module.scss
    ├── App.test.tsx
    ├── App.tsx
    └── index.tsx
```

## More

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
