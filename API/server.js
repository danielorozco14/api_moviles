
//CONECTA CONTROLADORES,BASE DE DATOS,MODELOS CREADOS,BODY PARSER Y RUTAS CREADAS

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose=require('mongoose'),
  Task=require('./api/models/todoListModel'),
  bodyParser=require('body-parser');

  //INSTANCE CONNECTION URL
//mongoose.Promise=global.Promise;

//mongodb+srv://pdm-2019:<pdm2019>@pdm-cluster-nxntx.mongodb.net/test?retryWrites=true
//mongoose.connect('mongodb://localhost/Tododb');
//mongoose.connect('mongodb+srv://pdm-2019:<pdm2019>@pdm-cluster-nxntx.mongodb.net/test?retryWrites=true')


var user = process.env.USERDB || "pdm-2019";
var password= process.env.PASSDB || "pdm2019";
var server = process.env.SERVER || "pdm-cluster-nxntx.mongodb.net/test?retryWrites=true'";
var db= process.env.DATABASE || "coins-db";
var string = `mongodb+srv://${user}:${password}@${server}/${db}`;

//INSTANCE CONNECTION URL
mongoose.Promise=global.Promise;

mongoose.connect(string,{
  useNewUrlParser:true,
  useFindAndModify:false,
  useCreateIndex:true
}).then(()=>console.log('Conectado a MongoDB'))
.catch((e)=>console.error('No se pudo conectar a MONGODB',e));




app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//IMPORTANDO LAS RUTAS
var routes= require('./api/routes/todoListRoutes');
routes(app);



app.listen(port);

console.log('RESTful API servidor iniciado en puerto: ' + port);