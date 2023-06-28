import { useState } from "react";

const Questao2 = () => {
  const [frente, setFrente] = useState(true);
  // indica se está de frente ou virado

  const pokemon = frente
    ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png";
  //determinando a url

  //Renderizando o resultado
  return (
    <>
      <img alt="para de dar warning pfv" src={pokemon} />
      <button onClick={() => setFrente(!frente)}>vira</button>
      {/*o estado da flag muda para falso no onclick*/}
    </>
  );
};

export default Questao2;
