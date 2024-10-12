import Logo from "@/components/logo";
import Naming from "@/components/naming";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <div className="mt-32 glowing rounded-3xl shadow-2xl p-7 flex gap-4 md:gap-6 items-center justify-center bg-gradient-to-br from-[#6400E2] to-[#341C97]">
        <div className="w-12 md:w-24">
          <Logo />
        </div>
        <div className="translate-y-1 w-44 md:w-80">
          <Naming />
        </div>
      </div>
      <div className="mt-12 text-center">
        <h1 className="font-bold text-3xl md:text-[2.5rem] max-w-[340px] md:max-w-[550px] md:leading-normal text-violet-950 m-auto">
          The right place to log and share all the movies you like
        </h1>
        <h2 className="font-semibold text-xl mt-2">
          Soon available on AppStore and PlayStore
        </h2>
      </div>
    </div>
  );
}
