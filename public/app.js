
const postbtn = document.getElementById('postMon')
postbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const monValue = document.getElementById('mymon').value
  const theForm = document.getElementById('monForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('monformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
  console.log(monValue)
  try {
    const theworkout = monValue
    const day = 'Monday'
    const response = await fetch('https://workout-app-9y9b.onrender.com/workout', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({theworkout, day})
    }).then((response)=>response.json())
  } catch (error) {
    console.log(error)
  }

})
const tuepostbtn = document.getElementById('postTue')
tuepostbtn.addEventListener('click', (e)=>{
  e.preventDefault()
  const theForm = document.getElementById('tueForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('tueformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
})
const wedpostbtn = document.getElementById('postWed')
wedpostbtn.addEventListener('click', (e)=>{
  e.preventDefault()
  const theForm = document.getElementById('wedForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('wedformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
})
const thupostbtn = document.getElementById('postThu')
thupostbtn.addEventListener('click', (e)=>{
  e.preventDefault()
  const theForm = document.getElementById('thuForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('thuformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
})
const fripostbtn = document.getElementById('postFri')
fripostbtn.addEventListener('click', (e)=>{
  e.preventDefault()
  const theForm = document.getElementById('friForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('friformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
})
const satpostbtn = document.getElementById('postSat')
satpostbtn.addEventListener('click', (e)=>{
  e.preventDefault()
  const theForm = document.getElementById('satForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('satformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
})
const sunpostbtn = document.getElementById('postSun')
sunpostbtn.addEventListener('click', (e)=>{
  e.preventDefault()
  const theForm = document.getElementById('sunForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('sunformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
})









const postreqbtn = document.getElementById('postreq')
postreqbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const container = document.getElementsByClassName('container')
  $(container).hide()
  console.log(monValue)
  try {
    const response = await fetch('https://workout-app-9y9b.onrender.com/workout', {
      method: "DELETE"
    }).then((response)=>response.json())
  } catch (error) {
    console.log(error)
  }

})



// postreqbtn.addEventListener('click', async(e)=>{
//   e.preventDefault()
//   try {
    // const response = await fetch('https://workout-app-9y9b.onrender.com/workout', {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify({theworkout})
    // }).then((response)=>response.json())

//   } catch (error) {
//     console.log(error.message)
//   }
// })


// // try {
// //   const response = await fetch('https://workout-app-9y9b.onrender.com/workout', {
// //     method: "POST",
// //     headers: {"Content-Type": "application/json"},
// //     body: JSON.stringify({theworkout})
// //   }).then((response)=>response.json())

// // } catch (error) {
// //   console.log(error.message)
// // }