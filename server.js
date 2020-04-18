const express = require('express')
const app = express()

const hbs = require('hbs');

//Helpers
require('./hbs/helpers')

//Configurar puerto 
const port = process.env.PORT ||  3000;

app.use( express.static( __dirname + '/public' ) );
//express hbs
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');

 
app.get('/', (req, res) => {
  //res.send('Hello World')
    

    res.render('home', {
        nombre: 'Luis',
    });
});

app.get('/about', (req, res) => {
    //res.send('Hello World')
      
  
      res.render('about', {
          nombre: 'Luis',
      });
  });
 
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port }`);
});