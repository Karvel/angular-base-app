# AngularBaseApp

| Branch      | Status                                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| development | ![development](https://github.com/Karvel/angular-base-app/workflows/Build,%20Test,%20and%20Lint/badge.svg?branch=development) |
| main        | ![main](https://github.com/Karvel/angular-base-app/workflows/Build,%20Test,%20and%20Lint/badge.svg?branch=main)               |

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3 and has been updated to version 12.1.0.

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### CI

This project is configured to run Continuous Integration (CI) with GitHub Actions. The CI builds the application, runs tests, and runs the linter. All of these jobs need to pass for the CI build to succeed. The config file is found [here](./.github/workflows/build-and-test.yml).

### Prettier

This project uses [Prettier](https://prettier.io/) to enforce code style. There are [`.prettierrc`](.prettierrc) and [`.prettierignore`](.prettierignore) configuration files to adjust some options. Prettier is also wired up to a [pre-commit hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks). This DOES slightly slow down git, as it runs the hook on staged files every time `git commit` is executed.

Prettier can be configured within [editors](https://prettier.io/docs/en/editors.html) so that it formats files on save, which helps minimize any changes the pre-commit hook would need to make.

### Webpack Bundle Analyzer

The project includes [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer), to help determine the size of the project and its webpack dependencies. To use it, type `yarn run build:stats` in the project's directory in a terminal to create the webpack bundle. Run `yarn run analyze`, and webpack-bundle-analyzer will launch a server and browser window with a visualization of the bundle size.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
