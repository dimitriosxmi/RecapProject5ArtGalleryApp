import Image from "next/image";
import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  min-width: 280px;
  overflow: hidden;
  height: 30rem;
`;

export const Headling = styled.h3`
  margin: 0;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  width: 280px;
  height: 180px;
  overflow: hidden;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: black;
`;

export default function ArtPiece({ name, imageSource, artist, color }) {
  return (
    <ListItem>
      <Headling style={color}>{name}</Headling>
      <ImageWrapper>
        <StyledImage
          width={"280"}
          height={"180"}
          src={imageSource}
          alt={name}
        />
      </ImageWrapper>
      <Text aria-label="Artist" style={color}>
        Artist: {artist}
      </Text>
    </ListItem>
  );
}
