# 📝 Mini Blog Frontend (Next.js 14 + Tailwind + Redux Toolkit)

This is the frontend for the **Mini Blog Post Manager** — a full-stack application built to manage blog posts using a custom admin panel. It fetches public blog data and allows admin users to create, edit, and delete their own posts.

---

## 🚀 Tech Stack Used

| Technology        | Description                            |
|------------------|----------------------------------------|
| **Next.js 14+**   | React Framework with App Router        |
| **Redux Toolkit** | State management for admin operations  |
| **Tailwind CSS**  | Utility-first CSS framework for styling |
| **REST API**      | Connects to backend (Express + LowDB)  |

---

## 🔥 Features

- 🌐 Public Blog Feed from external API
- 🔐 Admin Dashboard with:
  - Create / Read / Update / Delete blog posts
  - Posts tied to specific admin via `admin-id`
- 🔄 Live update of UI after post operations
- 📱 Fully responsive layout with Tailwind
- 🎯 Clean UX with loading states and error handling

---

## 📁 Folder Structure (Important Files)

mini-blog-frontend/
├── app/ # Next.js App Router structure
│ ├── page.tsx # Homepage
│ ├── admin/page.tsx # Admin dashboard
│ ├── posts/[id]/page.tsx# Post detail page
│ ├── layout.tsx # Root layout with global styling
│ └── globals.css # Tailwind global styles
├── components/ # Reusable UI components
├── redux/ # Redux Toolkit slices and store
├── public/ # Static assets
├── tailwind.config.ts # TailwindCSS config
├── postcss.config.js # PostCSS config
├── package.json # Project metadata and scripts
└── README.md # This file


---

## 🧑‍💻 How to Run Locally

## First clone the mini-blog-backend using

### Step 1: clone backend on your local machine
```bash
git clone https://github.com/kudrat07/mini-blog-backend.git
```

## Step 2: Install dependencies using
```bash
npm install
```
## Step 3: Run the backend
```bash
npm start
```

!!! Make Sure the backend is running on PORT No. 5000

## Now frontend

### ✅ Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/mini-blog-frontend.git
cd mini-blog-frontend
```

### ✅ Step 2: Install Dependencies
```bash
npm install
```

###✅ Step 3: Run the Development Server
```bash
npm run dev
```