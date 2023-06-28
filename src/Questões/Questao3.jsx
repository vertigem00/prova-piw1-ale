import React, { useState } from "react";

const Questao3 = () => {
  const [maiorPop, setMaiorPop] = useState("");
  const [menorPop, setMenorPop] = useState("");
  //Criando estado para armazenar seus respectivos valores

  //pegando um JSON de um site e o organizando em um objeto manipulavel
  fetch(
    "https://restcountries.com/v3.1/region/europe?fields=capital,population"
  )
    .then((response) => response.json())
    .then((data) => {
      let maiorPop = data[0].population;
      let menorPop = data[0].population;
      let maiorIndice = 0;
      let menorIndice = 0;

      /* criando variáveis locais para passar para os useState  */

      for (let i = 1; i < data.length; i++) {
        if (data[i].pop > maiorPop) {
          maiorPop = data[i].pop;
          maiorIndice = i;
        }
        if (data[i].pop < menorPop) {
          menorPop = data[i].population;
          menorIndice = i;
        }
      }

      /* criando laço para detectar a maior e menor população junto a seus indices  */

      setMaiorPop(data[maiorIndice].capital[0]);
      setMenorPop(data[menorIndice].capital[0]);

      /* alimentando as is useState com as informações pegas no laço */

      console.log(data);
    })
    .catch((error) => console.log(error));

  //renderizando
  return (
    <div>
      <h2>Capitais dos países com maior e menor população:</h2>
      <p>Maior população: {maiorPop}</p>
      <p>Menor população: {menorPop}</p>
    </div>
  );
};

export default Questao3;
