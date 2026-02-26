# TrendMalayaa Design Guidelines

## Brand Overview
**TrendMalayaa** - Malaysia's trusted mobile specialist since 2021, serving 50,000+ customers across 9 branches.

---

## Color System

### Primary Colors
- **Red Primary**: `#DC2626` (red-600) - Main brand color, used for CTAs, headlines, and key elements
- **Red Accent**: `#EF4444` (red-500) - Lighter red for hover states and secondary elements
- **Red Light**: `#FEE2E2` (red-50) - Background tints and subtle highlights

### Supporting Colors
- **Black**: `#000000` - Secondary brand color for text and contrast
- **White**: `#FFFFFF` - Background and negative space
- **Gray Scale**:
  - `#1F2937` (gray-800) - Dark text
  - `#4B5563` (gray-600) - Body text
  - `#9CA3AF` (gray-400) - Subtle elements
  - `#F3F4F6` (gray-100) - Borders and dividers

### Accent Colors
- **WhatsApp Green**: `#25D366` - Exclusively for WhatsApp CTAs
- **Google Red**: Standard Google brand color for review badges
- **Star Yellow**: `#FBBF24` (yellow-400) - Rating stars only

### Color Psychology
- **Red**: Trust, urgency, energy, Malaysian brand identity
- **Black**: Premium quality, professionalism, sophistication
- **White**: Cleanliness, simplicity, modern aesthetic

---

## Typography System

### Font Families
```css
Primary: 'Helvetica', sans-serif  /* Headings */
Body: 'Poppins', sans-serif       /* Body text, UI elements */
Fallback: Arial, sans-serif
```

### Type Scale
| Element | Size (Mobile) | Size (Desktop) | Weight | Line Height |
|---------|---------------|----------------|--------|-------------|
| H1 Hero | 2.25rem (36px) | 4.5rem (72px) | Bold (700) | 1.1 |
| H2 Section | 1.875rem (30px) | 3rem (48px) | Bold (700) | 1.2 |
| H3 Subsection | 1.5rem (24px) | 2rem (32px) | Semibold (600) | 1.3 |
| Body Large | 1.125rem (18px) | 1.25rem (20px) | Regular (400) | 1.6 |
| Body | 1rem (16px) | 1rem (16px) | Regular (400) | 1.5 |
| Small Text | 0.875rem (14px) | 0.875rem (14px) | Medium (500) | 1.4 |
| Button | 1rem (16px) | 1.125rem (18px) | Bold (700) | 1 |

### Hierarchy Principles
1. **Hero Headlines**: Bold Helvetica, red + black split color for emphasis
2. **Body Copy**: Poppins for readability and modern feel
3. **CTAs**: All caps or sentence case, bold weight, high contrast
4. **Numbers/Stats**: Larger size, red color to highlight social proof

---

## Layout & Spacing

### Grid System
- **Max Width**: `1280px` (max-w-7xl)
- **Columns**: 12-column grid (lg screens), single column (mobile)
- **Gutters**: `2rem` (32px) desktop, `1rem` (16px) mobile
- **Section Padding**: `5rem` (80px) vertical desktop, `3rem` (48px) mobile

### Spacing Scale (Tailwind)
```
xs: 0.5rem (8px)
sm: 1rem (16px)
md: 1.5rem (24px)
lg: 2rem (32px)
xl: 3rem (48px)
2xl: 4rem (64px)
```

### White Space Strategy
- Generous padding around CTAs (minimum 1rem vertical, 1.5rem horizontal)
- Double spacing between major sections
- Breathing room around text blocks (24px minimum)

---

## Component Patterns

### Buttons

#### Primary CTA (Red)
```tsx
className="bg-red-600 hover:bg-red-700 text-white font-bold
           px-6 py-4 rounded-xl shadow-lg hover:shadow-xl
           transition-all"
```
- Use: Main conversion actions (WhatsApp, Contact)
- Size: Large padding for mobile thumb targets
- Animation: Scale 1.05 on hover, 0.98 on tap

#### Secondary CTA (Black)
```tsx
className="bg-black hover:bg-gray-900 text-white font-bold
           px-6 py-4 rounded-xl shadow-lg hover:shadow-xl
           transition-all"
```
- Use: Secondary actions (Find Branch, Learn More)

#### Outline CTA
```tsx
className="border-2 border-red-600 text-red-600 hover:bg-red-50
           font-semibold px-6 py-3 rounded-xl transition-all"
```
- Use: Tertiary actions (Check Reviews, Call Now)

### Trust Badges

#### Google Review Card
- White background with 2px gray border
- Google icon (32px) + 5-star rating + "Google Review" label
- Hover: Lift effect (y: -4px) + shadow enhancement
- Clear "Read Reviews →" CTA

#### Trust Indicators
- Customer count badges: Red background, white text
- Since 2021 badge: Red-50 background, red-900 text
- Location count: Bold inline text with red emphasis

---

## Visual Hierarchy

### Information Architecture
1. **Trust Badge** (top) - Builds credibility immediately
2. **Headline** - Clear value proposition in red/black
3. **Social Proof** - 50,000+ customers prominently displayed
4. **Google Reviews** - Large, prominent card with clear branding
5. **Primary CTAs** - WhatsApp + Find Branch (high contrast, large)
6. **Secondary CTAs** - Reach Team, Check Reviews (less prominent)
7. **Supporting Info** - Branch locations (small, subtle)

### Contrast Ratios
- Headline text: Minimum 12:1 (WCAG AAA)
- Body text: Minimum 7:1 (WCAG AA+)
- UI elements: Minimum 4.5:1 (WCAG AA)

---

## Motion & Animation

### Animation Principles
1. **Purposeful**: Every animation serves a function (guide attention, provide feedback)
2. **Subtle**: Avoid overwhelming users with excessive motion
3. **Fast**: 200-400ms for UI interactions, 600-800ms for page loads
4. **Natural**: Easing curves that mimic physics (easeOut, easeInOut)

### Animation Catalog

#### Page Load (Framer Motion)
```tsx
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,  // Sequential reveal
      delayChildren: 0.2
    }
  }
}

itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
```

#### Button Interactions
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.98 }}
transition={{ duration: 0.2 }}
```

#### Background Pulse (Decorative)
```tsx
animate={{
  scale: [1, 1.1, 1],
  rotate: [0, 5, 0]
}}
transition={{
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

#### Icon Micro-interactions
- WhatsApp icon: `rotate-12` on hover
- Map marker: Bounce animation on hover
- Star: `scale-110` on hover

### Performance
- Use `will-change` sparingly (only for animated elements)
- Prefer `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `margin` (causes reflow)

---

## Accessibility

### WCAG 2.1 AA Compliance
- ✅ Color contrast ratios meet minimums
- ✅ Keyboard navigation for all interactive elements
- ✅ Focus indicators on buttons and links
- ✅ Alt text for all images
- ✅ Touch targets minimum 44px × 44px
- ✅ Semantic HTML (proper heading hierarchy)

### Screen Reader Support
- Descriptive link text (avoid "Click here")
- ARIA labels where needed
- Proper form labels
- Skip navigation links

### Mobile Optimization
- Touch targets: Minimum 44px height/width
- Font size: Minimum 16px (prevents zoom on iOS)
- Tap delay: Removed with `touch-action: manipulation`
- Hover states: Converted to :active on mobile

---

## Image Guidelines

### Hero Section
- **Product shots**: High-quality phone images, transparent PNG
- **Background**: Decorative gradients (red-500 to red-700, 20% opacity)
- **Aspect ratio**: 1:1 or 4:3 for phones, 16:9 for lifestyle shots

### Team & Store Photos
- **Signboard**: Use in "About" or "Locations" section
- **Team photo**: Build trust in "Why Choose Us" section
- **Format**: WebP with JPG fallback
- **Optimization**: Next.js Image component with priority/lazy loading

### Icons
- **Source**: React Icons (FaWhatsapp, FaMapMarkerAlt, FaStar)
- **Size**: 20-24px for buttons, 32px for feature icons
- **Color**: Inherit from parent or use theme colors

---

## Responsive Breakpoints

```css
sm:  640px   /* Large phones */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */
```

### Mobile-First Strategy
1. Design for 375px (iPhone SE) minimum
2. Stack vertically on mobile, horizontal on lg+
3. Reduce font sizes by 30-40% on mobile
4. Full-width CTAs on mobile, inline on desktop
5. Simplify navigation (hamburger menu on mobile)

---

## Design Tokens (Tailwind Config)

```js
theme: {
  extend: {
    colors: {
      brand: {
        red: '#DC2626',
        black: '#000000',
        white: '#FFFFFF'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      display: ['Helvetica', 'Arial', 'sans-serif']
    },
    boxShadow: {
      'brand': '0 10px 40px rgba(220, 38, 38, 0.1)',
      'brand-lg': '0 20px 60px rgba(220, 38, 38, 0.15)'
    }
  }
}
```

---

## Implementation Checklist

### Hero Section ✅
- [x] Red/white/black color scheme
- [x] Headline: "Malaysia's Trusted Mobile Specialist – 50,000+ Happy Customers"
- [x] Multiple CTAs (WhatsApp, Find Branch, Reach Team, Check Reviews)
- [x] Google Review card with clear logo and branding
- [x] Framer Motion animations (stagger, fade, scale)
- [x] Decorative background elements
- [x] Mobile-responsive layout

### Navbar ✅
- [x] Updated to red/black theme (removed blue)
- [x] Logo: "Trend" (red) + "Malayaa" (black)
- [x] Hover states use red-600

### Next Steps 🔄
- [ ] Integrate signboard image in appropriate section
- [ ] Add team photo for social proof
- [ ] Update other sections to match red/black theme
- [ ] Create "Why Choose Us" section with visual storytelling
- [ ] Optimize all images (WebP conversion)

---

## References

### Design Inspiration
- [Mobile Shop Templates - ThemeForest](https://themeforest.net/search/mobile%20shop)
- [Mobile Landing Page Best Practices](https://www.webstacks.com/blog/mobile-landing-page)
- [CTA Design Best Practices](https://magicui.design/blog/cta-design)

### Design Principles Applied
1. **Proximity**: Related elements grouped together (CTA clusters)
2. **Contrast**: Red/black on white for maximum visibility
3. **Repetition**: Consistent button styles, spacing, typography
4. **Alignment**: Grid-based layout with clear visual flow
5. **Hierarchy**: Size, color, weight guide user attention

### Conversion Optimization
- **Above-the-fold**: All key info + primary CTA visible without scrolling
- **Mobile-first**: 60%+ mobile traffic expected
- **Trust signals**: Google Reviews, customer count, branch locations
- **Clear value prop**: "Malaysia's Trusted Mobile Specialist"
- **Multiple CTAs**: Different user intents (WhatsApp, location, reviews)
- **Social proof**: 50,000+ customers, 5-star reviews

---

*Last Updated: February 2026*
*Design System Version: 2.0 (Red/White/Black Rebrand)*
