import { SAddIcon } from "../Icons";

export const InStoreCardSkeleton = () => (
  <section className="flex items-center justify-between pb-[24px] border-b-[1px] border-b-grey-1 cursor-pointer">
    <div className="flex gap-x-[19px]">
      <div className="w-[119px] h-[112px] rounded-[8px] bg-no-repeat bg-cover bggrey1 relative animate-pulse">
        <div className="absolute top-[-4px] right-[5px] h-[19px] w-[50px] bg-grey-2 p-[0px_10px] animate-pulse "></div>
      </div>
      <div>
        <p className=" bg-black-2  w-[142px] h-[9px] rounded-[8px] animate-pulse "></p>
        <p className="bg-grey-3  mt-[8px] w-[142px] h-[9px] rounded-[8px] animate-pulse"></p>
      </div>
    </div>
    <div className="h-[112px] flex flex-col justify-between items-end animate-pulse">
      <div className="flex flex-col gap-y-[4px] items-end">
        <p className="bg-black-2 h-[9px] w-[33px] rounded-[8px] animate-pulse"></p>
        <p className=" bg-black-2 w-[23px] h-[9px] rounded-[8px] animate-pulse"></p>
      </div>
      <SAddIcon onClick={() => {}} />
    </div>
  </section>
);
