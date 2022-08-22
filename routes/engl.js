const{ Router } = require('express')
const Word = require('../models/Word')
const router = Router()

router.get('/', (req, res)=>{
    res.render('index',{
        title:"Головна сторінка"
    })
})
router.get('/create', (req, res)=>{
    res.render('create',{
        title:"Введи слова"
    })
})

router.get('/home', async(req, res)=>{
 
     const words = await Word.aggregate([{ $sample: { size: 1 } }])    //  .find({}).lean()
   
    if (Object.keys(words[0]).length <= 3) {
        res.redirect('/home')
    }
    
    
    res.render('home',{
        title:"Вивчай англійську",
        right: true,
        words
        
    })
   
})

router.post('/create', async(req, res)=>{
    const wordk = new Word({
        Ukwords: req.body.inuk.toString(),
        Uawords: req.body.inua.toString(),
       
    })
   
    await wordk.save()
    res.redirect('/home')
})

var review
router.post('/verify',async (req, res)=>{
    review = req.body.reply
    const wordl = await Word.find({Ukwords: review}).lean()
    if (wordl.length) {
        
        res.redirect('/home')
    }else{
        
    }
//     const words = new Word({
//         Ukwords: req.body.reply,
       
//     })
   
//    await words.save()
//     res.redirect('/home')
})
module.exports = router