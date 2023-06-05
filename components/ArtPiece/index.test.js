import { render, screen } from "@testing-library/react";
import ArtPiece from ".";

const mockData = {
  slug: "man-digital-illustration",
  artist: "Francesco Ungaro",
  name: "Man Digital Illustration",
  imageSource:
    "https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg",
  year: "2006",
  genre: "Modern Art",
  colors: ["#3d803b", "#073204", "#c5dedb", "#90b59f", "#afc6b5"],
  dimensions: { height: 2581, width: 1920, type: "jpg" },
};

test("render heading, image and artist text", () => {
  render(<ArtPiece {...mockData} />);

  const heading = screen.getByRole("heading", { level: 3 });
  const image = screen.getByRole("img");
  const artist = screen.getByText(`Artist: ${mockData.artist}`);

  expect(heading).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
});

test("heading is not empty", () => {
  render(<ArtPiece {...mockData} />);

  const heading = screen.getByRole("heading", { level: 3 });

  expect(heading).not.toBeEmptyDOMElement();
});

test("image source and alt is not empty", () => {
  render(<ArtPiece {...mockData} />);

  const image = screen.getByRole("img");
  const imageSource = image.getAttribute("src");

  expect(image).toHaveAttribute("alt", mockData.name);
  // We got a temporary work around to check for the src
  // because of react's or nextjs's weird <Image />
  // component handling that changes the URL.
  expect(imageSource).toMatch(mockData.slug);
});

test("paragraph is not empty", () => {
  render(<ArtPiece {...mockData} />);

  const paragraph = screen.getByText(mockData.artist, { exact: false });

  expect(paragraph).not.toBeEmptyDOMElement();
});
