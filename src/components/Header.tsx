import { HiMenu } from "react-icons/hi";
import Button from "./Button";
import MobileNav from "./MobileNav";
import { useState } from "react";

const LINKS = [
  {
    title: "demos",
    url: "#",
  },
  {
    title: "pages",
    url: "#",
  },
  {
    title: "support",
    url: "#",
  },
  {
    title: "contact",
    url: "#",
  },
];

function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <header className="text-black bg-white z-20 sticky top-0 py-4 lg:py-6">
      <div className="px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        <div>
          <h1 className="font-black text-xl sm:text-2xl">Brainwave.io</h1>
        </div>
        <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-12 text-sm font-semibold capitalize">
          {LINKS.map(({ title, url }) => (
            <a key={title} href={url} className="inline-block hover:text-blue-600 transition-colors font-gilroy-medium">
              {title}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-x-4">
          <Button className="hidden sm:block">Get started free</Button>
          <Button
            onClick={() => setMobileNavActive(!mobileNavActive)}
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
          >
            <HiMenu />
          </Button>
        </div>
      </div>
      <MobileNav isActive={mobileNavActive} links={LINKS} />
    </header>
  );
}

export default Header;
