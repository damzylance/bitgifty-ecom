import { MouseEventHandler } from "react";

export const CatCard = ({
  icon,
  name,
  onClick,
}: {
  icon: string;
  name: string;
  onClick: MouseEventHandler<HTMLElement> | undefined;
}) => (
  <section
    className="min-w-[70px] max-w-[70px] h-[67px] bg-grey-4 relative rounded-[8px] flex flex-col items-center justify-center"
    onClick={onClick}
  >
    <div className="absolute left-[20px] top-[-7px]">
      <img src={icon} alt="" className="h-[32px] w-[32px] " />
    </div>
    <p className=" text-center mt-[8px] text-[0.875rem] font-[300] text-black-1 leading-[16.41px]">
      {name}
    </p>
  </section>
);
