# FoodOrdering

A React Native food ordering app built with Expo and TypeScript, featuring pizza ordering with cart management, user authentication, and order tracking.

## Features

- **Menu Browsing**: Browse a variety of pizzas with images and prices
- **Cart Management**: Add pizzas to cart with different sizes (S, M, L, XL) and quantities
- **User Authentication**: Login and registration screens
- **Order Management**: View order history and track order status (New, Cooking, Delivering, Delivered)
- **Responsive Design**: Works on iOS, Android, and Web

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and build service
- **TypeScript** - Type-safe JavaScript
- **Expo Router** - File-based routing
- **React Native Reanimated** - Smooth animations
- **Day.js** - Date manipulation

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd FoodOrdering
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on your preferred platform**

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

## Project Structure

```
FoodOrdering/
├── assets/
│   ├── data/
│   │   ├── orders.ts      # Sample order data
│   │   └── products.ts    # Sample product data
│   ├── fonts/             # Custom fonts
│   └── images/            # App icons and images
├── src/
│   ├── app/
│   │   ├── _layout.tsx    # Root layout
│   │   ├── auth/          # Authentication screens
│   │   │   ├── LoginScreen.tsx
│   │   │   └── RegistrationScreen.tsx
│   │   └── (tabs)/        # Tab-based navigation
│   │       ├── _layout.tsx
│   │       ├── index.tsx  # Home screen
│   │       ├── cart.tsx   # Shopping cart
│   │       ├── menu/      # Menu screens
│   │       │   ├── [id].tsx  # Product details
│   │       │   └── index.tsx # Menu list
│   │       └── orders/    # Order screens
│   │           ├── [id].tsx  # Order details
│   │           └── index.tsx # Order list
│   ├── components/        # Reusable UI components
│   │   ├── CartItem.tsx
│   │   ├── ProductItem.tsx
│   │   ├── OrderListItem.tsx
│   │   └── ...
│   ├── constants/
│   │   └── Colors.ts      # App color scheme
│   └── types.ts           # TypeScript type definitions
├── app.json               # Expo configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Usage

1. **Authentication**: Register a new account or login with existing credentials
2. **Browse Menu**: View available pizzas in the menu tab
3. **Add to Cart**: Select a pizza, choose size, and add to cart
4. **Checkout**: Review cart items and place your order
5. **Track Orders**: Monitor order status in the orders tab

## Data Models

- **Product**: Pizza items with id, name, image, and price
- **CartItem**: Items in cart with product, size, and quantity
- **Order**: Customer orders with status tracking
- **OrderItem**: Individual items within an order

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
