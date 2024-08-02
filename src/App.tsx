import Header from "./components/atoms/header";
import Feed from "./components/organisms/feed";

function App() {
  return (
    <main className="px-32 py-12 h-screen space-y-12 overflow-y-scroll">
      <Header />
      <Feed />
    </main>
  );
}

export default App;
