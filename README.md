# typing_text_animation

`typing_text_animation` is a JavaScript library that enables you to create animated typing text effects. Easily transform an array of strings into a dynamic and engaging typing animation, perfect for enhancing the user experience in your web applications or projects.

## Features

- Create smooth and realistic typing animations for arrays of strings.
- Customize the typing speed to match the desired pace of your animation.
- Seamless integration with various JavaScript projects and web applications.

## Installation

## Usage

```js
// Import the animate function
import { animate } from 'your-animation-library';

// Get the element where you want to display the animated text
const animatedElement = document.getElementById('your-element-id');

// Define the lines of text you want to animate
const lines = [
    'Hello, World!',
    'This is an example of animated text.',
    'You can customize the animation options.'
];

// Optional: Customize animation options
const animationOptions = {
    startDelay: 1000,      // Delay before animation starts (in milliseconds)
    lineDelay: 2000,       // Delay between lines (in milliseconds)
    letterDelay: 50        // Delay between letters (in milliseconds)
};

// Start the animation
const animationController = animate(animatedElement, lines, animationOptions);

// Optional: Stop the animation after a certain duration
setTimeout(() => {
    animationController.abort();
}, 10000);  // Stop the animation after 10 seconds
```
