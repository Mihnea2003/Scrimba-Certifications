# Scrimba Certifications

This repository contains all the projects I built while following the **Scrimba “Learn React”** course.  
It outlines what I learned, what each project does, and how to run them.

---

## About the Course

The **“Learn React”** course on [Scrimba](https://scrimba.com/learn-react-c0e) is an interactive, project-based training that covers modern React — including hooks, function components, effects, routing, and context.

---

## What I Learned

By completing the course and building the projects, I gained knowledge and experience in:

- Setting up a React environment (with Create React App or other tooling)
- Writing functional components
- Using props to pass data between components
- Managing state via `useState`
- Handling events (`onClick`, `onChange`, etc.)
- Conditionally rendering UI and rendering lists with `.map()`
- Lifting state up to share it between sibling or parent/child components
- Composing components and passing callback functions
- Using `useEffect` to handle side effects (e.g. data fetching, timers)
- Fetching data from APIs (GET, POST, etc.) and handling async operations
- Integrating React Router for multi-page SPA behavior
- Using Context API for global/shared state
- Structuring a React app (folder structure, reusable components)
- Debugging and inspecting with React DevTools
- Following best practices & patterns (clean code, separation of concerns, DRY)

---

## Projects

### Project 1: React Intro / Setup

**What it does:**
- A minimal “Hello World” React app to get the environment running.
- Demonstrates JSX syntax, rendering to the DOM, and basic component structure.

**Concepts practiced:**
- Project setup (npm, CRA, or bundler)
- Basic functional component
- JSX and rendering

---

### Project 2: Simple Components & Props

**What it does:**
- Builds a small UI composed of reusable components (e.g. a Card, Header, Footer).
- Passes data via props (text, images, children) to components.

**Concepts practiced:**
- Component composition
- Prop drilling
- Default props / prop validation (if used)

---

### Project 3: State & Events

**What it does:**
- Creates an interactive UI (e.g. a counter, toggle, or form input reflecting dynamic state).
- Users can click buttons or type and see immediate updates in the UI.

**Concepts practiced:**
- `useState` hook
- Event handlers (`onClick`, `onChange`)
- Two-way binding (input value and state)

---

### Project 4: Conditional Rendering & Lists

**What it does:**
- Renders lists of items (e.g. a list of tasks, users, or data entries).
- Conditionally shows UI (e.g. loading, empty, or error states).

**Concepts practiced:**
- `.map()` to iterate arrays and produce JSX
- Conditional rendering (`&&`, ternary operators)
- Key props on list items
- Handling “no data” or “loading” UI

---

### Project 5: Lifting State Up & Composition

**What it does:**
- Multiple child components that share or coordinate data.
- Parent component holds the state; children receive props and send changes back via callbacks.

**Concepts practiced:**
- Lifting state to a common ancestor
- Passing callback props (e.g. `onChange`, `onSelect`)
- Controlled vs uncontrolled components

---

### Project 6: Side Effects & Data Fetching

**What it does:**
- Fetches data from an external API (e.g. JSONPlaceholder, RandomUser, etc.).
- Displays loading states and handles errors gracefully.
- Updates UI dynamically when data is fetched.

**Concepts practiced:**
- `useEffect` hook and dependencies
- Async/await and Promises
- Cleanup functions (`AbortController`)
- Error handling in UI

---

## How to Run the Projects

```bash
# Clone the repository
git clone https://github.com/yourusername/scrimba-certifications.git

# Navigate into a specific project folder
cd project-1-hello-world

# Install dependencies
npm install

# Run the development server
npm start

# Build for production
npm run build
