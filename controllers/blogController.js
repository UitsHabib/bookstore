const Post = require('../models/Post')

const db = require('../database/config')
global.db = db;

exports.blogPage = function(req,res){
  if(req.session.user){
    var sql = "select *from category"
    db.query(sql, function(err,result){
        if(err){
            console.log(err)
        }
        else{
            var sql = "select *from post left join category on post.category_id = category.cat_id"
            db.query(sql, function(err,result2){
                if(req.session.user.username=="uits_habib") {
                  res.render('blog', {user_name: req.session.user.username, user: "admin", category: result, posts: result2})
                }
                else{
                  res.render('blog', {user_name: req.session.user.username, user: "user", category: result, posts: result2})
                }
            })    
            
        }
    })
    
  }
  else{
    res.redirect('/')
  }
}

exports.post = function(req,res){
    console.log(req.body)
    console.log(req.session.user.username)
    req.body.post_by = req.session.user.username
    //req.post_by = req.session.user
    if(req.session.user){
      let post = new Post(req.body)
      post.doPost().then(function(result){
        console.log("posted successfully")
        res.redirect('/blog')
      }).catch(function(err){
          console.log(err)
      })
    }
    else{
      res.redirect('/')
    }
  }

  exports.fullPost = function(req,res){
      if(req.session.user){
        
      }
      else{
          res.redirect('/')
      }
  }
