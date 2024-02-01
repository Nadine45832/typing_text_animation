# typing_text_animation

`typing_text_animation` is a JavaScript library that enables you to create animated typing text effects. Easily transform an array of strings into a dynamic and engaging typing animation, perfect for enhancing the user experience in your web applications or projects.

## Features

- Create smooth and realistic typing animations for arrays of strings.
- Customize the typing speed to match the desired pace of your animation.
- Seamless integration with various JavaScript projects and web applications.

## Installation

## Usage

```
import { animate } from 'typing-text-animation';

// Get the element where you want to display the typing animation
const targetElement = document.getElementById('typing-animation-container');

// Define an array of strings to animate
const textLines = [
  'Hello, World!',
  'Welcome to typing_text_animation',
  'Let\'s make text come alive!'
];

// Optional customization options
const options = {
  startDelay: 1000,
  lineDelay: 2000,
  letterDelay: 50,
  cursor: document.getElementById('cursor-element'), // Optional cursor element
};

// Start the typing animation
const animationController = animate(targetElement, textLines, options);

// To stop the animation (for example, on component unmount or user interaction)
// Call the `abort` method on the returned controller
// animationController.abort();

```
