// const btnCreateCont = document.getElementById("btnAdd")
const titleCont = document.getElementById("titleCont")
const btnZerarCont = document.getElementById("zerar")


function novoContador() {
    let btnContador = document.getElementById("btnAdd");

    // document.getElementById("btnAdd").disabled = true;
    btnContador.disabled = true;
    btnContador.style.background = "#ffc107";
    btnContador.style.cursor = "not-allowed";
    const c = document.createElement("div");
    const type = titleCont.value;
    c.style.background = randomColor();
    c.classList.add("titleCont");
    c.innerHTML = `
    <div class="input" onclick="somar()">
    Contador ${type}: <br/>
    <p class="result" id="valor">0</p>
    <button type="button" class="botao" id="zerar" onclick="zerar()">Zerar</button>
    <br/>
  </div>
    `;

    document.getElementById("listaContadores").appendChild(c);
    document.getElementById("titleCont").value = "";

}

function ativar(campo) {
    let btnAdd = document.getElementById("btnAdd");
    btnAdd.disabled = true;
  
    if (campo !== null && campo !== 0 && campo !== "") {
      // btnAdd.disabled = false;
      btnAdd.disabled = false;
      btnAdd.style.background = "#038f00";
      btnAdd.style.cursor = "pointer";
    } else {
      btnAdd.disabled = true;
      btnAdd.style.background = "#606060";
      btnAdd.style.cursor = "not-allowed";
    }
  }
  

function zerar() {
    document.getElementById("valor")
   valor = 0
}

function randomColor() {
    return("#" + parseInt(Math.random() * 0xffffff).toString(16).padStart(6, "0"));
}

function somar(c){
    for(var i = 0; i < 1; i++){
   
    valor.innerHTML = parseInt(valor.innerHTML) +1
}
}
