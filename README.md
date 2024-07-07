# User Registration System

This project is a user registration system built using Express.js following the MVC architecture. It includes error handling middleware to validate user input and ensure data integrity.

## Project Structure
```
user-registration/
│
├── app.js
├── controllers/
│ └── userController.js
├── middlewares/
│ └── errorHandler.js
├── routes/
│ └── userRoutes.js
└── models/
└── user.js
```

## Features

- User registration with input validation
- Error handling middleware for descriptive error messages
- MVC architecture for organized code structure

## Validation Criteria

- **First Name and Last Name**: Must start with a capital letter.
- **Password**: Must be at least 8 characters long and contain at least one special character, one uppercase letter, and one numeric character.
- **Email Address**: Must contain the "@" symbol.
- **Phone Number**: Must be at least 10 digits long.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/tejas-2104/error-handling-middleware.git
   cd user-registration
   
2.Install dependencies:

```bash
npm install
```
3.Start the server:

```bash
node app.js
```

The server will start running on `http://localhost:8080`.[http://localhost:8080]


## API Endpoints

### Register User

-URL: /api/users/register

-Method: POST

-Payload:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "password": "Password123!",
  "email": "john.doe@example.com",
  "phoneNumber": "1234567890"
}
```
-Success Response:

```json
{
  "message": "User registered successfully!"
}
```
-Error Responses:

```json
{
  "error": "First name must start with a capital letter."
}
 ```

## Testing

Use Postman to test the API by sending requests with various input data to the `/api/users/register` endpoint.

## License

This project is licensed under the MIT License. See the LICENSE file for details.








