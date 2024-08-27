import { FC, useRef } from "react";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  isActive: boolean;
  links: {
    title: string;
    url: string;
  }[];
};

const MobileNav: FC<Props> = ({ isActive, links }) => {
  const containerRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  if (isActive) {
    tlRef.current = gsap.timeline().to(containerRef.current, {
      duration: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power3",
    });
  } else {
    tlRef.current = gsap.timeline().to(containerRef.current, {
      duration: 1,
      clipPath: "inset(0% 0% 100% 0%)",
      ease: "power3",
    });
  }

  console.log(isActive);

  return (
    <nav
      ref={containerRef}
      className={`fixed clip-up z-10 w-full shadow-md lg:hidden bg-white md:top-[5rem] ${isActive ? "active" : ""}`}
    >
      <div className=" p-4 md:px-6  ">
        <div className="flex flex-col gap-y-4">
          {links.map(({ title, url }) => (
            <a
              href={url}
              key={title + url}
              className="capitalize font-gilroy-medium hover:text-gray-600 inline-block overflow-hidden  py-2 "
            >
              <span className="inline-block">{title}</span>
            </a>
          ))}
        </div>
        <Button className="w-full mt-6">Join Us</Button>
      </div>
    </nav>
  );
};

export default MobileNav;
