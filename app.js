const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4500;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Node.js의 native Promise 사용
//mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
/* mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e)); */
app.get('/', (req, res) => {
    res.send('hello node!');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));