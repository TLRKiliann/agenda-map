const express = require('express');
const app = express();
const mysql = require('mysql');

const cors = require('cors');
const dotenv = require('dotenv');

//const routeLogin = require('./routes/Login');
//const routeSignUp = require('./routes/SignUp');

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

app.get('/api/notes', (request, response) => {
  db.query('SELECT * from MEMBERPARKNOTRIGHT', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  }) 
});

app.post('/api/notes', (request, response) => {
  const id = request.body.id;
  const date = request.body.date;
  const hour = request.body.hour;
  const location = request.body.location;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const phone = request.body.phone;
  const email = request.body.email;
  const notice = request.body.notice;

  db.query('INSERT INTO NEWNAMETABLE (id, date,\
    hour, location, firstName, lastName, phone,\
    email, notice) VALUES (?,?,?,?,?,?)',
    [id, date, hour, location, firstName, lastName,
    phone, email,notice], (err, result) => {
      if (err) {
        console.log(err, result)
      }
      else {
        response.send("Values inserted !")
      }
    })
});

app.put('/api/notes/:id', (request, response) => {
  const id = request.body.id;
  const date = request.body.date;
  const hour = request.body.hour;
  const location = request.body.location;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const phone = request.body.phone;
  const email = request.body.email;
  const notice = request.body.notice;

  db.query('UPDATE NEWNAMETABLE SET date=?, hour=?, location=?,\
    firstName=?, lastName=?, phone=?, email=?, notice=?, WHERE order_id=?',
    [date, hour, location, firstName, lastName, phone, email, notice, order_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete('/api/notes/:order_id', (request, response) => {
  const order_id = request.params.order_id;

  db.query('DELETE FROM NEWNAMETABLE WHERE order_id=?', order_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
});

//app.use('/login', routeLogin);
//app.use('/signup', routeSignUp);

const PORT = 4002;
app.listen(PORT, () => console.log(`[+] Server is running on port ${PORT} !`));
