var mysql = require('mysql');
export default function handler(req, res) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "anshu@9002",
        database:"world"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
}