import { FC, useRef } from "react";
import Step, { StepData } from "./Step";
import imgSrc from "../assets/images/project.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const steps: StepData[] = [
  {
    number: 1,
    title: "Create a project",
    content: "With lots of unique blocks, you can easily build a page without coding.",
  },
  {
    number: 2,
    title: "Assign related people",
    content: "With lots of unique blocks, you can easily build a page without coding.",
  },
  {
    number: 3,
    title: "Make it done on-time",
    content: "With lots of unique blocks, you can easily build a page without coding.",
  },
];

const Content2: FC = () => {
  const containerRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

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
          stagger: 0.5,
        })
        .from("[data-anim='fadein-l']", {
          duration: 0.6,
          opacity: 0,
          x: 20,
          stagger: 1,
          delay: 0.4,
        })
        .from(
          "[data-anim='fadein-r']",
          {
            duration: 0.6,
            opacity: 0,
            x: -20,
            stagger: 1,
          },
          "-=.6",
        );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef}>
      <div data-anim="trigger" className="max-w-[80rem] mx-auto py-16 md:py-20 px-8">
        <hgroup className="flex flex-col items-center space-y-6 text-center">
          <h1 data-anim="fadein" className="text-3xl md:text-4xl font-bold tracking-tighter">
            Manage your projects fast
          </h1>
          <h4 data-anim="fadein" className="text-base md:text-xl text-gray-500 max-w-full md:max-w-[50%] mx-auto">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </h4>
        </hgroup>
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center md:gap-x-16 lg:gap-x-32 space-y-8 md:space-y-0">
          <div data-anim="fadein-l" className="w-full md:w-auto">
            <img src={imgSrc} alt="project image" className="max-w-full h-auto" />
          </div>
          <div data-anim="fadein-r" className="flex flex-col gap-y-8 w-full md:w-auto">
            {steps.map((step, index) => (
              <Step key={index} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2;
