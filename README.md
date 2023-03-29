# Problem Statement
Send the data from one component to another component with out the use of Parent Child Relationship.

# Approach
- A service file can be used for the cross component communication and can be used to handle the common data.
- Here in the service file i have made use of subject which is used for sending the data between the components.
- In the first component i have created a button upon clicking it a function will be called which will change the state of the variable and a service function is also called with the updated state as a parameter.
- After getting the updated state i have captured it inside the variable and the subscribe method which is written in the second component will be triggered because of the observable(since the data has been changed).
- Here i have used behaviour subject, it is similar to subject the slight change is that we can set the initial value of it and in the subject we can't.
- I will get the value of updated state inside second component easily , so i just have to store that state and display it in the UI with the help of data binding.
- I have used string interpolation technique to show the updated show everytime after a button is clicked.




# JukshioProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
