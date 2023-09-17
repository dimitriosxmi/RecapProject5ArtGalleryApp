import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

const mockData = [
  {
    slug: "clay-bust-sculptures",
    artist: "dilara irem",
    name: "Clay Bust Sculptures",
    imageSource:
      "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
    year: "2022",
    genre: "Classics",
    colors: ["#27231d", "#af8b69", "#775942", "#8a745b", "#6c6c6c"],
    dimensions: { height: 1280, width: 1920, type: "jpg" },
  },
  {
    slug: "bread-and-fruits",
    artist: "Lisa vhb",
    name: "Flatlay Photography of Bread and Fruits",
    imageSource:
      "https://example-apis.vercel.app/assets/art/bread-and-fruits.jpg",
    year: "unknown",
    genre: "Veggie Foods",
    colors: ["#dadee1", "#3c2938", "#994836", "#e1be47", "#8f9197"],
    dimensions: { height: 3229, width: 1920, type: "jpg" },
  },
];

test("renders ArtPiece component for each piece", () => {
  render(<ArtPieces pieces={[...mockData]} />);

  mockData.forEach((mockPiece) => {
    const artPiece = screen.getByText(mockPiece.name);
    console.log(artPiece);
    expect(artPiece).toBeInTheDocument();
  });
});
