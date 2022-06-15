const express = require('express');
const PORT = 8083;

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','ejs');


//
// DATA
//
const users = {
  'nally': {'username': 'nally', password: 'qwerty'},
  'monkey': {'username': 'monkey', password: 'fuzz'},
  'turtle': {'username': 'turtle', password: 'donut'},
};

//
// Middleware
//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//
// Routes
//

// home
app.get('/', (req,res) => {
  res.render('homepage');
});

// registration form
app.get('/register', (req,res) => {
  res.render('register');
});

// registration end-point
app.post('/register', (req,res) => {
  console.log(`req.body:`,req.body);

  const newUsername = req.body.username;
  const newPassword = req.body.password;

  users[newUsername] = {
    username: newUsername,
    password: newPassword
  };

  console.log('users:',users);

  res.redirect('/');
});

// login form
app.get('/login', (req,res) => {
  res.render('login');
});

// login end-point
app.post('/login', (req,res) => {
  console.log('req.body',req.body);

  const candidateUsername = req.body.username;
  const candidatePassword = req.body.password;

  if ( candidatePassword === users[candidateUsername].password ){
    console.log('successfully logged in');
    res.cookie("user", candidateUsername);
  } else {
    console.log('NOT logged in');
  }
  res.redirect('/');
});

// profile
app.get('/profile', (req, res) => {
  console.log('req.cookies:', req.cookies);
  const username = req.cookies.user;

  if (username){
    const secret = users[username].password;
    const templateVars = {
      secret: secret
    };
    res.render('profile', templateVars); // secrets  
  } else {
    res.redirect('/login');
  }

});

app.get('/logout', (req,res) => {
  res.clearCookie("user");
  res.redirect('/');
});

// 404
app.get('*', (req,res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});