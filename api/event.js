const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/api/event' , (req,res)=>{

    data={
        id:'',
        title:'',
        content:'',
        date:''
    }
    res.send(JSON.stringify(data));

})

router.post('/api/event/add' , (req,res)=>{

    console.log(req.body);

})

router.put('/api/event/:id' , (req,res)=>{

    data={
        id:req.param.id,
        title:'',
        content:'',
        date:''
    }
    res.send(JSON.stringify(data));

})

router.delete('api/event/:id' , (req,res)=>{


    
})

module.exports = router;