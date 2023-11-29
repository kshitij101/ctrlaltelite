// var spawn = require('child_process').spawn;

// function getMessageClass(userId){
//   return new Promise(function(resolve , reject){
//     var process = spawn('python',["../data/script.py", 
//                             "Kshitij", 
//                             "Narvekar"] ); 
  
//     process.stdout.on('data', function(data) { 
//         resolve(data.toString())
//         // res.send(data.toString());
//     })
//   })
// }

// module.exports = {getMessageClass};

const asyncHandler = require("express-async-handler");
var spawn = require('child_process').spawn;


const classifyMessage = asyncHandler(async (req, res) => {
  try {
    const process = spawn('python',["C:/Users/ACER/OneDrive/Documents/CtrlAltEliteProject/backend/script.py", 
                            "Kshitij"] );
    
    // python.stdout.on('data', (data) => {
    //   console.log('pattern: ', data.toString());
    // });
    
    // python.stderr.on('data', (data) => {
    //   console.error('err: ', data.toString());
    // });
    
    // python.on('error', (error) => {
    //   console.error('error: ', error.message);
    // });
    
    // python.on('close', (code) => {
    //   console.log('child process exited with code ', code);
    // });
    // console.log(process.stdout)
    process.stdout.on('data', function(data) { 
      // console.log(typeof data.toString())
      res.json({class:data.toString()});
    })
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = {classifyMessage};
