import { FC, useRef } from "react";
import Plan, { PricingPlan } from "./Plan";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const pricingPlans: PricingPlan[] = [
  {
    type: "Basic",
    amount: 29,
    title: "One time purchase",
    about: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    type: "Standard",
    amount: 49,
    title: "One time purchase",
    about: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    type: "Premium",
    amount: 99,
    title: "One time purchase",
    about: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
];

const Pricing: FC = () => {
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
          stagger: 0.8,
        })
        .from("[data-anim='fadein2']", {
          duration: 0.6,
          opacity: 0,
        });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mx-2 md:mx-4 rounded-t-lg"
    >
      <div data-anim="trigger" className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 data-anim="fadein" className="text-3xl sm:text-4xl font-extrabold mb-3">
            Pricing & Plans
          </h2>
          <p data-anim="fadein" className="md:text-xl text-gray-400 max-w-2xl mx-auto">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
        </div>
        <div
          data-anim="fadein2"
          className="mt-12 px-4 sm:mt-16 space-y-8 sm:space-y-0 sm:flex sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto "
        >
          {pricingPlans.map((plan) => (
            <Plan key={plan.type} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
