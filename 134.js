const bucket = ['coffee','chips','vegetables','salt','rice'];

const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"Fried Rice"})
    }else{
        reject("could not do it")
    }
})



friedRicePromise.then(
    (myFriedRice)=>{
    console.log("lets eat", myFriedRice)
    }
    ).catch(
    (error)=>{
        console.log(error)
    })

setTimeout(()=>{
    console.log("Hello from settimeout")
},0)

for(let i = 0; i <= 100; i++){
    console.log(Math.random(), i);
}
console.log("script end!!!!")
    