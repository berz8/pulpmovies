import Link from "next/link";
import Logo from "./logo";
import Naming from "./naming";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center py-2 md:py-3">
      <Link href={"/"} className="flex items-center justify-center gap-1">
        <div className="w-6 md:w-10">
          <Logo />
        </div>
        <div className="translate-y-0.5 md:translate-y-1 w-32 md:w-52">
          <Naming />
        </div>
      </Link>
    </header>
  );
}
