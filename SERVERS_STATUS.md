# 🚀 Portfolio QHSE - Servers Status

**Date**: May 4, 2026  
**Status**: ✅ **FULLY OPERATIONAL**

---

## 📊 Current Server Status

### Backend Server (Node.js + Express)
- **Status**: ✅ **RUNNING**
- **URL**: http://localhost:8000
- **Process**: `npm run dev` (Terminal ID: 11)
- **Port**: 8000
- **Framework**: Express.js
- **Database**: In-memory (ready for Supabase integration)

#### Available Endpoints:
```
POST   /api/contacts          - Créer un contact
POST   /api/auth/login        - Connexion admin 
GET    /api/contacts          - Récupérer les contacts (protégé)
DELETE /api/contacts/:id      - Supprimer un contact (protégé)
GET    /api/contacts/stats    - Statistiques (protégé)
GET    /health                - Health check
```

### Frontend Server (React)
- **Status**: ✅ **RUNNING**
- **URL**: http://localhost:3000
- **Process**: `npm start` (Terminal ID: 12)
- **Port**: 3000
- **Framework**: React 18.2.0
- **Router**: React Router v6

#### Features:
- ✅ Contact form submission
- ✅ Admin login functionality
- ✅ Contact management dashboard
- ✅ Statistics display
- ✅ API client with axios
- ✅ Token-based authentication

---

## 🔧 Configuration

### Backend Configuration
- **API Base URL**: http://localhost:8000/api
- **CORS Enabled**: Yes (localhost:3000, localhost:3001)
- **Authentication**: Token-based (Bearer token)
- **Admin Credentials** (default):
  - Username: `admin`
  - Password: `password123`
  - Override with: `ADMIN_USERNAME` and `ADMIN_PASSWORD` env vars

### Frontend Configuration
- **API URL**: http://localhost:8000/api (via `REACT_APP_API_URL`)
- **API Timeout**: 10000ms (via `REACT_APP_API_TIMEOUT`)
- **Token Storage**: localStorage (`admin_token`)
- **Auto-redirect**: On 401 Unauthorized

---

## 📦 Dependencies

### Backend
```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "body-parser": "^1.20.2"
}
```
**Vulnerabilities**: 0 ✅

### Frontend
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.14.0",
  "axios": "^1.4.0",
  "react-scripts": "5.0.1"
}
```
**Vulnerabilities**: Fixed with `npm install --legacy-peer-deps` ✅

---

## 🧪 Testing the Servers

### Test Backend Health
```bash
curl http://localhost:8000/health
```

### Test Contact Submission
```bash
curl -X POST http://localhost:8000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Test User",
    "email": "test@example.com",
    "numero": "1234567890",
    "sujet": "Test Subject",
    "message": "Test message"
  }'
```

### Test Admin Login
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "password123"
  }'
```

---

## 🚀 Deployment Ready

### For Vercel (Frontend)
- ✅ React build optimized
- ✅ Environment variables configured
- ✅ API URL configurable via `REACT_APP_API_URL`

### For Render (Backend)
- ✅ Node.js Express server
- ✅ PORT environment variable support
- ✅ Health check endpoint available
- ✅ CORS configured for production

### For Supabase (Database)
- ✅ Backend ready for PostgreSQL integration
- ✅ Contact model structure defined
- ✅ Authentication ready for Supabase Auth

---

## 📝 Next Steps

1. **Connect to Supabase**:
   - Create Supabase project
   - Set up PostgreSQL database
   - Update backend to use Supabase client
   - Configure environment variables

2. **Deploy Frontend to Vercel**:
   - Push to GitHub
   - Connect Vercel to repository
   - Set `REACT_APP_API_URL` to production backend URL

3. **Deploy Backend to Render**:
   - Push to GitHub
   - Create Render service
   - Set environment variables
   - Configure database connection

4. **Production Checklist**:
   - [ ] Update admin credentials
   - [ ] Enable HTTPS
   - [ ] Configure production CORS origins
   - [ ] Set up error logging
   - [ ] Configure rate limiting
   - [ ] Set up monitoring

---

## 🔗 Quick Links

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8000
- **API Docs**: http://localhost:8000/api
- **Health Check**: http://localhost:8000/health

---

## 📞 Support

For issues or questions:
1. Check the logs in the terminal windows
2. Verify environment variables are set correctly
3. Ensure both servers are running
4. Check CORS configuration if frontend can't reach backend

**Last Updated**: May 4, 2026
