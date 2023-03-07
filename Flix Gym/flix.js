const body = document.getElementById("bod");
const drkk = document.getElementById("drk");

drkk.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});


const year = new Date()
const years = year.getFullYear()

year.innerText = `${years} ©`


const thetime = () => {
  const time = new Date()
const hou = time.getUTCHours() +2 
const min = time.getMinutes()
const soc = time.getSeconds()

timee.innerHTML = `<span>${hou}: ${min}: ${soc}</span>`
}
setInterval(thetime, 1000);
