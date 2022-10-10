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

db.connect((err) => {
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
      response.send(result)
    }
  }) 
});

app.get('/api/getAllPhone', (request, response) => {
  db.query('SELECT * from phonecontact', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      response.send(result)
    }
  }) 
});

app.post('/api/create', (request, response) => {
  const id = request.body.id;
  const date = request.body.date;
  const hour = request.body.hour;
  const location = request.body.location;
  const firstname = request.body.firstname;
  const lastname = request.body.lastname;
  const phone = request.body.phone;
  const email = request.body.email;
  const notice = request.body.notice;
  const editNum = request.body.editNum;
  const editSwitchFirstName = request.body.editSwitchFirstName;

  db.query('INSERT INTO meetingpoint (id, date, hour, location,\
    firstname, lastname, phone,\
    email, notice, editNum, editSwitchFirstName) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [id, date, hour, location, firstname, lastname,
    phone, email, notice, editNum, editSwitchFirstName], (err, result) => {
      if (err) {
        console.log(err, result)
      }
      else {
        response.send("Values inserted !")
      }
    })
});
//For PhoneContact
app.post('/api/createPhone', (request, response) => {
  const id = request.body.id;
  const firstname = request.body.firstname;
  console.log(firstname)
  const lastname = request.body.lastname;
  console.log(lastname)
  const phone = request.body.phone;
  const email = request.body.email;
  const location = request.body.location;


  db.query('INSERT INTO phonecontact (id, firstname, lastname, phone, email, location) VALUES (?,?,?,?,?,?)',
    [id, firstname, lastname, phone, email, location], (err, result) => {
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
  const firstname = request.body.firstname;
  const lastname = request.body.lastname;
  const phone = request.body.phone;
  const email = request.body.email;
  const notice = request.body.notice;
  const editNum = request.body.editNum;
  const editSwitchFirstName = request.body.editSwitchFirstName;

  db.query('UPDATE meetingpoint SET date=?, hour=?, location=?,\
    firstname=?, lastname=?, phone=?, email=?, notice=?,\
    editNum=?, editSwitchFirstName=?, WHERE id=?',
    [date, hour, location, firstname, lastname, phone, email,
    notice, editNum, editSwitchFirstName, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        response.send(result);
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
      response.send(result);
    }
  })
});

//app.use('/login', routeLogin);
//app.use('/signup', routeSignUp);

app.listen(PORT, () => console.log(`[+] Server is running on port ${PORT} !`));
