let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {nombre: 'Anonimo'});
});

app.post('/resultado', function(req, res) {
    var nombre = req.body.nombre;
    var genero = req.body.gender;
    //res.send('<h1>Hello</h1> '+nombre);
    //hola
    res.render('form', {nom: nombre, genere:genero});
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));