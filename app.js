const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res) => {
  res.render('beers');
  console.log(Beers)
});


// app.get('/beers', async (req, res) => {
//       try {
//       const beers = await punkAPI.getBeers(25);
//        res.render('beers', {beer});

//        console.log (beers);
//        } catch (err) {
//             res.send(err);
//        }
//      });




app.listen(5000, () => console.log('🏃‍ on port 3000'));
