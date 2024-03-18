import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteFavorito, getFavoritos } from "../servicos/favoritos";
import livroImg from "../assets/livro.png";

const FavoritosContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const Titulo = styled.div`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  text-align: center;
  padding: 0 100px;
  cursor: pointer;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const ResultadoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState<{ id: string; nome: string }[]>(
    []
  );

  async function fetchFavoritos() {
    const favoritos = await getFavoritos();
    setFavoritos(favoritos);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  async function deleteFavoritos(id: string) {
    await deleteFavorito(id);
    await fetchFavoritos();
    alert(`Livro de id: ${id} deletado`);
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
      <FavoritosContainer>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {favoritos.length !== 0
            ? favoritos.map((favorito) => (
                <Button
                  onClick={() => deleteFavoritos(favorito.id)}
                  key={favorito.id}
                >
                  <img src={livroImg} />
                  <p>{favorito.nome}</p>
                </Button>
              ))
            : "null"}
        </ResultadoContainer>
      </FavoritosContainer>
    </>
  );
}

export default Favoritos;
