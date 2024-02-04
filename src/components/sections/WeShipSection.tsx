import React from "react";
import { Separator } from "../ui/separator";
import { ChevronRight } from "lucide-react";

function WeShipSection() {
  const event_data = [
    {
      date: "Dec 11, 2023",
      event: "Smart color-coding",
      is_last: false,
    },
    {
      date: "Dec 8, 2023",
      event: "Out of Office events",
      is_last: false,
    },
    {
      date: "Nov 30, 2023",
      event: "Auto-join, always",
      is_last: false,
    },
    {
      date: "Nov 16, 2023",
      event: "Raycast integration",
      is_last: false,
    },
    {
      date: "Nov 13, 2023",
      event: "Flexible event improvements",
      is_last: false,
    },
    {
      date: "Nov 3, 2023",
      event: "Month view",
      is_last: false,
    },
    {
      date: "Oct 30, 2023",
      event: "Flexible events 2.0",
      is_last: false,
    },

    {
      date: "Read full changelog",
      is_last: true,
    },
  ];
  return (
    <section className="pb-32 px-4">
      <div className="flex flex-col gap-16 items-center justify-center">
        <div className="">
          <p className="text-black text-[40.5px] text-center">
            We ship. Often.
          </p>
          <p className="text-[#706D79] text-[22px] text-center">
            Product updates and announcements
          </p>
        </div>

        <section>
          {event_data.map((event, index) => (
            <div key={index}>
              <div className="text-[22px] flex gap-8">
                <img
                  src={
                    event.is_last
                      ? "/images/progress_last_icon.png"
                      : "/images/progress_icon.png"
                  }
                  alt="progress icon"
                  className="hidden lg:block"
                />
                <div className="text-[#706D79] flex gap-2 items-center">
                  {event.date} {event.is_last && <ChevronRight />}{" "}
                </div>
                <div className="text-[#333] font-bold ">{event.event}</div>
              </div>
              {!event.is_last && (
                <div>
                  <Separator
                    orientation="vertical"
                    className="h-[1.5rem] my-1 ml-5"
                  />
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default WeShipSection;
