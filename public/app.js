

const postbtn = document.getElementById('post')
postbtn.addEventListener('click', async(e)=>{
  e.preventDefault()
  const theworkout = document.getElementById('mymon').value
  console.log(theworkout)
  try {
    const response = await fetch('http://localhost:4000/workout', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({theworkout})
    }).then((response)=>response.json())

  } catch (error) {
    console.log(error.message)
  }
})