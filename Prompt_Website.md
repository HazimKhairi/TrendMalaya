Build a complete single-page website using Next.js 14 (App Router) with Tailwind CSS that replicates a Mac repair service website. Use TypeScript. The site should be fully responsive. Install and use react-icons for icons and framer-motion for animations. Use Google Fonts: import "Poppins" (400, 600) and use system Helvetica/Arial as the primary heading font. Here is the exact structure and design for every section:

NAVBAR (not sticky, scrolls with page):

White background, height ~70px, full width, thin light-gray bottom border
Left: Logo image placeholder (red "YK" + blue "1" stylized text logo, or use a placeholder image)
Center: Navigation links in a horizontal row — "Home" (blue color #008AFC, active state), "Services" (black, has a dropdown on hover with sub-items: "MacBook/iMac Repair and Upgrade", "iPad Repair", "Smartphone Repair (All brands)"), "Contact" (black), "Blog" (black). Font: 16px, Helvetica bold
Right: Shopping cart icon (teal/dark blue bag icon with "0" badge). Link the cart to /cart-page
The navbar does NOT stick — it scrolls away with the page


SECTION 1 — HERO (height ~728px, white background):

Two-column layout
Left side (about 50% width):

H1: "No. 1 Mac Specialist MY" — font: Helvetica Bold, 75px, line-height 90px, color black
H2: "We can fix your mac." — font: Helvetica Bold, 33px, color black
Below that, a "Start Repair" button: pill shape (border-radius 50px), background rgba(0, 138, 252, 0.93), white text 18px Poppins Semibold, with a white right-arrow chevron SVG icon inside. Size 186×51px. Links to /contact page. Add hover effect: slightly darken the blue
Next to the button: a Google 5-star review badge — show Google "G" logo icon + 5 yellow stars + small text "Read or leave a review." below. Link it externally


Right side (about 50%): A large MacBook keyboard image angled diagonally (top-down perspective, rotated about 30 degrees). Use a placeholder image of a MacBook from above. The image should overflow slightly above and to the right of the section
Add fade-in entrance animations: the H1 fades in first, then H2, then button, staggered with 0.2s delays using framer-motion


SECTION 2 — OUR SERVICES (height ~729px, white background):

H2: "Our Services." — Helvetica Bold, 44px, black, left-aligned
Three service cards in a row, each ~416px wide × 526px tall, border-radius 30px, with gap between them:

Card 1: Background rgba(163, 217, 246, 0.75) (light blue). Title "MacBook repair." in 40px Helvetica Bold black, subtitle "Air & Pro." in 40px gray rgb(128,128,128). Below: image of a MacBook Air (use placeholder). Entire card links to /services/macbook
Card 2: Background rgb(252, 249, 230) (cream/pale yellow). Title "iMac repair." in 40px Helvetica Bold black. Below: image of a yellow iMac with keyboard (use placeholder). Links to /services/imac
Card 3: Background rgb(0, 0, 0) (black). Title "Smartphone repair." in 36px Helvetica Bold white, subtitle "All brands." in 36px rgb(191,191,191). Below: image of stacked iPhones in various colors (use placeholder). Links to /services/smartphone


Add scroll-triggered fade-in-up animation for each card using framer-motion


SECTION 3 — GADGETS SHOWCASE (height ~614px, white background with inner container):

Centered container with background rgba(231, 212, 234, 0.75) (light lavender/purple), border-radius 30px, max-width ~1290px, height ~534px
H2: "Bringing Life Back to Your Beloved Gadgets." — Helvetica Bold, 72px, black, centered
Below heading: "Get a free consultation" text link with small arrow icon, font 19px, color dark gray rgb(40,38,38), links to WhatsApp (https://wa.me/60374959092), opens in new tab
Below link: An image composition showing multiple Apple products (MacBooks of different sizes, an iMac, Mac Studio, Mac Pro) arranged in a group. Use a placeholder composite image
Add fade-in animation on scroll


SECTION 4 — SCROLLING MARQUEE (height ~205px, white background):

A horizontally scrolling marquee/ticker that loops infinitely
Text: "Installment available. Up to 5 years warranty." repeated
Font: 86px, extra-bold (font-weight 800), color rgb(64, 64, 64) dark gray
Animation: continuous scroll from right to left, linear, duration ~16 seconds, infinite loop
Use CSS keyframe animation: translateX(0) to translateX(-50%) on a doubled text container
Overflow should be hidden on the container to avoid clipping at edges
Include a small play/pause button (visually minimal, 1px wide)


SECTION 5 — WHY YKL (height ~825px, background rgb(245, 244, 244) light gray):

Two-row layout:

Top row: Left side has H3: "Why YKL is the best place to fix your Mac." — 55px Helvetica Bold, the word "place" should be italic. Right side: "Get a free consultation" link in blue rgb(1,136,211), 17px, with arrow icon, links to WhatsApp
Bottom row: 4 value proposition cards in a horizontal row, each ~299px × 311px, white background, border-radius 30px, padding ~24px:

Card 1: Shield/checkmark icon (SVG, line style, black), title "Up to 5 years warranty." (25px Helvetica Bold), description "Giving you a peace of mind after repair and upgrade." (16px, gray), dark circular arrow button (40px circle, dark gray bg, white arrow) at bottom-right. Links to /services/water-damage
Card 2: Payment/installment icon, title "Pay over time, interest-free.", description "When you choose to check out with SPay Later." Links to /services/battery
Card 3: Delivery truck icon, title "Free pick up in Klang Valley.", description "For repairs and upgrades totalling RM500 and above." Links to /services/screen-repair
Card 4: Refresh/speed icon, title "Same-day service guarantee.", description "For most Mac screen repairs and battery replacements." Links to /services/screen-replacement




Add scroll-triggered fade-in animations


SECTION 6 — CUSTOMER REVIEWS (height ~472px, white background):

Left side: Google logo with 5 yellow stars above it
H4: "Our customers love us." — 45px Helvetica Bold, black, centered
A horizontally scrollable carousel of Google review cards (dark/black background cards with rounded corners):

Each card shows: reviewer avatar (circle), reviewer name, date (e.g., "30 January 2026"), 5 yellow stars with verified badge, review text snippet, "Read more" link, and optional review image
Show 4 cards visible at a time with left/right navigation arrows
Add at least 6 sample review cards with realistic data


Below the carousel: "Verified by Trustindex" badge (small, right-aligned)
Use a custom React carousel component or install a lightweight carousel library


SECTION 7 — TIKTOK FEED (height ~700px, white background top, black embed area):

H4: "Over 1 million views on TikTok." — 45px Helvetica Bold, black, centered
Below: A TikTok-style embed area with black background:

Top bar: YKL Mac Fix profile (round avatar, name "YKL Mac Fix 🇲🇾", handle "@yklmacfix", stats: "159 posts · 12K followers · 5 following"), pink/red "Follow" button with TikTok icon
Grid/carousel of TikTok video thumbnails (5 visible), each showing a video thumbnail image, "YKL Mac Fix 🇲🇾" label, TikTok icon, date. Use placeholder images
Left/right navigation arrows (white circles)




FOOTER (white background, ~540px height):

4-column layout with max-width container:

Column 1 — Brand: YKL logo image, description text "YKL Mac Fix specializes in professional repairs for MacBook, iMac, Mac Mini, Mac Pro and Smartphones of all brands. From advanced diagnostics to expert repairs, we bring your devices back to life with precision, speed, and care." (16px Helvetica Roman). Social icons row: TikTok, Instagram, YouTube (gray circle icons)
Column 2 — Our Services: H6 "Our Services" (22px Helvetica Bold). Links: "MacBook Repair and Upgrade ›", "iMac Repair and Upgrade ›", "Smartphone Repair (all brands) ›" — 17px, black, with chevron
Column 3 — Locations (top: HQ, bottom: Kuantan Parade):

H6 "Petaling Jaya (HQ)" (22px bold). Address: "No 16 3rd & 4rd Floor, Jalan 14/20, Section 14, 46100, Petaling Jaya, Selangor". Hours: "Mon - Fri 10:30 AM - 7:30 PM / Sat - Sun 10:30 AM - 6:00 PM". Two pill buttons: "Waze 🧭" (blue bg rgba(0,138,252,0.93), white text, border-radius 50px) and "+60 3-74959092" (green bg rgb(37,211,102), white text, WhatsApp icon, border-radius 50px)
H6 "Kuantan Parade". Address: "Lot F22 (1st floor) Kuantan Parade, Kuantan He Abdul Rahman, 25000 Kuantan, Pahang." Hours: "Mon - Sat 11:00 AM - 9:00 PM". Same Waze + WhatsApp buttons with number "+60 11-262 56581"


Column 4 — Kuantan @ Pandan Damai: H6 "Kuantan @ Pandan Damai". Address: "No A3, Jalan Pandan Damai 2/2, Perumahan Pandan Damai, 25150 Kuantan, Pahang." Hours: "Mon - Sat 11:00 AM - 9:00 PM". Waze + WhatsApp buttons with "+60 19-987 3386"


Bottom: Copyright line centered: "Copyright © 2025 by YKL One Hour Service Trading. All rights reserved." — small text, gray


FLOATING WHATSAPP BUTTON:

Fixed position, bottom-right corner (bottom: 24px, right: 24px)
Green circle (WhatsApp brand green #25D366), ~56px diameter, with white WhatsApp icon
Links to https://wa.me/60374959092, opens in new tab
Add a subtle pulse animation or shadow on hover
Small "by Smartarget" text below (or omit for cleaner look)


GLOBAL STYLES & TECHNICAL REQUIREMENTS:

Color palette: Primary blue #008AFC, black #000, white #FFF, light gray bg #F5F4F4, dark gray text #404040, green WhatsApp #25D366, lavender rgba(231,212,234,0.75), light blue card rgba(163,217,246,0.75), cream card #FCF9E6
Fonts: Helvetica Neue/Helvetica/Arial for headings (bold weight), Poppins (Google Font) for buttons and UI elements, Helvetica Roman for body text
All images should use Next.js <Image> component with placeholder blur
Use framer-motion for all scroll-triggered entrance animations (fade-in-up pattern)
The page should be a single-page layout — all sections on one page (app/page.tsx)
Create reusable components: Navbar, HeroSection, ServicesSection, GadgetsShowcase, Marquee, WhyYKL, CustomerReviews, TikTokFeed, Footer, FloatingWhatsApp
Make it responsive: on mobile, stack columns vertically, reduce font sizes proportionally, service cards stack in a single column, footer columns stack
Use Tailwind CSS for all styling — no separate CSS files except for the marquee keyframe animation (put that in globals.css)
Add smooth scroll behavior
All external links open in new tabs with rel="noopener noreferrer"


Create the complete file structure with all components and the page. Use placeholder images from /placeholder-macbook.png, /placeholder-imac.png, /placeholder-iphones.png, /placeholder-gadgets.png, /placeholder-hero-macbook.png (I will replace them later). For icons, use react-icons (FaWhatsapp, FaTiktok, FaInstagram, FaYoutube, FaChevronRight, FaStar, FaShoppingBag, etc.).