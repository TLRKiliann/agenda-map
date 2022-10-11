# BACKEND AGENDA MAP

I use json-server in mode development with axios services (front).

## INSTALL

└─ $ ▶ npm init

(index.js) => server.js

└─ $ ▶ npm install --save-dev json-server

└─ $ ▶ npm install --save-dev nodemon

(package.json)

```
	"start": "node server.js",
	"dev": "nodemon server.js",
	"server": "json-server -p3001 --watch db.json"
```

**CMD Line**

- npm start (server.js)

- npm run dev (server.js restart in every changes)

- npm run server (db.json restart in every changes)

---

## INSTALL (suite)

└─ $ ▶ npm install express

└─ $ ▶ npm install --save mysql2

└─ $ ▶ npm install --save body-parser

└─ $ ▶ npm install --save dotenv

└─ $ ▶ npm install cors

└─ $ ▶ npm install bcrypt

(└─ $ ▶ npm install jwt -- after for login !)


## Access-Control-Allow-... for headers

```
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4002');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
```

## Connection sever with dotenv

server.js

```
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
```

.env

```
DB_HOST: "ip_of_server (LAN)"
DB_PORT: 3306
DB_USER: "user"
DB_PWD: "mypasswd"
DB_DATABASE: "mytable"
```


---

# MySQL Database => Tables

```
Tables
```