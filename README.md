# DGHA Admin

This is the admin application for the DGHA project which was the final and largest project for my Software Development Diploma.

These are the other sections of the project:
- [Mobile App](https://github.com/leechuyem/dgha)
- [Backend API](https://github.com/jamtowers/DGHA-Backend)

This project was made with the help of these fine folks:
- [Joseph Khai](https://github.com/josephkhaipi)
- [Lee Chu Yem](https://github.com/leechuyem)
- [Matthew Thorne](https://github.com/Thornie)
- [James Towers](https://github.com/jamtowers) (Hey that's me!)

<sub>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.</sub>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Special Requirements

If you are planning on trying to get the DGHA system running there are a few things you need to make sure of:
1. The config file (src>app>config.ts) has the correct urls (ie. so they point towards where your hosting the API and Identity server)
2. The AuthService (src>app>auth>auth.service.ts) `getClientSettings()` function has the correct url for the hosted admin application
3. The callback url and the cors rules are the same on the Identity Server (more details on [DGHA-backend](https://github.com/jamtowers/DGHA-Backend) readme)

Note: the IsDevMode() check is there because it is assumed you are running the backend system locally in a development environment

## Deployment

Details on how to deploy angular app can be found [here](https://angular.io/guide/deployment)
