const express = require('express')      // package.json에 저장한 express 모듈을 가져옴 
const app = express()                   // funciton을 이용해서 새로은 express 생성
const port = 5000                       // 포트

const mongoose = require('mongoose')
mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://suzy:1234@boilerplate.mktxagd.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {            // 루트 디렉토리에 Hellow World!가 출력되게 보내줌
  res.send('Hello World! 안녕하세여 ~123')
})

app.listen(port, () => {                //설정한 포트로 실행
  console.log(`Example app listening on port ${port}`)
})