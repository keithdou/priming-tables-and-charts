## PrimengCatalogue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

It demonstrates some basic tables and chart layouts using PrimeNG.  Data is retrieved from a public REST service at http://services.groupkt.com - a list of USA states.

## Pre-requisites

Angular/CLI 6.0.1 or later, Nodejs, npm

## Project Setup (from project base directory)

npm install 
npm install primeng --save
npm install font-awesome
npm install -g json-server
npm install chart.js --save

Until primeng is updated to v6 then you will also need to install rxjs-compat for backwards compatibility:

npm install rxjs@6 rxjs-compat@6 --save   (see https://update.angular.io)


## Features (still under development)

* Proxy server to avoid CORS issues 
* REST service GET and PUT
* Angular / PrimeNG forms with validation
* PrimeNG tables - sorts and pagination
* PrimeNG charts and drill-down using dialogues
* PrimeNG overlays on menu header
* Angular Router with child components and guards
* Using httpClient with file data
* Recursive tree processing for conversion of JSON to PrimeNG Org Chart data.
* PrimeNG Gmap integration

## Runtime

json-server --watch usersdb   (from base directory)
npm start


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
