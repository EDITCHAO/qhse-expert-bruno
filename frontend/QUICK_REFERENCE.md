<<<<<<< HEAD
# ⚡ Quick Reference - Vercel Deployment

## 🎯 What You Need to Know

Your frontend is **100% ready** for Vercel deployment. Everything is configured and tested.

---

## 📋 The 4 Commands Vercel Needs

When you create a project on Vercel, enter these exactly:

```
Install Command:     npm install
Build Command:       npm run build
Output Directory:    build
Development Command: npm run dev
```

---

## 🔑 Environment Variables to Add

In Vercel Dashboard → Environment Variables:

```
REACT_APP_API_URL = https://api.qhsepro.com
REACT_APP_ENV = production
```

---

## 🚀 Deployment Steps (5 minutes)

1. **Go to:** https://vercel.com/dashboard
2. **Click:** "New Project"
3. **Select:** `QHSE-EXPERT-bruno-` repository
4. **Verify:** Build settings (see above)
5. **Add:** Environment variables (see above)
6. **Click:** "Deploy"
7. **Wait:** 2-5 minutes
8. **Done!** Your site is live 🎉

---

## 📊 What's Deployed

✅ Modern responsive website  
✅ All sections functional  
✅ Mobile menu working  
✅ Navigation links working  
✅ Contact form ready  
✅ Images optimized  
✅ Font Awesome icons  
✅ Production-ready build  

---

## 🔗 Your GitHub Repository

```
https://github.com/EDITCHAO/QHSE-EXPERT-bruno-.git
```

---

## 📱 Site Features

- **Responsive:** Works on all devices
- **Fast:** Optimized production build
- **Modern:** Premium design with gradients
- **Functional:** All buttons and links work
- **Professional:** QHSE expert portfolio

---

## 🆘 If Something Goes Wrong

1. **Check Vercel logs** in the Deployments section
2. **Test locally:** `npm run build && npm run serve`
3. **Verify environment variables** are added
4. **Redeploy** if you changed variables

---

## 💡 After Deployment

To update your site:

```bash
# Make changes locally
# Push to GitHub
git add .
git commit -m "Your message"
git push origin main

# Vercel automatically redeploys!
=======
# 🎯 Quick Reference Guide

## 🚀 Starting the Servers

### Option 1: Start Both Servers (Recommended)
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

### Option 2: Individual Commands
```bash
# Backend only
npm run dev
# or
npm start

# Frontend only
cd frontend
npm start
# or
npm run dev
>>>>>>> 19a2af9b54dcbf61d70ba8d8a5a8dcdd27c81a25
```

---

<<<<<<< HEAD
## 📞 Key Files

- `vercel.json` - Deployment config
- `.env.production` - Environment variables
- `package.json` - Build scripts
- `build/` - Production files (created by npm run build)

---

**You're all set! Go deploy! 🚀**
=======
## 🌐 Access Points

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:3000 | React application |
| Backend API | http://localhost:8000 | Express.js API |
| Health Check | http://localhost:8000/health | Server status |

---

## 📋 API Endpoints Quick Reference

### Public Endpoints
```
POST /api/contacts
  Body: { nom, email, numero, sujet, message }
  Response: { success, message, data }
```

```
POST /api/auth/login
  Body: { username, password }
  Response: { success, message, token }
```

```
GET /health
  Response: { status, message }
```

### Protected Endpoints (Require Bearer Token)
```
GET /api/contacts
  Header: Authorization: Bearer <token>
  Response: { success, data: [...] }
```

```
DELETE /api/contacts/:id
  Header: Authorization: Bearer <token>
  Response: { success, message }
```

```
GET /api/contacts/stats
  Header: Authorization: Bearer <token>
  Response: { success, data: { total, today } }
```

---

## 🔐 Admin Credentials (Default)

```
Username: admin
Password: password123
```

**Change via environment variables:**
```bash
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_password
```

---

## 🛠️ Useful Commands

### Backend
```bash
# Start development server
npm run dev

# Start production server
npm start

# Check health
curl http://localhost:8000/health
```

### Frontend
```bash
# Start development server
cd frontend
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Project
```bash
# Install all dependencies
npm install
cd frontend && npm install --legacy-peer-deps

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## 🧪 Testing Endpoints

### Test Contact Submission
```bash
curl -X POST http://localhost:8000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "John Doe",
    "email": "john@example.com",
    "numero": "1234567890",
    "sujet": "Inquiry",
    "message": "Hello, I have a question..."
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

### Get Contacts (Protected)
```bash
# First, login to get token
TOKEN=$(curl -s -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password123"}' | jq -r '.token')

# Then use token to get contacts
curl -X GET http://localhost:8000/api/contacts \
  -H "Authorization: Bearer $TOKEN"
```

---

## 📁 Project Structure

```
bruno-hse/
├── backend-server.js          # Express.js API server
├── package.json               # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.js            # Main React component
│   │   ├── api/
│   │   │   └── client.js     # Axios API client
│   │   ├── pages/            # Page components
│   │   ├── components/       # Reusable components
│   │   └── index.js          # React entry point
│   └── package.json          # Frontend dependencies
├── SERVERS_STATUS.md         # Current server status
├── QUICK_REFERENCE.md        # This file
└── [other documentation]
```

---

## 🐛 Troubleshooting

### Frontend can't connect to backend
1. Verify backend is running: `curl http://localhost:8000/health`
2. Check CORS configuration in `backend-server.js`
3. Verify `REACT_APP_API_URL` environment variable
4. Check browser console for errors

### Port already in use
```bash
# Find process using port 8000
lsof -i :8000

# Find process using port 3000
lsof -i :3000

# Kill process (replace PID with actual process ID)
kill -9 <PID>
```

### Dependencies issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# For frontend with legacy peer deps
cd frontend
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Clear cache
```bash
# Backend
npm cache clean --force

# Frontend
cd frontend
npm cache clean --force
```

---

## 📚 Documentation Files

- **SERVERS_STATUS.md** - Current server status and configuration
- **DEPLOYMENT_REACT_RENDER_SUPABASE.md** - Production deployment guide
- **DEVELOPMENT.md** - Development setup guide
- **COMMANDS.md** - Available commands
- **TROUBLESHOOTING.md** - Common issues and solutions

---

## 🚀 Deployment Checklist

- [ ] Backend running on Render
- [ ] Frontend running on Vercel
- [ ] Database connected to Supabase
- [ ] Environment variables configured
- [ ] CORS origins updated for production
- [ ] Admin credentials changed
- [ ] SSL/HTTPS enabled
- [ ] Error logging configured
- [ ] Monitoring set up

---

**Last Updated**: May 4, 2026
>>>>>>> 19a2af9b54dcbf61d70ba8d8a5a8dcdd27c81a25
