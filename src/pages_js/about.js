export default function about(){
    const content=document.getElementById("content");
    content.innerHTML=""
    const head=document.createElement("h1")
    head.id="head"
    head.textContent="About"

    const abt=document.createElement('div');
    abt.id="aboutus"
    abt.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam neque modi sapiente? Vel hic necessitatibus ipsa ipsum voluptas eum fuga ducimus quidem reprehenderit. Voluptas maxime reiciendis recusandae ad minus."

    content.style.display="flex"
    content.style.flexDirection="column";
    content.style.alignItems=' center';

    content.appendChild(head);
    content.appendChild(abt);
}
