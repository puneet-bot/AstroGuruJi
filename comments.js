var btn=document.querySelector('.large-button');
var scrolls=document.querySelector('.spinner-border');
btn.addEventListener('click',()=>{
    btn.style.visibility = "hidden";
    scrolls.style.visibility = "visible";
})