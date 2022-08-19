const{ Router } = require('express')
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
router.get('/home', (req, res)=>{
    res.render('home',{
        title:"Вивчай англійську"
    })
})

module.exports = router