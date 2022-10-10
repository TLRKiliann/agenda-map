const express = require('express');
const app = express();
const mysql = require('mysql');

const cors = require('cors');
const dotenv = require('dotenv');

//const routeLogin = require('./routes/Login');
//const routeSignUp = require('./routes/SignUp');

const PORT = 4002;
app.use(express.json());
app.use(cors());

//.env
dotenv.config();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE
});

db.connect( (err) => {
    if (err){
      console.log(err)
    }
    else
    {
      console.log("Database connected!")
    }
});

app.get('/api/getAllMembers', (request, response) => {
  db.query('SELECT * from meetingpoint', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  }) 
});

app.get('/api/getAllPhone', (request, response) => {
  db.query('SELECT * from phonecontact', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  }) 
});

app.post('/api/create', (request, response) => {
  const id = request.body.id;
  const date = request.body.date;
  const hour = request.body.hour;
  const location = request.body.location;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const phone = request.body.phone;
  const email = request.body.email;
  const notice = request.body.notice;

  db.query('INSERT INTO meetingpoint (id, date,\
    hour, location, firstName, lastName, phone,\
    email, notice) VALUES (?,?,?,?,?,?)',
    [id, date, hour, location, firstName, lastName,
    phone, email, notice], (err, result) => {
      if (err) {
        console.log(err, result)
      }
      else {
        response.send("Values inserted !")
      }
    })
});

app.put('/api/update/:id', (request, response) => {
  const id = request.body.id;
  const date = request.body.date;
  const hour = request.body.hour;
  const location = request.body.location;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const phone = request.body.phone;
  const email = request.body.email;
  const notice = request.body.notice;

  db.query('UPDATE meetingpoint SET date=?, hour=?, location=?,\
    firstName=?, lastName=?, phone=?, email=?, notice=?, WHERE id=?',
    [date, hour, location, firstName, lastName, phone, email, notice, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete('/api/delete/:id', (request, response) => {
  const id = request.params.id;

  db.query('DELETE FROM meetingpoint WHERE id=?', id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
});

//app.use('/login', routeLogin);
//app.use('/signup', routeSignUp);

app.listen(PORT, () => console.log(`[+] Server is running on port ${PORT} !`));
