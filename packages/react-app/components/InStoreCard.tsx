import { MouseEventHandler } from "react";
import { SAddIcon } from "./Icons";

export const InStoreCard = ({
  cutoff,
  thumbnail,
  title,
  desc,
  old_price,
  new_price,
  onClick,
}: {
  cutoff: string;
  thumbnail: string;
  title: string;
  desc: string;
  old_price: string;
  new_price: string;
  onClick: MouseEventHandler<HTMLElement> | undefined;
}) => (
  <section
    className="flex items-center justify-between pb-[24px] border-b-[1px] border-b-grey-1 cursor-pointer"
    onClick={onClick}
  >
    <div className="flex gap-x-[19px]">
      <div
        className="w-[119px] h-[112px] rounded-[8px] bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <div className="absolute top-[-4px] right-[5px] bg-grey-2 p-[0px_10px] text-[0.875rem] text-black-1 font-[500]">
          {cutoff}
        </div>
      </div>
      <div>
        <p className=" text-black-1 text-[0.875rem] leading-[16.41px] max-w-[142px]">
          {title}
        </p>
        <p className="text-[0.7rem] text-grey-3 font-[300] leading-[11.72px] mt-[8px] max-w-[142px]">
          {`${desc?.substring(0, 77)}${desc?.length > 77 && "..."}`}
        </p>
      </div>
    </div>
    <div className="h-[112px] flex flex-col justify-between items-end">
      <div className="flex flex-col gap-y-[4px] items-end">
        <p className="text-[0.875rem] text-black-1 leading-[16.41px]">
          {new_price}
        </p>
        <p className="text-[0.7rem] text-black-1 leading-[11.72px] line-through">
          {old_price}
        </p>
      </div>
      <SAddIcon />
    </div>
  </section>
);
