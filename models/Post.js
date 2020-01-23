const validator = require("validator")



const db = require('../database/config')
global.db = db;



let User = function (data) {
  this.data = data
  this.errors = []
}


User.prototype.doPost = function() {
  return new Promise((resolve, reject) => {
    //this.cleanUp()
    var sql = "INSERT INTO post(title, description, post_by, category_id) VALUES('" + this.data.title + "','" + this.data.description + "','" + this.data.post_by + "','" + this.data.category + "')"
    console.log(sql)
    db.query(sql, (err, result) => {
      if (err) {
        this.errors.push({msg: "Invalid"})
        reject(err)
      }
      else{
        resolve("Congrats!")
      }
    })
  })
}



module.exports = User