## Projeto para Auxílio em cálculos repetitivos de laboratórios de Física

Olá! Bem-vindo à página de divulgação dos projetos para auxílio à graduação do IEEE. Segue os links para baixar os programas:


### Programa 1: Desvio Padrão e Média<!--(https://github.com/rafaelsiqueira100/ProjetoLabFisica/raw/gh-pages/desvio_padrao.zip)-->
<input type="text">[button onclick="main();" value="Calcular"]

### Programa 2: Desvio Padrão e Média(Quando há Valores Repetidos)<!--(https://github.com/rafaelsiqueira100/ProjetoLabFisica/raw/gh-pages/desvio_padrao_repetidos.zip)-->
<input type="text">[button onclick="main2();" value="Calcular"]


<!--[Logo](https://user-images.githubusercontent.com/20904543/178299055-027d25c3-5855-4793-b3d0-8dd10b66976a.png)-->
<img src="https://user-images.githubusercontent.com/20904543/178299055-027d25c3-5855-4793-b3d0-8dd10b66976a.png" alt="drawing" width="200" style="text-align: center"/>
{% for js in page.customjs %}
 <script async type="text/javascript" src="{{ js }}"></script>
 {% endfor %}
  
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
      let desvio_padrao, i, media, somatoria, somatoria_dp, valor, valores;
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
      document.getElementById("desvio_padrao_media") = desvio_padrao/(Math.sqrt(n));
  }
 
  </script>
