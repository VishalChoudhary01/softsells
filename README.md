# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
## Project Overview

This project is a React application bootstrapped with Vite, designed to provide a fast and modern development experience. The layout follows a clean and responsive design, focusing on usability and performance.

## Design Layout

- **Responsive UI:** The layout adapts to different screen sizes for optimal viewing on desktops, tablets, and mobile devices.
- **Component-Based Structure:** The UI is organized into reusable React components for maintainability and scalability.
- **Modern Styling:** Utilizes CSS modules and/or styled-components for modular and maintainable styles.

## Time Taken

- **Design & Color Planning:** 5 hrs
- **Development:** 1 days
- **Testing + Deployment:** 1 day
- **Total:** Approximately 2 days

## Technologies Used

React – JavaScript library for building user interfaces
Vite – Fast frontend build tool
ESLint – Linting utility for JavaScript and JSX
Babel or SWC – JavaScript/JSX transpilers (depending on plugin)
Node.js – JavaScript runtime environment
npm or yarn – Package managers
redux toolkit – state management  for React (used as Theme switcher)
react-icons – Popular icon library for React
Framer Motion – Animation library for React (used as motion/react)
## Getting Started

Follow these steps to run the project locally after cloning:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/VishalChoudhary01/softsells.git
    cd softsells
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. **Open your browser:**  
    Visit [http://localhost:5173](http://localhost:5173) to view the application.

## Folder Structure

```
├── public/
├── src/
│   ├── assets/
│   │   └── brands/
│   │       ├── converse-logo3-logo-svgrepo-com.svg
│   │       ├── ethereum-logo-svgrepo-com.svg
│   │       ├── heineken-open-your-world-logo-svgrepo-com.svg
│   │       ├── michelin-7-logo-svgrepo-com.svg
│   │       ├── pko-bank-polski-4-logo-svgrepo-com.svg
│   │       ├── slack-logo-svgrepo-com.svg
│   │       └── logos/
│   │           └── canva.svg
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.jsx
│   │   └── ui/
│   │       ├── Logo.jsx
│   │       └── Toggle/
│   │           └── Toggle.jsx
│   ├── constants/
│   │   └── data.js
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```
