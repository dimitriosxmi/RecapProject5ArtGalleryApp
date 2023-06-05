import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (!data) return <p>Data not available.</p>;
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </SWRConfig>
  );
}
