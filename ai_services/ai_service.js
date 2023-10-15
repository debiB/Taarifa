const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
const API_KEY = "AIzaSyDAc_zplfd7kStNq8ShUznYgLwGUdcWWeg";

const MODEL_NAME = "models/text-bison-001";
const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

// const CHAT_MODEL_NAME = "models/chat-bison-001";
// const chat_client = new DiscussServiceClient({
//     authClient: new GoogleAuth().fromAPIKey(API_KEY),
//   });

const getResources = (topic, learner_level, resource_type)=>{
    var message = `Get me perfectly working ${resource_type} resource links to learn ${topic} for a ${learner_level} level. `;
    if (resource_type == "video")
    {
        message = message.concat(`Send me courses that are not from youtube.`);
    }
    
    return new Promise((resolve, reject)=>
        client
            .generateText({
                model: MODEL_NAME,
                prompt: {
                text: message,
                },
            })
            .then((result) => {
                result = {'output' : (result[0].candidates[0].output)}            
                resolve(result)
            })
            .catch((error)=>{
                result = {'output' : "api error"}           
                reject(result)
            })
    );
}
const getLearningPath = (topic, time)=>{
    const message = "I want to learn about machine learning. I have some basic understanding of programming and mathematics. My preferred learning style is hands-on and interactive. I'd like the learning path to be divided into weekly milestones. For each milestone, please suggest articles, interactive online courses, and practical coding exercises that I can use to learn. I want each element of the array to be json that includes the milestone number, resources to use in that milestone, and what to accomplish. Send me an array of the milestones and the minestones only!!!not strings or even a single character out of the list bracket you're sending.";
    return new Promise((resolve, reject)=>
        client
            .generateText({
                model: MODEL_NAME,
                prompt: {
                text: message,
                },
            })
            .then((result) => {
                result = {'output' : (result[0].candidates[0].output)}            
                resolve(result)
            })
            .catch((error)=>{
                result = {'output' : error.message}           
                reject(result)
            })
    );
}
module.exports = {getLearningPath, getResources};