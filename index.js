const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

const news = require('./api/news');
const event = require('./api/event');
const admin = require('./api/administrator/admin');

app.use(admin);
app.use(news);
app.use(event);
// app.use((req,res,next)=>{

//     console.log(req.session);

// })

app.use(cors());
app.use(session({
    secret: "MY_SECRET"
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8081, (req,res)=>{

    console.log('running server');

})