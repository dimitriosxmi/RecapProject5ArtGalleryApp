import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const { data, error, isLoading } = useSWR(URL);

  //#region Data fetch handling
  if (error) {
    return (
      <h1>
        An error occured while return the data
        <br />
        {error.message}
      </h1>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Data not loaded.</h1>;
  }
  //#endregion

  return <ArtPieces pieces={data} />;
}
