const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Dipanjan Mahata')
})

app.listen(3000, ()=>{
    console.log("Started server");
}
)
