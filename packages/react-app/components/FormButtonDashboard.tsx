import { MouseEventHandler } from "react";

export const FormButtonDashboard = ({
  text,
  onClick,
  extraClass,
}: {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  extraClass?: string;
}) => {
  return (
    <button
      className={`flex items-center justify-center w-full h-[56px] p-[8px_24px] border-[1px] border-white text-white text-[1rem] font-[700] font-work_sans bg-gradient-to-r from-[#103D96] to-[#306FE9] ${extraClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
