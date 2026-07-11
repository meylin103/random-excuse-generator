# Random Excuse Generator

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

A modern web application built with **Vanilla JavaScript** that dynamically generates random excuses through DOM manipulation and event-driven programming.

The project focuses on writing clean, maintainable JavaScript while creating a polished and responsive user interface using modern frontend development practices.

---

## Preview

![Random Excuse Generator](docs/screenshots/home2.jpg)

---

## Features

- Generate unlimited random excuses
- Copy generated excuses to the clipboard
- Responsive user interface
- Dynamic content updates without page reload
- Modern UI with reusable styling
- Clean and maintainable JavaScript code

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Bootstrap 5
- Font Awesome

---

## Project Structure

```text
src/
│
├── assets/
│   └── img/
│       ├── logo.png
│       └── favicon.png
│
├── app.js
├── style.css
└── index.html

docs/
└── screenshots/
    └── home.png
```

---

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/meylin103/random-excuse-generator.git

# Navigate to the project
cd random-excuse-generator

# Install dependencies
npm install

# Start the development server
npm run start
```


## How It Works

Every time the user clicks the **Generate Another Excuse** button, JavaScript randomly selects one value from each of four arrays:

- Who
- Action
- What
- When

The selected values are combined into a complete sentence and rendered dynamically without reloading the page.

---

## Skills Demonstrated

- DOM Manipulation
- Event Handling
- JavaScript Functions
- Array Manipulation
- Bootstrap Integration
- Clipboard API
- Clean Code Principles

---

## Roadmap

- [ ] Add Dark Mode
- [ ] Save favorite excuses
- [ ] Display excuse history
- [ ] Support multiple languages
- [ ] Add custom excuse categories
- [ ] Share excuses directly to social media

---

## Author

**Meilyn Fuentes**

AWS Certified Cloud Practitioner

Full Stack Developer

Cloud & Backend Enthusiast

- GitHub: https://github.com/meylin103
- LinkedIn: https://www.linkedin.com/in/meilynfuentes