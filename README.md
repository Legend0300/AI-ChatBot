# Chat Interface React App

![Chat Interface React App](chat-interface-screenshot.png)

## Overview

The Chat Interface React App is a powerful application that enables users to engage in conversations with a chatbot. It leverages React, Axios, and React Transition Group to provide a seamless user experience. The app sends user messages to an API endpoint, retrieves responses from the chatbot, and displays them in real-time. Additionally, it offers features such as speech synthesis and muting functionality.

## Requirements

Before running the Chat Interface React App, ensure that you have the following prerequisites:

- Node.js installed on your machine
- API URL for the chatbot endpoint

## Usage

To run the Chat Interface React App, follow these steps:

1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Install the required dependencies by running the following command:

   ```bash
   npm install
   ```

4. Open the `ChatInterface.js` file and replace the `API_URL` constant with the URL of your chatbot API.
5. Start the development server by running the following command:

   ```bash
   npm start
   ```

6. Open your web browser and visit `http://localhost:3000` to experience the Chat Interface React App.

## Features

### Messaging

- Users can enter messages in the input field and send them by clicking the "Send" button.
- The app communicates with the chatbot API to obtain responses, which are then displayed in real-time.
- User messages appear on the left side, while chatbot responses are shown on the right side of the chat container.

### Speech Synthesis

- The app supports speech synthesis, allowing chatbot responses to be spoken aloud.
- Users can click the "Speak" button next to a chatbot message to hear it using the system's text-to-speech capabilities.
- When available, the app automatically selects a Japanese voice for speech synthesis.

### New Chat

- Users can initiate a new chat session by clicking the "New Chat" button.
- This action clears the chat history and resets the input field.

### Mute Toggle

- Users can toggle the speech synthesis functionality on or off by clicking the "Mute" button.
- When muted, chatbot responses are not spoken aloud.

## Customization

You can customize the appearance and behavior of the Chat Interface React App by modifying the CSS and JavaScript code.

- To modify styling and animations, edit the `ChatInterface.css` file.
- To extend or modify functionality, make changes to the `ChatInterface.js` file.

## Error Handling

In the event of errors during API requests or speech synthesis, the app logs the errors to the console. You can handle these errors according to your specific requirements, such as displaying error messages to the user.

## Acknowledgments

The Chat Interface React App was developed using React, Axios, and React Transition Group.
