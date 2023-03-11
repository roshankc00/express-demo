import express from 'express'
const app=express()
import web from './routes/web.js'
import {join} from 'path'
const port=3000
app.set('view engine','ejs')
app.get(express.static(join(process.cwd(),'public')))
app.use('/',web)
app.listen(port,()=>{
    console.log(`iam learning at http://localhost${port}`)
})
