# 🏨 MEGO – Multi-Vendor Hotel Booking Platform

<p align="center">
  <strong>A modern multi-vendor hotel booking platform built with React, TypeScript and Vite.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/MUI-7-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
</p>

---

## 📖 Introduction

**MEGO** is a multi-vendor hotel booking platform that allows users to discover hotels, search for rooms, make reservations, manage bookings, and interact with hotel partners.

The system is designed with multiple roles, each having its own workflow and functionality.

### Main Roles

- 👤 Guest
- 🧑‍💼 Customer
- 🏨 Partner
- 👨‍💻 Admin

The frontend is developed using **React + TypeScript + Vite**, with a modular architecture that separates shared components, role-specific modules, routing, state management, themes, and utilities.

---

# ✨ Main Features

## 👤 Guest

Guests are users who have not logged into the system.

### Features

- View homepage
- Search hotels
- View hotel list
- Filter hotels
- View hotel details
- View room information
- View hotel facilities
- View hotel reviews
- Register account
- Login

---

## 🧑‍💼 Customer

Customers are authenticated users who can book hotel rooms.

### Account

- View profile
- Update personal information
- Change password
- Manage account

### Hotel

- Search hotels
- Filter hotels
- View hotel details
- View available rooms
- View room details
- Check room availability

### Booking

- Select check-in date
- Select check-out date
- Select number of guests
- Select room
- Create booking
- Confirm booking
- View booking history
- Track booking status
- Cancel booking

### Review

- Rate hotel
- Write reviews
- View reviews

---

## 🏨 Partner

Partners are hotel owners or accommodation providers who use MEGO to manage their properties.

### Hotel Management

- Register hotel
- Update hotel information
- Manage hotel information
- Manage hotel facilities
- Manage hotel images

### Room Management

- Add rooms
- Update rooms
- Delete rooms
- Manage room types
- Manage room prices
- Manage room availability

### Booking Management

- View bookings
- Confirm bookings
- Reject bookings
- Update booking status

### Dashboard

- View booking statistics
- View revenue
- View room statistics
- Monitor hotel performance

---

## 👨‍💻 Admin

Administrators manage the entire MEGO platform.

### User Management

- View users
- Search users
- Manage users
- Lock / unlock accounts
- Manage roles

### Partner Management

- View partners
- Approve partner registration
- Reject partner registration
- Manage partner accounts

### Hotel Management

- View hotels
- Approve hotels
- Reject hotels
- Manage hotels
- Hide hotels

### System Management

- Manage hotel categories
- Manage facilities
- Manage bookings
- Manage reviews
- View system statistics

---

# 🛠️ Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | User interface |
| TypeScript | Static typing |
| Vite | Development and build tool |
| Material UI | UI components |
| Emotion | MUI styling engine |
| React Router | Client-side routing |
| Redux Toolkit | Global state management |
| React Redux | Redux integration |
| Axios | HTTP requests |
| Formik | Form management |
| Yup | Form validation |
| React Toastify | Notifications |
| AOS | Animations |
| Recharts | Data visualization |
| Lucide React | Icons |
| React Icons | Icon library |

---

# 📁 Project Structure

The project follows a **role-based modular architecture**.

```text
mego-frontend/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── auth/
│   │   ├── footer/
│   │   └── header/
│   │
│   ├── hooks/
│   │
│   ├── modules/
│   │   │
│   │   ├── admin/
│   │   │   ├── components/
│   │   │   └── pages/
│   │   │       └── AdminHome.tsx
│   │   │
│   │   ├── customer/
│   │   │   ├── components/
│   │   │   └── pages/
│   │   │       └── CustomerHome.tsx
│   │   │
│   │   ├── guest/
│   │   │   ├── components/
│   │   │   └── pages/
│   │   │       └── GuestHome.tsx
│   │   │
│   │   └── partner/
│   │       ├── components/
│   │       └── pages/
│   │           └── PartnerHome.tsx
│   │
│   ├── routers/
│   │   ├── AdminRoutes.tsx
│   │   ├── AppRoutes.tsx
│   │   ├── CustomerRoutes.tsx
│   │   ├── GuestRoutes.tsx
│   │   ├── PartnerRoutes.tsx
│   │   ├── ProtectedRoutes.tsx
│   │   └── ScrollToTop.tsx
│   │
│   ├── stores/
│   │   └── store.ts
│   │
│   ├── themes/
│   │   └── CustomTheme.ts
│   │
│   ├── utils/
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md