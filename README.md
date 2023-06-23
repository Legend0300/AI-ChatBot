Chat Interface React App
This is a Chat Interface React application that allows users to have conversations with a chatbot. The app sends user messages to an API endpoint and displays the responses from the chatbot in real-time. It also provides features such as speech synthesis and muting functionality.

Requirements
To run the Chat Interface React App, you need to have the following:

Node.js installed on your machine
API URL for the chatbot endpoint
Usage
Follow the steps below to run the Chat Interface React App:

Clone the repository or download the source code.

Open a terminal and navigate to the project directory.

Install the dependencies by running the following command:

bash
Copy code
npm install
Open the ChatInterface.js file and replace the API_URL constant with your chatbot API URL.

Start the development server by running the following command:

bash
Copy code
npm start
Open your web browser and visit http://localhost:3000 to see the Chat Interface React App in action.

Features
Messaging
Users can type messages in the input field and send them by clicking the "Send" button.
The app sends the user's message to the chatbot API and displays the bot's response in real-time.
User messages are displayed on the left side, and bot messages are displayed on the right side of the chat container.
Speech Synthesis
The app supports speech synthesis, allowing the bot's responses to be spoken out loud.
Users can click the "Speak" button next to a bot's message to have it spoken using the system's text-to-speech capabilities.
The app automatically selects a Japanese voice for speech synthesis if available.
New Chat
Users can start a new chat session by clicking the "New Chat" button.
This clears the chat history and resets the input field.
Mute Toggle
Users can mute or unmute the speech synthesis functionality by clicking the "Mute" button.
When muted, the bot's responses are not spoken out loud.
Customization
You can customize the appearance and behavior of the Chat Interface React App by modifying the CSS and JavaScript code.

To change the styling and animations, modify the ChatInterface.css file.
To add or modify functionality, edit the ChatInterface.js file.
Error Handling
In case of any errors during the API request or speech synthesis, the app logs the error to the console. You can handle these errors as per your requirements, such as displaying an error message to the user.

Acknowledgements
The Chat Interface React App was created using React, Axios, and React Transition Group.
