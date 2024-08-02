import { CircleX } from "lucide-react";

export default function ErrorMessage() {
  return (
    <div className="grid place-content-center text-stone-800">
      <div className="flex gap-2 items-center justify-center p-6 bg-gray-50 rounded-md border border-gray-200 shadow-sm">
        <CircleX className="size-4" />
        <p>
          Algo deu errado, recarregue a página ou tente novamente mais tarde...
        </p>
      </div>
    </div>
  );
}
