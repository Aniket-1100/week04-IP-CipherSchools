
// console.log("script start")
// setInterval(()=>{
//     let total=0;
//     for (let i=0; i<1000000000;i++) {
//         total  += i;
//     }
//     console.log(total);
//     console.log(Math.random());
// },1000)
// console.log("script end")

const body = document.body;
const button = document.querySelector("button");
const intervalid = setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = 'rgb(${red},${green},${blue})';
    body.style.background = rgb;
}, 1000);

button.addEventListener("click",()=>{
    clearInterval(intervalid);
    button.textContent = body.style.background;
})

console.log(intervalid)

