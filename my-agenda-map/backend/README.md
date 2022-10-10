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

- npm run server (db.json restart in every changes (Don't needs any configuration))

---

## INSTALL (suite)

└─ $ ▶ npm install express

└─ $ ▶ npm install mysql

└─ $ ▶ npm install dotenv

└─ $ ▶ npm install cors

└─ $ ▶ npm install bcrypt

(└─ $ ▶ npm install jwt -- after for login !)

---

# MySQL Database => Tables

```
Tables
```