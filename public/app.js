
const postbtn = document.getElementById('postMon')
postbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const theForm = document.getElementById('monForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('monformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
  const monValue = document.getElementById('mymon').value
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
tuepostbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const theForm = document.getElementById('tueForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('tueformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
  const tueValue = document.getElementById('mytue').value
  try {
    const theworkout = tueValue
    const day = 'Tuesday'
    const response = await fetch('https://workout-app-9y9b.onrender.com/workout', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({theworkout, day})
    }).then((response)=>response.json())
  } catch (error) {
    console.log(error)
  }
})
const wedpostbtn = document.getElementById('postWed')
wedpostbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const theForm = document.getElementById('wedForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('wedformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
  const wedValue = document.getElementById('mywed').value
  try {
    const theworkout = wedValue
    const day = 'Wednesday'
    const response = await fetch('https://workout-app-9y9b.onrender.com/workout', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({theworkout, day})
    }).then((response)=>response.json())
  } catch (error) {
    console.log(error)
  }
})
const thupostbtn = document.getElementById('postThu')
thupostbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const theForm = document.getElementById('thuForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('thuformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
  const thuValue = document.getElementById('mythu').value
  try {
    const theworkout = thuValue
    const day = 'Thursday'
    const response = await fetch('https://workout-app-9y9b.onrender.com/workout', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({theworkout, day})
    }).then((response)=>response.json())
  } catch (error) {
    console.log(error)
  }
})
const fripostbtn = document.getElementById('postFri')
fripostbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const theForm = document.getElementById('friForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('friformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
  const friValue = document.getElementById('myfri').value
  try {
    const theworkout = friValue
    const day = 'Friday'
    const response = await fetch('https://workout-app-9y9b.onrender.com/workout', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({theworkout, day})
    }).then((response)=>response.json())
  } catch (error) {
    console.log(error)
  }
})
const satpostbtn = document.getElementById('postSat')
satpostbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const theForm = document.getElementById('satForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('satformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
  const satValue = document.getElementById('mysat').value
  try {
    const theworkout = satValue
    const day = 'Saturday'
    const response = await fetch('https://workout-app-9y9b.onrender.com/workout', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({theworkout, day})
    }).then((response)=>response.json())
  } catch (error) {
    console.log(error)
  }
})
const sunpostbtn = document.getElementById('postSun')
sunpostbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const theForm = document.getElementById('sunForm')
  $(theForm).hide()
  const formCont = document.getElementsByClassName('sunformcont')
  $(`<h3>Submitted<h3>`).appendTo(formCont)
  const sunValue = document.getElementById('mysun').value
  try {
    const theworkout = sunValue
    const day = 'Sunday'
    const response = await fetch('https://workout-app-9y9b.onrender.com/workout', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({theworkout, day})
    }).then((response)=>response.json())
  } catch (error) {
    console.log(error)
  }
})









const postreqbtn = document.getElementById('postreq')
postreqbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const container = document.getElementsByClassName('container')
  $(container).hide()
  const newCont = document.createElement('div')
  newCont.className = 'newContainer'
  const body = document.getElementsByTagName('body')
  $(newCont).appendTo(body)
  const monCont = document.createElement('div')
  monCont.className = 'dayContainer'
  $(monCont).appendTo(newCont)
  const wedCont = document.createElement('div')
  wedCont.className = 'dayContainer'
  $(wedCont).appendTo(newCont)
  const thuCont = document.createElement('div')
  thuCont.className = 'dayContainer'
  $(thuCont).appendTo(newCont)
  const friCont = document.createElement('div')
  friCont.className = 'dayContainer'
  $(friCont).appendTo(newCont)
  const satCont = document.createElement('div')
  satCont.className = 'dayContainer'
  $(satCont).appendTo(newCont)
  const sunCont = document.createElement('div')
  sunCont.className = 'dayContainer'
  $(sunCont).appendTo(newCont)


  try {
    const response = await fetch('https://workout-app-9y9b.onrender.com/workout').then((response)=>console.log(response.json()))
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