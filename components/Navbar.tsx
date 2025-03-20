import { NAV_LINKS } from "@/constants/indext";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={144} height={20} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="font-regular tracking-wide text-zinc-500 flexCenter cursor-pointer pb-1.5 hover:text-black transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button variant="default">Log In</Button>
      </div>

      <Image
        src="menu.svg"
        alt="Menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
