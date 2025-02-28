# TodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

![image](https://github.com/user-attachments/assets/6e1f60d1-5feb-4133-b267-ef5979008caa)

![image](https://github.com/user-attachments/assets/a74ffff7-c223-451a-bfa5-345b7f7b2e7d)



Create a Todo List application in Angular that involves basic CRUD operations, data sharing across components, form validation, Promises, Observables, search functionality, and performance optimization.

Add a method getTodoById(id) to fetch a specific todo based on its ID (using an Observable).

Use TodoService to store todos in a shared array or object, allowing different components to access and modify the data.

Ensure that the TodoListComponent automatically updates when a new todo is added, deleted, or updated from any other component.

TodoListComponent (default page showing all todos),
AddTodoComponent (for adding a new todo),
EditTodoComponent (for editing an existing todo),
TodoDetailComponent (for viewing a detailed view of a todo).

Form Validation:

Use Reactive Forms to handle todo creation and editing.
Validate the following:
Todo text must not be empty (required field).
Todo text length should not exceed 200 characters.
Optional: Add custom validation (e.g., check if the text contains profanity or certain keywords).


Logical Strategy Tasks:

Task 1: If a user tries to add a todo with the same name as an existing one, show a message saying "This todo already exists".
Task 2: Implement a "Mark as Completed" feature. When a todo is marked as completed, it should visually be distinct (crossed-out, grayed out, etc.). The todo item should be updated both visually and logically (add a completed property).
Task 3: Implement the "Delete Confirmation" feature. When the user tries to delete a todo, show a confirmation dialog (either a prompt, modal, or custom confirmation message).
Task 4: Add an "Edit Todo" feature, allowing a user to update the details of an existing todo. Ensure that the todo list is refreshed automatically after editing.


Task 5: Allow users to filter the todo list based on:
Show only completed todos.
Show only active todos.
Show all todos.
Task 6: Add sorting functionality, so that the user can sort todos by creation date, name, or completion status.


Task 8 (Observable Task): Use an Observable to fetch the list of todos from the TodoService. Simulate a delay (e.g., 1 second) in fetching the data. The list of todos should update once the Observable emits the data. Additionally, use the async pipe in the template to handle the Observable’s subscription automatically.

Task 9: Implement a search bar that allows users to search through the todo list by todo text.
Optimization: Do not call the search function on every input (to optimize performance)

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
