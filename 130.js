console.log("script start");
const id = setTimeout(() => {
    console.log("inside setTimeout");
}, 1000);
for(let i = 1; i<100; i++) {
    console.log('....');
}
console.log("settimeout id is", id);
console.log("clearing time out")
clearTimeout(id)
console.log("script end")