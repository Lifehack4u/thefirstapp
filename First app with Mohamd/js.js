function createTodo()
{
    var container = document.getElementById(RectangleContainer);
    var name = document.getElementById(validationTextareaName);
    var descr = document.getElementById(validationTextareaDescription);
    var nameValue = name.value
    console.log(nameValue);
   


   /* var div1 = document.createElement("div");
    div1.className = "div1";
    div1.innerHTML = name.value;
  
    var div2 = document.createElement("div");
    div2.className = "div2";
    div2.innerHTML = descr.value;*/

    var div3 = document.createElement("div")
    div3.className="div3";
    div3.innerHTML = `<div id="mainDiv">
    <input type="checkbox" id="checkbox1">
    <button id="closeButton">x</button>
    </div>`;
    

    var div = document.createElement("div");
    div.className = "divA";
    //div.appendChild(div1);
    //div.appendChild(div2);
    div.appendChild(div3);
  
    container.appendChild(div);
}

    




