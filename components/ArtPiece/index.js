import Image from "next/image";

export default function ArtPiece({ name, imageSource, artist }) {
  return (
    <li>
      <h3>{name}</h3>
      <Image width={"192"} height={"108"} src={imageSource} alt={name} />
      <p aria-label="Artist">Artist: {artist}</p>
    </li>
  );
}
