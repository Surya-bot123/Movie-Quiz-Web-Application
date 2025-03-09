# Movie Quiz App

Welcome to the Movie Quiz App! 🎬 This is a fun and interactive web-based quiz game where users can test their knowledge on popular movie trivia.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Appendix](#Appendix)
- [Screenshots](#Screenshots)

## Overview

The Movie Quiz App allows users to take a quiz on movie-related questions. Users can enter their name and roll number, start the quiz, answer questions, and view their final score with detailed results after completing the quiz. The quiz includes a range of movie-related questions from directors to famous movie characters.

## Features

- **User Information Section**: Enter your name and roll number to start the quiz.
- **Interactive Quiz Section**: Multiple-choice questions with real-time feedback.
- **Score Display**: View the total score after completing the quiz.
- **Detailed Results**: See which questions were answered correctly and incorrectly, along with the correct answers.
- **Responsive Design**: The app is mobile-friendly and adjusts to different screen sizes.
- **Restart Option**: Restart the quiz to try again after viewing your results.

## Installation

To run this quiz app locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/movie-quiz-app.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd movie-quiz-app
    ```

3. **Open the `index.html` file in your browser**:
    Simply double-click `index.html` or open it using a browser's `File -> Open` option.

No server setup or additional installation is needed, as it's a static HTML, CSS, and JavaScript project.

## Usage

1. Open the app in your browser.
2. Enter your name and roll number in the "Enter Your Details" section and click on the "Start Quiz" button.
3. Answer each question by clicking the appropriate answer button.
4. After completing all the questions, your final score will be displayed, along with the correct and incorrect answers.
5. You can restart the quiz by clicking the "Restart Quiz" button.

## Technologies
The Movie Quiz App was built using the following technologies:

- **HTML5**: Used for the structure of the web page.
- **CSS3**: Styling and layout for the app, with a responsive design.
- **JavaScript**: Handles the quiz logic, including question display, answer checking, and score calculation.
## Appendix
### Troubleshooting
1. **The quiz isn't displaying correctly on my device:**
* **possible Issue:** The app uses a background image and relies on a responsive design.
* **Solution:** Ensure your browser window is wide enough or try resizing it. If the background image isn't loading, check the image URL in the ```style.css``` file or replace it with another valid image URL.
2. **Questions or answers are not loading:**
* **Possible Issue:** If JavaScript isn't running correctly, it could be due to missing files or script issues.
* **Solution:** Open the browser’s developer tools (press ```F12``` or ```Ctrl+Shift+I```) and check the console for any errors. Ensure the ```script.js``` file is properly linked in your index.html.
3. **The app freezes when clicking the "Next" button:**
* **Possible Issue:** This could be related to the state reset or event handling for the "Next" button.
* **Solution:** Check if the event listener on the "Next" button is set up correctly and that the ```showNextQuestion``` function is being triggered.
4. **The background image is not appearing:**
* **Possible Issue:** The image URL in the CSS file might be broken or the file might not be accessible.
* **Solution:** Check if the image URL is correct, or replace it with another image URL.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure that your changes don't break the existing functionality and that they are well-tested.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request







## Screenshots

![Image](https://github.com/user-attachments/assets/321f3295-82d9-4064-87b4-8b035cda22cf)
![Image](https://github.com/user-attachments/assets/862c0052-2b5e-4fb6-8217-dac3dd610b73)
![Image](https://github.com/user-attachments/assets/d72a492c-5f0d-46d0-8804-ffbe7b724e3a)
![Image](https://github.com/user-attachments/assets/5ef881a4-4bad-45c7-b82f-6baf7e113991)
![Image](https://github.com/user-attachments/assets/b38749be-f9c5-4f0f-8b9b-5d82891c2917)
![Image](https://github.com/user-attachments/assets/862c0052-2b5e-4fb6-8217-dac3dd610b73)

