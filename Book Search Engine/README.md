
# 📚 Book Search Engine 

## Description
This is a full-stack MERN application that allows users to search for books using the Google Books API, create an account, and save their favorite books. This updated version of the Book Search Engine replaces the existing RESTful API with GraphQL using Apollo Server, and integrates authentication, client-server communication, and deployment through Render and MongoDB Atlas.

---

## 🚀 Features
- Search for books using the Google Books API.
- Sign up and log in securely with JWT-based authentication.
- Save and remove books to/from your personal reading list.
- Built with GraphQL, Apollo Server, and Apollo Client.
- Deployed with Render and uses MongoDB Atlas.

---

## 🧑‍💻 User Story
```md
AS an avid reader  
I WANT to search for new books to read  
SO THAT I can keep a list of books to purchase  
```

---

## ✅ Acceptance Criteria
- **When the app loads**, the user sees options to search for books and login/signup.
- **Searching without logging in** displays book results (title, author, description, image, and a Google Books link).
- **Login/Signup modal** allows account creation or login via a toggle.
- **After logging in**, users can:
  - Save books to their account.
  - View saved books.
  - Remove books from their saved list.
  - Logout, returning to the original menu view.

---

## 🛠️ Technologies Used
### Frontend
- React
- Apollo Client
- GraphQL

### Backend
- Apollo Server (Express)
- GraphQL
- MongoDB Atlas

### Authentication
- JWT
- Custom middleware for GraphQL context

### Deployment
- Render


## 🔌 Apollo Server & Client
### Backend
- The RESTful API has been replaced with a GraphQL server using Apollo Server.
- Authentication middleware is adjusted to inject user data into the GraphQL context.

### Frontend
- `ApolloProvider` is set up in the `App.js` to allow components to interact with the Apollo Server.
- GraphQL queries and mutations handle fetching and modifying data (search, save, remove books).

---

## ☁️ Deployment
This app is deployed using:
- **Render** for hosting the Node.js server.
- **MongoDB Atlas** for the database.

---


## 🚀 Getting Started
### Prerequisites
- Node.js
- MongoDB Atlas account
- Render account

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies for both the client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

### Running the App Locally
1. Start the server:
   ```bash
   cd server
   npm start
   ```
2. Start the client:
   ```bash
   cd client
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000`.

## 📜 License
This project is licensed under the MIT License.
```
