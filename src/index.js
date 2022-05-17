const express = require('express');
var bodyParser = require('body-parser');
const moment = require("moment")

const route = require('./routes/route.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose=require("mongoose")
   mongoose.connect("mongodb+srv://PankajKumar:ByiTM70OjwbN3c2l@cluster0.smhvx.mongodb.net/PankajKumar-Project-3?retryWrites=true&w=majority",
{
    useNewUrlParser : true 
})
.then(  () => console.log("MongoDB is Connected"))
.catch(err => console.log(err))



// middleware 
app.use(
  function(req,res, next){
    let date = moment().format('LLLL')
    let ip = req.ip
    let url= req.url
console.log(date,ip,url) 
 next()
}
)
app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
