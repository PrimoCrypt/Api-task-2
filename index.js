var http = require('http');

var app = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"slackUsername": 'LeoNesi', "backend": true, "age": 21, "bio": 'I am a full-stack Developer hoping to expand skills and impact on the society'}))
});

app.listen(3000);
console.log("Listening to port at 3000")