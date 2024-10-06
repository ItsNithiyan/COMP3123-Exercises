const express = require('express');
const fs = require('fs');
const app = express();
const router = express.Router();

// Middleware to parse JSON requests
app.use(express.json());

// Serve the home.html file
router.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

// Serve the profile.html file
router.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/profile.html');
});

// Serve the login.html file
router.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Serve user profile data as JSON
router.get('/api/profile', (req, res) => {
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Could not read user.json file' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Handle user login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Could not read user.json file' });
    } else {
      const users = JSON.parse(data);
      const user = users.find((user) => user.username === username);

      if (!user) {
        res.json({ status: false, message: 'User Name is invalid' });
      } else if (user.password !== password) {
        res.json({ status: false, message: 'Password is invalid' });
      } else {
        res.json({ status: true, message: 'User Is valid' });
      }
    }
  });
});

// Handle user logout
router.get('/logout/:username', (req, res) => {
  const username = req.params.username;
  res.send(`<b>${username} successfully logged out.</b>`);
});

// Global error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});

// Use the router for the application
app.use('/', router);

// Start the web server
app.listen(process.env.PORT || 8089, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 8089));
});
