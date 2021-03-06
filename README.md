# openkit-task-seb

This application is deployed using vercel: https://openkit-task-seb.vercel.app/

Todo app using React, Redux, Firebase and TailwindCSS.

Redux is used for storing todos and performing CRUD operations on the todos.

On page load, the todos from the Firebase firestore database are retrieved and displayed in the todos list.

The Save Todos button saves the current state of the todos list to the firestore database. This is done by first deleting all current todos in the firestore database, and then adding all todos currently in the list to the database.

There is validation for the input fields to make sure empty todos cannot be submitted.

## UI Design
![image](https://user-images.githubusercontent.com/75766182/165186613-da8abe67-37b4-4e8d-825d-592bcbe4c76d.png)
