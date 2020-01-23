const bcrypt = require("bcryptjs")
const validator = require("validator")



const db = require('../database/config')
global.db = db;



let User = function (data) {
  this.data = data
  this.errors = []
}


User.prototype.verify = function(){
  console.log("sifat " + this.data.username)
  return new Promise((resolve,reject)=>{
    console.log("sifat")
    console.log(this.data.username)
    var sql = "SELECT *FROM user where UserName = '" + this.data.username + "' and code = '" + this.data.code + "'"
    db.query(sql, (err,result)=>{
      console.log(result.length)
      if(err){
        console.log(err)
        reject()
      }
      else if(result.length > 0){
        console.log("step2")
        var sql = "UPDATE user SET IsActive = 1 where UserName = '" + this.data.username + "'"
        db.query(sql, (err,result)=>{
          if(err){
            console.log(err)
            reject(err)
          }
          else{
            resolve()
          }
        })
        
      }
    })
  })
}


User.prototype.login = function() {
  return new Promise((resolve, reject) => {
    //this.cleanUp()
    var sql = "SELECT  *FROM user WHERE (UserName = '" + this.data.email + "' or Email = '" + this.data.email + "') and Password = '" + this.data.password + "' and IsActive = 1"
    console.log(sql)
    db.query(sql, (err, result) => {
      if (err) {
        this.errors.push({msg: "Invalid"})
        reject(err)
      }
      if (result.length > 0) {
        resolve("Congrats!")
      }
      else {
        console.log("okk")
        this.errors.push({msg: "Invalid username / Password"})
        reject("Invalid username / password.")
      }
    })
  })
}

User.prototype.signUp = function () {

  let code = "4499"
  console.log(this.data)
  return new Promise((resolve, reject) => {
    console.log(this.data.username)
    var sql = "INSERT INTO user(UserName,Email,Password,Code) VALUES('" + this.data.username + "','" +  this.data.email + "','" + this.data.password + "','" + code + "')"
    db.query(sql, (err, result) => {
      if(err) {
        reject(err)
      }
      else{
        resolve("congrats")
      }
    })
  })
}

User.prototype.uniqueUserName = function(){
  return new Promise((resolve,reject)=>{
    var sql = "SELECT *FROM user where UserName = '" + this.data.username + "'"
    console.log(sql)
    db.query(sql, function(err,result){
      console.log(result)
      if(err){
        console.log(err)
        reject()
      }
      else if(result.length == 0){
        console.log("good")
        resolve()
      }
      else {
        console.log("bad")
        reject("bad")
      }
    })
  })
}

User.prototype.uniqueEmail = function(){
  return new Promise((resolve,reject)=>{
    var sql = "SELECT *FROM user where Email = '" + this.data.email + "'"
    db.query(sql, function(err,result){
      if(err){
        console.log(err)
        reject()
      }
      else if(result.length == 0){
        resolve()
      }
      else {
        reject("bad")
      }
    })
  })
}


User.prototype.uploadPhoto = function(){
  return new Promise((resolve,reject)=>{    
    let username = this.data.body.username
    if (Object.keys(this.data.files).length == 0) {
      console.log("empty file")
      reject('Empty File')
    }
    
    var file = this.data.files.profile_pic;
    //console.log(file.name);


    var uploadPath =  "public/assets/images/upload_images/" + file.name;
    console.log(uploadPath);

    file.mv(uploadPath, function(err) {
        console.log("habib" + username)
        if (err) {
            console.log("error");
            reject(err);
        }

        var sql = "UPDATE user SET profile_pic = '" + file.name + "' where UserName = '" + username + "'"
        console.log(sql)
        db.query(sql, function(err,result){
          if(err){
            console.log(err)
            reject(err)
          }
          else {
            resolve("Uploaded profile picture successfully")
          }
        })
    })
  })
}

User.prototype.saveInfo = function(){
  return new Promise((resolve,reject)=>{
    var sql = "UPDATE user SET uva = '" + this.data.uva + "', uri = '" + this.data.uri +
     "', codeforces = '" + this.data.cf + "', vjudge = '" + this.data.vjudge + "' where UserName = '" + 
     this.data.username + "'"
     db.query(sql, (err,result)=>{
       if(err){
         console.log(err)
         reject(err)
       }
       else{
         console.log("SAVED")
         resolve("Data saved")
       }
     })
  })
}

User.prototype.updateName = function () {
  return new Promise((resolve,reject)=>{
    var sql = "UPDATE user SET FullName = '" + this.data.name + "' where UserName = '" +
    this.data.username + "'"
    db.query(sql, function(err,result) {
      if(err){
        reject(err)
      }
      else{
        resolve("Updated")
      }
    })
  })
}

User.prototype.updateUniversity = function () {
  return new Promise((resolve,reject)=>{
    var sql = "UPDATE user SET University_Name = '" + this.data.university_name + "' where UserName = '" +
    this.data.username + "'"
    db.query(sql, function(err,result) {
      if(err){
        reject(err)
      }
      else{
        resolve("Updated")
      }
    })
  })
}

User.prototype.updateGoogle = function () {
  return new Promise((resolve,reject)=>{
    var sql = "UPDATE user SET Google_ID = '" + this.data.google + "' where UserName = '" +
    this.data.username + "'"
    db.query(sql, function(err,result) {
      if(err){
        reject(err)
      }
      else{
        resolve("Updated")
      }
    })
  })
}

User.prototype.updateFacebook = function () {
  return new Promise((resolve,reject)=>{
    var sql = "UPDATE user SET Facebook_ID = '" + this.data.fb + "' where UserName = '" +
    this.data.username + "'"
    db.query(sql, function(err,result) {
      if(err){
        reject(err)
      }
      else{
        resolve("Updated")
      }
    })
  })
}

User.prototype.updateTwitter = function () {
  return new Promise((resolve,reject)=>{
    var sql = "UPDATE user SET Twitter_ID = '" + this.data.twitter + "' where UserName = '" +
    this.data.username + "'"
    db.query(sql, function(err,result) {
      if(err){
        reject(err)
      }
      else{
        resolve("Updated")
      }
    })
  })
}

User.prototype.saveBook = function () {
  return new Promise((resolve,reject)=>{
    let title = this.data.body.title
    let author = this.data.body.author
    let description = this.data.body.description
    let isbn = this.data.body.isbn
    let rating = this.data.body.rating
    let seller = this.data.body.seller
    let username = this.data.body.username
  
    if (Object.keys(this.data.files).length == 0) {
      console.log("empty file")
      reject('Empty File')
    }
    
    var file = this.data.files.img;
    console.log("demo 1 : " + file)
    var uploadPath =  "public/assets/images/upload_images/" + file.name;
    //console.log("demo 2 : " + uploadPath)
    file.mv(uploadPath, function(err) { 
        if (err) {
            console.log("error");
            reject(err);
        }

        var sql = "INSERT INTO books(book_name, book_author, book_description, isbn, rating, seller_name, book_img, user_name) VALUES('" 
          + title + "','" + author + "','" + description + "','" + isbn + "','" + rating + "','" 
          + seller + "','" + file.name + "','" + username + "')"
        
        db.query(sql, function(err,result){
          if(err){
            console.log(err)
            reject(err)
          }
          else {
            resolve("Saved successfully")
          }
        })
    })
  })
}

module.exports = User