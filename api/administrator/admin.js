const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());

router.use(session({
    secret: "MY_SECRET",
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge : 1000*60*60*24
    }
}));


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


postNews =(post) =>{
    // ... post data to mysql
}

readAllNews = (idNews) =>{
    // .... Find Data Mysql where id equals idNews and return if data is true
}

editNewswithIdNews = (idNews, data)=>{
    // .... Edit data mysql where idNews is true
}
deleteNewsByIdNews = (idNews)=>{
    // .... Delete data mysql where idnews is true
}

authWithEmailAndPassword =(email,pass)=>{
    // .... Sign In With Email and Password
}

chechAuth = (req,res,next)=>{

    if(!req.session.email){
    
        console.log('You are not authorized to view this page');
        res.json({status:false});

    }else{

        next();
        
    }
}

// Router Express JS

router.get('/auth/session',chechAuth ,(req,res,next)=>{

    res.json({
            "uid :":`${req.session.email}`
        })

    console.log("path '/auth/session'\nUID Session : "+session.email+"\n");
})

router.post('/auth/login', (req,res,next)=>{

    let email = req.body.email;
    let pass = req.body.password;
    // res.send(JSON.stringify(data));
    // console.log(pass);
    
    if(email === "max@gmail.com"&&pass === "1234"){
        req.session.email=email;
        req.session.password=pass;
        console.log(`path '/auth/login'\nEmail Session : ${req.session.email}\nPassword Session : ${req.session.password}\n`);
        
        let user ={
            email:req.body.email,
            pass:req.body.password
        }
        // console.log(req.session.email);
        res.send({"status":"Success","uid":`${req.session.email}`})
    }
    else{
        res.send("Error = "+404);
    }


})

module.exports = router;
