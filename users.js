const sqlite3 = require("sqlite3");
const users = [
  {
    name: "kenneth fabo",
    age: 28,
  },
  {
    name: "rodrigue lagoue",
    age: 39,
  },
  {
    name: "hanga wilfried",
    age: 21,
  }
]

const database = new sqlite3.Database('users.db', err => {
  if(err) throw err;
  console.log("database created")
})

database.serialize(() => {
  database.run('create table client(name varchar(20), age integer)');

  users.forEach(user => database.run('insert into client(name, age) values(?, ?)', [user.name, user.age]));

  database.all('select * from client', (err, data) => {
    if(err) throw err;
    console.log(data);
  });
})
