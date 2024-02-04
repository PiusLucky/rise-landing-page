import React from "react";
import MainButton from "../common/MainButton";
import { ChevronRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center mt-32 px-8 ">
      <div className="bg-customDark py-3 px-4 inline-flex text-white rounded-full">
        Announcing our Public Beta <ChevronRight />
      </div>

      <p className="text-[35.8px] md:text-[75.8px] text-center mt-8">
        The calendar that works for you
      </p>
      <p className="text-[#706D79] font-semibold text-center my-4">
        Rise helps you schedule, optimize and protect your day to give you more
        time for what's important
      </p>
      <div className="mt-8">
        <MainButton
          text="Get Started"
          classes="h-[56px] w-[163.52px]"
          rightIconRoute="/images/chevron_right.svg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
