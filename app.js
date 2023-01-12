const express = require('express')
const app = express()










app.get('/',(req,res)=>
{
    res.send('hello u r at the right place u fkin bitch')
})







app.listen('3000',()=>
{
 console.log('listening to port 3000')
})