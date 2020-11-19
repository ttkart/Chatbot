 'use strict';
 // Connecting the chatbot to weather API using AWS Lambda
  const axios = require("axios"); 

  // requiring a dependency called axios. This particular library allows us to send api request
  // to our open weather api and get the weather for a particular city. 
  
  module.exports.getWeather = async (event) => {
    const city = event.currentIntent.slots["City"];
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=888bd2fb63f53c32a5cde4ae2f11b5f7";
  
    try {
      const response = await axios.get(url);
      const data = response.data;
  
      const answer = "The temperature is " + data.main.temp + "C and Humidity is " + data.main.humidity + "% and " + data.weather[0].description + " is expected.";
      
      // Required structure for AWS LEX can understand! 
      return {
        "sessionAttributes": {},

        // dialogAction the type is Close that means it doesnt expect any response from user. 
        "dialogAction": {
          "type": "Close",
          "fulfillmentState": "Fulfilled",

        // Sending the message and the answer shown to the user in content. 
          "message": {
            "contentType": "PlainText",
            "content": answer
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
}; 
