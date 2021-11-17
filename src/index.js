const express = require('express');
const path = require('path')
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

const publicpath = path.join(__dirname, '../public')
const viewpath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views',viewpath );
hbs.registerPartials(partialPath)

app.use(express.static(publicpath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'xxxx',
    content: 'yyy'
  })
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('*', (req, res) => {
  res.send('404 not found')
})

app.listen(PORT, () => {
  console.log('server starting')
})