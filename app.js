let quantidade = document.getElementById('quantidade');
let valor = document.getElementById('valor');

function calcular() {
  let total = parseInt(quantidade.value) * parseFloat(valor.value);

  if (quantidade.value >= 10 || valor.value >= 100) {
    total = total - (total / 100 * 5);
  }

  alert(`Valor total: ${total} `);
  reiniciar();
}


function reiniciar() {
  quantidade.value = '';
  valor.value = '';
}
