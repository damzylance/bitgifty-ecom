import { MouseEventHandler } from "react";

export const AuthButtonDashboard = ({
  text,
  onClick,
  extraClass,
}: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  extraClass?: string;
}) => {
  return (
    <button
      className={`flex items-center justify-center w-[184px] h-[56px] p-[8px_24px] border-[1px] border-white text-white text-[1rem] font-[700] font-work_sans ${extraClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
