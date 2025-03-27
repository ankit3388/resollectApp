# Resollect App

**Resollect** is a full-stack web application built using **React (Frontend) & Django (Backend)**.  
It provides a **data table**, supports **filtering & bucketing**, and includes **CRUD operations** via REST APIs.

## 🌐 Live Deployment  
- **Frontend (Netlify):** [Resollect Frontend](https://resollect-eight.vercel.app/)  
- **Backend (Render):** [Resollect Backend](https://resollectapp.onrender.com/)  

---

## 🛠️ Tech Stack
### **Frontend**
- React.js (Vite)
- Tailwind CSS (for UI)
- Axios (for API calls)
- React Router (for navigation)
- Netlify (for deployment)

### **Backend**
- Django & Django Rest Framework (DRF)
- PostgreSQL (Database)
- Gunicorn (for production server)
- Django-CORS-Headers (for CORS handling)
- Render (for deployment)

---

## Project Structure
```
resollect/
️├── backend/             # Django Backend
️│   ├── backend/         # Django Project Settings
️│   ├── myapp/           # Main App (APIs, Models)
️│   ├── manage.py        # Django Management Script
️│   ├── requirements.txt # Backend Dependencies
️├── frontend/            # React Frontend
️│   ├── src/             # React Source Files
️│   ├── public/          # Static Assets
️│   ├── package.json     # Frontend Dependencies
️├── README.md            # Documentation
```

---

## 🚀 Installation & Setup
### **Clone the Repository**
```bash
git clone https://github.com/your-username/resollect.git
cd resollect
```

### **Backend Setup (Django)**
```bash
cd backend
python -m venv venv         # Create a virtual environment
source venv/bin/activate    # Activate (Mac/Linux)
venv\Scripts\activate       # Activate (Windows)
pip install -r requirements.txt
python manage.py migrate    # Apply database migrations
python manage.py runserver  # Start backend
```

#### ** Configure `.env` for Database (if needed)**
```env
DATABASE_URL=postgres://username:password@host:port/database_name
```

---

### ** Frontend Setup (React)**
```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start frontend (Runs on localhost:5173)
```

---

## 💚 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/items/` | List all items (with filtering) |
| **POST** | `/api/items/` | Create a new item |
| **GET** | `/api/items/<id>/` | Retrieve a single item |
| **PUT** | `/api/items/<id>/` | Update an item |
| **DELETE** | `/api/items/<id>/` | Delete an item |
| **GET** | `/api/items/bucket_by_category/` | Group items by category |

---

##  Features
👉 **Landing Page** – Displays items in a **mobile-responsive table**  
👉 **Filtering** – Search items by name/category  
👉 **Data Bucketing** – Group items by category  
👉 **CRUD Operations** – Add, update, and delete items  
👉 **Fully Deployed** – Hosted on **Netlify & Render**  

---

##  Deployment Guide
### **Frontend (Netlify)**
1. Push code to GitHub
2. Go to [Netlify](https://app.netlify.com/) → **New Site from Git**
3. Connect GitHub repo, set **Build Command:** `npm run build`, **Output Dir:** `dist`
4. Deploy and get your **live URL**

### **Backend (Render)**
1. Go to [Render](https://dashboard.render.com/) → **New Web Service**
2. Connect GitHub repo and set **Environment Variables**
3. **Start Command:** `gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT`
4. Deploy and get your **live API URL**

---

##  Troubleshooting
- **CORS Issues?**  
  Ensure your `settings.py` includes:  
  ```python
  CORS_ALLOWED_ORIGINS = [
      "https://resollect-eight.vercel.app",
  ]
  ```
- **Database Errors?**  
  Run migrations again:  
  ```bash
  python manage.py migrate
  ```
- **Frontend Not Updating?**  
  Clear cache and redeploy:  
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  netlify deploy --prod
  ```

---

## 👨‍💻 Author
**Ankit Yadav**  
🔗 **LinkedIn:** [Ankit Kumar](https://linkedin.com/in/ankit-kumar-b7730422a/) 
 **GitHub:** [ankit3388](https://github.com/ankit3388)  

---

## 📜 License
This project is licensed under the **MIT License**.

