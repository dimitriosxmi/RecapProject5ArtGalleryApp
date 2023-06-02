import Image from "next/image";

export default function ArtPiece({ title, image, artist }) {
  return (
    <li>
      <h3>{title}</h3>
      <Image width={"192"} height={"108"} src={image} alt={title} />
      <p>{artist}</p>
    </li>
  );
}
