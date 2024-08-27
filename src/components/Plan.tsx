import { FC } from "react";
import Button from "./Button";

export type PricingPlan = {
  type: string;
  amount: number;
  title: string;
  about: string;
};

const Plan: FC<{ plan: PricingPlan }> = ({ plan: { type, amount, title, about } }) => {
  return (
    <>
      <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 pt-8 sm:p-6 md:pb-4 flex flex-col gap-y-4">
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs sm:text-sm font-semibold">
              {type}
            </span>
          </div>
          <div className="text-center mb-3 sm:mb-4 text-black">
            <span className="text-3xl sm:text-5xl font-gilroy-bold">${amount}</span>
            <p className="text-center text-gray-600 text-sm sm:text-base mb-4 sm:mt-4">{title}</p>
          </div>
          <p className="text-center text-gray-700 text-sm sm:text-base mb-6 sm:mb-8">{about}</p>
          <Button size="large" className="w-full text-sm sm:text-base">
            Get started for free
          </Button>
        </div>
      </div>
    </>
  );
};

export default Plan;
