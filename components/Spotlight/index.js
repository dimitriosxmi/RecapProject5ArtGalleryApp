import Image from "next/image";
import ArtPiece from "../ArtPiece";
import { StyledList } from "../ArtPieces";
import { ListItem, Headling } from "../ArtPiece";
import styled from "styled-components";

const SpotlightHeadline = styled(Headling)`
  color: gray;
  font-size: 2rem;
`;

const StyledName = styled.span`
  padding: 0.5rem;
  color: lightgray;
  display: block;
`;

const SpotlightList = styled(StyledList)`
  background-color: rgb(32, 33, 36);
  flex-direction: column;
`;

const StyledMainHeader = styled.h1`
  color: #ce5959;
  text-align: center;
  background-color: transparent;
  text-transform: uppercase;
`;

export default function Spotlight({ imageSource, artist, name }) {
  return (
    <SpotlightList>
      <StyledMainHeader>Art Gallery</StyledMainHeader>
      <ListItem>
        <SpotlightHeadline>Spotlight Now:</SpotlightHeadline>
        <ArtPiece
          imageSource={imageSource}
          artist={artist}
          name={name}
          color={{ color: "gray" }}
        />
      </ListItem>
    </SpotlightList>
  );
}
