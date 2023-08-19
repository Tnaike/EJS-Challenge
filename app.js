import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const homeStartingContent = 'Welcome to our home page';

const app = express();
const port = 3000;

app.set('view engine', ejs);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', { startingContent: homeStartingContent });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
