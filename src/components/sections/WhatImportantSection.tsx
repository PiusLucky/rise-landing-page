import React from "react";
import FeatureCard from "../cards/FeatureCard";
import FeatureCardVertical from "../cards/FeatureCardVertical";
import ReviewerCard from "../cards/ReviewerCard";

function WhatImportantSection() {
  const first_row_data = {
    image_url: "/images/f_1.png",
    title: "Automatically improve  focus time and resolve  conflicts",
    description:
      "Upgrade your important events to flexible meetings and Rise takes care of the rest.",
  };

  const second_row_data = {
    image_url: "/images/f_2.png",
    title: "Meet the fastest way to find the best time",
    options: [
      "Find time that preserves your focus",
      "Takes meeting preferences into account",
      "Works with anyone in your team",
      "Manages timezone differences",
    ],
    reverse: true,
  };

  const third_row_data = {
    image_url: "/images/f_3.png",
    title: "Automated cross-calendar blocking",
    description:
      "Automatically block off your dentist appointment in your private calendar in your work calendar, without exposing personal information.",
  };

  const fourth_row_data = {
    image_url: "/images/f_4.png",
    title: "Smart scheduling links that save you time",
    description:
      "Rise has built in scheduling links that nudge towards times that optimize for maximum focus time. You can even use it to schedule with multiple teammates.",
    reverse: true,
  };

  const fifth_row_data = {
    image_url: "/images/f_5.png",
    title: "Your focus time protected",
    description:
      "FocusGuard monitors your calendar and blocks off focus time when it's needed. You'll be more available while also protecting your focus time goals.",
    options: ["You decide when it kicks in", "Have a more flexible schedule"],
    startFromBeginning: true,
  };

  const sixth_row_data = {
    image_url: "/images/f_6.png",
    title: "One click meeting optimizations",
    description:
      "Reclaim valuable time by accepting suggestions by Rise that work for everyone.",
    reverse: true,
  };

  const review_data = {
    review:
      "As someone in tech, every minute counts. Rise gives me focus blocks, optimizes meeting times, and even lets my family know when to message me. It's a game-changer, saving me 2+ hours weekly, and that's not counting the distraction-free time.",
    image: "/images/man.png",
    name: "Thijs Bongertman",
    role: "Head of Data at Circus",
  };

  return (
    <section className="bg-customDark">
      <div className="ml-8">
        <p className="text-white  text-[40.5px] text-bold">
          More time for what&apos;s important.
          <br />
          Automatically.
        </p>
        <p className="text-[22px] text-customGray">
          Rise is a beautiful calendar that uses hundreds of signals to find the
          best times to meet, resolve conflicts and blocks off focus time.
        </p>
      </div>

      <div className="mt-8">
        <FeatureCard {...first_row_data} />
      </div>
      <div className="mt-2">
        <FeatureCard {...second_row_data} />
      </div>
      <div className="mt-2">
        <div className="flex flex-col gap-8 md:flex-row">
          <FeatureCardVertical {...third_row_data} />
          <FeatureCardVertical {...fourth_row_data} />
        </div>
      </div>

      <div className="mt-2">
        <div className="flex flex-col gap-8 md:flex-row">
          <FeatureCard {...fifth_row_data} />
          <FeatureCardVertical {...sixth_row_data} />
        </div>
      </div>

      <ReviewerCard {...review_data} />
    </section>
  );
}

export default WhatImportantSection;
