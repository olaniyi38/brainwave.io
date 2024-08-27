import { useRef } from "react";
import imgSrc from "../assets/images/hero-img.svg";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const containerRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tlRef.current = gsap
        .timeline()
        .from('[data-animate="fadeIn"]', {
          opacity: 0,
          delay: 0.3,
          duration: 1,
          y: 10,
          stagger: 0.5,
          ease: "power3",
        })
        .to(".overlay", {
          duration: 0.7,
          clipPath: "inset(0% 0% 100% 0%)",
        },"-=.7")
        .from(
          '[data-animate="reveal"]',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3",
            scale: 1.2,
          },
          "-=.7",
        )
        .from("[data-anim='btn-group']", {
          duration: 0.5,
          opacity: 0,
        },"-=.5");
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-8 sm:py-12 md:py-16 text-black px-4 sm:px-6">
      <div className="max-w-[45rem] mx-auto text-center space-y-6 sm:space-y-8">
        <h1
          data-animate="fadeIn"
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-tight sm:leading-[1.2] md:leading-[4rem]"
        >
          Get things done by awesome remote team
        </h1>
        <p data-animate="fadeIn" className="w-full sm:w-[80%] md:w-[65%] mx-auto font-light text-sm sm:text-base">
          We share common trends and strategies for improving your rental income and making sure you stay in high
          demand.
        </p>
        <div data-anim="btn-group" className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button>Get started free</Button>
          <button className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base">
            Learn more
          </button>
        </div>
      </div>
      <div data-animate="reveal" className="relative grid place-items-center mt-16 sm:mt-24 md:mt-32">
        <div className="overlay bg-white absolute inset-0"></div>
        <img src={imgSrc} alt="hero-img" className="shadow-[3px_25px_60px_-15px_rgba(0,0,0,0.2)] max-w-full h-auto" />
      </div>
    </section>
  );
}

export default Hero;
