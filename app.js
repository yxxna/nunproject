let express = require('express');
let app = express();
let server = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, function(){
    console.log('서버가 실행되었습니다.');
});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get('/main', function(req, res){
    res.render('main.ejs');
});

app.get('/ingame-redgreen', function(req, res){
    res.render('ingame-redgreen.ejs');
});

app.get('/info-redgreen', function(req, res){
    res.render('info-redgreen.ejs');
});

app.get('/ingame-blueyellow', function(req, res){
    res.render('ingame-blueyellow.ejs');
});

app.get('/info-blueyellow', function(req, res){
    res.render('info-blueyellow.ejs');
});

app.get('/ingame-visual', function(req, res){
    res.render('ingame-visual.ejs');
});

app.get('/info-visual', function(req, res){
    res.render('info-visual.ejs');
})