import useSWR from "swr";

export default function usePosts() {
  const fetcher = (url: string): Promise<PhotoDetails[]> =>
    fetch(url).then((res) => res.json());

  const {
    data,
    error,
    isLoading,
  }: { data: PhotoDetails[]; error: boolean; isLoading: boolean } = useSWR(
    "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic",
    fetcher,
  );

  return { data, error, isLoading };
}
