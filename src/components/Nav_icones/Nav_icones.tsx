import styled from "styled-components";

interface Props {
  icones: string[];
}

const NavIconesContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function Nav_icones({ icones }: Props) {
  return (
    <>
      <NavIconesContainer>
        {icones.map((icone) => (
          <li key={icone}>
            <img src={icone} />
          </li>
        ))}
      </NavIconesContainer>
    </>
  );
}

export default Nav_icones;
