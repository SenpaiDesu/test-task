const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

const _ = require('lodash');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/regions', (req, res) => {
    fs.readFile( 'data/regions.json', 'utf-8', function(e, content){
        res.send(JSON.parse(content).regions);
    });
});

app.get('/api/properties/:id', (req, res) => {
    fs.readFile( 'data/properties.json', 'utf-8', function(e, content){
        let result = [];
        JSON.parse(content).objects.map((item, i) => {
            if (item.region == req.params.id) result.push(item);
        });
        res.send(result);
    });
})


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
