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

# MySQL

```
MariaDB [mytable]> SHOW COLUMNS FROM mytable;
+----------+--------------+------+-----+---------+-------+
| Field    | Type         | Null | Key | Default | Extra |
+----------+--------------+------+-----+---------+-------+
| order_id | int(11)      | NO   | PRI | NULL    |       |
| username | varchar(255) | YES  |     | NULL    |       |
| password | varchar(255) | YES  |     | NULL    |       |
+----------+--------------+------+-----+---------+-------+
3 rows in set (0.005 sec)

MariaDB [mytable]> SHOW COLUMNS FROM meetingpoint;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| id        | int(11)      | NO   | PRI | NULL    |       |
| date      | varchar(255) | YES  |     | NULL    |       |
| hour      | varchar(255) | YES  |     | NULL    |       |
| location  | varchar(255) | YES  |     | NULL    |       |
| firstname | varchar(255) | YES  |     | NULL    |       |
| lastname  | varchar(255) | YES  |     | NULL    |       |
| phone     | varchar(255) | YES  |     | NULL    |       |
| email     | varchar(255) | YES  |     | NULL    |       |
| notice    | varchar(255) | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
9 rows in set (0.005 sec)

MariaDB [mytable]> SHOW COLUMNS FROM phonecontact;
+---------+--------------+------+-----+---------+-------+
| Field   | Type         | Null | Key | Default | Extra |
+---------+--------------+------+-----+---------+-------+
| id      | int(11)      | NO   | PRI | NULL    |       |
| name    | varchar(255) | YES  |     | NULL    |       |
| phone   | varchar(255) | YES  |     | NULL    |       |
| editNum | int(11)      | YES  |     | NULL    |       |
+---------+--------------+------+-----+---------+-------+
4 rows in set (0.005 sec)
```