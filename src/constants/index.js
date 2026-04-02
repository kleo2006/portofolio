import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

import tomatoImg from "../assets/tomato.png";
import cinemaImg from "../assets/cinema.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
  {
    title: "Freelance Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Full-Stack Web Application",
    company_name: "Tomato – Food Delivery App",
    icon: tomatoImg,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Built a full-stack food delivery app with React.js/Vite frontend and Node.js/Express backend.",
      "Implemented JWT authentication, cart management with Context API, and Stripe payment integration.",
      "Deployed frontend on Cloudflare Pages and backend on Render with MongoDB Atlas as database.",
      "Added mobile responsiveness, hamburger menu, search functionality, and a FoodDetail page.",
    ],
  },
  {
    title: "Frontend Web Application",
    company_name: "Movie App",
    icon: cinemaImg,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Developed a movie discovery app using React.js and a third-party REST API.",
      "Implemented dynamic search and filtering to browse movies by genre and rating.",
      "Built reusable components and managed application state with React hooks.",
      "Focused on responsive design and clean UI for a smooth user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tomato – Food Delivery App",
    description:
      "Full-stack food delivery web application with user authentication, cart management, and Stripe payment integration. Built with React.js/Vite on the frontend and Node.js/Express + MongoDB on the backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: tomatoImg,
    source_code_link: "https://github.com/kleo2006/food-delivery",
    live_demo_link: "https://food-delivery-cte.pages.dev", 
  },


  {
    name: "Movie App",
    description:
      "A React-based movie discovery app that lets users browse, search, and explore movies using a third-party API. Features a clean UI with dynamic filtering and detailed movie pages. Each movie has trailer video to watch, description about the film and also the cast",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cinemaImg,
    source_code_link: "https://github.com/kleo2006", // ← përditëso me repo-n saktë
    live_demo_link: "https://kleo2006.github.io/movie-website", // ← shto URL nëse është deployed, ose lëre bosh
  },
];

export { services, technologies, experiences, testimonials, projects };