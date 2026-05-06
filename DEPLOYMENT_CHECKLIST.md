# ✅ Deployment Checklist

## Pre-Deployment Phase

### Code Quality
- [ ] All tests passing
- [ ] No console errors
- [ ] No console warnings
- [ ] Code linting passed
- [ ] No security vulnerabilities (`npm audit`)
- [ ] Environment variables documented

### Documentation
- [ ] README.md updated
- [ ] API documentation complete
- [ ] Deployment guide reviewed
- [ ] Environment variables documented
- [ ] Known issues documented

### Local Testing
- [ ] Backend running locally
- [ ] Frontend running locally
- [ ] Contact form submission works
- [ ] Admin login works
- [ ] Protected routes work
- [ ] API endpoints tested
- [ ] CORS working correctly

---

## Database Setup (Supabase)

### Create Supabase Project
- [ ] Go to https://supabase.com
- [ ] Create new project
- [ ] Wait for project initialization
- [ ] Get project URL
- [ ] Get anon key
- [ ] Get service role key

### Create Database Tables
- [ ] Create `contacts` table with columns:
  - `id` (bigint, primary key)
  - `nom` (text)
  - `email` (text)
  - `numero` (text)
  - `sujet` (text)
  - `message` (text)
  - `created_at` (timestamp)
  - `updated_at` (timestamp)

### Configure Authentication
- [ ] Enable Supabase Auth
- [ ] Configure email provider
- [ ] Set up admin user
- [ ] Configure JWT settings

### Update Backend
- [ ] Install Supabase client: `npm install @supabase/supabase-js`
- [ ] Update `backend-server.js` to use Supabase
- [ ] Replace in-memory storage with database queries
- [ ] Test all endpoints with database
- [ ] Verify data persistence

---

## Backend Deployment (Render)

### Prepare Repository
- [ ] Push code to GitHub
- [ ] Create `.gitignore` for node_modules
- [ ] Verify `.env` is not committed
- [ ] Create `.env.example` with all variables

### Create Render Service
- [ ] Go to https://render.com
- [ ] Create new Web Service
- [ ] Connect GitHub repository
- [ ] Select branch (main/master)
- [ ] Set build command: `npm install`
- [ ] Set start command: `npm start`

### Configure Environment Variables
- [ ] Set `PORT=8000`
- [ ] Set `ADMIN_USERNAME`
- [ ] Set `ADMIN_PASSWORD`
- [ ] Set `SUPABASE_URL`
- [ ] Set `SUPABASE_KEY`
- [ ] Set `NODE_ENV=production`

### Deploy & Test
- [ ] Deploy service
- [ ] Wait for build to complete
- [ ] Test health endpoint: `https://your-backend.onrender.com/health`
- [ ] Test contact submission
- [ ] Test admin login
- [ ] Verify database connection
- [ ] Check logs for errors

### Post-Deployment
- [ ] Update frontend API URL
- [ ] Test frontend-backend communication
- [ ] Monitor for errors
- [ ] Set up error logging

---

## Frontend Deployment (Vercel)

### Prepare Repository
- [ ] Push code to GitHub
- [ ] Verify `frontend/` directory structure
- [ ] Create `frontend/.env.production` with production API URL
- [ ] Test build locally: `cd frontend && npm run build`

### Create Vercel Project
- [ ] Go to https://vercel.com
- [ ] Create new project
- [ ] Import GitHub repository
- [ ] Select `frontend` as root directory
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `build`

### Configure Environment Variables
- [ ] Set `REACT_APP_API_URL` to production backend URL
- [ ] Set `REACT_APP_API_TIMEOUT=10000`

### Deploy & Test
- [ ] Deploy project
- [ ] Wait for build to complete
- [ ] Test frontend loads
- [ ] Test contact form submission
- [ ] Test admin login
- [ ] Test all pages load correctly
- [ ] Check console for errors
- [ ] Test on mobile devices

### Post-Deployment
- [ ] Monitor for errors
- [ ] Set up error tracking
- [ ] Configure analytics
- [ ] Set up monitoring

---

## Domain & SSL Configuration

### Custom Domain (Optional)
- [ ] Purchase domain
- [ ] Configure DNS records
- [ ] Point to Vercel (frontend)
- [ ] Point to Render (backend)
- [ ] Verify SSL certificate

### SSL/HTTPS
- [ ] Verify HTTPS enabled on Vercel
- [ ] Verify HTTPS enabled on Render
- [ ] Update CORS origins to use HTTPS
- [ ] Update API URLs to use HTTPS

---

## Security Hardening

### Backend Security
- [ ] Change default admin credentials
- [ ] Enable HTTPS only
- [ ] Configure CORS for production domains only
- [ ] Add rate limiting
- [ ] Add request validation
- [ ] Add error logging
- [ ] Remove debug mode
- [ ] Set secure headers

### Frontend Security
- [ ] Remove console.log statements
- [ ] Enable Content Security Policy
- [ ] Configure CORS headers
- [ ] Validate all user input
- [ ] Sanitize HTML output
- [ ] Use HTTPS only

### Database Security
- [ ] Enable row-level security (RLS)
- [ ] Configure database backups
- [ ] Set up access controls
- [ ] Monitor for suspicious activity

---

## Monitoring & Logging

### Error Tracking
- [ ] Set up Sentry or similar
- [ ] Configure error notifications
- [ ] Monitor error rates
- [ ] Set up alerts

### Performance Monitoring
- [ ] Set up performance tracking
- [ ] Monitor API response times
- [ ] Monitor database query times
- [ ] Set up alerts for slow requests

### Logging
- [ ] Configure backend logging
- [ ] Configure frontend error logging
- [ ] Set up log aggregation
- [ ] Monitor logs regularly

---

## Backup & Recovery

### Database Backups
- [ ] Enable automatic backups
- [ ] Test backup restoration
- [ ] Document recovery procedure
- [ ] Store backup credentials securely

### Code Backups
- [ ] Verify GitHub repository is backed up
- [ ] Test repository recovery
- [ ] Document recovery procedure

---

## Post-Deployment Verification

### Functionality Testing
- [ ] Contact form submission works
- [ ] Admin login works
- [ ] Contact list displays correctly
- [ ] Contact deletion works
- [ ] Statistics display correctly
- [ ] All API endpoints working
- [ ] Authentication working
- [ ] Authorization working

### Performance Testing
- [ ] Page load time acceptable
- [ ] API response time acceptable
- [ ] Database queries optimized
- [ ] No memory leaks
- [ ] No CPU spikes

### Security Testing
- [ ] No sensitive data exposed
- [ ] CORS properly configured
- [ ] Authentication working
- [ ] Authorization working
- [ ] Input validation working
- [ ] SQL injection prevented
- [ ] XSS prevented

### Browser Compatibility
- [ ] Chrome latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Edge latest
- [ ] Mobile browsers

---

## Maintenance & Updates

### Regular Tasks
- [ ] Monitor error logs daily
- [ ] Review performance metrics weekly
- [ ] Update dependencies monthly
- [ ] Security audit quarterly
- [ ] Database maintenance monthly

### Update Procedure
- [ ] Test updates locally
- [ ] Create backup before updating
- [ ] Update dependencies
- [ ] Run tests
- [ ] Deploy to staging
- [ ] Test in staging
- [ ] Deploy to production
- [ ] Monitor for issues

### Rollback Procedure
- [ ] Document rollback steps
- [ ] Test rollback procedure
- [ ] Keep previous version available
- [ ] Document rollback triggers

---

## Documentation Updates

### After Deployment
- [ ] Update deployment guide
- [ ] Document production URLs
- [ ] Document production credentials (securely)
- [ ] Update API documentation
- [ ] Update troubleshooting guide
- [ ] Document known issues
- [ ] Document performance metrics

---

## Team Communication

### Before Deployment
- [ ] Notify team of deployment
- [ ] Schedule deployment window
- [ ] Prepare rollback plan
- [ ] Brief team on changes

### During Deployment
- [ ] Monitor deployment progress
- [ ] Keep team updated
- [ ] Be ready to rollback
- [ ] Document any issues

### After Deployment
- [ ] Notify team of completion
- [ ] Share deployment notes
- [ ] Document lessons learned
- [ ] Update team documentation

---

## Sign-Off

### Development Team
- [ ] Code review completed
- [ ] Tests passing
- [ ] Documentation complete
- [ ] Ready for deployment

### QA Team
- [ ] Testing completed
- [ ] All tests passing
- [ ] No critical issues
- [ ] Ready for deployment

### Operations Team
- [ ] Infrastructure ready
- [ ] Monitoring configured
- [ ] Backups configured
- [ ] Ready for deployment

### Project Manager
- [ ] Stakeholders notified
- [ ] Timeline confirmed
- [ ] Risks assessed
- [ ] Approved for deployment

---

## Deployment Execution

### Pre-Deployment (1 hour before)
- [ ] Final code review
- [ ] Final testing
- [ ] Backup database
- [ ] Notify team
- [ ] Prepare rollback

### Deployment (Execute)
- [ ] Deploy backend to Render
- [ ] Verify backend working
- [ ] Deploy frontend to Vercel
- [ ] Verify frontend working
- [ ] Test end-to-end functionality

### Post-Deployment (1 hour after)
- [ ] Monitor error logs
- [ ] Monitor performance
- [ ] Verify all features working
- [ ] Notify stakeholders
- [ ] Document deployment

---

## Success Criteria

✅ **Deployment Successful When:**
- All endpoints responding correctly
- Contact form working end-to-end
- Admin login working
- Database persisting data
- No critical errors in logs
- Performance acceptable
- All tests passing
- Team confirmed working

---

## Rollback Criteria

⚠️ **Rollback If:**
- Critical functionality broken
- Database connection failed
- Authentication not working
- Performance degraded significantly
- Security vulnerability discovered
- Data corruption detected
- Unable to recover within 30 minutes

---

## Post-Deployment Monitoring (First 24 Hours)

- [ ] Monitor error logs every hour
- [ ] Monitor performance metrics
- [ ] Check database for issues
- [ ] Verify backups working
- [ ] Monitor user feedback
- [ ] Be ready to rollback
- [ ] Document any issues

---

## Deployment Notes

**Deployment Date**: _______________  
**Deployed By**: _______________  
**Approved By**: _______________  
**Notes**: _______________

---

**Last Updated**: May 4, 2026
