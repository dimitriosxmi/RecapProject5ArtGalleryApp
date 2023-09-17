import { render, screen } from "@testing-library/react";
import Spotlight from "./index.js";

const mockData = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: { height: 2432, width: 1920, type: "jpg" },
  },
  {
    slug: "majestic-greek-sculpture",
    artist: "Rachel Claire",
    name: "Majestic Greek Sculpture",
    imageSource:
      "https://example-apis.vercel.app/assets/art/majestic-greek-sculpture.jpg",
    year: "2019",
    genre: "Classics",
    colors: ["#978e8b", "#2a201e", "#483833", "#d8d5d8", "#53443b"],
    dimensions: { height: 2880, width: 1920, type: "jpg" },
  },
];

// The art piece image is displayed 🖼️

test("image is displayed", () => {
  render(<Spotlight {...mockData[0]} />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

// The art piece artist is displayed 🖼️

test("artist is displayed", () => {
  render(<Spotlight {...mockData[1]} />);
  const artistParagraph = screen.getByText(mockData[1].artist, {
    exact: false,
  });
  expect(artistParagraph).toBeInTheDocument();
});
