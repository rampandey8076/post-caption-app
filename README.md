# 📸 Post Caption App

A simple full-stack application where users can create posts with captions. Built with **Express.js** and **MongoDB** on the backend, and **React.js** on the frontend.

---

## 🚀 Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB (with Mongoose)

**Frontend**
- React.js

**Tools used during development**
- Postman — for testing API endpoints
- MongoDB Compass — for viewing and managing database collections

---

## ✨ Features

- Create a new post with a caption
- View all posts
- Get a single post by ID
- Update a post
- Delete a post

---

## 📁 Project Structure

```
CompleteBackend/
├── backend/
│   ├── models/
│   │   └── Post.js
│   ├── routes/
│   │   └── postRoutes.js
│   ├── controllers/
│   │   └── postController.js
│   ├── config/
│   │   └── db.js
│   ├── .env.example
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/rampandey8076/post-caption-app.git
cd post-caption-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder (use `.env.example` as reference):
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000`.

---

## 🔌 API Endpoints

| Method | Endpoint            | Description           |
|--------|----------------------|------------------------|
| POST   | `/api/posts`         | Create a new post      |
| GET    | `/api/posts`         | Get all posts          |
| GET    | `/api/posts/:id`     | Get a single post      |
| PUT    | `/api/posts/:id`     | Update a post          |
| DELETE | `/api/posts/:id`     | Delete a post          |

### Example Request Body (POST `/api/posts`)
```json
{
  "caption": "My first post!",
  "imageUrl": "https://example.com/image.jpg"
}
```

> 💡 You can test all endpoints using **Postman**, and view your stored data live in **MongoDB Compass**.

---

## 🗄️ Database

This project uses MongoDB to store post data. Each post document contains:

```json
{
  "_id": "ObjectId",
  "caption": "String",
  "imageUrl": "String",
  "createdAt": "Date"
}
```

You can connect to your database using **MongoDB Compass** with the same connection string used in `.env`.

---

## 🛠️ Future Improvements

- User authentication (login/signup)
- Like and comment on posts
- Image upload support (Cloudinary/Multer)
- Pagination for posts

---

## 👤 Author

**Ram Pandey**
GitHub: [@rampandey8076](https://github.com/rampandey8076)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
