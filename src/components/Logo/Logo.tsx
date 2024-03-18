import styled from "styled-components";

interface Props {
  url: string;
  alt: string;
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Logo({ url, alt }: Props) {
  return (
    <>
      <LogoContainer>
        <img src={url} alt={alt} />
        <p>
          <strong>Alura</strong> Books
        </p>
      </LogoContainer>
    </>
  );
}

export default Logo;
