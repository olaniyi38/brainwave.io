import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const stats = [
  {
    value: "1M+",
    label: "Customers visit Albino every month",
  },
  {
    value: "93%",
    label: "Satisfaction rate from our customers",
  },
  {
    value: "4.9",
    label: "Average customer ratings out of 5.00!",
  },
];

const Stats = () => {
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
         
        });
    },
    { scope: containerRef },
  );
  return (
    <section ref={containerRef} className="py-16 md:py-20 ">
      <div data-anim="trigger" className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 text-black">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-10 sm:gap-4">
          {stats.map((stat, index) => (
            <div data-anim="fadein" key={index} className="flex items-center gap-x-2 md:gap-x-4 font-gilroy-bold">
              <span className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{stat.value}</span>
              <p className="text-sm sm:text-base text-gray-600 max-w-[200px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
