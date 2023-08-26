# User Management System

This assignment aims to provide a comprehensive user management system that seamlessly integrates frontend and backend functionalities. By following these instructions, you can successfully set up and run the project.

## Getting Started

## Starting the Backend Server
To initiate the backend server, follow these steps:
1. Navigate to the Server folder .
2. Run the following command to install the required dependencies and to start the server:
```yaml
    Step1: npm i 
    Step2: npm run dev
```
## Starting the Frontend Server
To initiate the frontend server, follow these steps:
1. Navigate to the client folder .
2. Run the following command to install the required dependencies and to start the server:
```yaml
    Step1: npm i 
    Step2: npm start
```

## Backend Includes
- getUsers API for fetch the user details from the database to show those data on the from-end
- createUser API for save the user details in the database
- addAddressForUser API for save the address the adderss of a user in the database
- server file

- The below APIs I have created ealier, but with the above APIs my assignment is working totally fine with least
- API calls in the backend part which leads to a good user experience and to get quick response in the front-end side.
- Below are those APIs
```yaml
    1): userLogin
    2): searchUsers
    3): filterUsers
    4- Middleware): authentication
```

## Backend Includes
### components
- AddAddress
- NavBar
- Register
- UserTable

### Models
- AddressModel
- UserDataModel
- UserModel

### services
- UserServices

### validations
- User Data Validation
- Address Data Validation

### Others
- App.tsx
- index.tsx
- Routers.tsx

## Features
1. Search users by name or email
2. Filter users by department
3. Pagination
4. users can navigate to the previous and next pages, as well as jump to specific page numbers like 10, 25, 50, 100
5. Table view of users.
6. Can add new users through Registration page.
7. Implement validation for the form fields like for Users and address.
8. User listing with sorting options (e.g. sort by name,email).
9. After adding address for a perticular user the number of address column in the table component will be updated automatically.