# **Resollect - Full Stack Inventory Management System**

## **Introduction**
Resollect is a **full-stack inventory management system** built with **Django (DRF) for the backend** and **React for the frontend**. It provides a simple and intuitive interface to manage inventory, with features such as:

**Item listing with filtering & grouping**  
**CRUD operations for inventory management**  
**Mobile-responsive UI**  
**REST APIs for seamless integration**  
**Database storage using PostgreSQL**  

---

## **Tech Stack & Libraries Used**
### **Backend**
- **Django** & **Django Rest Framework (DRF)** – For API development
- **PostgreSQL** – Relational database for storing items
- **CORS Headers & Middleware** – To enable frontend-backend communication
- **Gunicorn/Nginx** (Optional) – For deployment

### **Frontend**
- **React (Vite)** – Fast frontend framework
- **Tailwind CSS** – For responsive UI styling
- **Axios** – To make API requests
- **React Router** – For page navigation
- **Lucide-react** – Icon library for UI components

---

## ** Setup Guide**

### **PostgreSQL Setup**
#### **Step 1: Install PostgreSQL**
For Windows, download from [PostgreSQL official site](https://www.postgresql.org/download/).
For Ubuntu/Linux, run:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```
For Mac, use Homebrew:
```bash
brew install postgresql
```

#### **Step 2: Start PostgreSQL Service**
```bash
sudo service postgresql start  # Linux
brew services start postgresql  # Mac
```

#### **Step 3: Create Database & User**
```bash
sudo -u postgres psql
# Inside psql:
CREATE DATABASE resollect_db;
CREATE USER resollect_user WITH ENCRYPTED PASSWORD 'password123';
ALTER ROLE resollect_user SET client_encoding TO 'utf8';
ALTER ROLE resollect_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE resollect_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE resollect_db TO resollect_user;
\q  # Exit psql
```

---

### **Backend Setup (Django + PostgreSQL)**
#### **Step 1: Clone Repository & Create Virtual Environment**
```bash
git clone https://github.com/yourusername/resollect.git
cd resollect/backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

#### **Step 2: Install Dependencies**
```bash
pip install -r requirements.txt
```

#### **Step 3: Configure `settings.py` for PostgreSQL**
Edit `backend/myproject/settings.py`:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'resollect_db',
        'USER': 'resollect_user',
        'PASSWORD': 'password123',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

#### **Step 4: Apply Migrations & Run Server**
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser  # Optional
python manage.py runserver
```
🚀 Backend will be available at **`http://127.0.0.1:8000/api/`**.

---

### **Frontend Setup (React + Tailwind CSS)**
#### **Step 1: Install Dependencies**
```bash
cd ../frontend
npm install
```

#### **Step 2: Start the React App**
```bash
npm run dev
```
🚀 Open **`http://localhost:5173/`** to see the frontend UI.

---

## **API Documentation (Postman Testing Guide)**

### **Base URL:**
```
http://127.0.0.1:8000/api/
```

### **CRUD Endpoints**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/items/` | List all items (supports search) |
| `POST` | `/items/` | Create a new item |
| `GET` | `/items/<id>/` | Retrieve a single item |
| `PUT` | `/items/<id>/` | Update an item |
| `DELETE` | `/items/<id>/` | Delete an item |
| `GET` | `/items/bucket_by_category/` | Group items by category |

### **Testing with Postman**
- **List all items:** `GET http://127.0.0.1:8000/api/items/`
- **Create item:** Send JSON data in a `POST` request.
- **Update item:** Send JSON data in a `PUT` request.
- **Delete item:** `DELETE http://127.0.0.1:8000/api/items/1/`

---

## **Deployment Guide**
### **Backend (Django) Deployment**
```bash
pip install gunicorn

# Run Gunicorn
gunicorn --bind 0.0.0.0:8000 backend.wsgi
```

### **Frontend (React) Deployment**
```bash
npm run build
```
Deploy the `dist/` folder on **Netlify**, **Vercel**, or any hosting provider.

---

## ** Contributing**
Pull requests are welcome! Steps to contribute:
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## ** License**
This project is licensed under the **MIT License**.

---

## ** Author**
👤 **Ankit**  
📧 Contact: `ankityd0703@gmail.com`  
GitHub: [yourgithubusername](https://github.com/ankit3388)


