// Create web server with express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Use body-parser middleware
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong!');
      return;
    }
    res.send(data);
  });
});

// Create new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong!');
      return;
    }
    const comments = JSON.parse(data);
    comments.push(newComment);
    fs.writeFile('./data.json', JSON.stringify(comments), (err) => {
      if (err) {
        res.status(500).send('Something went wrong!');
        return;
      }
      res.send('Comment added!');
    });
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});