import logo from "../../assets/logo.svg";
import Logo from "../Logo/Logo";
import perfil from "../../assets/perfil.svg";
import sacola from "../../assets/sacola.svg";
import Nav_menu from "../Nav_menu/Nav_menu";
import Nav_icones from "../Nav_icones/Nav_icones";
import styled from "styled-components";
import { Link } from "react-router-dom";

const textoOpcoes = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];
const icones = [perfil, sacola];

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <>
      <div>
        <HeaderContainer>
          <Link to="/">
            <Logo url={logo} alt="logo" />
          </Link>

          <Nav_menu textoOpcoes={textoOpcoes} />
          <Nav_icones icones={icones} />
        </HeaderContainer>
      </div>
    </>
  );
}

export default Header;
