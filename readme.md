# Simple Todo App

This is a basic CRUD application built with Node.js, Express, and SQLite. It allows you to create, read, update, and delete todo items.

## Getting Started

1. **Install dependencies:**

   ```bash
   cd todo-app
   npm install
   ```

2. **Run the server:**

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:3000`.

## Usage

You can interact with the API using tools like Postman, curl, or any other HTTP client.

**Endpoints:**

* **GET `/todos`:** Get all todos.
* **POST `/todos`:** Create a new todo.
  * **Request body:**

  ```json
  {
    "task": "Buy groceries"
  }
  ```

* **GET `/todos/:id`:** Get a specific todo by ID.
* **PUT `/todos/:id`:** Update a todo by ID.
  * **Request body:**

  ```json
  {
    "task": "Walk the dog",
    "completed": true // optional
  }
  ```

* **DELETE `/todos/:id`:** Delete a todo by ID.

**Example using curl:**

* **Create a todo:**

   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"task": "Learn Node.js"}' http://localhost:3000/todos
   ```

* **Get all todos:**

   ```bash
   curl http://localhost:3000/todos
   ```

* **Update a todo (completed):**

   ```bash
   curl -X PUT -H "Content-Type: application/json" -d '{"task": "Walk the dog", "completed": true}' http://localhost:3000/todos/1
   ```

* **Delete a todo:**

   ```bash
   curl -X DELETE http://localhost:3000/todos/2
   ```

## Technologies Used

* **Node.js:** JavaScript runtime environment.
* **Express:** Web framework for building Node.js web applications.
* **SQLite:** Lightweight, embedded database system.

## Contributions

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
