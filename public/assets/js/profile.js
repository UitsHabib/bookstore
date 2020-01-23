
// updating name
document.getElementById("savename").addEventListener("click", function(e) {
  e.preventDefault();
  let userInput = document.getElementById('inputname').value
  
  axios.post('/update-user-name', {name: userInput}).then(function(result) {
      if(result.data=="ok"){
          alert("successfully saved name")
          document.getElementById('nameform').style.display = 'none';
          document.getElementById('namediv').style.display = 'inline';
          document.getElementById('name').innerHTML = userInput;
      }
      if(result.data=="bad"){
          alert("Please try again later")
      }
  }).catch(function() {
    console.log("Please try again later.")
  })
})


// updating university name

document.getElementById("saveuni").addEventListener("click", function(e) {
    e.preventDefault();
    let userInput = document.getElementById('inputuni').value
    
    axios.post('/update-university-name', {university_name: userInput}).then(function(result) {
        if(result.data=="ok"){
            alert("successfully saved university name")
            document.getElementById('uniform').style.display = 'none';
            document.getElementById('unidiv').style.display = 'inline';
            document.getElementById('uni').innerHTML = userInput;
        }
        if(result.data=="bad"){
            alert("Please try again later")
        }
    }).catch(function() {
      console.log("Please try again later.")
    })
})

// updating google ID

document.getElementById("savegoogle").addEventListener("click", function(e) {
    e.preventDefault();
    let userInput = document.getElementById('inputgoogle').value
    
    axios.post('/update-google-id', {google: userInput}).then(function(result) {
        if(result.data=="ok"){
            alert("successfully saved Google ID")
            document.getElementById('googleform').style.display = 'none';
            document.getElementById('googlediv').style.display = 'inline';
            document.getElementById('google').innerHTML = userInput;
        }
        if(result.data=="bad"){
            alert("Please try again later")
        }
    }).catch(function() {
      console.log("Please try again later.")
    })
})

// updating facebook name

document.getElementById("savefb").addEventListener("click", function(e) {
    e.preventDefault();
    let userInput = document.getElementById('inputfb').value
    
    axios.post('/update-facebook-id', {fb: userInput}).then(function(result) {
        if(result.data=="ok"){
            alert("successfully saved Facebook ID")
            document.getElementById('fbform').style.display = 'none';
            document.getElementById('fbdiv').style.display = 'inline';
            document.getElementById('fb').innerHTML = userInput;
        }
        if(result.data=="bad"){
            alert("Please try again later")
        }
    }).catch(function() {
      console.log("Please try again later.")
    })
})


// updating twitter name

document.getElementById("savetwit").addEventListener("click", function(e) {
    e.preventDefault();
    let userInput = document.getElementById('inputtwit').value
    
    axios.post('/update-twitter-id', {twitter: userInput}).then(function(result) {
        if(result.data=="ok"){
            alert("successfully saved Twitter ID")
            document.getElementById('twitform').style.display = 'none';
            document.getElementById('twitdiv').style.display = 'inline';
            document.getElementById('twit').innerHTML = userInput;
        }
        if(result.data=="bad"){
            alert("Please try again later")
        }
    }).catch(function() {
      console.log("Please try again later.")
    })
})


function changeName(){
    document.getElementById('nameform').style.display = 'inline';
    document.getElementById('namediv').style.display = 'none';
    document.getElementById('inputname').value = document.getElementById('name').innerHTML;
}

function changeUni(){
    document.getElementById('uniform').style.display = 'inline';
    document.getElementById('unidiv').style.display = 'none';
    document.getElementById('inputuni').value = document.getElementById('uni').innerHTML;
}

function changeGoogle(){
    document.getElementById('googleform').style.display = 'inline';
    document.getElementById('googlediv').style.display = 'none';
    document.getElementById('inputgoogle').value = document.getElementById('google').innerHTML;
}

function changeFb(){
    document.getElementById('fbform').style.display = 'inline';
    document.getElementById('fbdiv').style.display = 'none';
    document.getElementById('inputfb').value = document.getElementById('fb').innerHTML;
}

function changeTwit(){
    document.getElementById('twitform').style.display = 'inline';
    document.getElementById('twitdiv').style.display = 'none';
    document.getElementById('inputtwit').value = document.getElementById('twit').innerHTML;
}