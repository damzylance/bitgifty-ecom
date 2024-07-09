import { ForwardSmallIcon } from "./Icons";

export const OptionsCard = ({
  icon,
  text,
  subText,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  subText: string;
  onClick: React.MouseEventHandler<HTMLElement> | undefined;
}) => {
  return (
    <section onClick={onClick} className=" flex items-center justify-between">
      <div className="flex items-center gap-x-[13px]">
        {icon}
        <div className="flex flex-col gap-y-[3px]">
          <p className="text-[1rem] text-black leading-[18.75px]">{text}</p>
          <p className="text-[0.75rem] text-black-2 leading-[14.06px]">
            {subText}
          </p>
        </div>
      </div>
      <ForwardSmallIcon />
    </section>
  );
};
