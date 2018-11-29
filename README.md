# chapter-components

> Repo: [https://gitlab.ny.rga.com/samsung-within/chapter-components](https://gitlab.ny.rga.com/samsung-within/chapter-components)

A monorepo of UI components common to all Samsung Within projects.

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

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

- Clone this repo:

```shell
git clone git@gitlab.ny.rga.com:samsung-within/chapter-components.git
```

- Ensure your node environment is up to date. Download the latest, or use nvm to manage environments.
- Install dependencies via Yarn. Because we use Yarn Workspaces, this command will also hoist dependencies to the root `node_modules` folder, and symlink accordingly. You **should not use npm** to install dependencies.

```shell
yarn
```

- Run the lerna build command to build each package's dist folder:

```shell
yarn lerna-build
```

### Working With Existing Packages

- Run the storybook tool command:

```shell
yarn run storybook
```

This creates a UI development environment. The tool enables us to create components independently and showcase components interactively in an isolated development environment. Each package has a `*.storybook.js` file that is automatically discovered and loaded into the development environment.

Learn more by reading the [Storybook documentation](https://storybook.js.org/basics/guide-react/).

- Create a branch according to the [Gitflow Workflow guidelines](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

### Merging Properly:

After your merge request has been reviewed and approved, use the following steps to publish new versions of the packages.

- After approval, `git pull` on the master branch, checkout your branch, and rebase on master.

```shel
git pull --rebase origin master
```

> Why perform a rebase, and not a merge? Read this ["Merging vs. Rebasing"](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) article for more information.

- Handle any issue surfaced during your rebase, then merge your feature branch into master.

```shell
git checkout master
git pull
git pull origin your-feature
git push
```

- Do a pull to ensure you have the absolute latest code and tags. Lerna needs to know what the latest published versions are in order to determine what has changed and what the new versions should be.

```shell
git pull origin master --tags
```

- Run the Lerna update command. This tells you which packages have changed since your merge. Ensure that any updated packages are working properly.

```shell
yarn lerna-updated
```

- Run the Lerna publish command. This prompts you to version bump any packages that have changed.

```shell
yarn lerna-publish
```

- Push tags to the repo. This triggers the CI to publish the updated packages to our private npm server. **Your changes will not be available to other projects unless you do this final step.**

```shell
git push origin master --tags
```
