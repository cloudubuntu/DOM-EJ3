
let cont=document.querySelector('#cont');





function agregar(){
    let input=document.querySelector('#input').value;
    cont.innerHTML+=`<p>
    ${input}
  </p>
  <button class="btn btn-danger" type="button" onclick="eliminar()">
    Eliminar
  </button>
  <hr />`
}

function eliminar(){

}