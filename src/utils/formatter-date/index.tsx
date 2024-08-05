export default function FormatDate(dateString: string): string {
  const cleanDateString = dateString.replace(/[^\dT:.-]/g, "");
  const date = new Date(cleanDateString);

  if (isNaN(date.getTime())) {
    throw new Error("Data inválida");
  }

  return date.toLocaleDateString("pt-BR");
}
