const postBTN = document.getElementById('post')
let texCont = document.getElementById('fname').textContent
postBTN.addEventListener('click',async(e)=>{
  e.preventDefault();
  try {
    const body = texCont
    const response = await fetch('https://workout-app-9y9b.onrender.com/api', {
      mode: 'no-cors',
      method: 'POST',
      headers: {'Content-Type': 'application.json'},
      body: JSON.stringify(body)
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
})