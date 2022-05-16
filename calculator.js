const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyparser.urlencoded({extended:true}))

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  res.sendFile (__dirname + '/Bmi calculator.html', '/styles.css')
})

app.post('/', (req, res) => {

var num1 =Number(req.body.num1);
var num2 =Number(req.body.num2);
var result = num1 + num2;
console.log(result);

  res.send('The result of the calculation is ' +  result)
})


app.get('/bmicalculator',  (req, res) => {
  res.sendFile (__dirname + '/Bmi calculator.html')
})

app.post('/bmicalculator', (req, res) => {
  var weight = (req.body.weight);
  var Height = (req.body.Height);
  var Result =Math.floor  (weight / (Height * Height));
  res.send('The result of the calculation is' + Result )
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
