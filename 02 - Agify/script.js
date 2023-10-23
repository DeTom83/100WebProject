const subBtn = document.getElementById('subBtn')
const fname = document.getElementById('formGroupExampleInput')
const alt = document.getElementById('alt');

subBtn.addEventListener("click", agifi)


async function agifi(){
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  const res = await fetch(`https://api.agify.io?name=${fname.value}&country_id=GB`,config)
  const data = await res.json()
  if(data.age > 0) {
    alt.classList.add('active');
    msg.innerHTML = "Your assumed age: " + data.age;
    console.log(data);
  }
  fname.value = ""

}