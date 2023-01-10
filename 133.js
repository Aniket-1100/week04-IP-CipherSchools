// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(()=>{
//     heading1.textContent = "Heading 1"
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "Heading 2"
//         heading2.style.color = "purple";
        
//     },1000);
// },1000);

function changeText(element, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = textContent;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            if(onFailureCallback){
                onFailureCallback()
            }
        } 
    },time)
}
changeText(heading1, "one","green",1000,()=>{
    console.log("hello world")
}),()=>{console.log("heading1 does not exist")}
