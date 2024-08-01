import { useEffect } from "react";
import useSWR from "swr";

import { AtSign, Calendar, Heart, MessageCircle } from "lucide-react";

function App() {
  const fetcher = (url: string): Promise<DataResponse[]> =>
    fetch(url).then((res) => res.json());

  const {
    data,
    error,
    isLoading,
  }: { data: DataResponse[]; error: boolean; isLoading: boolean } = useSWR(
    "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic",
    fetcher,
  );

  useEffect(() => {
    console.log(data?.[0].link);
    console.log(`Loading: `, isLoading);
    console.log(`Error: `, error);
  }, [data, error, isLoading]);

  return (
    <main className="px-32">
      <img className="w-72 my-4 mx-auto" src="/logo.svg" alt="Squit It Logo" />

      {data && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {data.map((item) => (
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                className="size-full"
                src={item.imagens.thumbnail.url}
                alt="Squit It Logo"
              />

              <div className="absolute top-0 size-full bg-stone-700/80">
                <Heart />
                <MessageCircle />
                <Calendar />
                <AtSign />

                {item.upvotes}
                {item.criadoEm}
                {item.comentarios}

                {item.metadados.users_in_photo?.map((user) => (
                  <p>{user.user.username}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
