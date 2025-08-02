# QUIZZIES

An elegant, browser-based quiz application that challenges users with multiple-choice questions, tracks their performance in real-time, and displays intuitive feedback and scores. Designed for responsiveness, ease of use, and reusability — it's perfect for educational purposes, mock tests, or learning platforms.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Description

The Interactive Quiz App is a dynamic frontend application that allows users to:
- Select topics
- Answer timed questions
- Track their score and progress
- View a carousel of reviews/testimonials

The project is built entirely using HTML, CSS, and JavaScript, and uses a questions.json file as the data source.

## Features

- Topic-based quiz selection
- Countdown timer for each question
- Real-time score calculation
- Display of total questions attempted and correct answers
- Results summary screen
- Review/testimonial section with horizontal scrolling
- Drag and smooth navigation for review cards
- Fully responsive design
- Mock login/signup modal interface

## Tech Stack

- HTML5 - Page structure and semantics
- CSS3 - Styling and layout
- JavaScript - Logic and interactivity
- JSON - Quiz data source

## Installation

This app does not require any backend or server setup. It's entirely static.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```

2. Open the app:
   - Simply open `index.html` in your browser.
   - Or use Live Server in VS Code for best experience.

## Usage

1. Launch the homepage
2. Click "Start Learning" or "Signup"
3. Select a quiz topic (e.g., HTML, CSS, JavaScript)
4. Answer the timed questions one by one
5. View your score at the end
6. Scroll down to see what others say in the Review section

## Folder Structure

```
quiz-app/
├── css/
│   └── styles.css
├── js/

│   └── script.js
├── questions.json
├── index.html
├── README.md
└── screenshots/
```

## Screenshots
<img width="1900" height="988" alt="Screenshot 2025-08-02 203748" src="https://github.com/user-attachments/assets/11c82499-cc5b-48b9-82f0-f2158ed4c7e1" />
<img width="1900" height="988" alt="Screenshot 2025-08-02 203748" src="https://github.com/user-attachments/assets/d83cd9ed-8c60-4019-bda2-b2e69632033e" />

### Homepage
![Homepage](path/to/screenshot-home.png)

### Topic Selection
![Topic Selection](path/to/screenshot-topics.png)

### Quiz Interface
![Quiz Interface](path/to/screenshot-quiz.png)

### Results Page
![Results Page](path/to/screenshot-results.png)

### Review Section
![Review Section](path/to/screenshot-reviews.png)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/yourFeature`
3. Commit your changes: `git commit -m "Add your message"`
4. Push to the branch: `git push origin feature/yourFeature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgements

- OpenAI's ChatGPT — for logic and code structuring help
- RandomUser API — used for testimonial avatars
- Netlify — for deployment

## Live Demo

[Add your Netlify or GitHub Pages live link here](https://your-live-link.netlify.app)
