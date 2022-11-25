app.use('/static', express.static('public'))
function main() {
  let desvio_padrao, i, media, somatoria, somatoria_dp, valor, valores, valores_string; 
  somatoria = 0;
  valores = [];
  input = document.getElementById("input");
  valores_string = input.split(' ');

  for (i=0; i<valores_string.length; i= i+1) {
    valor_string = valores_string[i];
    valor = Number.parseFloat(valor_string);
    somatoria += valor;
    valores[i] = valor;
  }

  media = somatoria / i;
  somatoria_dp = 0;

  for (i=0; i<valores.length; i=i+1) {
    valor = valores[i];
    somatoria_dp += Math.pow(valor - media, 2);
  }

  desvio_padrao = Math.sqrt(somatoria_dp / i);
  document.getElementById("desvio_padrao") = desvio_padrao;
  document.getElementById("media") = media;
  document.getElementById("desvio_padrao_media") = desvio_padrao/(Math.sqrt(i));
}
    
  function main2(){
      let desvio_padrao, i, media, n, qtd_tentativas, somatoria, somatoria_dp, valor, valores;
  n = document.getElementById("n");
  i = 0;
  somatoria = 0;
  valores_string = document.getElementById("valores");
  valores = valores_string.split("/\r?\n/");
  let k = 0;
  while (i < n) {
    campos = valores[k].split(' ');
    qtd_tentativas = Number.parseInt(campos[0]);
    valor = Number.parseFloat(campos[1]);
    somatoria += valor * qtd_tentativas;

    for (let j=0; j<qtd_tentativas; j++) {
      valores[valores.length] = valor;
    }

    i += qtd_tentativas;
    k += 1;
  }

  media = somatoria / n;
  somatoria_dp = 0;

  for (let k=0; k<valores.length; k++) {
    valor = valores[k];
    somatoria_dp += Math.pow(valor - media, 2);
  }

  desvio_padrao = Math.sqrt(somatoria_dp / n);
  document.getElementById("desvio_padrao").text = desvio_padrao.toString();
  document.getElementById("media").text = media.toString();
  document.getElementById("desvio_padrao_media") = desvio_padrao/(Math.sqrt(n));


  }
