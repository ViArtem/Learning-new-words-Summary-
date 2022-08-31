const{ Router } = require('express')
const Word = require('../models/Word')
const router = Router()

let warr = []
function capitalize(str) {
    let x = "";
    for (i = 0; i < str.length; i++) {
    if (str[i - 1] === " " || i === 0) {
    x += str[i].toUpperCase();
    } else {
    x += str[i];
    }
    }
    return x;
    }

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
router.get('/volume', (req, res)=>{
    res.render('volume')
})

router.get('/home', async(req, res)=>{
 
     const words = await Word.aggregate([{ $sample: { size: 1 } }])    //  .find({}).lean()
     let l = warr.includes(words[0].Ukwords )
     const todoss = await Word.find({}).lean()
     if (todoss.length == warr.length) {
        
        warr.splice(1, warr.length);
    }  
     
    if (Object.keys(words[0]).length <= 3 || l) {
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
        Ukwords: capitalize(req.body.inuk.toString()),
        Uawords: capitalize(req.body.inua.toString()),
       
    })
   
    await wordk.save()
    res.redirect('/create')
})


router.post('/verify',async (req, res)=>{
    const review = capitalize(req.body.reply.toString())
    const wordl = await Word.find({Ukwords: review}).lean()
    const todoss = await Word.find({}).lean()
    let l = warr.includes(review )
    if (todoss.length == warr.length) {
        let delll = warr.length
        warr.splice(1, delll);
    }   
    if (wordl.length && l == false) {
    warr.push(review)
    
    }
   
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
   
    let delt = req.body
   
    let delA = Object.keys(delt);
    await Word.deleteOne({_id: delA[0]})
   
    
    res.redirect('/')
})
module.exports = router