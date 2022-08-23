const{ Router } = require('express')
const Word = require('../models/Word')
const router = Router()

router.get('/', async(req, res)=>{
    const todo = await Word.find({}).lean()
    res.render('index',{
        title:"Головна сторінка",
        todo
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
    res.redirect('/')
})


router.post('/verify',async (req, res)=>{
    const review = req.body.reply
    const wordl = await Word.find({Ukwords: review}).lean()
    if (wordl.length) {
        
        res.redirect('/home')
    }else{
        
        res.render('errors',{
            title: "Помилка"
        })
       
    }

//     const words = new Word({
//         Ukwords: req.body.reply,
       
//     })
   
//    await words.save()
//     res.redirect('/home')
})

router.post('/delete', async(req, res)=>{
    await Word.deleteOne()
   
    
    res.redirect('/')
})
module.exports = router