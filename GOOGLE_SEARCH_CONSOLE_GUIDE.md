# Google Search Console Setup Guide for TrendMalayaa

## Overview
Google Search Console (GSC) is a free tool that helps you monitor, maintain, and improve your site's presence in Google Search results. This guide walks you through the complete setup process.

---

## Step 1: Property Setup & Verification

### 1.1 Create Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"**
4. Choose **"URL prefix"** (not Domain)
5. Enter: `https://trendmalaya.com`
6. Click **"Continue"**

### 1.2 Verify Ownership
**Method: HTML tag** (Recommended)

1. In the verification screen, select **"HTML tag"**
2. Copy the meta tag code that looks like:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
3. **Provide this code to your developer** to add to your website's `<head>` section
4. After the code is added and deployed, return to Google Search Console
5. Click **"Verify"**

✅ **Verification typically takes a few seconds**

---

## Step 2: Submit Your Sitemap

After verification is complete:

1. In Google Search Console, go to **"Sitemaps"** (left sidebar)
2. Enter your sitemap URL: `https://trendmalaya.com/sitemap.xml`
3. Click **"Submit"**
4. Status should change to "Success" within 24-48 hours

**What this does:** Tells Google about all pages on your site so they can be crawled and indexed faster.

---

## Step 3: Request Indexing (Optional but Recommended)

For immediate results:

1. Go to **"URL Inspection"** tool
2. Enter: `https://trendmalaya.com`
3. Click **"Request Indexing"**
4. Wait for confirmation (takes 1-2 minutes)

This speeds up the process of Google discovering your SEO improvements.

---

## Step 4: Monitor Your Performance

### 4.1 Performance Report (Most Important!)
**Location:** Left sidebar → "Performance"

**Key Metrics to Track:**

| Metric | What It Means | What to Aim For |
|--------|---------------|-----------------|
| **Total Clicks** | People who clicked your site in search results | ↑ Increasing trend |
| **Total Impressions** | How many times your site appeared in search | ↑ Growing visibility |
| **Average CTR** | Click-through rate (Clicks ÷ Impressions) | 3-5% minimum |
| **Average Position** | Your average ranking position | ↓ Lower is better (1-10) |

### 4.2 Top Queries to Monitor

After 2-4 weeks, check which keywords bring traffic:

**Expected High Performers:**
- `trendmalayaa`
- `trendmalaya`
- `trendmalayaa [location]` (e.g., parit buntar, taiping)
- `kedai phone [location]`
- `repair phone [location]`

**Growth Opportunities:**
- Queries with **high impressions but low clicks** → Improve meta descriptions
- Queries ranking **position 11-20** → Focus content optimization here

### 4.3 Pages Report

Shows which pages get the most traffic:
- Your homepage should be #1
- Check if any pages have high impressions but low clicks

---

## Step 5: Weekly Monitoring Checklist

### Week 1-2 (Setup Phase)
- ✅ Verify property
- ✅ Submit sitemap
- ✅ Request indexing
- ✅ Check "Coverage" report for errors

### Week 3-4 (Early Results)
- 📊 Check Performance → Queries (see which keywords work)
- 📊 Monitor impressions growth
- 🔍 Identify queries ranking 11-20 (page 2)

### Week 5-8 (Optimization Phase)
- 🎯 Focus content on queries ranking 11-20
- 📈 Track click-through rate improvements
- 🔗 Check "Links" report to see who's linking to you

### Ongoing (Monthly)
- 📊 Compare month-over-month growth
- 🚨 Fix any new crawl errors
- 📱 Check mobile usability issues
- 🔍 Discover new keyword opportunities

---

## Step 6: Fix Common Issues

### Issue: "Discovered - currently not indexed"
**Solution:** Request indexing manually via URL Inspection tool

### Issue: Low CTR despite high impressions
**Solution:** Improve your meta descriptions to be more compelling

### Issue: Drop in rankings
**Solution:** Check "Coverage" report for errors, ensure site is loading fast

---

## Step 7: Track Your Target Keywords

Monitor these keywords specifically:

**Brand Searches:**
- trendmalayaa
- trendmalaya
- trend malayaa
- trend malaya

**Location-Based:**
- trendmalayaa parit buntar
- trendmalayaa taiping
- trendmalayaa alor setar
- trendmalayaa kangar
- trendmalayaa penang
- trendmalayaa ipoh
- kedai phone parit buntar
- kedai phone taiping
- kedai phone alor setar

**Service-Based:**
- repair phone near me
- baiki phone murah
- kedai phone malaysia
- iphone ansuran malaysia
- supplier iphone malaysia

---

## Step 8: Advanced Features to Explore

### 8.1 Core Web Vitals
- **Location:** Experience → Core Web Vitals
- **Goal:** All URLs should be "Good"
- **Fixes:** Optimize images, reduce JavaScript, improve server response time

### 8.2 Mobile Usability
- **Location:** Experience → Mobile Usability
- **Goal:** 0 errors
- **Check:** Clickable elements, text size, viewport configuration

### 8.3 Rich Results
- **Location:** Enhancements → Rich Results
- **What to Check:** Verify your structured data (FAQs, Reviews, LocalBusiness) appears correctly

---

## Expected Timeline & Results

| Week | What to Expect |
|------|----------------|
| Week 1 | Setup complete, sitemap submitted |
| Week 2 | Site fully indexed, first impressions data |
| Week 3-4 | Start seeing clicks for brand keywords |
| Week 5-8 | Growing impressions for location & service keywords |
| Week 9-12 | Measurable ranking improvements for competitive terms |
| Month 3+ | Consistent growth in organic traffic |

---

## Success Metrics (3-Month Goals)

By Month 3, aim for:
- ✅ **1,000+ impressions/month**
- ✅ **100+ clicks/month** (10% CTR)
- ✅ **Position 1-3** for brand keywords
- ✅ **Position 5-10** for location-specific keywords
- ✅ **Position 10-20** for competitive service keywords

---

## Troubleshooting

### "Property not verified"
- Check if the meta tag is in the `<head>` section of your HTML
- Ensure the tag is on the homepage (`/`)
- Clear cache and try verification again

### "Sitemap could not be read"
- Verify sitemap is accessible: https://trendmalaya.com/sitemap.xml
- Check for XML syntax errors
- Wait 24-48 hours and resubmit

### No data showing
- Wait 24-48 hours after verification
- Ensure your site has actual traffic
- Check if robots.txt is blocking Googlebot

---

## Support Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Rich Results Test](https://search.google.com/test/rich-results)

---

**Next Steps:**
1. Get your verification code from Google Search Console
2. Provide the code so I can add it to your website
3. Deploy the changes
4. Return to Google Search Console and click "Verify"
5. Submit your sitemap
6. Start monitoring after 48 hours

Good luck! 🚀
