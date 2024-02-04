import { Check } from "lucide-react";
import React from "react";

interface IProps {
  image_url: string;
  title: string;
  description?: string;
  options?: string[];
  reverse?: boolean;
  startFromBeginning?: boolean;
}

function FeatureCard({
  image_url,
  title,
  description,
  options,
  reverse = false,
  startFromBeginning = false,
}: IProps) {
  return (
    <div
      className={`flex  gap-6 bg-[#171717] rounded-sm px-8  ${
        reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      }`}
    >
      <div className="">
        <img src={image_url} alt="feature image" />
      </div>
      <div className={`${startFromBeginning ? "" : "self-end"} mb-8`}>
        <p className="text-[30.4px] text-white font-bold my-4">{title}</p>
        {description && (
          <p className="text-[18px] text-customGray my-4">{description}</p>
        )}

        {options &&
          options?.map((option, index) => (
            <div key={index} className="flex gap-2">
              <Check color="#EC804F" />{" "}
              <p className="text-customGray text-[18px]">{option}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FeatureCard;
