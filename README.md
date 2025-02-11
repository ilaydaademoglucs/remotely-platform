# **Remotely (Remote Work Platform)** 
## Live Demo 🚀
Deployed on Vercel: https://remotely-platform.vercel.app/

## About the Project

Remotely is a web application designed for remote job searchers and employers. Users can authenticate with GitHub, search for remote jobs, view job details, and post new job opportunities with ease.

## Features
- **GitHub Authentication** – Allows users to sign in securely using your GitHub account implemented via Auth.js.
- **Search for Remote Jobs** – Find job according to you preferences.
- **Post a Remote Job** – Users can create and share remote job listings including title, category, description, images and markdown content.
- **View Job Page** – Users can on a job post to see all details before applying.
- **User Profile Page** – Profile page to see user details and previously posted jobs.
- **Popular Jobs Section** – Selected job postings recommended by the admins.
- **Live View Tracking** – Track the number of views on each job post in real time. (Implemented via Live Content API from Sanity's Content API)

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | Used both server-side rendering (SSR) and client-side rendering (CSR) capabilities of Next.js for performance. Also, Next.js 15's latest feature Experimental PPR is used for rendering views dynamically and combine them with static components|
| **React 19** | A component-based library that enables modular UI development |
| **Typescript** | Programming language used in this project |
| **Tailwind CSS** | A utility-first CSS framework that enhances styling flexibility. |
| **Shadcn** | A UI component library that provides accessible, pre-built UI components for rapid development. |
| **Sanity** |  A headless CMS that enables content management, allowing integration of job postings with real-time updates. |
| **Zod** | A TypeScript-first schema validation library. |
| **Sentry** | A real-time error monitoring and performance tracking tool. |


---

## How to Run Locally

```sh
**1️⃣ Clone the Repository**
git clone https://github.com/ilaydaademoglucs/remotely-platform.git
cd remotely-platform

**2️⃣ Install Dependencies**
npm install

**3️⃣ Set Up Environment Variables
Create a new file named .env.local in the root of your project. Replace them with credentials.

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

** 4️⃣ Run the Development Server**
npm run dev
```

##  License

This project is open-source and available under the MIT License.
