const {dbConnection} = require('./mongo')

const dbOptions = {
  db: 'movies',
  user: 'cristian',
  pass: 'cristianPassword2017',
  repl: 'rs1',
  servers: [
   { ip: '192.168.99.100', port: 27017 },
   { ip: '192.168.99.101', port: 27017 },
   { ip: '192.168.99.102', port: 27017 }
 ],
 url: `mongodb://cristian:cristianPassword2017@192.168.99.100:27017/admin`
}

module.exports = {
  dbOptions
}
