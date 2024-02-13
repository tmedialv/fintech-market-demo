import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col text-xs lg:text-sm text-right self-center">
      <span className="text-gray-700">Welcome back,</span>
      <Link href="#" className="font-semibold">
        Toms Petersons
      </Link>
    </div>
  );
}
