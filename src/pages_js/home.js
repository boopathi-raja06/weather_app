export default function home(){
   const body=document.querySelector('body');
  
   const content= document.getElementById("content")
   content.innerHTML="";
    const head=document.createElement("h1")
    head.id="head"
    const slogan1=document.createElement("div");
    slogan1.id="slogan1"
    const slogan2=document.createElement("div");
    slogan2.id="slogan2"
    head.textContent="BJ Restaurant"
    slogan1.textContent="Delicious Moments, Every Time"
    slogan2.textContent="From Our Kitchen to Your Heart"
    content.appendChild(head)
    content.appendChild(slogan1)
    content.appendChild(slogan2)

    //style
   
    slogan1.style.fontSize="50px"
    slogan2.style.fontSize="30px"
    content.style.backgroundImage="url('https://cdn.pixabay.com/photo/2015/12/12/21/13/restaurant-1090136_1280.jpg')";
    content.style.backgroundSize="cover"
    

}
