const subBtn = document.getElementById('subBtn')
const fname = document.getElementById('formGroupExampleInput')

subBtn.addEventListener("click", agifi)


async function agifi(){
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  const res = await fetch(`https://api.agify.io?name=${fname.value}&country_id=GB`,config)
  const data = await res.json()
  console.log(data.age)
  console.log(fname.value)
  fname.value = ""

}