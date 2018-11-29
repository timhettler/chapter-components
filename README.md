# chapter-components

> Repo: [https://gitlab.ny.rga.com/samsung-within/chapter-components](https://gitlab.ny.rga.com/samsung-within/chapter-components)

A monorepo of UI components common to all Samsung Within projects.

## Overview:

Chapter-components are React components designed for Samsung Within projects. The components are managed via a Yarn Workspaces/Lerna monorepo, and are published to our private npm server as individual packages. They can be imported into Samsung Within projects as needed.

### Tech Stack

### Core

- **Environment:** Node 10.11.x
- **Package Management:** Yarn > 1.7.x, Yarn Workspaces, Lerna
- **Framework:** React 16.6.x

### Tools

- **CSS:** Sass and CSS Modules
- **Transpilation:** Babel 7
- **Dev:** Storybook
- **Build:** Webpack 4 & Babel 7
- **Linting:** [ESLint](https://eslint.org/docs/user-guide/integrations), [Prettier](https://prettier.io/docs/en/editors.html), Stylelint and [EditorConfig](https://editorconfig.org/#download).\*
- **Testing:** TBD

It is strongly recommended that you integrate these tools into your editor or IDE.

## Development:

This monorepo uses Yarn Workspaces and Lerna, which automatically symlinks local dependencies to their respective packages. This allows you to work on packages and their dependencies without manually symlinking.

### Initial Repo Setup:

1 Clone this repo:

```
git clone git@gitlab.ny.rga.com:samsung-within/chapter-components.git
```

2 Ensure your node environment is up to date. Download the latest, or use nvm to manage environments.

3 Install dependencies via Yarn. Because we use Yarn Workspaces, this command will also hoist dependencies to the root `node_modules` folder, and symlink accordingly. You **should not use npm** to install dependencies.

```
yarn
```

4 Run the lerna build command to build each package's dist folder:

```
yarn lerna-build
```

### Working With Existing Packages

1 Run the storybook tool command:

```
yarn run storybook
```

This creates a UI development environment. The tool enables us to create components independently and showcase components interactively in an isolated development environment. Each package has a `*.storybook.js` file that is automatically discovered and loaded into the development environment.

Learn more by reading the [Storybook documentation](https://storybook.js.org/basics/guide-react/).

2 Create a branch according to the [Gitflow Workflow guidelines](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
