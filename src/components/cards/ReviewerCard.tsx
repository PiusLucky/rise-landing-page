import React from "react";

interface IProps {
  review: string;
  image: string;
  name: string;
  role: string;
  useDarkText?: boolean;
}

function ReviewerCard({
  review,
  image,
  name,
  role,
  useDarkText = false,
}: IProps) {
  return (
    <section className="flex justify-center flex-col items-center py-32 px-8">
      <p
        className={`md:max-w-[760px] text-[22px]  ${
          useDarkText ? "text-black" : "text-white"
        } mb-3 text-center`}
      >
        &quot;{review}&quot;
      </p>

      <div className="flex gap-3 mt-5">
        <img src={image} alt="reviewer" />

        <div>
          <p
            className={`font-bold text-white ${
              useDarkText ? "text-black" : "text-white"
            }`}
          >
            {name}
          </p>
          <p className="font-bold text-customGray">{role}</p>
        </div>
      </div>
    </section>
  );
}

export default ReviewerCard;
