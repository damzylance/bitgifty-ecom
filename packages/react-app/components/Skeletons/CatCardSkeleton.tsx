export const CatCardSkeleton = () => (
  <section className="min-w-[70px] max-w-[70px] h-[67px] bg-grey-4 relative rounded-[8px] flex flex-col items-center justify-center animate-pulse">
    <div className="absolute left-[20px] top-[-7px] animate-pulse">
      <div className="h-[32px] w-[32px] bg-grey-4 animate-pulse"></div>
    </div>
    <p className=" text-center mt-[8px]  bg-black-2 h-[9px] w-[45px] rounded-[8px] animate-pulse"></p>
  </section>
);
