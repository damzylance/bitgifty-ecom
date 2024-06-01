import { CatCard } from "@/components/CatCard";
import { BackIcon, CartIcon, FilterIcon } from "@/components/Icons";
import Search from "@/components/Search";
import { StoreCard } from "@/components/StoreCard";
import { FoodData } from "@/components/Utils/Dummy";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  return (
    <section
      className={`w-full bg-white max-w-full md:max-w-[393px] m-[0_auto]`}
    >
      <section className=" w-full h-[104px]  pt-[56px] px-[17px]">
        <div className="flex items-center justify-between pb-[16px] border-b-[1px] border-b-grey-1">
          <BackIcon
            onClick={() => router.back()}
            extraClass="bg-grey-4 h-[40px] w-[40px]"
          />
          <span className="text-[1rem] text-black-1 leading-[18.75px] font-[500]">
            Food Spots
          </span>
          <CartIcon onClick={() => {}} extraClass="bg-grey-4" />
        </div>
        <div className="flex items-center gap-x-[15px] mt-[25px]">
          <Search extraClass="bg-grey-4 w-[85%]" onChange={(e) => {}} />
          <FilterIcon onClick={() => {}} extraClass="bg-grey-4" />
        </div>

        <section className="py-[24px] flex items-center gap-x-[16px] w-[361px] overflow-x-auto no-scrollbar">
          {FoodData?.categories?.map((category) => (
            <CatCard
              key={category?.name}
              name={category?.name}
              icon={category?.icon}
              onClick={() => {}}
            />
          ))}
        </section>
        <section className="w-full mt-[38px] grid grid-cols-1 gap-y-[21px] pb-[56px]">
          {FoodData?.stores?.map((store) => (
            <StoreCard
              key={store?.id}
              cutoff={`${store?.cutoff} off some items`}
              item={store?.item}
              desc={store?.desc}
              rating={store?.rating}
              thumbnail={store?.thumbnail}
              onClick={() => router.push(`/food-stores/${store?.id}`)}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Page;
