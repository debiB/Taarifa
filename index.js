const {getLearningPath, getResources} = require('./ai_services/ai_service');


const topic = "jwt authentication";
const time = "days";
getLearningPath(topic, time)
    .then((result)=>{
        console.log(result)
        
    })
    .catch((error)=>{
        console.log(error)
    });
  
const mongoose = require('mongoose');
const Topic = require('./models/Topic'); // Import the Topic model

mongoose.connect("mongodb+srv://admin:0000@cluster0.dmy5n6n.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");

   
    const dummyTopics = [
      {
        topicid: 1,
        topicname: 'Topic 1',
        // username: 'user1', // Assuming you have a User with the username 'user1'
      },
      {
        topicid: 2,
        topicname: 'Topic 2',
        // username: 'user2', // Assuming you have a User with the username 'user2'
      },
      // Add more dummy data as needed
    ];

    // Insert the dummy data into the database
    Topic.insertMany(dummyTopics)
      .then((result) => {
        console.log('Dummy data added to the database:', result);
      })
      .catch((error) => {
        console.error('Error adding dummy data:', error);
      });

    // You can continue setting up your Express routes and starting the server here
  })
  .catch((err) => {
    console.error("MongoDB connection error: " + err.message);
  });

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT))
