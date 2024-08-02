import { FileQuestion } from "lucide-react";

export default function EmptyContent() {
  return (
    <div className="grid place-content-center text-stone-800">
      <div className="flex gap-2 items-center justify-center p-6 bg-gray-50 rounded-md border border-gray-200 shadow-sm">
        <FileQuestion className="size-4" />
        <p>Nenhum conteúdo para mostrar...</p>
      </div>
    </div>
  );
}
