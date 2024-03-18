import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  textoOpcoes: string[];
}

const NavMenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function Nav_menu({ textoOpcoes }: Props) {
  return (
    <>
      <NavMenuContainer>
        {textoOpcoes.map((opcao) => (
          <Link to={`/${opcao.toLowerCase()}`}>
            <li key={opcao}>
              <p>{opcao}</p>
            </li>
          </Link>
        ))}
      </NavMenuContainer>
    </>
  );
}

export default Nav_menu;
