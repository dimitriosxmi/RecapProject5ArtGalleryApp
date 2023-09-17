import Image from "next/image";
import ArtPiece from "../ArtPiece";

export default function Spotlight({ imageSource, artist, name }) {
  return (
    <ul>
      <li>
        <h3>Spotlight Now: {name}</h3>
        <ArtPiece imageSource={imageSource} artist={artist} name={name} />
      </li>
    </ul>
  );
}
