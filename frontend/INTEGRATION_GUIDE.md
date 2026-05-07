# 🔗 Frontend-Backend Integration Guide

## Overview

Your Portfolio QHSE application is now fully integrated with:
- **Frontend**: React 18.2.0 on http://localhost:3000
- **Backend**: Express.js API on http://localhost:8000
- **Database**: Ready for Supabase PostgreSQL

---

## 🔄 How the Integration Works

### 1. Frontend Makes API Calls

The React frontend uses **axios** to communicate with the backend:

```javascript
// frontend/src/api/client.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const client = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

### 2. Authentication Flow

```
User Login (Frontend)
    ↓
POST /api/auth/login (Backend)
    ↓
Backend validates credentials
    ↓
Backend returns JWT token
    ↓
Frontend stores token in localStorage
    ↓
Frontend includes token in Authorization header for protected requests
```

### 3. Contact Submission Flow

```
User fills contact form (Frontend)
    ↓
POST /api/contacts (Backend)
    ↓
Backend validates data
    ↓
Backend stores in database
    ↓
Backend returns success response
    ↓
Frontend displays confirmation message
```

---

## 📡 API Integration Points

### Contact Form Submission

**Frontend Code** (example):
```javascript
import client from '../api/client';

const submitContact = async (formData) => {
  try {
    const response = await client.post('/contacts', {
      nom: formData.name,
      email: formData.email,
      numero: formData.phone,
      sujet: formData.subject,
      message: formData.message,
    });
    
    if (response.data.success) {
      console.log('Contact submitted successfully');
      // Show success message
    }
  } catch (error) {
    console.error('Error submitting contact:', error);
    // Show error message
  }
};
```

**Backend Endpoint**:
```
POST /api/contacts
Content-Type: application/json

{
  "nom": "John Doe",
  "email": "john@example.com",
  "numero": "1234567890",
  "sujet": "Inquiry",
  "message": "Hello..."
}

Response:
{
  "success": true,
  "message": "Message envoyé avec succès!",
  "data": {
    "id": 1,
    "nom": "John Doe",
    "email": "john@example.com",
    "numero": "1234567890",
    "sujet": "Inquiry",
    "message": "Hello...",
    "created_at": "2026-05-04T10:30:00.000Z",
    "updated_at": "2026-05-04T10:30:00.000Z"
  }
}
```

### Admin Login

**Frontend Code** (example):
```javascript
const login = async (username, password) => {
  try {
    const response = await client.post('/auth/login', {
      username,
      password,
    });
    
    if (response.data.success) {
      // Store token
      localStorage.setItem('admin_token', response.data.token);
      // Redirect to dashboard
      navigate('/admin/dashboard');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

**Backend Endpoint**:
```
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password123"
}

Response:
{
  "success": true,
  "message": "Connexion réussie",
  "token": "token_1234567890_abc123def456"
}
```

### Get Contacts (Protected)

**Frontend Code** (example):
```javascript
const fetchContacts = async () => {
  try {
    const response = await client.get('/contacts');
    
    if (response.data.success) {
      setContacts(response.data.data);
    }
  } catch (error) {
    if (error.response?.status === 401) {
      // Token expired, redirect to login
      navigate('/admin/login');
    }
  }
};
```

**Backend Endpoint**:
```
GET /api/contacts
Authorization: Bearer token_1234567890_abc123def456

Response:
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nom": "John Doe",
      "email": "john@example.com",
      "numero": "1234567890",
      "sujet": "Inquiry",
      "message": "Hello...",
      "created_at": "2026-05-04T10:30:00.000Z",
      "updated_at": "2026-05-04T10:30:00.000Z"
    }
  ]
}
```

### Delete Contact (Protected)

**Frontend Code** (example):
```javascript
const deleteContact = async (contactId) => {
  try {
    const response = await client.delete(`/contacts/${contactId}`);
    
    if (response.data.success) {
      // Remove from list
      setContacts(contacts.filter(c => c.id !== contactId));
    }
  } catch (error) {
    console.error('Error deleting contact:', error);
  }
};
```

**Backend Endpoint**:
```
DELETE /api/contacts/:id
Authorization: Bearer token_1234567890_abc123def456

Response:
{
  "success": true,
  "message": "Message supprimé avec succès"
}
```

### Get Statistics (Protected)

**Frontend Code** (example):
```javascript
const fetchStats = async () => {
  try {
    const response = await client.get('/contacts/stats');
    
    if (response.data.success) {
      setStats(response.data.data);
    }
  } catch (error) {
    console.error('Error fetching stats:', error);
  }
};
```

**Backend Endpoint**:
```
GET /api/contacts/stats
Authorization: Bearer token_1234567890_abc123def456

Response:
{
  "success": true,
  "data": {
    "total": 42,
    "today": 5
  }
}
```

---

## 🔐 Authentication & Authorization

### Token Management

The frontend automatically handles token management:

```javascript
// frontend/src/api/client.js

// Add token to every request
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 responses
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('admin_token');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);
```

### Backend Authentication

The backend validates tokens on protected routes:

```javascript
// backend-server.js

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token || token !== adminToken) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }

  next();
};

// Use middleware on protected routes
app.get('/api/contacts', authenticateToken, (req, res) => {
  // Handle request
});
```

---

## 🌍 CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (development frontend)
- `http://localhost:3001` (alternative frontend port)

**For production**, update `backend-server.js`:

```javascript
app.use(cors({
  origin: [
    'https://your-frontend.vercel.app',
    'https://your-domain.com'
  ],
  credentials: true
}));
```

---

## 🗄️ Database Integration (Supabase)

### Current State
- Backend uses in-memory storage
- Ready to connect to Supabase PostgreSQL

### Migration Steps

1. **Create Supabase Project**
   - Go to https://supabase.com
   - Create new project
   - Get connection string

2. **Install Supabase Client**
   ```bash
   npm install @supabase/supabase-js
   ```

3. **Update Backend**
   ```javascript
   const { createClient } = require('@supabase/supabase-js');
   
   const supabase = createClient(
     process.env.SUPABASE_URL,
     process.env.SUPABASE_KEY
   );
   ```

4. **Replace In-Memory Storage**
   - Replace `let contacts = []` with Supabase queries
   - Update endpoints to use `supabase.from('contacts')`

5. **Set Environment Variables**
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-anon-key
   ```

---

## 🚀 Environment Variables

### Frontend (.env or .env.local)
```
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_API_TIMEOUT=10000
```

### Backend (.env)
```
PORT=8000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=password123
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
```

---

## 🧪 Testing the Integration

### 1. Test Contact Submission
```bash
# Open http://localhost:3000 in browser
# Fill out contact form
# Submit
# Check backend logs for confirmation
```

### 2. Test Admin Login
```bash
# Navigate to http://localhost:3000/admin/login
# Enter: admin / password123
# Should redirect to dashboard
```

### 3. Test Protected Routes
```bash
# After login, try to access admin dashboard
# Should display contacts list
# Should show statistics
```

### 4. Test API Directly
```bash
# Test contact submission
curl -X POST http://localhost:8000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"nom":"Test","email":"test@test.com","numero":"123","sujet":"Test","message":"Test"}'

# Test login
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password123"}'
```

---

## 🐛 Common Integration Issues

### Issue: Frontend can't reach backend
**Solution**:
1. Verify backend is running: `curl http://localhost:8000/health`
2. Check CORS configuration
3. Verify `REACT_APP_API_URL` is correct
4. Check browser console for errors

### Issue: Token not being sent
**Solution**:
1. Verify token is stored in localStorage
2. Check axios interceptor is configured
3. Verify Authorization header format: `Bearer <token>`

### Issue: 401 Unauthorized on protected routes
**Solution**:
1. Verify token is valid
2. Check token hasn't expired
3. Verify backend token validation logic
4. Check token format matches

### Issue: CORS errors
**Solution**:
1. Verify frontend URL is in CORS whitelist
2. Check `credentials: true` is set
3. Verify headers are correct
4. Check preflight requests are handled

---

## 📊 Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    React Frontend                           │
│              (http://localhost:3000)                        │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Contact Form Component                              │  │
│  │  - Collects user input                               │  │
│  │  - Validates data                                    │  │
│  │  - Calls API client                                  │  │
│  └──────────────────────────────────────────────────────┘  │
│                         ↓                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  API Client (axios)                                  │  │
│  │  - Adds authentication token                         │  │
│  │  - Handles errors                                    │  │
│  │  - Manages redirects                                 │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                         ↓ HTTP
                    CORS Enabled
                         ↓
┌─────────────────────────────────────────────────────────────┐
│                  Express.js Backend                         │
│              (http://localhost:8000)                        │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  API Routes                                          │  │
│  │  - POST /api/contacts (public)                       │  │
│  │  - POST /api/auth/login (public)                     │  │
│  │  - GET /api/contacts (protected)                     │  │
│  │  - DELETE /api/contacts/:id (protected)              │  │
│  │  - GET /api/contacts/stats (protected)               │  │
│  └──────────────────────────────────────────────────────┘  │
│                         ↓                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Authentication Middleware                           │  │
│  │  - Validates tokens                                  │  │
│  │  - Protects routes                                   │  │
│  └──────────────────────────────────────────────────────┘  │
│                         ↓                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Data Storage (Currently In-Memory)                  │  │
│  │  - Contacts array                                    │  │
│  │  - Admin token                                       │  │
│  │  (Ready for Supabase PostgreSQL)                     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ Integration Checklist

- [x] Frontend React application created
- [x] Backend Express.js API created
- [x] API client configured with axios
- [x] CORS enabled for localhost
- [x] Authentication flow implemented
- [x] Contact submission endpoint working
- [x] Protected routes configured
- [x] Token management implemented
- [x] Error handling configured
- [x] Health check endpoint available
- [ ] Supabase database connected
- [ ] Production environment variables set
- [ ] CORS updated for production domains
- [ ] Admin credentials changed
- [ ] Error logging configured
- [ ] Monitoring set up

---

**Last Updated**: May 4, 2026
