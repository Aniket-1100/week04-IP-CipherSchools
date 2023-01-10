function myPromise(){
    return new Promise((resole, reject)=>{
        resolve("foo");
    })
}
myPromise()
    .then(value=>{
        console.log(value);
        value += 'bar';
        return value;
    })
    .then((value)=>{
        console.log(value)
    })