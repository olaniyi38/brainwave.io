
import imgSrc from "../assets/images/profile.svg";
import Button from "./Button";
import { HiArrowRight } from "react-icons/hi";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Content1() {
  const containerRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      tlRef.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "[data-anim='trigger']",
            start: "top 50%",
            // markers: true,
            
          },
        })
        .from("[data-anim='fadein']", {
          duration: 0.6,
          opacity: 0,
          y: 20,
          stagger: .5,
        })
        .to(
          ".overlay",
          {
            duration: 0.6,
            clipPath: "inset(0% 0% 100% 0%)",
            delay: 0.4,
          },
          "-=.3",
        )
        .from(
          "[data-anim='img']",
          {
            y: 20,
            duration: 0.6,
            ease: "power3.inout",
            scale: 1.1,
          },
          "-=.6",
        )
        .from(
          "button",
          {
            duration: 1,
            opacity: 0,
          },
          "-=.6",
        );
    },
    { scope: containerRef },
  );
  return (
    <section ref={containerRef} className="w-full py-20 bg-v-light-blue">
      <div
        data-anim="trigger"
        className="max-w-[70rem] mx-auto flex flex-col md:flex-row md:gap-x-10 items-center text-black"
      >
        <div className="w-full md:w-1/2 px-8 ">
          <div className="space-y-10 sm:max-w-[80%] mx-auto">
            <h2 data-anim="fadein" className="font-bold text-3xl leading-[2.5rem]">
              Getting started with Albino is easier than ever
            </h2>
            <p data-anim="fadein" className="text-lg">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page so
              quickly with Albino.
            </p>
            <Button size="large" icon={HiArrowRight} className="gap-x-8">
              Get Started Free
            </Button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 p-4">
          <div className="overlay bg-v-light-blue absolute inset-0 w-[102%] h-[101%] z-10"></div>
          <img data-anim="img" src={imgSrc} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Content1;
