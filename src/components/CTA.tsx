import { FC, useRef } from "react";
import Button from "./Button";
import { HiArrowRight } from "react-icons/hi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CTA: FC = () => {
  const containerRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tlRef.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "[data-anim='fadein']",
            start: "top 50%",
            // markers: true,
          },
        })
        .from("[data-anim='fadein']", {
          duration: 0.6,
          opacity: 0,
          y: 20,
          ease: "power3",
        });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className=" pt-8">
      <div
        data-anim="fadein"
        className="max-w-[80rem] mx-auto flex flex-col items-center justify-between py-8 px-4 md:flex-row md:space-x-6"
      >
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Build better landing page fast</h2>
          <p className="mt-4 text-lg text-gray-600 md:max-w-[80%]">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
        </div>
        <div className="mt-6 flex  sm:flex-row space-x-4 md:mt-0 flex-1 justify-end">
          <Button
            icon={HiArrowRight}
            size="large"
            color="white"
            className="gap-x-6 py-4 text-blue text-base bg-v-light-blue"
          >
            Learn more{" "}
          </Button>
          <Button icon={HiArrowRight} size="large" className="gap-x-6 py-4 text-base">
            Get it now{" "}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
