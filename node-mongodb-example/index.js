const connection = require('./model');
const express = require('express');
const app = express();
const path = require('path');
const expressHandlerbars = require('express-handlebars');
const bodyParser = require('body-parser');

const courseController = require('./controller/courses')

app.use(bodyParser.urlencoded({extended:true}));

app.set('views',path.join(__dirname,"/views/"))

app.engine("hbs",expressHandlerbars({
   extname:"hbs",
   defaultLayout:"mainlayout",
   layoutsDir: __dirname + "/views/layouts"
}))


app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index",{})
})

app.use("/course",courseController);

app.listen("3000",()=>{

})