// Step.tsx
import React from "react";

export type StepData = {
  number: number;
  title: string;
  content: string;
};

type StepProps = {
  step: StepData;
};

const Step: React.FC<StepProps> = ({ step }) => (
  <div className="flex items-start gap-x-4 max-w-sm">
    <div className="grid place-items-center py-2 px-4  bg-v-light-blue text-light-blue rounded-full text-xl">
      <span>{step.number}</span>
    </div>
    <div >
      <h2 className=" text-xl font-semibold">{step.title}</h2>
      <p className="mt-4 text-gray-600">{step.content}</p>
    </div>
  </div>
);

export default Step;
