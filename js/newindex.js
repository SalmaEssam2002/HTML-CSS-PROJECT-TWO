let text = ["services" , "portfolio" , "about us" , "pricing" , "contact us"];
let line = document.querySelectorAll(".head")
for(let i = 0; i <text.length ; i++){
    line[i].textContent = text[i];
}