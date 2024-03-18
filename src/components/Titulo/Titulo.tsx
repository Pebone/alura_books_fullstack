import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  cor?: string;
  fontSize?: string
  alinhamento?: string
}

const Title = styled.h2<Props>`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #${(props) => props.cor || "EB9B00"};
  font-size: ${(props) => props.fontSize || "18px"};
  text-align: ${(props) => props.alinhamento || "center"};
  margin: 0;
`;

function Titulo({ children, cor, fontSize, alinhamento }: Props) {
  return (
    <>
      <Title cor={cor} fontSize={fontSize} alinhamento={alinhamento}>{children}</Title>
    </>
  );
}

export default Titulo;
