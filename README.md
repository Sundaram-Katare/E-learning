# 📚 Learnzo - E-Learning Platform

**Learnzo** is a full-stack e-learning platform where users can explore study materials uploaded by others, share their own knowledge through documents, and collaborate in a growing learning community.  

---

## 🚀 Features
- 🔑 **Authentication & Authorization** with JWT  
- 📂 **Upload Documents** (PDFs, etc.) using `multer` and store them in **Cloudinary**  
- 📖 **View Documents** uploaded by other users  
- 📝 **Share Knowledge** by uploading your own docs  
- 🎨 **Modern UI** built with **Tailwind CSS**, **MUI**, and **Framer Motion** animations  
- 🗄 **Secure Data Storage** with **MongoDB**  

---

## 🛠 Tech Stack
### Frontend
- React.js (MERN)
- Tailwind CSS  
- Material UI (MUI)  
- Framer Motion  

### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  
- Multer (for handling file uploads)  
- Cloudinary (for storing documents)  
- JWT (for authentication)  

---

## ⚡ Installation & Setup
### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/learnzo.git
cd learnzo
```
### 2️⃣ Install Backend Dependencies
```bash
cd server
npm install
```

### 3️⃣ Create .env

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4️⃣ Backend Start
```bash
node server.js
```

### 5️⃣ Setup Frontend
```bash
cd ../client
npm install
npm run dev
```

### Live Demo
Link:- https://e-learning-rosy-gamma.vercel.app/

### 📸 Screenshots
<img width="1899" height="912" alt="image" src="https://github.com/user-attachments/assets/58f34f39-e1a6-4fe5-93d6-f07383583772" />
<img width="1894" height="905" alt="image" src="https://github.com/user-attachments/assets/854e07af-f32e-4c2b-afdb-71e695b579a9" />


### 👨‍💻 Author

Developed with ❤️ by Sundaram Katare

