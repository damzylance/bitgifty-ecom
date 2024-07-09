import { MouseEventHandler } from "react";
import { MinusIcon, PlusIcon } from "./Icons";

export const CartCard = ({
  thumbnail,
  title,
  desc,
  new_price,
  addClick,
  minusClick,
  itemCount,
}: {
  thumbnail: string;
  title: string;
  desc: string;
  new_price: string;
  itemCount: number;
  addClick: MouseEventHandler<HTMLImageElement> | undefined;
  minusClick: MouseEventHandler<HTMLImageElement> | undefined;
}) => (
  <section className="flex items-center justify-between py-[10px] px-[10px] border-b-[1px] border-b-grey-1 cursor-pointer shadow-sm">
    <div className="flex gap-x-[19px]">
      <div
        className="w-[63px] h-[60px] rounded-[8px] bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <div>
        <p className=" text-black-1 text-[0.875rem] leading-[16.41px] max-w-[142px]">
          {title}
        </p>
        <p className="text-[0.7rem] text-grey-3 font-[300] leading-[11.72px] mt-[8px] max-w-[142px]">
          {`${desc?.substring(0, 77)}${desc?.length > 77 && "..."}`}
        </p>
      </div>
    </div>
    <div className="h-[70px] flex flex-col justify-between items-end">
      <div className="flex flex-col gap-y-[4px] items-end">
        <p className="text-[0.875rem] text-black-1 leading-[16.41px]">
          {new_price}
        </p>
      </div>
      <div className="flex items-center gap-x-[16.58px]">
        <MinusIcon onClick={minusClick} extraClass="w-[20.65px] h-[20.64px]" />
        <span className="text-[10.32px] font-[500] text-black">
          {" "}
          {itemCount}
        </span>
        <PlusIcon onClick={addClick} extraClass="w-[20.65px] h-[20.64px]" />
      </div>
    </div>
  </section>
);
