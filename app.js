var express = require("express"); 
var app = express(); 
var path = require("path"); 
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "/static/");
app.use(express.static(publicPath));


app.get('/',function(req,res){ 
  res.sendFile(path.join(__dirname,'/index.html')); 
  //__dirname : It will resolve to your project folder. 
}); 
app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
  });