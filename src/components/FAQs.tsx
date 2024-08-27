import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { FaQuestionCircle, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const faqs: FAQItem[] = [
  {
    question: "Can I use Albino for my clients?",
    answer:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
    link: "Click to learn more",
  },
  {
    question: "Does it work with WordPress?",
    answer:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
  },
  {
    question: "Do I get free updates?",
    answer:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
  },
  {
    question: "Will you provide support?",
    answer:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
  },
];

const FAQs: React.FC = () => {
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

          stagger: 0.5,
        });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="bg-gray-900 text-white py-16 px-4 lg:px-8 mx-2 md:mx-4 rounded-b-lg">
      <div data-anim="trigger" className="max-w-7xl mx-auto">
        <div data-anim="fadein" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="">
              <div className="flex items-start mb-4">
                <FaQuestionCircle className="fill-green stroke-white mr-3 text-2xl" />
                <h3 className="text-xl font-semibold">{faq.question}</h3>
              </div>
              <p className="text-v-light-blue mb-4 pr-4 md:max-w-[80%] pl-10">{faq.answer}</p>
              {faq.link && (
                <a href="#" className="pl-10 text-green flex items-center hover:underline">
                  {faq.link} <FaArrowRight className="ml-2" />
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray">
            Haven't got your answer?{" "}
            <a href="#" className="text-green hover:underline">
              Contact our support now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
