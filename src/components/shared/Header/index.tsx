import Link from "next/link";

export function Header() {
  return (
    <div className="w-full h-[10vh] min-h-[70px] grid place-items-center bg-[#026635] text-white text-[2rem] tracking-wider">
      <Link href="/" referrerPolicy="no-referrer">
        <span>Breaking Bad Wiki</span>
      </Link>
    </div>
  );
}
