import React from "react";

export type TTestimonial = {
  title: string;
  comment: string;
  by: string;
  occupation: string;
  imgUrl: string;
};

type TestimonialProps = {
  testimonial: TTestimonial;
};

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className=" flex flex-col items-center gap-y-4 p-6 rounded-lg max-w-md mx-auto text-center">
      <img src={testimonial.imgUrl} alt={`${testimonial.by}'s profile`} className="w-20 h-20 rounded-full mb-4" />
      <h2 className="text-xl font-semibold">“{testimonial.title}”</h2>
      <p className="text-gray-700 text-lg py-4">{testimonial.comment}</p>
      <div>
        <p className=" font-bold text-gray-900">{testimonial.by}</p>
        <p className=" text-gray-500">{testimonial.occupation}</p>
      </div>
    </div>
  );
};

export default Testimonial;
