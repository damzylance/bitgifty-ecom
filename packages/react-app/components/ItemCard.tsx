import Link from "next/link";

export const ItemCard = ({
  img,
  text,
  link,
}: {
  img: React.ReactNode;
  text: string;
  link: string;
}) => (
  <Link
    href={link}
    className="flex flex-col items-center justify-center gap-y-[6px] shadow-shadow-1 bg-[#232C5E] border-r-[3px] border-b-[3px] border-[#374695] w-[100px] h-[100px] rounded-[16px]  text-white text-[0.875rem] font-[500]"
  >
    {img} <p>{text}</p>
  </Link>
);
