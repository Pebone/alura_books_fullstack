import styled from "styled-components";
import InputPesquisa from "../Input/InputPesquisa";
import { useEffect, useState } from "react";
import { Livro } from "./dadosPesquisa";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState<
    Livro[] | undefined
  >();
  const [livros, setLivros] = useState<{ id: string; nome: string, src: string }[]>([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosAPI = await getLivros();
    setLivros(livrosAPI);
    console.log(livros);
  }

  async function insertFavorito(id: string) {
    await postFavorito(id);
    alert(`Livro de id: ${id} inserido!`);
  }

  interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
  }

  const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return <Resultado onClick={onClick}>{children}</Resultado>;
  };

  return (
    <>
      <PesquisaContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
        <InputPesquisa
          placeholder="Escreva sua próxima leitura"
          onBlur={(event) => {
            const textoDigitado = event.target.value;
            const resultadoPesquisa = livros.filter((livro) =>
              livro.nome.includes(textoDigitado)
            );
            setLivrosPesquisados(resultadoPesquisa);
          }}
        />
        {livrosPesquisados?.map((livro) => (
          <Button onClick={() => insertFavorito(livro.id)}>
            <img key={livro.id} src={livro.src} />
            <p>{livro.nome}</p>
          </Button>
        ))}
      </PesquisaContainer>
    </>
  );
}

export default Pesquisa;
