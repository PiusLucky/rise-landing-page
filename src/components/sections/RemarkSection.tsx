import React from "react";
import ReviewerCard from "../cards/ReviewerCard";

function RemarkSection() {
  const review_data = {
    review:
      "Cross-calendar blocking in Rise is awesome. It seamlessly integrates my personal and work calendars, ensuring I never  double-book or miss important events.",
    image: "/images/man_2.png",
    name: "Tuomas Artman",
    role: "Co-founder at Linear",
    useDarkText: true,
  };

  return (
    <section className="bg-white text-black px-8">
      <section className="w-full flex lg:items-center flex-col mt-8">
        <p className="text-[30px] md:text-[42.2px] md:max-w-[724px]">
          We believe humans can do great things. Remarkable work happens when
          you are able to bring the best version of yourself.
        </p>
        <p className="text-[30px] md:text-[42.2px] mt-4 md:max-w-[724px]">
          We want to help you go from overwhelmed to electrified, every single
          day.It's our mission to help you, and your team, have more time for
          what
          <span className="text-[30px] md:text-[42.2px] opacity-45">
            &nbsp;is truly important.
          </span>
        </p>

        <p className="text-[30px] md:text-[42.2px] opacity-45 md:max-w-[724px] lg:ml-[-24rem] mt-4">
          {" "}
          You are in charge.
        </p>
      </section>

      <section className="flex flex-col gap-16 lg:flex-row justify-center mt-32 ">
        <div>
          <p className="text-black text-[40.5px]">
            Built to navigate your busiest days
          </p>
          <p className="text-[#706D79] text-[22px]">
            Rise is packed with features that help you to be on top of things.
          </p>
        </div>
        <div>
          <img src="/images/f_7.png" alt="features" />
        </div>
      </section>

      <ReviewerCard {...review_data} />
    </section>
  );
}

export default RemarkSection;
