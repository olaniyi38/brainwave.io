import { FC, useRef } from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import FooterLinkList from "./FooterLinkList";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const socials = [
  {
    icon: <AiFillFacebook className="w-6 h-auto fill-blue" />,
    url: "https://www.facebook.com",
  },
  {
    icon: <AiFillTwitterCircle className="w-6 h-auto fill-sky-600" />,
    url: "https://www.twitter.com",
  },
  {
    icon: <AiOutlineInstagram className="w-6 h-auto fill-pink-400" />,
    url: "https://www.instagram.com",
  },
  {
    icon: <AiFillLinkedin className="w-6 h-auto fill-sky-900" />,
    url: "https://www.linkedin.com",
  },
];

const Footer: FC = () => {
  const containerRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tlRef.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "[data-anim='trigger']",
            start: "top 90%",
            // markers: true,
          },
        })
        .from("[data-anim='fadein']", {
          duration: 0.6,
          opacity: 0,
          y: 20,
          ease: "power3",
          stagger: 0.8,
        });
    },
    { scope: containerRef },
  );

  return (
    <footer ref={containerRef} className="pt-20 pb-16 px-8 border-t border-t-v-light-blue sm:px-0">
      <div data-anim="trigger" className="flex flex-col md:flex-row max-w-[80rem] mx-auto text-black">
        <div data-anim="fadein" className="flex-1 flex flex-col gap-y-8 mb-8 md:mb-0">
          <h1 className="font-bold text-3xl">Brainwave.io</h1>
          <p className="max-w-[60%] text-sm">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
          <div className="flex gap-x-8">
            {socials.map(({ icon, url }) => (
              <a href={url} key={url}>
                {" "}
                {icon}{" "}
              </a>
            ))}
          </div>
        </div>
        <div data-anim="fadein" className="flex-[1.5] ">
          <FooterLinkList />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
