import { MouseEventHandler } from "react";
import { ThumbsUpIcon } from "./Icons";

export const StoreCard = ({
  cutoff,
  item,
  desc,
  rating,
  thumbnail,
  onClick,
}: {
  cutoff: string;
  item: string;
  desc: string;
  rating: string;
  thumbnail: string;
  onClick: MouseEventHandler<HTMLElement> | undefined;
}) => (
  <section
    className={`w-[100%] rounded-[8px] bg-grey-1 cursor-pointer`}
    onClick={onClick}
  >
    <div
      className={`w-full h-[105px] bg-blue-1 bg-no-repeat bg-cover relative rounded-[8px_8px_0px_0px]`}
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      <div className="absolute top-[-5px] right-[14px] bg-blue-2 text-[0.875rem] text-black-1 font-[500] p-[2px_10px]">
        {cutoff}
      </div>
      <div className="absolute bottom-[5px] left-[5px] bg-brown-1 text-white text-[0.75rem] p-[3px_6px]">
        {item}
      </div>
    </div>
    <div className="p-[8px_11px]">
      <p className="text-[0.875rem] text-black-1">{desc}</p>
      <div className="mt-[8px] flex items-center gap-x-[3px]">
        <ThumbsUpIcon />
        <span className="text-[0.75rem] text-black-2">{rating}</span>
      </div>
    </div>
  </section>
);
