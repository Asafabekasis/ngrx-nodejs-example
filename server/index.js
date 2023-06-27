const express = require('express');
const cors = require('cors');
const { json } = require('express');
const app = express();
app.use(cors())
app.use(express.json({limit: '500000000mb'}));
app.use(express.urlencoded({limit: '500000000mb'})); 

const fs = require('fs');

var server = app.listen(process.env.PORT || 1000 , function () {
  console.log('Server is running..');
  });

//===========================================================================================================================================================================================================================================================>
var products = [
    {id:11, productName:'shampoo',color:'white',active:false,section:'clean',price:10.99},
    {id:12, productName:'tomatos',color:'red',active:true,section:'vegtables',price:8.00},
    {id:13, productName:'onions',color:'white',active:false,section:'vegtables',price:6.90},
    {id:14, productName:'ground beef',color:'red',active:true,section:'meat',price:54.00},
    {id:15, productName:'blue cheese',color:'blue',active:false,section:'deri',price:12.50},
    {id:16, productName:'diet pepsi',color:'blue',active:false,section:'drinks',price:6.99},
    {id:17, productName:'24 water pack',color:'',active:false,section:'drinks',price:7.00},
    {id:18, productName:'hand soap',color:'pink',active:false,section:'clean',price:4.99},
    {id:19, productName:'garlic',color:'white',active:false,section:'vegtables',price:4.99},
    {id:20, productName:'carrot',color:'orange',active:false,section:'vegtables',price:4.99},
    {id:121-1, productName:'fanta',color:'orange',active:false,section:'drinks',price:6.99},
    {id:122-1, productName:'sprite',color:'green',active:false,section:'drinks',price:6.99},
    {id:155-4, productName:'green bell',color:'green',active:false,section:'vegtables',price:8.00},
]

app.get('/getbasicproducts', function (req, res) {
    res.send(products)
})  

//===========================================================================================================================================================================================================================================================>

var customers = [
    {id:14231, customerName:'moshe',color:'blue',active:false},
    {id:16462, customerName:'yithak cohen',color:'red',active:true},
    {id:14923, customerName:'yaakov',color:'white',active:false},
    {id:14423, customerName:'dani senderson',color:'red',active:true},
    {id:15465, customerName:'avi avraami',color:'blue',active:false},
    {id:10655, customerName:'gavriel dos santos',color:'blue',active:false,},
    {id:16907, customerName:'aaron',color:'',active:false,},
    {id:63818, customerName:'asaf abekasis',color:'pink',active:false},
    {id:18669, customerName:'yossef abu',color:'white',active:false},
    {id:88620, customerName:'toto tamuz',color:'orange',active:false},
    {id:19926, customerName:'leonal ronaldo',color:'orange',active:false},
    {id:12886, customerName:'christiano-messi-dos-santos',color:'green',active:false},
    {id:15665-4, customerName:'davis silva',color:'green',active:false},
]

app.get('/getbasiccustomers', function (req, res) {
    res.send(customers)
})  
//===========================================================================================================================================================================================================================================================>

app.post('/writenewany', function (req, res) {
    console.log(req.body);
   let body = req.body.body;
   let target = req.body.target;
   target === 'customers'? customers.push(body):products.push(body);
   let final = target === 'customers'? customers:products;
    fs.writeFile (target+".json", JSON.stringify(final), function(err) {
        if (err) throw err;
        res.send('complete');
        }
    );
})    

//===========================================================================================================================================================================================================================================================>

app.get('/getnewany/:type', function (req, res) {
    console.log(req.params.type);
fs.readFile('./'+req.params.type+'.json', 'utf8', (error, data) => {
    if(error){
       console.log(error);
       return;
    }
    res.send(JSON.parse(data));
    })
}) 

//===========================================================================================================================================================================================================================================================>
