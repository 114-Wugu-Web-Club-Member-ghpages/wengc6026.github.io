# Design Guidelines: Tech Gaming Personal Blog

## Design Approach: Reference-Based (Gaming Platform Aesthetics)

**Primary Inspiration:** Steam profile pages, PlayStation Network profiles, and modern gaming portfolios
**Core Principle:** Cyberpunk-inspired tech aesthetic with emphasis on game save visualization

## Typography System

**Headings:** 
- Primary: Inter or Space Grotesk (geometric, modern)
- Font weights: 700-800 for headings, 600 for subheadings, 400-500 for body
- Sizes: text-5xl/6xl for hero name, text-3xl for section headers, text-xl for card titles

**Body Text:** Same family, maintaining consistency
- text-base for descriptions, text-sm for metadata

## Layout & Spacing System

**Tailwind Units:** Consistent use of 4, 8, 12, 16, 24 units
- Section padding: py-16 to py-24
- Card spacing: p-6 to p-8
- Gap between elements: gap-4, gap-6, gap-8
- Container: max-w-7xl with px-4 to px-8

## Page Structure

**1. Hero Section (80-90vh)**
- Full-width with tech grid background pattern
- Centered name display with glowing effect
- Subtitle/tagline beneath
- Animated scan line or particle effects (subtle)
- CTA: "Explore My Games" scroll indicator

**2. About/Profile Section**
- Single column layout max-w-3xl
- Profile image (circular with neon border effect)
- Bio text with tech-style formatting
- Gaming stats/badges row (3-4 columns: Total Games, Hours Played, Achievements, etc.)

**3. Game Saves Showcase (Primary Content)**
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each game card contains:
  - Game screenshot/cover (aspect-ratio-video or square)
  - Game title with platform icon
  - Save file metadata (playtime, progress %, last played date)
  - Progress bar with gradient fill
  - "View Details" interaction point
- Hover state: Subtle lift effect, enhanced glow

**4. Footer**
- Two-column: Contact info + Social links
- Gaming platform icons (Steam, PSN, Xbox, Switch)
- Copyright and last updated timestamp

## Component Specifications

**Cards (Game Saves):**
- Backdrop blur background with subtle border
- Rounded corners: rounded-lg to rounded-xl
- Shadow: Layered shadow with glow effect
- Inner padding: p-6
- Stacked content: Image → Title → Metadata → Progress bar

**Progress Bars:**
- Height: h-2 to h-3
- Full-width with rounded-full
- Gradient fill indicating completion
- Percentage text overlay or adjacent

**Buttons/CTAs:**
- Pill-shaped (rounded-full) or sharp-edged (rounded-lg)
- Padding: px-8 py-3
- On hero images: backdrop-blur-md background
- Tech-inspired borders with glow effects

**Icons:**
- Use Heroicons via CDN for UI elements
- Gaming platform logos from Font Awesome
- Size: w-5 h-5 for inline, w-8 h-8 for featured

## Visual Treatments

**Backgrounds:**
- Hero: Grid pattern overlay with gradient
- Sections: Alternating solid/subtle textured backgrounds
- Cards: Semi-transparent with blur

**Effects:**
- Subtle glowing borders on interactive elements
- Scan line animation in hero (CSS animation)
- Gradient overlays on images
- Box shadows with colored glow (tech accent)

**Borders & Dividers:**
- Thin glowing lines between sections
- Card borders: 1-2px with gradient or glow
- Section dividers with tech pattern motifs

## Images

**Required Images:**
1. **Hero Background:** Abstract tech grid/circuit pattern, dark with subtle illumination
2. **Profile Photo:** Personal photo, will be styled with circular crop and neon border
3. **Game Screenshots:** 6-9 game save screenshots showing gameplay or save file screens
4. **Platform Icons:** Steam, PlayStation, Xbox, Nintendo Switch logos

**Placement:**
- Hero: Full-width background image with overlay
- Profile: Small circular image (w-32 to w-48) in About section
- Game cards: Featured image at top of each card (16:9 or 1:1 aspect ratio)

## Animations (Minimal)

- Hero: Subtle particle drift or scan line movement
- Cards: Gentle hover lift (translate-y-1)
- Progress bars: Animate width on scroll-into-view
- Page transitions: Fade-in on load

## Responsive Behavior

**Mobile (base):** Single column, stacked layout, reduced padding
**Tablet (md):** Two-column game grid, comfortable spacing
**Desktop (lg+):** Three-column game grid, full visual effects

## Accessibility

- High contrast text on tech backgrounds
- Focus states with visible outlines matching tech theme
- Semantic HTML structure
- Alt text for all game images
- Keyboard navigation for all interactive elements