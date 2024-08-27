import { FC, useRef } from "react";
import Testimonial, { TTestimonial } from "./Testimonial";
import img1 from "../assets/images/profil-img1.svg";
import img2 from "../assets/images/profil-img2.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const testimonials: TTestimonial[] = [
  {
    title: "You made it so simple",
    comment: "My new site is so much faster and easier to work with than my old site.",
    by: "Corey Valdez",
    occupation: "Founder at Zenix",
    imgUrl: img1,
  },
  {
    title: "Simply the best",
    comment: "Better than all the rest. I’d recommend this product to beginners.",
    by: "Ian Klein",
    occupation: "Digital Marketer",
    imgUrl: img2,
  },
];

const Testimonials: FC = () => {
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
    <section ref={containerRef} className="py-20 bg-v-light-blue">
      <div data-anim="trigger">
        <div data-anim="fadein" className="flex flex-col gap-y-8 md:flex-row md:gap-x-4 max-w-[80rem] mx-auto">
          {testimonials.map((t, index) => (
            <Testimonial key={index} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
