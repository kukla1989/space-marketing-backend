Simple Express Server with PostgreSQL Database
A simple Express.js server that interacts with a PostgreSQL database. It provides endpoints to manage users, including retrieving all users and creating a new user.


Environment Variables:
Create a .env file in the root directory and add:


PORT=3001
DATABASE=<your-database-url>
Replace <your-database-url> with the connection URL for your PostgreSQL database.


Usage
Get All Users
Endpoint: GET /users
Description: Retrieves all users from the database.
Create User
Endpoint: POST /create-user
Description: Creates a new user.
Request Body:
json
Copy code
{
    "name": "<name>",
    "surname": "<surname>",
    "email": "<email>",
    "phone": "<phone>"
}
