Task Management Dashboard Setup Instructions

1.Open VS Code: Launch VS Code and open an empty folder where you want to set up the project.

2.Clone the Repository:
 Open the terminal in VS Code.
Run the following command to clone the repository:
git clone https://github.com/aisw12/Assignment.git

3.Navigate to the Project Folder:
  After cloning the repository, change into the project directory by running:
 cd Assignment
 This will set your current path to folder/Assignment.

4.Install Dependencies:
  Install the necessary dependencies by running:
  npm install
  This will install all the required packages listed in package.json.

5.Start the JSON Server:

Run the following command to start the JSON server:
json-server --watch db.json --port 5000
This will set up a mock REST API on http://localhost:5000 where the tasks are stored and managed.
Verify Tasks on the Server:
Open a browser and go to http://localhost:5000/tasks. You should see a list of tasks displayed on the server.

6.Start the React Development Server:
Open a new terminal window and run the following command to start the React application:
npm start
The task management dashboard will now be accessible at http://localhost:3000.

7.Add New Tasks:
On the dashboard, you'll see an "Add New Task" button. When you click it, a modal will appear where you can add a new task with one of the following statuses:
To Do
In Progress
Done
8.Drag and Drop Functionality:
You can drag tasks between the columns (To Do, In Progress, and Done) to update their status.

9.Backend Sync:
Any tasks added or moved will automatically be updated in the backend, and changes will persist when you reload the page.


A brief explanation of the architecture and approach.

FRONT END
The frontend of the application is built using React, a popular JavaScript library for building user interfaces. React provides an efficient way to manage the application's state and UI, especially for dynamic and interactive applications like a task management dashboard.

Key Features:
Components: The application is divided into small, reusable React components. These include:

App: The main container component that holds the state and renders the Kanban board and modal for task creation.
TaskColumn: Represents individual columns (To Do, In Progress, Done) that display tasks.
TaskModal: A modal dialog that allows users to add new tasks.
State Management: The state is managed using React’s useState and useEffect hooks. The state holds information about tasks, modal visibility, and task status.

Drag-and-Drop Functionality: Users can drag and drop tasks between columns. This functionality is handled by listening to the drag and drop events and updating the task status accordingly in the backend.

Responsive Design: CSS is used with media queries to make the layout responsive, ensuring that the app works well on devices of different screen sizes

BACKEND

The backend is implemented using JSON Server, a mock REST API tool that serves data in JSON format. This is particularly useful for rapid prototyping and testing without needing a full-fledged backend.

Key Features:
Task Data: The backend stores tasks in a JSON file (db.json). Each task has fields like id, title, description, and status.

Self Evaluation

Good-

Functionality: The project provides a Kanban-style task management dashboard . The tasks are fetched from a mock API and displayed dynamically, with the ability to drag and drop tasks between columns.

API Integration: I integrated a mock REST API using axios to handle the  tasks and allowing tasks to be added, fetched, and moved between columns efficiently.

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

 Technology Rating:
 React JS:9/10
 JavaScript:9/10;
 HTML:9/10;
 CSS:9/10