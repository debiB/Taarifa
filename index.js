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
  