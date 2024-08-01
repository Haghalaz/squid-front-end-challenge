import { useEffect, useState } from "react";

import useSWR from "swr";

function App() {
  const fetcher = (url: string): Promise<DataResponse> =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic",
    fetcher,
  );

  useEffect(() => {
    console.log(data?.[0].link);
    console.log(`Loading: `, isLoading);
    console.log(`Error: `, error);
  }, [data, error, isLoading]);

  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;
