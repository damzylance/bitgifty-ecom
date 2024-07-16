import { ThumbsUpIcon } from "../Icons";

export const StoreCardSkeleton = () => (
  <section
    className={`w-[100%] rounded-[8px] bg-grey-1 cursor-pointer animate-pulse`}
  >
    <div
      className={`w-full h-[105px] bg-blue-1 bg-no-repeat bg-cover relative rounded-[8px_8px_0px_0px] animate-pulse`}
    >
      <div className="absolute top-[-5px] right-[14px] bg-blue-2  h-[24px] w-[35%] animate-pulse"></div>
      <div className="absolute bottom-[5px] left-[5px] bg-brown-1 w-[55px] h-[19px] animate-pulse"></div>
    </div>
    <div className="p-[8px_11px]">
      <p className=" bg-black-2 w-[120px] h-[9px] rounded-[8px] animate-pulse"></p>
      <p className="mt-[10px] bg-black-2 w-[90px] h-[9px] rounded-[8px] animate-pulse"></p>

      <div className="mt-[8px] flex items-center gap-x-[3px]">
        <span className=" bg-black-2 w-[61px] h-[9px] rounded-[8px] animate-pulse "></span>
      </div>
    </div>
  </section>
);
