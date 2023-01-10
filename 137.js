const URL="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest()
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);
xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    if(xhr.readyState===4){
        const response = xhr.response; 
    }
}

xhr.send();