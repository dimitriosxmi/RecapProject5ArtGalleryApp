import ArtPiece from "../ArtPiece";
import { uid } from "uid";
import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  width: 100vw;
  background-color: gray;
`;

export default function ArtPieces({ pieces }) {
  return (
    <StyledList>
      {pieces.map((piece) => {
        return <ArtPiece key={uid()} {...piece} />;
      })}
    </StyledList>
  );
}
