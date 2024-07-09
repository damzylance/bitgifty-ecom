import { MouseEventHandler } from "react";

const DashboardMenuCard = ({
  icon,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <div
      className="flex items-center gap-x-[8px] rounded-[4px]  text-white text-[0.875rem] font-[500] p-[12px_4px] hover:bg-[#8CAFF399]"
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default DashboardMenuCard;
