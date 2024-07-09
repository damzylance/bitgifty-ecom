import { MouseEventHandler } from "react";

export const StoreCatCard = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => (
  <button
    className={`p-[10px] text-[0.875rem] rounded-[4px] hover:bg-brown-1 hover:text-white ${
      active === label ? "bg-brown-1 text-white" : "text-grey-3"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);
