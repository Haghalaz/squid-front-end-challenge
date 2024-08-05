import useSWR from "swr";

export default function usePosts(): { data: PhotoDetails[] | undefined; error: boolean; isLoading: boolean } {
  const fetcher = (url: string): Promise<PhotoDetails[]> => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("https://us-central1-squid-apis.cloudfunctions.net/test-front-basic", fetcher);

  return { data, error, isLoading };
}
