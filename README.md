# LoveGrid

![love-grid-logo](https://github.com/user-attachments/assets/27cf367a-f9d3-4157-9ff1-db664f9b0961)

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white) ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-4.x-000000?logo=nextauth&logoColor=white) ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?logo=redux&logoColor=white) ![Mantine](https://img.shields.io/badge/Mantine-7.x-339AF0?logo=mantine&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white) ![Cloudinary](https://img.shields.io/badge/Cloudinary-1.x-3448C5?logo=cloudinary&logoColor=white) ![Plaiceholder](https://img.shields.io/badge/Plaiceholder-3.x-000000) ![ApexCharts](https://img.shields.io/badge/ApexCharts-3.x-000000?logo=apexcharts&logoColor=white)

![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?logo=express&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-8.x-880000?logo=mongoose&logoColor=white) ![Helmet](https://img.shields.io/badge/Helmet-7.x-000000) ![CORS](https://img.shields.io/badge/CORS-2.x-000000) ![Docker](https://img.shields.io/badge/Docker-24.x-2496ED?logo=docker&logoColor=white)

LoveGrid is a full-stack donation platform built with Next.js (frontend) and Express.js (backend), designed to help people discover, support, and manage fundraising campaigns. The app includes role-based access control, campaign creation with image upload, donations tracking, and an admin dashboard for actionable campaign insights.

## Important Links

| Link name       | Link                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| Live site       | [love-grid-client.vercel.app](https://love-grid-client.vercel.app)                                          |
| Backend repo    | [love-grid-server](https://github.com/friyad/LoveGrid-server)                                               |
| Backend API     | [love-grid-server-backend API](https://love-grid-server-backend.onrender.com/api/v1)                        |
| Docker Hub repo | [friyad/love-grid-server-backend](https://hub.docker.com/repository/docker/friyad/love-grid-server-backend) |

## Features (Fullstack)

- Authentication and authorization
  - Email/password signup and login
  - Google OAuth sign-in
  - JWT-based session handling via `NextAuth`
  - JWT token verification
- Role-based access
  - Admin-only dashboard routes
  - User-only profile and donation routes
  - Middleware for user and admin verification
- Campaign management
  - Create and update campaigns
  - Browse campaigns with pagination
  - View campaign details and support specific donations
- Admin dashboard
  - Campaign statistics and charts
  - User and campaign management UI
- Image upload workflow
  - Upload campaign photos via a server API route
  - Cloudinary image storage
  - Blur placeholders generated with `plaiceholder`
- UI/UX
  - Mantine UI components
  - Tailwind CSS utilities
  - Responsive layout and navigation
- Data validation
  - Request validation using Yup schemas
- Database
  - MongoDB with Mongoose ODM
  - Separate collections for running and successful campaigns

## Tech Stack

| Frontend                                                                                                                                                                                          | Backend                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Next.js 14 (App Router)<br>- TypeScript<br>- NextAuth.js<br>- Redux Toolkit + RTK Query<br>- Mantine UI<br>- Tailwind CSS<br>- Cloudinary<br>- Plaiceholder<br>- ApexCharts<br>- React Dropzone | - Express.js<br>- TypeScript<br>- MongoDB<br>- Mongoose<br>- Docker<br>- bcrypt<br>- jsonwebtoken<br>- Yup<br>- NextAuth.js (for token verification)<br>- Helmet<br>- CORS<br>- Cookie-parser |

## Screenshots

| Page              | Screenshot                                                                                                                          |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Home              | <img width="1920" height="947" alt="image" src="https://github.com/user-attachments/assets/0a58f2f3-75a0-4506-928b-2633fcce3dd4" /> |
| Explore Campaigns | <img width="1920" height="940" alt="image" src="https://github.com/user-attachments/assets/ad62ed00-03a6-49b9-9d4b-44fda3235edb" /> |
| Campaign Details  | <img width="1920" height="945" alt="image" src="https://github.com/user-attachments/assets/35a421ce-00df-4f4d-b758-9087fc2300d0" /> |
| Dashboard         | <img width="1920" height="943" alt="image" src="https://github.com/user-attachments/assets/edfe380f-b635-4916-a1df-80173c096fb9" /> |
| My Donations      | <img width="1920" height="943" alt="image" src="https://github.com/user-attachments/assets/de83cd17-067d-4bcb-97fb-bbbedbeb87b1" /> |
| Campaign CRUD     | <img width="1920" height="944" alt="image" src="https://github.com/user-attachments/assets/6fc41024-70db-446e-9dd1-47ffebd26540" /> |
| Authentication    | <img width="1920" height="943" alt="image" src="https://github.com/user-attachments/assets/c0bb9505-e349-4114-ac2e-8e8578dfc3db" /> |

# Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env.local` file and add the following values:

| Variable                         | Required | Default | Description                                   |
| -------------------------------- | -------- | ------- | --------------------------------------------- |
| NEXT_PUBLIC_GOOGLE_CLIENT_ID     | Yes      | -       | Google OAuth client ID for authentication     |
| NEXT_PUBLIC_GOOGLE_CLIENT_SECRET | Yes      | -       | Google OAuth client secret                    |
| NEXTAUTH_SECRET                  | Yes      | -       | Secret key for NextAuth.js session encryption |
| CLOUDINARY_CLOUD_NAME            | Yes      | -       | Cloudinary cloud name for image uploads       |
| CLOUDINARY_UPLOAD_PRESET         | Yes      | -       | Cloudinary upload preset for image uploads    |

> Note: This frontend project connects to an external REST backend API at `https://love-grid-server-backend.onrender.com/api/v1`.

## Architecture & Business Logic

- `src/app/layout.tsx`
  - Sets up global providers: Mantine, Redux, notifications, top loader, and layout structure.
  - Retrieves the current session with `getServerSession(authOptions)` and passes it to the navbar.
- `src/utils/authOptions.ts`
  - Configures NextAuth providers for credentials and Google OAuth.
  - Uses a custom OAuth signup flow to register or log in users through the backend.
- `src/middleware.ts`
  - Protects routes via JWT tokens from NextAuth.
  - Restricts `/dashboard/*` to admin users and `/user/*` to authenticated users.
  - Prevents authenticated users from accessing `/login` or `/signup`.
- `src/redux/api/apiSlice.ts`
  - Base RTK Query configuration for backend communication.
  - Uses `https://love-grid-server-backend.onrender.com/api/v1` as the main backend endpoint.
- `src/redux/auth/authAPI.ts`
  - Defines auth-related mutations for signing up and logging in.
- `src/redux/campaign/campaignAPI.ts`
  - Handles campaign data fetching, creation, and caching via RTK Query.
- `src/app/api/upload-photo/route.ts`
  - Uploads campaign photos to Cloudinary.
  - Generates image blur placeholders with `plaiceholder` and returns image metadata.
- `src/redux/store.ts`
  - Combines campaign state and API slices.
  - Adds RTK Query middleware for state synchronization.

## Project Structure (excerpt)

- `src/app`
  - `(auth)/login/page.tsx`
  - `(auth)/signup/page.tsx`
  - `(dashboard)/dashboard/page.tsx`
  - `(dashboard)/user/profile/page.tsx`
  - `campaigns/page.tsx`
  - `campaigns/[donationID]/page.tsx`
  - `api/auth/[...nextauth]/route.ts`
  - `api/upload-photo/route.ts`
- `src/assets`
  - `brand/`
  - `images/`
    - `elements/`
- `src/components`
  - `Navbar/Navbar.tsx`
  - `Navbar/ProfileMenu.tsx`
  - `Dashboard/CreateCampaignForm.tsx`
  - `Dashboard/CampaignPhotoUpload.tsx`
  - `Dashboard/RunningCampaings.tsx`
  - `Dashboard/MakeAdminModal.tsx`
  - `home/Hero.tsx`
  - `home/Featured.tsx`
- `src/hooks`
- `src/lib`
  - `utils.ts`
- `src/redux`
  - `store.ts`
  - `api/apiSlice.ts`
  - `auth/authAPI.ts`
  - `campaign/campaignAPI.ts`
  - `uploads/uploadAPI.ts`
- `src/utils`
  - `authOptions.ts`
  - `mantineTheme.ts`
  - `globalUtils.ts`
  - `errorResponses.ts`
- `src/validations`
  - `campaignValidations.tsx`
  - `userValidation.tsx`
- `src/types`
  - `authTypes.ts`
  - `campaignTypes.ts`

## Notes

- This repository contains the frontend application built with Next.js.
- The backend is located in the `love-grid-server` directory and is built with Express.js.
- The app relies on the backend API for user authentication and campaign management.
- Image upload is handled by a server-side route that proxies files to Cloudinary and returns a blur preview.

## 🙏 Thank You

Thank you for checking out this project!  
If you find it helpful or inspiring, consider giving it a ⭐ on GitHub. It really motivates me to keep improving and sharing more projects.
