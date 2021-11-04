
let cont=document.querySelector('#cont');
let contador=1

function agregar(){
    let input=document.querySelector('#input').value;
    cont.innerHTML+=`<div id="div${contador}">
    <p>
     ${input}
    </p>
    <button class="btn btn-danger" type="button" onclick="eliminar('div${contador}')">
      Eliminar
    </button>
    <hr />
  </div>`
  contador++;
}

function eliminar(div){
  let element=document.querySelector('#'+div);
  cont.removeChild(element);
}