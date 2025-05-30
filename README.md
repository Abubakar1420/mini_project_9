# User BlogPage API - Node.js + Express + PostgreSQL

This is a RESTful API project built using **Node.js**, **Express**, and **PostgreSQL** for managing user data. It supports basic CRUD operations and uses environment variables for secure configuration.

---

## Project Structure

```
project-root/
├── db/
│   └── connection.js       # PostgreSQL database connection
├── Routes/
│   └── users.js            # Route definitions for user CRUD operations
├── server.js               # Main server entry point
├── .env                    # Environment variables (not committed)
└── .gitignore              # Ignore node_modules and sensitive files
```

---

## File Descriptions

### `server.js`

* Initializes and configures the Express server
* Connects to the PostgreSQL database
* Sets up middleware for JSON parsing and routing
* Defines error handlers for 404 and 500 status codes
* Route `/` returns a welcome message
* Route `/error` simulates a server error for testing

### `db/connection.js`

* Loads environment variables using `dotenv`
* Creates a PostgreSQL client using `pg`
* Exports the client for reuse in other parts of the app

### `Routes/users.js`

* Manages all user-related endpoints with `express.Router()`
* **POST `/users`**: Validates input and inserts a new user
* **GET `/users`**: Fetches all users from the database
* **GET `/users/:id`**: Fetches a single user by ID
* **PUT `/users/:id`**: Updates user information by ID
* **DELETE `/users/:id`**: Deletes a user by ID

> Uses `express-validator` for input validation and parameter checking.

---

## Setup Instructions

### 1. Clone the repository

```bash
https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=your_pg_user
DB_PORT=5432
DB_PASSWORD=your_pg_password
DB_NAME=your_database_name
```

### 4. Run the application

```bash
node server.js
```

Server will run on `http://localhost:3000`

---

## API Endpoints

### Base URL: `/users`

#### POST `/users`

**Add a new user**

* **Body:** `{ id, name, email, age }`
* Validates: name (min 3 chars), email (min 3 chars), age (min 16)

#### GET `/users`

**Fetch all users**

#### GET `/users/:id`

**Fetch a user by ID**

#### PUT `/users/:id`

**Update a user by ID**

* **Body:** `{ name, email, age }`

#### DELETE `/users/:id`

**Delete a user by ID**

---

## .gitignore

```
node_modules/
.env
```

> Ensures sensitive and heavy files are excluded from version control.

---

## Sample `.env`

```env
DB_HOST=localhost
DB_USER=postgres
DB_PORT=5432
DB_PASSWORD=secret
DB_NAME=userblog
```

---

## Notes

* Ensure PostgreSQL is running and the database is created.
* Adjust port, database credentials, and other values in `.env` as needed.

---

## License

This project is open-source and free to use under the MIT license.

---

Let me know if you want Swagger (OpenAPI) docs, Docker support, or a frontend integrated!
