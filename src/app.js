const path = require('path')
const express = require('express')

const app = express()
const publcDirectoryPath =path.join(__dirname, '../public')

app.use(express.static(publcDirectoryPath))

app.get('/weather',(req, res)=>{
    res.send([{
        forecast: ''
    }, {
        location:''
    }])
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})