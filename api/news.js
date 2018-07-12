const express = require('express');
const router = express.Router();


const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/api/news' , (req,res)=>{

    data={
        id:'123',
        title:'news',
        content:'a',
        date:'11'
    }
    res.send(JSON.stringify(data));

})

router.post('/api/news/add' , (req,res)=>{

    data={
        id:'',
        title:'',
        content:'',
        date:''
    }
    res.send(JSON.stringify(data));

})

router.put('/api/news/:id' , (req,res)=>{

    data={
        id:req.param.id,
        title:'',
        content:'',
        date:''
    }
    res.send(JSON.stringify(data));

})

router.delete('api/news/:id' , (req,res)=>{



})

module.exports = router;