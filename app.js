const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API',
  });
});

app.post('/api/posts', verifyToken, (req, res) => {
  res.json({
    message: 'Post created...'
  })
})

app.post('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: 'Steve',
    email: 'steve@money.com'
  }
  jwt.sign({user}, 'secretkey', (err, token) => {
    res.json({
      // token: token
      token
    })
  });
});

// Format of Token
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // get the auth header
  const bearerHeader = req.headers['authorization'];
  // check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {

  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => {
  console.log('>>> Server started on port 5000');
})
