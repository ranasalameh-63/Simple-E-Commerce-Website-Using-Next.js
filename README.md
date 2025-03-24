# Simple-E-Commerce-Website-Using-Next.js

🛒 Simple E-Commerce Website using Next.js

📌 Task Overview

This task is a simple e-commerce website built using Next.js (App Router).

It includes a home page, product listing, product details, an about page, and a custom 404 page, with different data-fetching strategies (SSR, SSG, ISR).



🎯 Features

✅ Home Page (/) – Displays a welcome message and navigation links.

✅ Products Page (/products) – Lists all products fetched from an API using SSR.

✅ Product Details (/products/[id]) – Displays product details dynamically using SSG + ISR.

✅ "Add to Cart" Button – A simple button for each product (cart functionality not included).

✅ Custom 404 Page (/not-found.js) – Shows a custom error message for non-existent routes.

✅ About Us Page (/about) – Uses the Next.js <Image /> component and Tailwind CSS for styling.

✅ SEO Optimization – Uses <Head> for better SEO (title, meta tags).

✅ Tailwind CSS Styling – Responsive and modern UI using Tailwind.

🚀 Data Fetching Strategies Used

🔹 Server-Side Rendering (SSR) → Used in /products/page.js for fetching fresh product data on each request.

🔹 Static Site Generation (SSG) + Incremental Static Regeneration (ISR) → Used in /products/[id]/page.js for product details with automatic updates every 60 seconds.

🔹 Server Components → Used by default for rendering pages that don't require interactivity.

🔹 Client Components (when necessary) → Used for interactivity such as buttons.

