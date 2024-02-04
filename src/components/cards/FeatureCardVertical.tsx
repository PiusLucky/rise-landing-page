import { Check } from "lucide-react";
import React from "react";

interface IProps {
  image_url: string;
  title: string;
  description?: string;
  options?: string[];
  reverse?: boolean;
}

function FeatureCardVertical({
  image_url,
  title,
  description,
  options,
  reverse = false,
}: IProps) {
  return (
    <div
      className={`flex items-center px-8  gap-6 bg-[#171717] rounded-sm  ${
        reverse ? "flex-col md:flex-col-reverse" : "flex-col"
      }`}
    >
      <div className="">
        <img src={image_url} alt="feature image" />
      </div>
      <div className="mb-8">
        <p className="text-[30.4px] text-white font-bold my-4 text-center">
          {title}
        </p>
        {description && (
          <p className="text-[18px] text-customGray text-center">
            {description}
          </p>
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

export default FeatureCardVertical;
