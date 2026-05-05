# 🚀 Ellis Tennis Website - Launch Guide

## What You Have

A complete, professional tennis lesson website built on **GitHub Pages** with:
- ✅ Single-page site (7 sections: home, about, schedule, pricing, register, contact)
- ✅ Responsive mobile design (works on all devices)
- ✅ Professional styling (blue + orange theme, smooth animations)
- ✅ Integrated with Google Calendar for scheduling
- ✅ Google Forms for student registration
- ✅ Stripe Payment Links for secure payments ($30/lesson, $120/month)
- ✅ Contact form integration
- ✅ Social media links

**No backend, no database, no servers to manage.**

---

## 💰 Cost Breakdown

| Item | Monthly Cost |
|---|---|
| GitHub Pages hosting | **$0** |
| ellistennis.com domain (Namecheap) | **~$1.25** ($15/year) |
| Google Calendar | **$0** |
| Google Forms | **$0** |
| Stripe payment fees | **2.9% + $0.30 per transaction** |
| **Total fixed cost** | **~$1.25/month** |

**At capacity ($600/week revenue):** Stripe fees ~$88/month. This is unavoidable with any payment processor and is the industry standard.

---

## 📁 Files Built

```
ellis_tennis/
├── index.html          # Your entire website
├── css/styles.css      # Professional styling
├── js/main.js          # Mobile menu & form handling
├── CNAME               # Custom domain config
├── README.md           # Detailed setup instructions (13K)
└── LAUNCH.md           # This file - quick reference
```

---

## ⚡ Quick Start (6 steps)

### Step 1: Push to GitHub (5 min)

Open terminal and run:
```bash
cd ~/Developer/ellis_tennis
git add .
git commit -m "Build Ellis Tennis website"
git push origin main
```

### Step 2: Enable GitHub Pages (5 min)

1. Go to **github.com** → your ellis_tennis repository
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

**Your site is now live at:** `https://yourusername.github.io/ellis_tennis`

### Step 3: Set Up Google Calendar (15 min)

1. Go to **calendar.google.com**
2. Create new calendar: `Ellis Tennis Lessons`
3. Make it public (Settings → Access permissions → "Make available to public")
4. Add recurring events (Tue/Thu at 4pm and 5:15pm)
5. Get embed code (Settings → "Integrate calendar" → Copy iframe)
6. Edit `index.html` in GitHub
7. Find comment: `<!-- REPLACE THE IFRAME BELOW WITH YOUR GOOGLE CALENDAR EMBED CODE -->`
8. Paste your Google Calendar embed code there
9. Commit

### Step 4: Set Up Google Forms (20 min)

1. Go to **forms.google.com**
2. Create form titled `Ellis Tennis Registration`
3. Add fields:
   - Parent/Guardian Name
   - Child's Full Name
   - Child's Age
   - Email Address
   - Phone Number
   - Preferred Session (multiple choice)
   - Skill Level (multiple choice)
   - Any Questions? (paragraph)
4. Click **Responses** → **Google Sheets icon** (auto-links submissions to spreadsheet)
5. Click **Send** → **Embed icon** (`<>`) → Copy iframe
6. Edit `index.html` in GitHub
7. Find comment: `<!-- REPLACE THE IFRAME BELOW WITH YOUR GOOGLE FORM EMBED CODE -->`
8. Paste your form embed code
9. Commit

### Step 5: Set Up Stripe Payments (20 min)

1. Go to **stripe.com**
2. Click **"Start now"** → Sign up (free)
3. In dashboard, go to **Payment Links**
4. Click **"Create Link"**

**For Single Lesson:**
- Click **"+ Add Product"**
- Name: `Tennis Lesson - Single Session`
- Price: `30.00`
- Click **"Add to link"** → **"Create Link"**
- Copy the `buy.stripe.com/...` URL

**For Monthly Package:**
- Repeat above with:
  - Name: `Tennis Lesson - Monthly Package (4 sessions)`
  - Price: `120.00`

6. Edit `index.html` in GitHub
7. Find the payment buttons section and update:
   ```html
   <a href="https://buy.stripe.com/YOUR_SINGLE_LESSON_LINK" ...>
   ```
   and
   ```html
   <a href="https://buy.stripe.com/YOUR_MONTHLY_PACKAGE_LINK" ...>
   ```
8. Commit

### Step 6: Update Your Information (10 min)

Edit `index.html` in GitHub and replace:
- `ellis@example.com` → your email
- `(555) 123-4567` → your phone
- `[Court Name]` → your actual court
- `[Street Address]` → your address
- Any other placeholder text

Commit changes. **Live in 2 minutes!**

---

## 🎯 You're Launched!

After completing the 6 steps above:
- ✅ Your site is live at `https://yourusername.github.io/ellis_tennis`
- ✅ Parents can register via Google Form
- ✅ Calendar shows your lesson schedule
- ✅ Stripe buttons process payments securely
- ✅ You receive registration confirmations & payment notifications

---

## 📚 Next: Customization & Optional Domain

For detailed setup instructions, image uploads, color changes, and custom domain setup (ellistennis.com), see **README.md**.

**Key points:**
- **Calendar updates automatically** — no need to edit HTML when you add lessons
- **Form submissions go to Google Sheets** — easy to track registrations
- **Mobile-friendly** — automatically responsive on all devices
- **HTTPS secure** — payments are processed safely through Stripe

---

## 🆘 Need Help?

**Check these in order:**
1. **README.md** in this repo (comprehensive setup guide with troubleshooting)
2. **GitHub Pages help:** https://docs.github.com/en/pages
3. **Google Calendar help:** https://support.google.com/calendar
4. **Google Forms help:** https://support.google.com/docs/answer/87809
5. **Stripe help:** https://support.stripe.com

---

## 💡 Advanced (Optional)

Want to add:
- **Custom domain (ellistennis.com)?** See README.md section "Setting Up Your Custom Domain"
- **Photo gallery?** Add images to `/images` folder
- **Different colors?** Edit `css/styles.css` color variables
- **More sections?** Copy any section in `index.html` and modify

---

## 📊 Cost Comparison

| Platform | Monthly Cost | Setup Time | Flexibility |
|---|---|---|---|
| **Ellis Tennis (GitHub Pages)** | **$1.25** | 2-3 hours | Full control |
| Wix | $16+ | 1 hour | Limited |
| Squarespace | $18+ | 1 hour | Limited |
| WordPress | $5-15+ | 2 hours | Full control |

**You picked the best option: Free hosting + full customization.**

---

## 🎉 Ready?

Start with **Step 1** above. You'll be live in about an hour.

Good luck with Ellis Tennis! 🎾
