const express = require('express')
const app = express()
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views','./views');
app.set('view engine' , 'ejs');



app.get('/', function(req, res){
    res.render('Home')
})

app.listen(3000);
