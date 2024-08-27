import { useRef } from "react";
import { HiCodeBracket } from "react-icons/hi2";
import { MdOutlineSmartphone, MdSpeed } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FEATURES = [
  {
    title: "Project management",
    content: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: <HiCodeBracket className="fill-green  w-10 h-auto" />,
  },
  {
    title: "Time tracking",
    content: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: <MdSpeed className="fill-green w-10 h-auto" />,
  },
  {
    title: "Beautiful mobile app",
    content: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: <MdOutlineSmartphone className="fill-green w-10 h-auto" />,
  },
];

function Features() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tlRef.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "[data-anim='fadein']",
            start: "top 50%",
          },
        })
        .from("[data-anim='fadein'", {
          duration: .7,
          opacity: 0,
          y: 20,
        });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-8 sm:py-12 md:py-16">
      <div
        data-anim="fadein"
        className="max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-center gap-y-12 sm:gap-x-8 md:gap-x-16 lg:gap-x-32 text-black"
      >
        {FEATURES.map(({ title, content, icon }) => (
          <div key={title} className="flex flex-col gap-y-4 sm:gap-y-6 max-w-[18rem] w-full sm:w-1/3">
            <div>{icon}</div>
            <h5 className="font-bold text-lg sm:text-xl">{title}</h5>
            <p className="font-extralight text-sm sm:text-base">{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
