const express = require('express');
const app = express();
const mariadb = require('mariadb');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');

//const routeLogin = require('./routes/Login');
//const routeSignUp = require('./routes/SignUp');

const PORT = 4002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.json());

app.use(cors({credentials: true, origin: `http://localhost:3000`}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4002');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//.env
dotenv.config();
//const db = mysql.createConnection({
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE
});

async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query('SELECT * from `meetingpoint`')
    console.log(res);
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}

app.get('/api/getAllMembers', async (request, response) => {
    try {
      const result = await pool.query('SELECT * from `meetingpoint`')
      response.send(result);
    } catch (err) {
        throw err;
    }
});

app.put('/api/update/:id', async (request, response) => {
  const id = request.body.id;
  const datee = request.body.datee;
  const hour = request.body.hour;
  const location = request.body.location;
  const firstname = request.body.firstname;
  const lastname = request.body.lastname;
  const phone = request.body.phone;
  const email = request.body.email;
  const notice = request.body.notice;
  const editNum = request.body.editNum;
  try {
      const result = await pool.query("update meetingpoint set datee = ?, hour = ?, location = ?,\
  firstname = ?, lastname = ?, phone = ?, email = ?, notice = ?, editNum = ?, where id = ?",
  [datee, hour, location, firstname, lastname, phone, email, notice, editNum, id]);
      res.send(result);
  } catch (err) {
      throw err;
  } 
});




/*
db.connect((err) => {
    if (err){
      console.log(err)
    }
    else
    {
      console.log("Database connected !")
    }
});

app.get('/api/getAllMembers', (request, response) => {
  db.query('SELECT * from `meetingpoint`', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      response.send(result)
    }
  }) 
});

app.get('/api/getAllPhone', (request, response) => {
  db.query('SELECT * from `phonecontact`', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      response.send(result)
    }
  }) 
});

app.post('/api/create', (request, response) => {
  const id = request.body.id;
  const datee = request.body.datee;
  const hour = request.body.hour;
  const location = request.body.location;
  const firstname = request.body.firstname;
  const lastname = request.body.lastname;
  const phone = request.body.phone;
  const email = request.body.email;
  const notice = request.body.notice;
  const editNum = request.body.editNum;
  //const editSwitchFirstName = request.body.editSwitchFirstName;

  db.query('INSERT INTO `meetingpoint` (id, datee, hour, location,\
    firstname, lastname, phone, email, notice, editNum) VALUES (?,?,?,?,?,?,?,?,?,?)',
    [id, datee, hour, location, firstname, lastname,
    phone, email, notice, editNum], (err, result) => {
      if (err) {
        console.log(err, result)
      }
      else {
        response.send("Values inserted !")
      }
    })
});

//phonecontact Table
app.post('/api/createPhone', (request, response) => {
  const id = request.body.id;
  const firstname = request.body.firstname;
  const lastname = request.body.lastname;
  const phone = request.body.phone;
  const email = request.body.email;
  const location = request.body.location;

  db.query('INSERT INTO `phonecontact` (id, firstname, lastname,\
    phone, email, location) VALUES (?,?,?,?,?,?)',
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
  //console.log(request.body.editNum)
  const id = request.body.id;
  const datee = request.body.datee;
  const hour = request.body.hour;
  const location = request.body.location;
  const firstname = request.body.firstname;
  const lastname = request.body.lastname;
  const phone = request.body.phone;
  const email = request.body.email;
  const notice = request.body.notice;
  const editNum = request.body.editNum;

  db.query('UPDATE `meetingpoint` SET `datee` = ?, `hour` = ?, `location` = ?,\
    `firstname` = ?, `lastname` = ?, `phone` = ?, `email` = ?, `notice` = ?,\
    `editNum` = ?, WHERE id = ?',
    [datee, hour, location, firstname, lastname, phone, email, notice, editNum, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result)
        response.send(result);
      }
    }
  );
});

app.delete('/api/delete/:id', (request, response) => {
  const id = request.params.id;

  db.query('DELETE FROM `meetingpoint` WHERE `id` = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  })
});

app.delete('/api/deletePhone/:id', (request, response) => {
  const id = request.params.id;

  db.query('DELETE FROM `phonecontact` WHERE `id` = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  })
});

//app.use('/login', routeLogin);
//app.use('/signup', routeSignUp);
*/
app.listen(PORT, () => console.log(`[+] Server is running on port ${PORT} !`));
