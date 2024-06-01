import Image from "next/image";
import { MouseEventHandler } from "react";

export const SearchIcon = () => (
  <img src="/search.png" alt="" className=" h-[24px] w-[24px]" />
);

export const NoPersonIcon = ({
  extraClass,
  onClick,
}: {
  extraClass: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div
    className={`flex items-center justify-center h-[40px] w-[40px] rounded-[8px] ${extraClass}`}
    onClick={onClick}
  >
    <img src="/noPerson.png" alt="" className=" h-[24px] w-[24px]" />
  </div>
);

export const CartIcon = ({
  extraClass,
  onClick,
}: {
  extraClass: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div
    className={`flex items-center justify-center h-[40px] w-[40px] rounded-[8px] ${extraClass}`}
    onClick={onClick}
  >
    <img src="/cartPlain.png" alt="" className=" h-[24px] w-[24px]" />
  </div>
);

export const FilterIcon = ({
  extraClass,
  onClick,
}: {
  extraClass: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div
    className={`flex items-center justify-center h-[40px] w-[40px] rounded-[8px] ${extraClass}`}
    onClick={onClick}
  >
    <img src="/filter.png" alt="" className=" h-[24px] w-[24px]" />
  </div>
);

export const ForwardIcon = ({
  extraClass,
  onClick,
}: {
  extraClass: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div
    className={`flex items-center justify-center h-[32px] w-[32px] rounded-[8px] cursor-pointer ${extraClass}`}
    onClick={onClick}
  >
    <img src="/arrowBlack.png" alt="" className=" h-[10px] w-[5px]" />
  </div>
);

export const BackIcon = ({
  extraClass,
  onClick,
}: {
  extraClass: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div
    className={`flex items-center justify-center  rounded-[8px] cursor-pointer ${extraClass}`}
    onClick={onClick}
  >
    <img
      src="/arrowBlack.png"
      alt=""
      className=" h-[10px] w-[5px] rotate-180"
    />
  </div>
);

export const PlusIcon = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
}) => (
  <img src="/plus.png" alt="" className=" cursor-pointer" onClick={onClick} />
);

export const MinusIcon = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
}) => (
  <img src="/minus.png" alt="" className=" cursor-pointer" onClick={onClick} />
);

export const ArrowWhiteIcon = () => <img src="/arrowWhite.png" alt="" />;

export const FoodIcon = () => <img src="/food.png" alt="" />;
export const DrinksIcon = () => <img src="/drinks.png" alt="" />;
export const PharmacyIcon = () => <img src="/pharmacy.png" alt="" />;
export const FashionIcon = () => <img src="/fashion.png" alt="" />;
export const ThumbsUpIcon = () => <img src="/thumbsUp.png" alt="" />;

export const SThumbsIcon = () => <img src="/thumbsFillIcon.png" alt="" />;
export const SDispatchIcon = () => <img src="/dispatchIcon.png" alt="" />;
export const STimeIcon = () => <img src="/timeIcon.png" alt="" />;
export const SAddIcon = () => <img src="/addIcon.png" alt="" />;
export const StarIcon = () => <img src="/star.png" alt="" />;
