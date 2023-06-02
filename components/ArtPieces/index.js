import ArtPiece from "../ArtPiece";
import { uid } from "uid";

export default function ArtPieces({ pieces }) {
  return pieces.map((piece) => {
    return (
      <ArtPiece
        key={uid()}
        title={piece.name}
        image={piece.imageSource}
        artist={piece.artist}
      />
    );
  });
}
