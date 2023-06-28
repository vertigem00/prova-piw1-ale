import { useEffect, useState } from "react";

//criando com arrow e colocando o array de alunos
const Questao1X = (props) => {
  const alunos = [
    { nome: "Joao", notas: { ap1: 4.9, ap2: 5.2 } },
    { nome: "Isac", notas: { ap1: 7.8, ap2: 6.1 } },
    { nome: "julia", notas: { ap1: 9.4, ap2: 8.4 } }
  ];
  return <Questao1Y />;
};

//criando utilizando tradicional
function Questao01Y(props) {
  const [aprovados, setAprovados] = useState([]);
  //const para guardar os alunos aprovados

  //laço dentro do useEffect para tirar a média dos alunos aprovados e inserir o aluno que passou na const
  useEffect(() => {
    for (let i = 0; i === 2; i++) {
      const media = (i.ap1 + i.ap2) / 2;
      if (media >= 5) setAprovados(props.alunos[i]);
    }
  }, [setAprovados]);

  //renderizando os alunos
  return "" + { aprovados };
}

export default Questao1X;
