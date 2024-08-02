import { SqLoader } from "@squidit/react-css";

export default function Loader({ hide }: { hide?: boolean }) {
  if (hide) return;

  return (
    <div className="grid place-content-center animate-pulse font-bold">
      <SqLoader />
    </div>
  );
}
