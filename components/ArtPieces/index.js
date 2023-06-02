import ArtPiece from "../ArtPiece";
import { uid } from "uid";

export default function ArtPieces({ pieces }) {
  return pieces.map((piece) => {
    return <ArtPiece key={uid()} {...piece} />;
  });
}
