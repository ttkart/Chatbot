 

![](diagram.png)


What it does:
 1. It's a chatbot that can answer any weather related question relating to any region in the world. 
 2. You could ask questions like “what is the weather in london” and the chatbot would return a comprehensive answer regarding the weather in london. “You could  also ask questions like what will the weather be like tomorrow in SFO” and the chatbot would return future predicted weather events as well as past related weather events.

Services I used:
 1. AWS Lex: AI based conversational base made by amazon for building chatbots
 2. AWS Amplify: Deploying the applications and integration
 3. Angular JS: frontend javascript application

How I built it:
 1. Built the chatbot using AWS Lex
 2. Connected the chatbot to the weather API using AWS Lambda 
 3. Created an angular web application and integrated it to the chatbot using AWS Amplify
 4. Overall the chatbot backend was constructed using Lex Functions to answer personalized weather related questions. The API for all information retrieval for a certain query for Lex would send a request to the API and the API return’s information which later lex processes into a proper response to the user query. The frontend was constructed using AngularJS and used the middleware to integrate the frontend and backend. I used AWS Amplify.
 
