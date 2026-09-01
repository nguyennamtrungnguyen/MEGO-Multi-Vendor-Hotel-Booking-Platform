# 🏨 MEGO – Multi-Vendor Hotel Booking Platform

<p align="center">
  <strong>A modern multi-vendor hotel booking platform built with React, TypeScript and Vite.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</p>

---

## 📖 Introduction

**MEGO** is a multi-vendor hotel booking platform that allows customers to discover hotels, search for available rooms, make online reservations, manage bookings, and interact with hotel partners.

The platform is designed around multiple user roles, providing dedicated workflows for:

- 👤 Guest
- 🧑‍💼 Customer
- 🏨 Partner
- 👨‍💻 Administrator

The frontend is developed using modern React technologies with a focus on scalability, reusable components, maintainability, and responsive UI.

---

# ✨ Features

## 👤 Guest

Users who have not authenticated can:

- View homepage
- Browse hotels
- Search hotels
- Filter hotels
- View hotel details
- View available rooms
- View hotel facilities
- View hotel reviews
- Register an account
- Login to the platform

---

## 🧑‍💼 Customer

Authenticated customers can:

### 🔐 Account

- View profile
- Update personal information
- Change password
- Manage account information

### 🏨 Hotel & Room

- Search hotels
- Filter hotels
- View hotel details
- View room details
- Check room availability
- View hotel facilities
- View hotel reviews

### 📅 Booking

- Select check-in date
- Select check-out date
- Select number of guests
- Select room
- Create booking
- Confirm booking
- View booking history
- Track booking status
- Cancel booking

### ⭐ Review

- Review hotels
- Rate hotel experience
- View submitted reviews

---

## 🏨 Partner

Partners can manage their own hotels and booking operations.

### 🏢 Hotel Management

- Register hotel
- Update hotel information
- Manage hotel facilities
- Upload hotel images
- Manage hotel information

### 🛏️ Room Management

- Add rooms
- Update rooms
- Delete rooms
- Manage room types
- Manage room prices
- Manage room availability

### 📅 Booking Management

- View bookings
- Confirm bookings
- Reject bookings
- Update booking status
- Manage guest reservations

### 📊 Dashboard

- View revenue
- View booking statistics
- View room statistics
- Monitor hotel performance

---

## 👨‍💻 Administrator

Administrators manage the entire platform.

### 👥 User Management

- View users
- Search users
- Update user information
- Lock / unlock accounts
- Manage user roles

### 🏨 Partner Management

- View partners
- Approve partner registrations
- Reject partner registrations
- Manage partner accounts

### 🏢 Hotel Management

- View hotels
- Approve hotels
- Reject hotels
- Hide hotels
- Manage hotel information

### 📂 System Management

- Manage hotel categories
- Manage facilities
- Manage booking data
- Manage reviews
- View system statistics

---

# 🛠️ Technology Stack

## Frontend

| Technology     | Purpose                     |
| -------------- | --------------------------- |
| React          | UI development              |
| TypeScript     | Type safety                 |
| Vite           | Development & build tool    |
| Tailwind CSS   | Styling & responsive layout |
| shadcn/ui      | Reusable UI components      |
| React Router   | Application routing         |
| Redux Toolkit  | Global state management     |
| React Redux    | Redux integration           |
| Axios          | HTTP requests               |
| Formik         | Form management             |
| Yup            | Form validation             |
| React Toastify | Notifications               |
| AOS            | Animations                  |
| Recharts       | Data visualization          |
| Lucide React   | Icons                       |

---

# 📁 Project Structure

```text
mego-frontend/
│
├── public/
│
├── src/
│   │
│   ├── modules/
│   │   ├── admin/
│   │   ├── customer/
│   │   ├── guest/
│   │   └── partner/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── common/
│   │   ├── hotel/
│   │   ├── room/
│   │   └── booking/
│   │
│   ├── layouts/
│   │   ├── AdminLayout.tsx
│   │   ├── CustomerLayout.tsx
│   │   └── PartnerLayout.tsx
│   │
│   ├── routers/
│   │   ├── AppRouter.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── ScrollToTop.tsx
│   │
│   ├── redux/
│   │   ├── store.ts
│   │   └── slices/
│   │
│   ├── services/
│   │   ├── api.ts
│   │   ├── authApi.ts
│   │   ├── hotelApi.ts
│   │   ├── roomApi.ts
│   │   └── bookingApi.ts
│   │
│   ├── hooks/
│   │
│   ├── types/
│   │
│   ├── utils/
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── components.json
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```
