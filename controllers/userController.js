const User = require('../models/User')
const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your gmail',
    pass: 'gmail pass'
  }
});

exports.init = function(req,res){
    res.redirect('/home')
}

exports.signuppage = function(req,res){
  if(req.session.user){
    res.redirect('/home')
  }
  else{
    res.render('signup')
  }
}

exports.signup = function(req,res){
  if(req.session.user){
    res.redirect('/home')
  }
  else{
    let user = new User(req.body)
    user.signUp().then(function(result){
      req.session.newuser = {username: user.data.username}
      var mailOptions = {
        from: 'your gmail',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        html: '<h1>Your Code: </h1><p><b>4499</b></p>'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response)
          res.redirect('/check-validation')
        }
      });
    }).catch(function(e){
      console.log(e)
    })
  }
}

exports.checkValid = function(req,res){
  if(req.session.user){
    res.redirect('/')
  }
  else if(req.session.newuser){
    res.render('user_validation')
  }
  else{
    res.redirect('/')
  }
}

exports.checkVerify = function(req,res){
  if(req.session.user){
    res.redirect('/')
  }
  else if(req.session.newuser){
    let body = {
      username: req.session.newuser.username, 
      code: req.body.code
    }
    let user = new User(body)
    user.verify().then(function(result){
      console.log("okk")
      console.log(user)
      req.session.user = {username: user.data.username}
      console.log("assa " + req.session.user)
      res.redirect('/home')
    }).catch(function(e){
      console.log(e)
    })
  }
  else{
    res.redirect('/')
  }
}

exports.loginPage = function(req,res){
  if(req.session.user){
    res.redirect('/home')
  }
  else{
    res.render('login')
  }
}

exports.login = function(req,res){
  if(req.session.user){
    res.redirect('/home')
  }
  else{
    let user = new User(req.body)
    user.login().then(function(result){
      req.session.user = {username: req.body.email}
      res.redirect('/home')
    }).catch(function(e){
      console.log(e)
    })
  }
}

exports.home = function(req,res){
  var sql = "select *from books"
  db.query(sql, function(err,result){
    if(err){
      console.log(err)
    }
    else if(req.session.user){
      res.render('home', {user_name: req.session.user.username, books:result})
    }
    else{
      res.render('home', {user_name: undefined, books: result})
    }
  })
}

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/')
  })
}


exports.isValidUserName = function(req,res){
  console.log("habib");
  if(req.session.user){
    res.render('home', {user_name: req.session.user.username})
  }
  else{
    let user = new User(req.body)
    user.uniqueUserName().then(function(result){
      res.send("ok")
    }).catch(function(e){
      res.send("bad")
      console.log(e)
    })
  }
}

exports.isValidEmail= function(req,res){
  if(req.session.user){
    res.render('home', {user_name: req.session.user.username})
  }
  else{
    let user = new User(req.body)
    user.uniqueEmail().then(function(result){
      res.send("ok")
    }).catch(function(e){
      res.send("bad")
      console.log(e)
    })
  }
}

exports.profilePage = function(req,res){
  if(req.session.user){
    var sql = "select *from user where UserName = '" + req.session.user.username + "'"
    db.query(sql, function(err,result){
      if(err){
        console.log(err)
      }
      else{
        var sql = "select * from books where user_name = '" + req.session.user.username + "'"
        db.query(sql, function(err,result2){
          if(err){
            console.log(err)
          }
          else{        
            res.render('profile', {user_name: req.session.user.username, info: result[0], books: result2 })
          }
        }) 
      }
    }) 
  }
  else{
    res.redirect('/')
  }
}

exports.uploadPhoto = function(req,res){
  if(req.session.user){
    req.body.username = req.session.user.username
    console.log("debug : " + req.body.username)
    let user = new User(req)

    
    user.uploadPhoto().then(function(result){
      let path = "/profile/" + req.session.user.username 
      res.redirect(path)
    }).catch(function(e){
      console.log(e)
    })
    
  }
  else{
    res.redirect('/')
  }
}



exports.updateName = function (req,res) {
  if(req.session.user){
    req.body.username = req.session.user.username
    let user = new User(req.body)
    user.updateName().then(function(result){
      console.log("okk")
      res.json('ok')
    }).catch(function(err){
      console.log(err);
      res.json('bad')
    })
  }
  else{
    res.redirect('/')
  }
}

exports.updateUniversity = function (req,res) {
  if(req.session.user){
    req.body.username = req.session.user.username
    let user = new User(req.body)
    user.updateUniversity().then(function(result){
      res.json('ok')
    }).catch(function(err){
      console.log(err);
      res.json('bad')
    })
  }
  else{
    res.redirect('/')
  }
}

exports.updateGoogle = function (req,res) {
  if(req.session.user){
    req.body.username = req.session.user.username
    let user = new User(req.body)
    user.updateGoogle().then(function(result){
      console.log("okk")
      res.json('ok')
    }).catch(function(err){
      console.log(err);
      res.json('bad')
    })
  }
  else{
    res.redirect('/')
  }
}

exports.updateFacebook = function (req,res) {
  if(req.session.user){
    req.body.username = req.session.user.username
    let user = new User(req.body)
    user.updateFacebook().then(function(result){
      console.log("okk")
      res.json('ok')
    }).catch(function(err){
      console.log(err);
      res.json('bad')
    })
  }
  else{
    res.redirect('/')
  }
}

exports.updateTwitter = function (req,res) {
  if(req.session.user){
    req.body.username = req.session.user.username
    let user = new User(req.body)
    user.updateTwitter().then(function(result){
      console.log("okk")
      res.json('ok')
    }).catch(function(err){
      console.log(err);
      res.json('bad')
    })
  }
  else{
    res.redirect('/')
  }
}

exports.createBookPage = function(req,res){
  if(req.session.user){
    var sql = "SELECT *FROM books where user_name ='" + req.session.user.username + "'" 
    db.query(sql, function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render('create-book', {user_name: req.session.user.username, books: result})
      }
    })
  }
  else{
    res.redirect('/')
  }
}

exports.createBook = function(req,res){
  if(req.session.user){
    req.body.username = req.session.user.username
    let user = new User(req)
    user.saveBook().then(function(result){
      res.redirect('/create-book')
    }).catch(function(err){
      console.log(err)
    })
  }
  else{
    res.redirect('/')
  }
}

exports.booksDetails = function(req,res){
  if(req.session.user){
    var sql = "SELECT *FROM books where id ='" + req.params.id + "'" 
    db.query(sql, function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result)
        res.render('book-details', {user_name: req.session.user.username, book: result[0]})
      }
    })
  }
  else{
    res.redirect('/')
  }
}