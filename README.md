# Recipe Finder App

A modern, responsive web application built with **Next.js** and **Tailwind CSS**, allowing users to search for recipes using the Spoonacular API with filters like query, cuisine type, and max preparation time.

## Features

-  Search recipes by name, cuisine, or preparation time
-  Server-side rendering (SSR) for recipe results
-  Recipe detail pages with ingredients and info
-  Fully responsive UI styled with Tailwind CSS
-  Data loading managed with React's `Suspense`
-  Clean project structure with ESLint + Prettier
-  Environment config via `.env.local`

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/recipe-finder-app.git
cd recipe-finder-app
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Add API Key
Create a .env file at the root with your Spoonacular API key:

```ini
SPOONACULAR_API_KEY=8e50d2fd410f487eac269f9a18ed1bca
```

### 4. Run the Application
```bash
npm run dev
```
Go to http://localhost:3000</br>
</br>
Available Scripts</br>
npm run dev – Start development server</br>
npm run build – Build for production</br>
npm run start – Start the production server</br>
npm run lint – Run ESLint</br>
npm run format – Format with Prettier</br>

