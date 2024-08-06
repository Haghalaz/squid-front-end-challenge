import Logo from "@assets/img/logo.svg";

export default function Header() {
  return (
    <header>
      <img className="w-72 mx-auto" src={Logo as string} alt="Squid It Logo" />
    </header>
  );
}
