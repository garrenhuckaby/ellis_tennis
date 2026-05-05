# Ellis Tennis Website

Welcome! This is your professional website for Ellis Tennis lessons. This guide walks you through setup and updates.

---

## 🚀 Quick Start

### Step 1: Update Your Information

Edit `index.html` directly in GitHub:
1. Go to your repository on GitHub.com
2. Click the pencil icon next to `index.html`
3. Find the placeholder text and replace it:
   - `ellis@example.com` → your email
   - `(555) 123-4567` → your phone number
   - `[Court Name]` → your actual court name
   - `[Street Address]` → your address
   - `Ages 6-16` → your age range (if different)
   - `$30` → your lesson price (if different)

4. Scroll down and click "Commit changes"

Your site updates live within 2 minutes.

---

## 📅 Setting Up Google Calendar (Lesson Schedule)

Your calendar will appear on the **Schedule** section of your website.

### Step 1: Create a Public Calendar

1. Go to **calendar.google.com**
2. On the left sidebar, click the **+** next to "Other calendars"
3. Select "Create new calendar"
4. Name it `Ellis Tennis Lessons`
5. In the Description field, write: "Tennis lesson schedule for kids ages 6-16"
6. Click "Create calendar"

### Step 2: Make It Public

1. On the left sidebar, hover over "Ellis Tennis Lessons" and click the **three dots**
2. Click "Settings and sharing"
3. Scroll down to "Access permissions"
4. Check the box: **"Make available to public"**
5. Save

### Step 3: Add Your Recurring Lessons

1. Click on "Ellis Tennis Lessons" to open it
2. Add events:
   - Event name: "Tennis Lesson - Beginners" (or your group name)
   - Time: 4:00 PM - 5:00 PM
   - Recurrence: Every Tuesday & Thursday
   - Add a description: "Group lesson for beginners. Sign up at [your website]"
3. Repeat for your second group (e.g., 5:15 PM - 6:15 PM Intermediate)

### Step 4: Get the Embed Code

1. In calendar settings (Settings > [Calendar name]), scroll to "Integrate calendar"
2. Copy the **Embed code** (the `<iframe>` tag)
3. Open your GitHub repository
4. Click `index.html` and the pencil to edit
5. Find the section marked: `<!-- REPLACE THE IFRAME BELOW WITH YOUR GOOGLE CALENDAR EMBED CODE -->`
6. Replace the entire `<!-- <iframe ... -->` line with your Google Calendar embed code
7. Commit changes

**Tip:** When you add or update events in Google Calendar, they appear on your website automatically—no need to edit HTML.

---

## 📋 Setting Up Registration Form (Google Forms)

Parents will use this form to register their children.

### Step 1: Create the Form

1. Go to **forms.google.com**
2. Click **"Create"** > **"Blank form"**
3. Title: `Ellis Tennis Registration`
4. Add these fields:
   - **Parent/Guardian Name** (Short answer)
   - **Child's Full Name** (Short answer)
   - **Child's Age** (Short answer)
   - **Email Address** (Email)
   - **Phone Number** (Short answer)
   - **Preferred Session** (Multiple choice: "Tuesday 4pm (Beginners)", "Thursday 4pm (Beginners)", "Tuesday 5:15pm (Intermediate)", "Thursday 5:15pm (Intermediate)")
   - **Skill Level** (Multiple choice: "Beginner (no experience)", "Intermediate (played before)", "Advanced (regular player)")
   - **Any Notes or Questions?** (Paragraph)

5. Click the **Responses** tab
6. Click the **Google Sheets icon** to create a linked spreadsheet
7. This spreadsheet will automatically collect all registrations

### Step 2: Get the Embed Code

1. Click the **Send** button in the top right
2. Click the **Embed code** icon (`<>`)
3. Copy the iframe code
4. Open your GitHub repository
5. Click `index.html` and edit
6. Find: `<!-- REPLACE THE IFRAME BELOW WITH YOUR GOOGLE FORM EMBED CODE -->`
7. Replace with your form's embed code
8. Commit changes

**Tip:** Go to the linked Google Sheet to see all registration submissions in one place. Download as CSV to keep records.

---

## 💳 Setting Up Stripe Payment Links

Parents will use this to pay for lessons. No backend code needed—just secure payment links.

### Step 1: Create a Stripe Account

1. Go to **stripe.com**
2. Click **"Start now"** and sign up (free)
3. Verify your email
4. Complete your business information (you don't need to activate payments yet)

### Step 2: Create Payment Links

#### For Single Lesson ($30)

1. In your Stripe dashboard, go to **Payment Links**
2. Click **"Create Link"**
3. Click **"+ Add Product"**
   - Name: `Tennis Lesson - Single Session`
   - Price: `30.00`
   - Currency: `USD`
4. Click **"Add to link"**
5. Scroll down, click **"Create Link"**
6. Copy the link (looks like: `https://buy.stripe.com/test_xxxx...`)

#### For Monthly Package ($120)

Repeat the above, but:
- Name: `Tennis Lesson - Monthly Package (4 sessions)`
- Price: `120.00`

### Step 3: Update Your Website

1. Open GitHub and edit `index.html`
2. Find the section with: `<!-- REPLACE THE BUTTON LINKS BELOW WITH YOUR STRIPE PAYMENT LINKS -->`
3. Update these lines:
   ```html
   <a href="https://buy.stripe.com/test_YOUR_SINGLE_LESSON_LINK" class="btn btn-primary btn-lg w-100" target="_blank">
   ```
   and
   ```html
   <a href="https://buy.stripe.com/test_YOUR_MONTHLY_PACKAGE_LINK" class="btn btn-success btn-lg w-100" target="_blank">
   ```
4. Replace `test_YOUR_SINGLE_LESSON_LINK` and `test_YOUR_MONTHLY_PACKAGE_LINK` with your actual Stripe links
5. Commit changes

**How it works:**
- Parent clicks "Pay Per Lesson" → sent to Stripe checkout
- They enter card details securely (never touches your site)
- Payment completes → they see confirmation
- You receive email notification
- Funds appear in your Stripe account

---

## ✉️ Setting Up Contact Form (Optional - Formspree)

A simple way to receive messages without storing data yourself.

### Step 1: Sign Up

1. Go to **formspree.io**
2. Click **"Sign Up"** (free account)
3. Create your account and verify email

### Step 2: Create a Form

1. Click **"Create"** > **"New Form"**
2. Email: your email address
3. Form name: `Ellis Tennis Contact Form`
4. Click **"Create Form"**
5. Copy your endpoint URL (looks like: `https://formspree.io/f/mxxxyyyzz`)

### Step 3: Update Your Website

1. Edit `index.html` in GitHub
2. Find this line in the contact form section:
   ```html
   const formspreeURL = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
3. Replace with your actual URL
4. Commit changes

**How it works:**
- Parents fill out the contact form
- Click "Send Message"
- You receive an email with their message
- They see a confirmation

---

## 🌐 Setting Up Your Custom Domain (ellistennis.com)

Once your site is live and working, you can add a custom domain.

### Step 1: Buy Your Domain

1. Go to **namecheap.com** (or GoDaddy, Google Domains, etc.)
2. Search for `ellistennis.com` (or your chosen domain)
3. If available, add to cart and purchase
4. Cost: ~$12-15 per year

### Step 2: Set Up Cloudflare (Free DNS)

Cloudflare gives you free SSL, CDN, and DNS management.

1. Go to **cloudflare.com**
2. Sign up for a **Free** account
3. Add your site: enter `ellistennis.com`
4. Cloudflare will scan your existing DNS records
5. Click "Continue"
6. Copy the **nameserver addresses** Cloudflare provides (look like: `ns1.cloudflare.com`, `ns2.cloudflare.com`)

### Step 3: Point Your Domain to Cloudflare

1. Go back to **Namecheap** (or your registrar)
2. Find your domain > **Manage**
3. Click **Nameservers**
4. Change from "Namecheap BasicDNS" to "Custom DNS"
5. Paste the Cloudflare nameserver addresses
6. Save

### Step 4: Configure DNS in Cloudflare

1. Back in Cloudflare, click **DNS**
2. You should already see some records. Add these if missing:
   - **Type:** CNAME | **Name:** www | **Target:** yourusername.github.io | **Proxied**
   - **Type:** A | **Name:** @ | **IP Address:** 185.199.108.153 | **Proxied**
   - **Type:** A | **Name:** @ | **IP Address:** 185.199.109.153 | **Proxied**
   - **Type:** A | **Name:** @ | **IP Address:** 185.199.110.153 | **Proxied**
   - **Type:** A | **Name:** @ | **IP Address:** 185.199.111.153 | **Proxied**

### Step 5: Enable HTTPS in GitHub

1. Go to your GitHub repository
2. Settings > **Pages**
3. Under "Custom domain," enter: `ellistennis.com`
4. Click **Save**
5. Check the box: **"Enforce HTTPS"** (appears after DNS propagates)

### Step 6: Wait for DNS to Propagate

DNS changes take 24-48 hours to fully propagate. After that:
- `ellistennis.com` → loads your site
- `www.ellistennis.com` → redirects to your site
- Both are secure (HTTPS)
- Cloudflare CDN speeds things up globally

---

## 📸 Adding Images (Hero Photo, Logo)

The site is set up to display images in the `images/` folder.

### Add a Hero Photo (Background on Home Section)

The current design uses a color gradient. To add a photo:

1. Find a good photo of kids playing tennis (or court photo)
2. Resize to ~1200px wide, ~600px tall
3. Save as `images/hero.jpg`
4. In GitHub, upload it to the `images` folder
5. The photo will appear on the home section

### Add a Logo

1. Create or find a simple logo (PNG, 100x100px)
2. Save as `images/logo.png`
3. Upload to the `images` folder
4. Edit `index.html` and replace the tennis racquet icon with: `<img src="images/logo.png" alt="Ellis Tennis" style="height: 40px;">`

---

## 📝 Customizing the Site

### Change Colors

Edit `css/styles.css` and change the color variables at the top:

```css
:root {
    --primary-color: #0d47a1;      /* Blue - main color */
    --secondary-color: #1565c0;    /* Lighter blue */
    --accent-color: #ff6f00;       /* Orange - highlights */
}
```

Popular color combinations:
- **Tennis theme:** Green (#2e7d32) + White
- **Modern:** Navy (#1a237e) + Teal (#00897b)
- **Energetic:** Orange (#ff6f00) + Purple (#6a1b9a)

### Change Text/Content

Edit `index.html`:
- Find and replace placeholder text (Ellis, example.com, etc.)
- Update all contact info
- Customize lesson descriptions

### Add a Photo Gallery

You can embed photos from Google Photos or Instagram. Contact me for help with this.

---

## 🚀 Publishing Your Site (First Time)

### Step 1: Push to GitHub

1. Open terminal/command prompt
2. Navigate to your project: `cd ~/Developer/ellis_tennis`
3. Type these commands:
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Settings > **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main**
5. Folder: **/ (root)**
6. Click **Save**

### Step 3: Your Site is Live!

After 1-2 minutes, visit:
- `https://yourusername.github.io/ellis_tennis` (if repo is named `ellis_tennis`)
- or `https://yourusername.github.io` (if repo is named `yourusername.github.io`)

---

## 🛠️ Maintenance

### Weekly
- Add new lesson events to Google Calendar
- Check registration submissions in Google Forms
- Read Stripe emails about payments

### Monthly
- Review Google Analytics (optional) for visitor stats
- Update course schedules if they change

### As Needed
- Update pricing in `index.html`
- Add testimonials or photos
- Respond to contact form submissions

---

## 🆘 Troubleshooting

### "Calendar/Form not showing on website"
- Make sure you pasted the full `<iframe>` embed code, not just a URL
- Double-check you pasted it in the right location in `index.html`
- Wait a few minutes and refresh your browser (Ctrl+Shift+R for hard refresh)

### "Payment button doesn't work"
- Make sure you replaced `https://buy.stripe.com/YOUR_SINGLE_LESSON_LINK` with your actual Stripe link
- Test by clicking the button yourself
- Make sure Stripe is in test mode (you see "test" in the URL)

### "Stripe link says 'test_'? Will real payments work?"
- Yes! When you activate your Stripe account for real payments, the links automatically switch from test to live mode

### "How do parents pay if I don't have Stripe set up yet?"
- For now, you can include payment instructions in the contact form response email
- Or accept Venmo/PayPal directly (display info on site)
- Set up Stripe whenever ready

### "Can I change the site layout/design?"
- Yes! Everything is in `index.html`, `css/styles.css`, and `js/main.js`
- Edit directly in GitHub or clone to your computer
- Bootstrap provides the responsive design—if you add Bootstrap classes, everything stays pretty

### "More help?"
- Check out the Bootstrap documentation: https://getbootstrap.com/docs/5.3/
- Google Forms help: https://support.google.com/docs/answer/87809
- GitHub Pages help: https://docs.github.com/en/pages

---

## 💡 Tips & Tricks

1. **Mobile-friendly:** The site automatically adjusts to phones and tablets. Test on your phone!

2. **Social media links:** Edit the Instagram/Facebook URLs in the contact section to point to your accounts

3. **Email in form submissions:** All registration forms and contact submissions go to your email automatically

4. **Analytics (optional):** Add Google Analytics to track visitors:
   - Go to analytics.google.com
   - Create a property for your site
   - Copy the tracking code and paste in `<head>` of `index.html`

5. **Backups:** Your site is automatically backed up to GitHub. You can always revert to an older version if you break something.

---

## 🎉 You're All Set!

Your professional tennis lesson website is ready to go. Customize it, share it with parents, and start accepting registrations!

Good luck with Ellis Tennis! 🎾

---

**Questions?** Email yourself or check the troubleshooting section above.

**Want to improve this site?** The code is yours—you can modify anything!