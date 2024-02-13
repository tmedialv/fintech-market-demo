import Link from "next/link";
import Image from "next/image";
import Welcome from "fintech/app/(shared)/components/Welcome";

export default function Header() {
  return (
    <div className="bg-white py-8 flex border-b">
      <div className="container flex justify-between">
        <Link href="/" className="w-1/2 lg:w-full min-w-[240px] max-w-[280px]">
          <Image
            width={0}
            height={0}
            priority
            loading="eager"
            alt="Tmedia Logo"
            src="/logos/tmedia-logo.svg"
            className="w-full"
          />
        </Link>
        <Welcome />
      </div>
    </div>
  );
}
