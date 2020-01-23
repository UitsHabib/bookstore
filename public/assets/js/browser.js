document.getElementById("username").addEventListener("input", validUsername)
document.getElementById("email").addEventListener("input", validEmail)
//document.getElementById("signup").addEventListener("click", signUp)

function validUsername() {
  let userInput = document.getElementById('username').value
  if(userInput) {
    axios.post('/unique-username', {username: userInput}).then(function(result) {
        if(result.data=="ok"){
            document.getElementById('msg').innerHTML = ""
        }
        if(result.data=="bad"){
            document.getElementById('msg').innerHTML = "User Name is already in use"
        }
    }).catch(function() {
      console.log("Please try again later.")
    })
  }
  else{
      document.getElementById('msg').innerHTML = ""
  }
}


function validEmail() {
  let userInput = document.getElementById('email').value
  if(userInput) {
    axios.post('/unique-email', {email: userInput}).then(function(result) {
        if(result.data=="ok"){
            document.getElementById('msg').innerHTML = ""
        }
        if(result.data=="bad"){
            document.getElementById('msg').innerHTML = "Email is already in use"
        }
    }).catch(function() {
      console.log("Please try again later.")
    })
  }
  else{
      document.getElementById('msg').innerHTML = ""
  }
}