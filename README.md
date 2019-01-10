# MyAngular5App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

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


## json-server installation
First, you need to install a json-server. You can do it globally (-g) with npm:

##  npm install -g json-server
Create a JSON file with mock data
In the root folder of your application, create a file with the extension .json. Inside you can add a set of data with several fields:


Run it
Run the json-server in a terminal and launch the JSON file. The option watch (shortcut: -w) allows to reload automatically the browser when the JSON file is modified:

## json-server --watch myJSONfile.json
Open your browser at the indicated URL. You can find this information in your terminal:

Screen shot from my terminal after running the json-server command
You can try to test the different paths to see how the data are displayed:

http://localhost:3000/pictures

http://localhost:3000/author

http://localhost:3000/comments

Use the backend in your Angular application
If you have an Angular application, you can use this backend in your service.

Set an URL variable to the localhost url, then use it in your CRUD functionalities for instance:

That’s it! You installed a json-server, created a set of mock data and run it!
Sort, Add, Search, Filter, Delete and Update
The json-server supports so many features, that I’m often tempted to use it in production. But of corse we don’t ;-)… Still you should know about the power your backend developers won’t get done that quickly:

## Basics:
GET    /pictures

GET    /pictures/1

POST   /pictures

PUT    /pictures/1

PATCH  /pictures/1

DELETE /pictures/1

## Searching:
GET /pictures?q=view (full-text search)

GET /pictures?title=A%20natural%20view&author=Lisa

GET /posts?id=1&id=2
GET /pictures?author=Andy

##  Sorting:
GET /posts?_sort=author&_order=asc

And much more: Relationships, Slicing, Pagination, Expanding, Collapsing…

It’s even possible to configure your own routes in a separate file, and you can even load json-server in your own node backend to add permission handling. (Be aware of the risk of data loss.)
