# IROVA Studio

**Color Makes You Special.**

IROVA Studio is a color-driven character and lifestyle brand.

This repository contains the IROVA Studio website, brand system,
Color World system, and the foundation for the future IROVA commerce platform.

---

## Core Concept

IROVA begins with a color.

Each color grows into its own character, companion, symbols, stories,
products, and everyday experiences — eventually becoming a complete
**Color World**.

```text
COLOR
  │
  ▼
CHARACTER
  │
  ▼
COMPANION
  │
  ▼
DAILY LIFE
  │
  ▼
PRODUCTS
  │
  ▼
COLOR WORLD
```

At the platform level:

```text
BRAND
  │
  ▼
COLOR WORLD
  │
  ├───────────────┬───────────────┐
  ▼               ▼               ▼
Character      Companion        Symbol
  │               │               │
  └───────────────┼───────────────┘
                  │
                  ▼
               PRODUCT
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
      World    Category  Collection
                  │
                  ▼
             Variant / SKU
                  │
                  ▼
          Price + Inventory
                  │
                  ▼
                 SHOP
                  │
                  ▼
        Cart → Order → Payment
                  │
                  ▼
              CUSTOMER
```

---

# IROVA SYSTEM ARCHITECTURE v1.0

The IROVA platform is organized into **12 core systems**.

```text
IROVA STUDIO
│
├── 01. Brand System
├── 02. Color World System
├── 03. IP System
├── 04. Product System
├── 05. Product Classification System
├── 06. Commerce System
├── 07. Content System
├── 08. Customer System
├── 09. Admin System
├── 10. Storefront System
├── 11. SEO / Discovery System
└── 12. Technology System
```

---

# 01. BRAND SYSTEM

The Brand System defines the identity and long-term direction of IROVA Studio.

```text
Brand
│
├── Brand Name
│   └── IROVA Studio
│
├── Logo
│
├── Slogan
│   └── Color Makes You Special.
│
├── Mission
│
├── Vision
│
├── Brand Story
│
├── Visual Identity
│   ├── Typography
│   ├── Color System
│   ├── Layout
│   └── Graphic Language
│
└── Brand Guidelines
```

### Brand Principle

IROVA does not begin with a product.

It begins with a **color**, then builds a world around that color.

---

# 02. COLOR WORLD SYSTEM

A **Color World** is the core creative unit of IROVA.

Every Color World has its own visual identity, character, companion,
symbols, story, atmosphere, and product ecosystem.

```text
Color World
│
├── Color
├── Character
├── Companion
├── Symbol
├── Slogan
├── Story
├── Visual Identity
├── Daily Life
└── Products
```

## Current Color Worlds

```text
Color Worlds
│
├── Olive World
│   ├── Color
│   │   └── Olive
│   ├── Character
│   ├── Companion
│   ├── Symbol
│   ├── Slogan
│   │   └── 自然と、ゆっくり。
│   ├── Story
│   └── Products
│
├── Canyon World
│   ├── Color
│   │   └── Canyon
│   ├── Character
│   ├── Companion
│   ├── Symbol
│   ├── Slogan
│   │   └── 夕暮れと、冒険。
│   ├── Story
│   └── Products
│
├── Purple World
│   ├── Color
│   │   └── Purple
│   ├── Character
│   ├── Companion
│   ├── Symbol
│   ├── Slogan
│   │   └── 夜と、夢。
│   ├── Story
│   └── Products
│
├── Wine World
│   ├── Color
│   │   └── Wine
│   ├── Character
│   │   └── Rumi / ルミ
│   ├── Companion
│   │   └── Kuro / クロ
│   ├── Symbol
│   │   └── Cherry
│   ├── Slogan
│   │   └── 静かな熱を、そばに。
│   ├── Story
│   └── Products
│
└── Future Worlds
```

### Color World Creation Flow

```text
Color
  │
  ▼
Character
  │
  ▼
Companion
  │
  ▼
Symbols
  │
  ▼
Daily Life
  │
  ▼
Story
  │
  ▼
Products
  │
  ▼
Color World
```

---

# 03. IP SYSTEM

The IP System manages the original characters, companions,
symbols, stories, and visual elements belonging to each Color World.

```text
IP
│
├── Characters
│   ├── Name
│   ├── Profile
│   ├── Personality
│   ├── Appearance
│   ├── Outfit
│   ├── Daily Actions
│   ├── Relationships
│   ├── Story
│   └── Media
│
├── Companions
│   ├── Name
│   ├── Profile
│   ├── Personality
│   ├── Mascot Design
│   ├── Charm Design
│   ├── Plush Design
│   ├── Story
│   └── Media
│
└── Symbols
    ├── Plants
    ├── Fruits
    ├── Nature
    ├── Objects
    ├── Graphic Elements
    └── World-specific Symbols
```

### IP Relationship

```text
COLOR WORLD
     │
     ├──────────────┬──────────────┐
     ▼              ▼              ▼
 Character      Companion        Symbol
     │              │              │
     └──────────────┼──────────────┘
                    │
                    ▼
                 PRODUCT
```

IP elements are not products themselves.

Products reference and use IP elements belonging to a Color World.

Example:

```text
Wine Sneakers
│
├── World
│   └── Wine
│
├── Character
│   └── Rumi
│
├── Companion
│   └── Kuro
│
├── Symbol
│   └── Cherry
│
├── Category
│   └── Fashion
│
└── Subcategory
    └── Sneakers
```

---

# 04. PRODUCT SYSTEM

The Product System defines the physical and lifestyle product ecosystem of IROVA.

```text
Products
│
├── 01. Entry Goods
│   ├── Sticker
│   ├── Badge
│   ├── Keychain
│   └── Charm
│
├── 02. Digital & Mobile
│   ├── Case
│   ├── Strap
│   ├── Tech Pouch
│   └── Device Accessories
│
├── 03. Fashion
│   ├── T-shirt
│   ├── Hoodie
│   ├── Jacket
│   ├── Bottom
│   ├── Cap
│   ├── Beanie
│   ├── Socks
│   └── Sneakers
│
├── 04. Bags & Carry
│   ├── Backpack
│   ├── Crossbody
│   ├── Tote
│   ├── Pouch
│   └── Wallet
│
├── 05. Home & Lifestyle
│   ├── Bottle
│   ├── Mug
│   ├── Blanket
│   ├── Desk Goods
│   └── Storage
│
├── 06. Plush & Collectibles
│   ├── Mascot
│   ├── Plush
│   ├── Figure
│   └── Limited Collectible
│
└── 07. Sets & Limited
    ├── Starter Set
    ├── OOTD Set
    ├── Gift Box
    ├── Seasonal
    └── Collaboration
```

### Product Principle

Products should not exist as isolated merchandise.

Every product can connect to:

```text
Product
│
├── Color World
├── Character
├── Companion
├── Symbol
├── Category
├── Collection
└── Story
```

---

# 05. PRODUCT CLASSIFICATION SYSTEM

Product classification should be data-driven rather than hard-coded.

```text
PRODUCT
│
├── World
│   ├── Olive
│   ├── Canyon
│   ├── Purple
│   ├── Wine
│   └── Future Worlds
│
├── Category
│   ├── Entry Goods
│   ├── Digital & Mobile
│   ├── Fashion
│   ├── Bags & Carry
│   ├── Home & Lifestyle
│   ├── Plush & Collectibles
│   └── Sets & Limited
│
├── Subcategory
│   ├── T-shirt
│   ├── Hoodie
│   ├── Sneakers
│   ├── Backpack
│   ├── Plush
│   └── ...
│
├── Collection
│   ├── Seasonal
│   ├── Limited
│   ├── Collaboration
│   └── Campaign Collection
│
└── IP
    ├── Character
    ├── Companion
    └── Symbol
```

Example:

```text
Rumi Night Walk Hoodie
│
├── World
│   └── Wine
│
├── Category
│   └── Fashion
│
├── Subcategory
│   └── Hoodie
│
├── Collection
│   └── Night Walk
│
├── Character
│   └── Rumi
│
├── Companion
│   └── Kuro
│
└── Symbol
    └── Cherry
```

---

# 06. COMMERCE SYSTEM

The Commerce System manages the complete purchasing lifecycle.

```text
Commerce
│
├── Product
│
├── Product Variant
│   ├── SKU
│   ├── Size
│   ├── Color
│   ├── Option
│   └── Status
│
├── Price
│   ├── Base Price
│   ├── Sale Price
│   └── Currency
│
├── Inventory
│   ├── Stock
│   ├── Reserved Stock
│   └── Availability
│
├── Cart
│   └── Cart Item
│
├── Checkout
│
├── Order
│   └── Order Item
│
├── Payment
│
├── Shipping
│
├── Returns / Refund
│
├── Coupon / Promotion
│
└── Customer
```

### Commerce Flow

```text
PRODUCT
   │
   ▼
VARIANT / SKU
   │
   ▼
PRICE + INVENTORY
   │
   ▼
CART
   │
   ▼
CHECKOUT
   │
   ▼
ORDER
   │
   ▼
PAYMENT
   │
   ▼
SHIPPING
   │
   ▼
CUSTOMER
```

Payment card information should not be stored directly by IROVA.

Payment processing will use an external payment provider.

---

# 07. CONTENT SYSTEM

IROVA is both a commerce platform and a storytelling platform.

The Content System connects products with characters,
Color Worlds, collections, and brand stories.

```text
Content
│
├── Journal
│
├── Color Stories
│
├── Character Stories
│
├── Companion Stories
│
├── Collection Stories
│
├── Product Stories
│
├── Lookbook
│
├── News
│
└── Campaign
```

### Content Relationship

```text
Color World
     │
     ├── Character Story
     ├── Companion Story
     ├── Color Story
     ├── Lookbook
     ├── Collection Story
     └── Product Story
```

---

# 08. CUSTOMER SYSTEM

The Customer System manages the relationship between users and IROVA.

```text
Customer
│
├── Account
│
├── Profile
│
├── Address
│
├── Orders
│
├── Wishlist
│
├── Favorite Color Worlds
│
├── Favorite Characters
│
├── Favorite Products
│
└── Notifications
```

### Future Personalization

```text
CUSTOMER
│
├── Favorite World
├── Favorite Character
├── Wishlist
├── Purchase History
└── Preferences
        │
        ▼
Personalized IROVA Experience
```

---

# 09. ADMIN SYSTEM

IROVA Admin will manage the platform without requiring code changes
for normal business operations.

```text
IROVA Admin
│
├── Dashboard
│
├── Color Worlds
│   ├── Create
│   ├── Edit
│   ├── Publish
│   └── Archive
│
├── IP
│   ├── Characters
│   ├── Companions
│   └── Symbols
│
├── Products
│   ├── Product
│   ├── Categories
│   ├── Subcategories
│   ├── Collections
│   ├── Variants
│   └── Product Media
│
├── Inventory
│
├── Orders
│
├── Customers
│
├── Content
│   ├── Journal
│   ├── Stories
│   ├── Lookbook
│   └── News
│
├── Campaigns
│
├── Promotions
│
├── SEO
│
├── Media Library
│
└── Settings
```

### Admin Principle

Normal business operations should not require source-code changes.

For example:

```text
Admin
  │
  ▼
New Color World
  │
  ├── Name
  ├── Slug
  ├── Color
  ├── Slogan
  ├── Story
  ├── Character
  ├── Companion
  ├── Images
  └── Status
        │
        ▼
      Publish
        │
        ▼
/worlds/[slug]
```

Product creation follows the same principle:

```text
Admin
  │
  ▼
New Product
  │
  ├── Name
  ├── Slug
  ├── World
  ├── Category
  ├── Collection
  ├── IP
  ├── Images
  ├── Variants
  ├── Price
  ├── Inventory
  └── Status
        │
        ▼
      Publish
        │
        ▼
/products/[slug]
```

---

# 10. STOREFRONT SYSTEM

The Storefront System is the customer-facing IROVA website.

```text
irovastudio.com
│
├── Home
│
├── Shop
│   ├── New
│   ├── Category
│   ├── Collection
│   └── Product
│
├── Color Worlds
│   └── /worlds/[slug]
│
├── Characters
│
├── Journal
│
├── About IROVA
│
├── Search
│
├── Wishlist
│
├── Cart
│
├── Checkout
│
└── Account
    ├── Profile
    ├── Addresses
    ├── Orders
    └── Wishlist
```

### Dynamic Routes

```text
/worlds/[slug]

/products/[slug]

/categories/[slug]

/collections/[slug]

/characters/[slug]

/journal/[slug]
```

This allows new products, worlds, collections, and stories
to be published without creating new source-code pages manually.

---

# 11. SEO / DISCOVERY SYSTEM

The Discovery System helps users and search engines discover IROVA content.

```text
Discovery
│
├── Dynamic Metadata
│   ├── Title
│   └── Description
│
├── Canonical URLs
│
├── Sitemap
│
├── robots.txt
│
├── Open Graph
│
├── Social Sharing
│
├── Structured Data
│   ├── Organization
│   ├── Product
│   ├── Breadcrumb
│   └── Article
│
├── Multilingual
│   ├── English
│   ├── Japanese
│   └── Chinese
│
├── Internal Search
│
└── Internal Linking
```

### Language Direction

```text
IROVA Studio
│
├── English
├── 日本語
└── 中文
```

Brand identity remains consistent across languages,
while copy and presentation can be localized for each market.

---

# 12. TECHNOLOGY SYSTEM

IROVA will use a separated frontend, backend, database,
media storage, and payment architecture.

```text
Technology
│
├── Frontend
│   ├── Next.js
│   ├── React
│   ├── TypeScript
│   └── Tailwind CSS
│
├── Backend
│   ├── Java
│   ├── Spring Boot
│   ├── Spring Security
│   └── JPA
│
├── Database
│   └── PostgreSQL
│
├── Storage
│   ├── Cloudinary
│   └── S3-compatible Storage
│
├── Payment
│   └── External Payment Provider
│
├── Infrastructure
│   ├── Vercel
│   ├── Backend Hosting
│   └── Docker
│
└── Operations
    ├── Monitoring
    ├── Logging
    ├── Backup
    └── Security
```

---

# Platform Architecture

```text
USER
 │
 ▼
irovastudio.com
 │
 ▼
NEXT.JS
Storefront / Admin UI
 │
 ▼
SPRING BOOT REST API
 │
 ├──────────────────┐
 │                  │
 ▼                  ▼
POSTGRESQL       MEDIA STORAGE
 │              Cloudinary / S3
 │
 ▼
COMMERCE
 │
 ├── Product
 ├── Inventory
 ├── Customer
 ├── Cart
 └── Order
 │
 ▼
PAYMENT PROVIDER
```

---

# Core Data Model

The initial platform data model will include:

```text
ColorWorld
│
├── id
├── slug
├── name
├── slogan
├── description
├── primaryColor
├── heroImage
└── status


Character
│
├── id
├── worldId
├── name
├── japaneseName
├── description
└── image


Companion
│
├── id
├── worldId
├── name
├── description
└── image


Symbol
│
├── id
├── worldId
├── name
├── description
└── image


Category
│
├── id
├── parentId
├── name
├── slug
├── sortOrder
└── status


Collection
│
├── id
├── name
├── slug
├── description
└── status


Product
│
├── id
├── worldId
├── slug
├── name
├── description
├── basePrice
├── currency
└── status


ProductVariant
│
├── id
├── productId
├── sku
├── size
├── color
├── price
└── stock


ProductImage
│
├── id
├── productId
├── url
├── altText
└── sortOrder


Customer
│
├── id
├── email
├── passwordHash
├── name
└── role


Cart
│
└── CartItem


Order
│
└── OrderItem


JournalPost
```

This model will evolve as the platform moves from architecture
into database and API implementation.

---

# Repository Direction

The project will gradually move from the current static prototype
to a full-stack commerce platform.

```text
IROVA
│
├── legacy-static
│   └── Current HTML prototype
│
├── frontend
│   └── Next.js
│
├── backend
│   └── Spring Boot
│
├── docs
│   ├── architecture.md
│   ├── database.md
│   ├── api.md
│   ├── commerce.md
│   ├── admin.md
│   └── deployment.md
│
└── README.md
```

---

# Development Roadmap

```text
PHASE 01
Static Prototype
      │
      ▼
PHASE 02
Next.js Frontend
      │
      ▼
PHASE 03
Spring Boot + PostgreSQL
      │
      ▼
PHASE 04
Data-driven Color Worlds & Products
      │
      ▼
PHASE 05
IROVA Admin
      │
      ▼
PHASE 06
Cart + Orders
      │
      ▼
PHASE 07
Payment
      │
      ▼
PHASE 08
Production Commerce Platform
```

## Current Priority

The first full-stack milestone is:

```text
Next.js
   +
Spring Boot
   +
PostgreSQL
   +
Color World API
   +
Product API
```

Success means:

> A new Color World or product can be created in the system
> and automatically appear on the storefront without manually
> creating or editing an HTML page.

---

# Development Principles

1. **Color is the starting point.**
2. **Color Worlds are the core creative structure.**
3. **Characters and companions are reusable IP assets.**
4. **Products reference IP instead of duplicating it.**
5. **Business content should be data-driven.**
6. **Normal product and content updates should not require code changes.**
7. **Frontend and backend responsibilities should remain separated.**
8. **Payment card data should never be stored directly by IROVA.**
9. **The system should support future Color Worlds without architectural changes.**
10. **The platform should grow from a brand website into a complete IROVA ecosystem.**

---

# IROVA Studio

**Color Makes You Special.**

```text
Color
  ↓
Character
  ↓
Companion
  ↓
Daily Life
  ↓
Products
  ↓
Color World
  ↓
IROVA
```

© 2026 IROVA Studio
