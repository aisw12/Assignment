Steps to run the application locally

1.Open the VS code and then open a empty folder
2.Inside the folder in the terminal give this command git clone "https://github.com/aisw12/Assignment.git"
3.After that cd tab Assignment the path will be folder/Assignment 
4.For installing all dependencies npm i
5.Open the json servor using  json-server --watch db.json --port 5000
6.While opening this "http://localhost:5000/tasks" in server all the tasks will be visible in the server
7.Start the server using npm start
8.Task Management dashboard will be visible in localhost:3000
9.Add  new task button is there ,while clicking on it a modal will appear where you can add  a task in todo,pending and done status
10.You can able to drag items between To -do,pending and Done status.
11.All the items added manually will automatically get updated in the backend.


Self Evaluation

Good
Functionality: The project provides a Kanban-style task management dashboard . The tasks are fetched from a mock API and displayed dynamically, with the ability to drag and drop tasks between columns.

API Integration: I integrated a mock REST API using axios to handle the fetching and updating of tasks. The CRUD operations (Create, Read, Update, Delete) are functional, allowing tasks to be added, fetched, and moved between columns efficiently.

Responsive Design: The application was designed to be responsive for better usability across devices, ensuring that the layout adjusts to different screen sizes, which is an important aspect of user experience.

Bad

UI/UX: The current UI could be enhanced with more polished visuals and clearer user feedback. For example, when tasks are successfully moved, there could be a notification or animation to indicate the action was successful.

Areas of improvement

Security: Even though it's a mock API, security concerns should be considered, such as handling sensitive data properly (e.g., password storage or tokens), even if it's only a small part of a larger production app.


Self-Criticism: Be critical of your own code! Highlight any shortcomings you noticed.
Hardcoded Values:
 Some values, like the task status options ("To Do", "In Progress", "Done"), are hardcoded in the components. If I wanted to scale the app or make it more customizable (e.g., adding custom task statuses), it would require a refactor. A better approach would be to centralize such data and map over it to generate the UI dynamically.
 Minimal Styling: 
 The styling for the app is quite basic and could benefit from a more consistent and modern design. Using CSS frameworks like Tailwind CSS or Material-UI could speed up styling and improve the overall aesthetics.