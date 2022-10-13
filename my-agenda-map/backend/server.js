const express = require('express');
const app = express();
//const realmariadb = require('mariadb/callback');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');

//const routeLogin = require('./routes/Login');
//const routeSignUp = require('./routes/SignUp');

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.json());

//app.use(cors({credentials: true, origin: `http://localhost:3000`}));
app.use(cors());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

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
      console.log("[+] DB connected !")
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
  const editName = request.body.editName;

  db.query('INSERT INTO `meetingpoint` (id, datee, hour, location,\
    firstname, lastname, phone, email, notice, editNum, editName) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [id, datee, hour, location, firstname, lastname,
    phone, email, notice, editNum, editName], (err, result) => {
      if (err) {
        console.log(err, result)
      }
      else {
        response.send("Values inserted !")
      }
    })
});

app.put('/api/update/num:id', (request, response) => {
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
  const editName = request.body.editName;
  console.log(editName)

  db.query("UPDATE `meetingpoint` SET (datee = ?, hour = ?, location = ?, firstname = ?, lastname = ?,\
    phone = ?, email = ?, notice = ?, editNum = ?, editName = ?, WHERE id = ?)",
    [datee, hour, location, firstname, lastname, phone, email, notice, editNum, editName, id], (err) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log("response", response)
      response.send("Values inserted !")
    }
  })
});

app.put('/api/update/pnum:id', (request, response) => {
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
  const editName = request.body.editName;
  console.log(id, datee, hour, location, firstname, lastname, phone, email, notice, editNum)

  db.query("update meetingpoint set datee = ?, hour = ?, location = ?, firstname = ?, lastname = ?,\
    phone = ?, email = ?, notice = ?, editNum = ?, editName = ?, where id = ?",
    [datee, hour, location, firstname, lastname, phone, email, notice, editNum, editName, id], (err) => {
    if (err) {
      console.log(err)
    }
    else {
      response.send("Values inserted !")
    }
  })
});

app.put('/api/update/name:id', (request, response) => {
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
  const editName = request.body.editName;

  db.query("update meetingpoint set datee = ?, hour = ?, location = ?, firstname = ?, lastname = ?,\
    phone = ?, email = ?, notice = ?, editNum = ?, editName = ?, where id = ?",
    [datee, hour, location, firstname, lastname, phone, email, notice, editNum, editName, id], (err) => {
    if (err) {
      console.log(err)
    }
    else {
      response.send("Values inserted !")
    }
  })
});

app.put('/api/update/pname:id', (request, response) => {
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
  const editName = request.body.editName;

  db.query("update meetingpoint set datee = ?, hour = ?, location = ?, firstname = ?, lastname = ?,\
    phone = ?, email = ?, notice = ?, editNum = ?, editName = ?, where id = ?",
    [datee, hour, location, firstname, lastname, phone, email, notice, editNum, editName, id], (err) => {
    if (err) {
      console.log(err)
    }
    else {
      response.send("Values inserted !")
    }
  })
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
  const editName = request.body.editName;

  db.query('UPDATE `meetingpoint` SET `datee` = ?, `hour` = ?, `location` = ?,\
    `firstname` = ?, `lastname` = ?, `phone` = ?, `email` = ?, `notice` = ?,\
    `editNum` = ?, `editName` = ?, WHERE id = ?',
    [datee, hour, location, firstname, lastname, phone, email, notice, editNum, editName, id],
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

app.get('/api/getAllPhone', (request, response) => {
  db.query('SELECT * from `phonecontact`', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      response.send(result)
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

  db.query('insert into phonecontact (id, firstname, lastname,\
  phone, email, location) values (?,?,?,?,?,?)',
  [id, firstname, lastname, phone, email, location], (err, result) => {
    if (err) {
      console.log(err, result)
    }
    else {
      response.send("Values inserted !")
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

app.listen(PORT, () => console.log(`[+] Server is running on port ${PORT} !`));
