# 🏨 Zathura - Airbnb Clone

A full-stack, production-ready accommodation booking platform built with Node.js, Express.js, and MongoDB. Zathura features modern web development practices and comprehensive functionality for property listings, user authentication, and booking management.

![Node.js](https://img.shields.io/badge/Node.js-v22.14.0-green)
![Express.js](https://img.shields.io/badge/Express.js-v5.1.0-orange)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-blue)
![EJS](https://img.shields.io/badge/EJS-v3.1.10-yellow)

**Live Demo:** [https://zathura.onrender.com](https://zathura.onrender.com)

---

## ✨ Features

### 🔐 Authentication & User Management
- **User Registration & Login** - Secure password authentication using Passport.js
- **Session Management** - Persistent sessions stored in MongoDB with 7-day expiration
- **User Profiles** - Personalized user experience with profile management and user initials as avatar
- **Password Security** - Encrypted password storage with Passport-local-mongoose
- **Flash Notifications** - Real-time feedback with custom slide-in notifications

### 🏡 Property Listings
- **Create Listings** - Upload property details with high-resolution images via Cloudinary
- **Edit Listings** - Modify existing property information and details
- **Delete Listings** - Remove properties with owner verification
- **Property Categories** - 11 diverse categories:
  
  | | | |
  |---|---|---|
  | 🔥 Trending | 🛏️ Rooms | 🏙️ Iconic Cities |
  | ⛰️ Mountains | 🏰 Castles | 🏊 Amazing Pools |
  | ⛺ Camping | 🐄 Farms | ❄️ Arctic |
  | 🛖 Domes | 🚤 Boats | |

- **Rich Property Details** - Title, description, location, price, images, and geographic coordinates

### 🔍 Search & Filtering
- **Location Search** - Find properties by city, country, or region (case-insensitive)
- **Category Filtering** - Filter by property types with visual icons
- **Combined Filters** - Search and filter simultaneously for precise results
- **All Button** - Reset category filters and show all listings
- **Real-Time Results** - Instant property matching with average ratings displayed

### 📅 Booking System
- **Smart Booking** - Select check-in/check-out dates and guest count
- **Automatic Price Calculation** - Total cost calculated based on nightly rate × number of nights
- **Dynamic Pricing** - Real-time updates when dates change
- **Booking Confirmation** - Instant confirmation with booking details
- **Prevent Self-Booking** - Validation to prevent users from booking their own listings
- **Trip Management** - Dedicated trips page to view upcoming and past bookings
- **Cancellation Policy** - Cancel bookings with confirmation (24-hour window)

### ⭐ Reviews & Ratings
- **User Reviews** - Authenticated users can leave detailed comments
- **Rating System** - Comprehensive 1-5 star rating functionality with visual stars
- **Average Ratings** - Automatic calculation and display of property averages
- **Review Count** - See how many reviews each property has received
- **Review Management** - Delete your own reviews from profile page
- **Profile Integration** - All user reviews displayed on profile page

### ❤️ Wishlist Feature
- **Save Favorites** - Add properties to your personal wishlist with one click
- **Quick Access** - View all saved properties in one dedicated page
- **Wishlist Management** - Remove properties directly from wishlist
- **Visual Feedback** - Heart icon toggles between regular and solid
- **Persistence** - Wishlist data saved across sessions in database

### 🗺️ Interactive Maps
- **Mapbox Integration** - Interactive maps showing exact property locations
- **GeoJSON Support** - Geographic coordinates for accurate positioning
- **Location Visualization** - Visual representation of property neighborhoods
- **Show Page Maps** - Dedicated map section on each listing

### 📱 Responsive UI & UX
- **Mobile-First Design** - Fully responsive for all devices
- **Intuitive Navigation** - Easy-to-use menus with hamburger on mobile
- **Custom Notifications** - Beautiful slide-in toast notifications
- **No Listings Found** - Friendly empty states with helpful messages
- **Loading States** - Smooth transitions and visual feedback
- **Modern Styling** - Airbnb-inspired design with Plus Jakarta Sans font

### 👤 User Profiles
- **Profile Page** - Dedicated page showing user information
- **Review History** - All reviews written by the user displayed
- **Wishlist Preview** - Quick view of saved listings
- **Profile Circle** - User initial displayed in black circle
- **Member Since** - Track when user joined the platform

---

## 🛠️ Tech Stack

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | v22.14.0 | JavaScript runtime environment |
| **Express.js** | v5.1.0 | Web application framework |
| **Express-session** | - | Session management middleware |
| **Method-override** | - | HTTP method override support |

### Database
| Technology | Version | Purpose |
|------------|---------|---------|
| **MongoDB Atlas** | - | Cloud NoSQL database |
| **Mongoose** | v8.13.2 | MongoDB object data modeling |
| **Connect-mongo** | v6.0.0 | MongoDB session store |

### Authentication & Security
| Technology | Version | Purpose |
|------------|---------|---------|
| **Passport.js** | v0.7.0 | Authentication middleware |
| **Passport-local** | - | Local authentication strategy |
| **Passport-local-mongoose** | v8.0.0 | Mongoose integration |
| **Bcrypt** | - | Password hashing and encryption |
| **Connect-flash** | - | Flash message support |

### Frontend & Templating
| Technology | Version | Purpose |
|------------|---------|---------|
| **EJS** | v3.1.10 | Templating engine |
| **EJS-mate** | v4.0.0 | Layouts and partials support |
| **Bootstrap 5** | - | CSS framework |
| **Font Awesome 6** | - | Icons |
| **Custom CSS** | - | Responsive styling |
| **Client-side JavaScript** | - | Interactive UI features |

### Mapping & Geolocation
| Technology | Version | Purpose |
|------------|---------|---------|
| **Mapbox SDK** | v0.16.1 | Interactive maps |
| **Mapbox GL** | v2.15.0 | Map rendering |
| **GeoJSON** | - | Geographic data formatting |

### File & Image Management
| Technology | Version | Purpose |
|------------|---------|---------|
| **Multer** | v2.0.1 | File upload handling |
| **Multer-storage-cloudinary** | v4.0.0 | Cloudinary storage integration |
| **Cloudinary** | v1.21.0 | Cloud image hosting and optimization |

### Data Validation
| Technology | Version | Purpose |
|------------|---------|---------|
| **Joi** | v17.13.3 | Schema validation |

### Development Tools
| Technology | Version | Purpose |
|------------|---------|---------|
| **dotenv** | v17.0.1 | Environment variable management |
| **Nodemon** | v3.1.9 | Development auto-restart |
| **Git** | - | Version control |

---

## 📁 Project Structure

```
zathura/
├── models/                  # Database schemas
│   ├── listing.js          # Property listing schema
│   ├── booking.js          # Booking schema
│   ├── review.js           # Review & rating schema
│   └── user.js             # User account schema
├── controllers/            # Business logic
│   ├── listings.js         # Listing operations
│   ├── bookings.js         # Booking management
│   ├── reviews.js          # Review operations
│   ├── wishlists.js        # Wishlist operations
│   ├── users.js            # User authentication
│   └── profile.js          # User profile management
├── routes/                 # API endpoints
│   ├── listing.js          # Listing routes
│   ├── booking.js          # Booking routes
│   ├── review.js           # Review routes
│   ├── user.js             # Auth routes
│   ├── wishlist.js         # Wishlist routes
│   └── profile.js          # Profile routes
├── views/                  # EJS templates
│   ├── listings/           # Property listing pages
│   ├── users/              # User pages (login, signup, bookings)
│   ├── layouts/            # Layout templates
│   └── includes/           # Reusable components (navbar, footer)
├── public/                 # Static assets
│   ├── css/                # Stylesheets
│   ├── js/                 # Client-side scripts
│   │   ├── map.js         # Mapbox integration
│   │   └── script.js      # General scripts
│   └── image/              # Static images
├── utils/                  # Utility functions
│   ├── ExpressError.js    # Custom error class
│   └── wrapAsync.js       # Async error handler
├── init/                   # Database initialization
│   └── data.js            # Sample data
├── app.js                  # Main application file
├── middleware.js           # Custom middleware
├── schema.js               # JOI validation schemas
├── cloudConfig.js          # Cloudinary configuration
└── package.json            # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v22.14.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB Atlas** account (or local MongoDB)
- **Cloudinary** account for image management
- **Mapbox** API key for maps

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/Atryee-Chatterjee/Zathura.git
cd zathura
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database Configuration
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/zathura
NODE_ENV=production

# Session Management
SECRET=your-secret-key-for-sessions-min-32-characters

# Cloudinary Configuration (Image Storage)
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY=your-cloudinary-api-key
CLOUDINARY_SECRET=your-cloudinary-api-secret

# Mapbox Configuration (Maps)
MAP_TOKEN=your-mapbox-public-token

#### 4. Obtain API Keys

- **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
  - Create a cluster and get your connection string
  - Whitelist Render's IPs: 44.233.151.27, 35.160.120.126, 34.211.200.85

- **Cloudinary**: https://cloudinary.com/
  - Sign up and get your Cloud Name, API Key, and API Secret

- **Mapbox**: https://www.mapbox.com/
  - Create an account and generate a public access token

#### 5. Start the Server

```bash
# Development
nodemon app.js

# Production
node app.js
```

Server will run on: **http://localhost:8080**

---

## 📖 Usage

### For Guests
- **Browse Properties** - Visit homepage to explore all available listings
- **Search & Filter** - Use location search and category filters to find properties
- **View Details** - Click on any listing to see full information, reviews, and map
- **Sign Up** - Create an account to access booking and wishlist features

### For Registered Users
1. **Login** - Access your account with username and password
2. **Save Favorites** - Click heart icon to add properties to wishlist
3. **Book Properties** - Select dates and guest count, then confirm booking
4. **Leave Reviews** - Share your experience with ratings and comments
5. **View Trips** - Check upcoming and past bookings in your trips page
6. **Manage Profile** - View your reviews and profile information
7. **Logout** - Securely exit when done

### For Hosts
1. **Create Account** - Sign up to become a host
2. **Add Listings** - Click "Become a host" to add your property
3. **Property Details** - Fill in title, description, location, price, and category
4. **Upload Images** - Add high-quality photos of your property via Cloudinary
5. **Publish Listing** - Make your property available for bookings
6. **Manage Properties** - Edit or delete your listings as needed
7. **Monitor Reviews** - Read feedback from guests

---

## 🎯 Key Features Implementation

### Search & Filtering Engine
- **Location-based Search**: Case-insensitive regex search across location field
- **Category Filtering**: Exact match filtering for property types
- **Combined Search**: Simultaneous location and category filtering
- **Rating Integration**: Real-time average rating calculation on search results
- **Dynamic Results**: Instant results update without page refresh

### Booking Management System
- **Date Selection**: Interactive date pickers for check-in and check-out
- **Automatic Calculation**: Night count and total price computed automatically
- **Payment Processing**: Total cost = nightly rate × number of nights
- **Validation Layer**: Prevents self-booking and invalid date ranges
- **Confirmation Flow**: Instant booking confirmation with email notifications

### Image Management with Cloudinary
- **Cloud Storage**: Secure cloud hosting for all property images
- **Multer Integration**: Seamless file upload with multer-storage-cloudinary
- **Automatic Optimization**: Images automatically resized and optimized
- **CDN Delivery**: Fast global content delivery through Cloudinary's CDN
- **Multiple Images**: Support for uploading multiple property photos

### Review & Rating System
- **Star Ratings**: 1-5 star rating with visual representation
- **Aggregate Ratings**: Automatic calculation of average ratings
- **Review Display**: Count and average rating shown on listing cards
- **User Reviews**: Only authenticated users can leave reviews
- **Edit & Delete**: Users can modify or remove their own reviews

### Wishlist Functionality
- **Add to Favorites**: One-click wishlist addition from listing cards
- **Persistent Storage**: Wishlist saved to user profile in database
- **Wishlist Page**: Dedicated page to view all saved properties
- **Quick Remove**: Easy removal of properties from wishlist
- **Status Tracking**: Visual indicator of wishlisted properties

### Interactive Mapping
- **Mapbox Integration**: All properties displayed on interactive maps
- **GeoJSON Format**: Geographic coordinates stored in GeoJSON Point format
- **Location Clustering**: Multiple listings shown at once on the map
- **Zoom & Pan**: Full map navigation capabilities
- **Location Context**: Enhanced user understanding of property location

### Session & Authentication
- **Passport.js**: Secure local authentication strategy
- **Session Persistence**: 7-day session expiration with MongoDB storage
- **Cookie Security**: HTTP-only, secure cookies with automatic rotation
- **Password Encryption**: Bcrypt hashing with passport-local-mongoose
- **User Serialization**: Efficient user data caching in sessions

---

## 🌐 API Routes Overview

### Authentication Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /signup | Signup form |
| POST | /signup | Register new user |
| GET | /login | Login form |
| POST | /login | Authenticate user |
| GET | /logout | Logout user |

### Listings Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /listings | View all listings (with search/filter) |
| GET | /listings/new | Create listing form |
| POST | /listings | Create new listing |
| GET | /listings/:id | View listing details |
| GET | /listings/:id/edit | Edit listing form |
| PUT | /listings/:id | Update listing |
| DELETE | /listings/:id | Delete listing |

### Bookings Routes
| Method | Route | Description |
|--------|-------|-------------|
| POST | /listings/:id/bookings | Create new booking |
| GET | /trips | View upcoming trips |
| GET | /trips/past | View past trips |
| GET | /bookings/:bookingId | View booking details |
| POST | /bookings/:bookingId/cancel | Cancel booking |

### Reviews Routes
| Method | Route | Description |
|--------|-------|-------------|
| POST | /listings/:id/reviews | Create review |
| DELETE | /listings/:id/reviews/:reviewId | Delete review |

### Wishlist Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /wishlist | View wishlist page |
| GET | /api/wishlist | Get wishlist (API) |
| POST | /api/wishlist/toggle/:id | Add/remove from wishlist (API) |

### Profile Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /profile | View user profile |
| GET | /users/:id | View specific user profile |
| GET | /profile/edit | Edit profile form |
| POST | /profile/edit | Update profile |

---

## 📊 Database Models

### User Model
```javascript
{
  username: String (unique),
  email: String (required),
  password: String (hashed),
  wishlist: [ObjectId],     // References to Listings
  bookings: [ObjectId]      // References to Bookings
}
```

### Listing Model
```javascript
{
  title: String (required),
  description: String,
  price: Number,
  location: String,
  country: String,
  image: { url: String, filename: String },
  category: String (11 categories),
  owner: ObjectId,          // Reference to User
  reviews: [ObjectId],      // References to Reviews
  geometry: {
    type: "Point",
    coordinates: [longitude, latitude]
  }
}
```

### Booking Model
```javascript
{
  listing: ObjectId (required),
  user: ObjectId (required),
  checkIn: Date (required),
  checkOut: Date (required),
  guests: Number (required),
  totalPrice: Number (required),
  nights: Number (required),
  status: String (confirmed/cancelled/completed),
  bookingDate: Date,
  cancellationDate: Date
}
```

### Review Model
```javascript
{
  comment: String,
  rating: Number (1-5),
  author: ObjectId,
  listing: ObjectId,
  createdAt: Date
}
```
## 🚀 Security Features

- **Password Encryption** - Bcrypt hashing with passport-local-mongoose
- **Session Management** - Secure, HTTP-only cookies with automatic expiration
- **CSRF Protection** - Method-override for safe form submissions
- **Input Validation** - Comprehensive Joi schema validation
- **Owner Verification** - Authorization checks to prevent unauthorized access
- **Review Author Check** - Only review authors can delete their reviews
- **Booking Validation** - Prevent self-booking and invalid date ranges
- **Environment Variables** - Sensitive data stored in .env file
- **XSS Protection** - EJS auto-escaping for user-generated content

---
## 👨‍💻 Author

**Atryee Chatterjee**

**GitHub:** [@Atryee-Chatterjee](https://github.com/Atryee-Chatterjee)

---


## ⭐ Support

If you found this project helpful, please give it a star on GitHub!

**Made with ❤️ by Atryee**

