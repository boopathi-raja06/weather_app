export default function loadmenu(){
    const body=document.querySelector('body');

     const content=document.getElementById("content");
     content.innerHTML=""
     content.style.background="url('https://th.bing.com/th/id/OIP.m_K0E8c9Ec2L32uqGyOy4QHaE8?rs=1&pid=ImgDetMain')"
     content.style.backgroundSize="cover" 
     const head=document.createElement("h1")
    head.id="head"
    head.textContent="Menu"
    const menulist=document.createElement('div');
    menulist.id="menulist"
     const item1=document.createElement("div");
     item1.classList="item"
     const item2=document.createElement("div");
     item2.classList="item"
     const item3=document.createElement("div");
     item3.classList="item"

    item1.innerHTML="<h3>salads</h3><ul><li>Caesar Salad</li><li>Greek Salad</li><li>Caprese Salad</li></ul>"
    item2.innerHTML="<h3>Meat</h3><ul><li>Chicken Parmesan</li><li>Roast Lamb</li><li>BBQ Ribs</li></ul>"
    item3.innerHTML="<h3>Desserts</h3><ul><li>Cheesecake</li><li>Chocolate Cake</li><li>Apple Pie</li></ul>"


    content.appendChild(head);
    content.appendChild(menulist);
     menulist.appendChild(item1);
     menulist.appendChild(item2);
     menulist.appendChild(item3);
}