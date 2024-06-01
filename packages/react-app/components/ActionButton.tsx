import { MouseEventHandler } from "react";

export const ActionButton = ({
  text,
  onClick,
  extraClass,
}: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  extraClass?: string;
}) => (
  <button
    className={`flex items-center justify-center w-full h-[47px] rounded-[8px] bg-blue-1 text-[0.875rem] text-white font-[800] ${extraClass}`}
    onClick={onClick}
  >
    {text}
  </button>
);
