import { MouseEventHandler } from "react";

export const DInStoreCard = ({
  thumbnail,
  name,
  onClick,
}: {
  thumbnail: string;
  name: string;
  onClick: MouseEventHandler<HTMLElement> | undefined;
}) => (
  <section
    className="w-[108px] h-[123px] rounded-[8px] bg-grey-4 cursor-pointer"
    onClick={onClick}
  >
    <img
      src={thumbnail}
      alt=""
      className="w-full h-[85px] rounded-[8px_8px_0px_0px]"
    />
    <p className="mt-[11px] text-[0.875rem] leading-[16.41px] text-black-1 text-center px-[5px] ">
      {name}
    </p>
  </section>
);
