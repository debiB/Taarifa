const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Topic = require('./models/Topic'); 
const Milestone = require('./models/Milestone'); 
const TopicController = require('./controllers/TopicController');
const MilestoneController = require('./controllers/MilestoneController');

// express.use(expressjson());


const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT));
app.use(express.json());
app.use("/topic", TopicController);
app.use("/milestone", MilestoneController);

// const {getLearningPath, getResources} = require('./ai_services/ai_service');
// const time = "days";
// getLearningPath(topic, time)
//     .then((result)=>{
//         console.log(result)
        
//     })
//     .catch((error)=>{
//         console.log(error)
//     });
  

mongoose.connect("mongodb+srv://admin:0000@cluster0.dmy5n6n.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");  
  
  })
  .catch((err) => {
    console.error("MongoDB connection error: " + err.message);
  });



