import styled from "styled-components";
import Pesquisa from "../components/Pesquisa/Pesquisa";
// import UltimosLancamentos from "../components/UltimosLancamentos/UltimosLancamentos";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function Home() {
  return (
    <>
      <HomeContainer>
        <Pesquisa />
        {/* <UltimosLancamentos /> */}
      </HomeContainer>
    </>
  );
}

export default Home;
