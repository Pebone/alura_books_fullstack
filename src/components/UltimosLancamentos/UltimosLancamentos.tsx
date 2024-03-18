import styled from "styled-components";
import { livros } from "./dadosUltimosLancamentos";
import Titulo from "../Titulo/Titulo";
import CardRecomenda from "../CardRecomenda/CardRecomenda";
import livro from "../../assets/livro2.png";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos() {
  return (
    <>
      <UltimosLancamentosContainer>
        <Titulo cor="EB9B00" fontSize="36px">
          Últimos Lançamentos
        </Titulo>
        <NovosLivrosContainer>
          {livros.map((livro) => (
            <div>
              <img src={livro.src}></img>
              {/* <p>{livro.nome}</p> */}
            </div>
          ))}
        </NovosLivrosContainer>
        <CardRecomenda
          titulo="Talvez você se interesse..."
          subtitulo="Angular 11"
          descricao="Construindo uma aplicação com a plataforma Google"
          url={livro}
        />
      </UltimosLancamentosContainer>
    </>
  );
}

export default UltimosLancamentos;
