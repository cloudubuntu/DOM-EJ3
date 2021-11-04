
let cont=document.querySelector('#cont');





function agregar(){
    let input=document.querySelector('#input').value;
    cont.innerHTML+=`<div>
    <p>
     ${input}
    </p>
    <button class="btn btn-danger" type="button" onclick="eliminar()">
      Eliminar
    </button>
    <hr />
  </div>`
}

function eliminar(){
  cont.removeChild(cont.lastChild);
}