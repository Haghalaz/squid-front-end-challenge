import { Loader2 } from "lucide-react";
import { Suspense, lazy } from "react";

const Header = lazy(() => import("@atoms/header"));
const Feed = lazy(() => import("@organisms/feed"));

function App() {
  return (
    <main className="px-32 py-12 h-screen space-y-12 overflow-y-scroll">
      <Suspense fallback={<Loader2 className="animate-spin mx-auto" />}>
        <Header />
      </Suspense>

      <Suspense fallback={<Loader2 className="animate-spin mx-auto" />}>
        <Feed />
      </Suspense>
    </main>
  );
}

export default App;
