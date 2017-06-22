# Pub-Crawl by Elan Baharie, Jesse Hoare Evans, Ben Petrosky, and Peter Karellas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

This project utilizes a Firebase and Auth0.  The Auth0 account will expire by August of 2017. This project utilizes the FourSquare API key to return information about establishnents in any desired location.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

##Prerequisites
You will need the following things properly installed on your computer

  * Git
  * Node.js (with NPM)
  * Bower
  * Angular2

## Installation and Deployment
 * git clone this repository
 * cd Pub-crawl
 * bower init
 * bower install
 * npm install
 * npm install angularfire2@4.0.0-rc.0 firebase --save
 * npm install promise-polyfill --save-exact
 * npm install --save auth0-js
 * ng build
 * ng serve
 * go to the localhost given to you in the command line in the browser of your choice.

## User Interactivity
 * Once you have created a login and logged in
 * You can create a crawl in the "Add A Crawl" page
 * You can look up establishments in any given area that you want to go to.
 * Once you have added a crawl you can go to the "View All Crawls" page and view the crawl you created.
 * Then you can add your name to the crawl when you click on the crawl
 * On this detail page you can ciew the details of the crawl and also see anyone else that has signed up
 * If you go to the profile page you can then view every crawl that you have signed up for.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
