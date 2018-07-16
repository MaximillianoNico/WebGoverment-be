const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const session = require('express-session');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(session({
    secret: "MY_SECRET"
}));


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/auth/session' ,(req,res)=>{
    // res.send({
    //     "Usermail":req.session.email
    // })
    res.send({"uid :":`${req.session.email}`})
    console.log("UID Session : "+req.session.email);
})

router.post('/auth/login', (req,res)=>{

    let email = req.body.email;
    let pass = req.body.password;
    // res.send(JSON.stringify(data));
    // console.log(pass);
    
    if(email === "max@gmail.com"&&pass === "1234"){
        req.session.email=email;
        console.log(req.body.email);
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
