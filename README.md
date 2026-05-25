# Image Processing API

## 📌 Description

This project is an image processing API built using **Node.js, Express, and TypeScript**.
It allows users to resize images by providing a filename along with width and height parameters.

The API also implements **caching**, meaning resized images are saved and reused for faster performance on repeated requests.

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

---

## 🛠 Available Scripts

### 🔨 Build the project

```bash
npm run build
```

### ▶️ Start the server

```bash
npm start
```

Server will run on:

```
http://localhost:4000
```

### 🧪 Run tests

```bash
npm test
```

### 🧹 Lint code

```bash
npm run lint
```

### 🎨 Format code

```bash
npm run format:write
```

---

## 📡 API Endpoint

### Resize Image

```
GET /api/images
```

### Query Parameters:

| Parameter | Description                        |
| --------- | ---------------------------------- |
| filename  | Name of the image (e.g. fjord.jpg) |
| width     | Desired width (positive integer)   |
| height    | Desired height (positive integer)  |

---

### ✅ Example Request

```
http://localhost:4000/api/images?filename=fjord.jpg&width=200&height=200
```

---

## 📂 Project Structure

```
src/
  routes/
  utils/
  assets/
    full/   (original images)
    thumb/  (resized images - cached)
```

---

## ⚙️ Functionality

* Resize images using Sharp
* Cache resized images to avoid reprocessing
* Validate query parameters
* Handle errors properly with correct HTTP status codes

---

## ❌ Error Handling

The API returns appropriate errors:

| Case                 | Status Code | Message                                    |
| -------------------- | ----------- | ------------------------------------------ |
| Missing filename     | 400         | Filename is required                       |
| Missing width/height | 400         | Width and height are required              |
| Invalid width/height | 400         | Width and height must be positive integers |
| File not found       | 404         | Input file not found                       |

---

## 🧪 Testing

* API endpoints tested using **SuperTest**
* Image processing tested using **Jasmine**
* Includes both success and failure scenarios

---

## 💡 Additional Features

* Image caching for improved performance
* Clean project structure for scalability
* TypeScript for type safety

---

## 👨‍💻 Author

Ameen Dababat
