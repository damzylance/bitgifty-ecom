import { CatCard } from "@/components/CatCard";
import { BackIcon, CartIcon, FilterIcon } from "@/components/Icons";
import Search from "@/components/Search";
import { getSuperCategoryByName } from "@/components/Services/Api";
import { CatCardSkeleton } from "@/components/Skeletons/CatCardSkeleton";
import { StoreCardSkeleton } from "@/components/Skeletons/StoreCardSkeleton";
import { StoreCard } from "@/components/StoreCard";
import { SUPER_CATEGORY_BY_NAME_KEY } from "@/components/Utils/Constants";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { category_name } = router.query;

  const getCategoryByNameQuery = useQuery({
    queryKey: [`${SUPER_CATEGORY_BY_NAME_KEY}_${category_name}`],
    queryFn: () => getSuperCategoryByName(category_name),
  });
  const stores = getCategoryByNameQuery?.data?.store;
  const categories = getCategoryByNameQuery?.data?.store[0]?.category;

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
            {getCategoryByNameQuery?.data?.name} Spots
          </span>
          <CartIcon extraClass="bg-grey-4" />
        </div>
        <div className="flex items-center gap-x-[15px] mt-[25px]">
          <Search extraClass="bg-grey-4 w-[85%]" onChange={(e) => {}} />
          <FilterIcon onClick={() => {}} extraClass="bg-grey-4" />
        </div>

        {categories ? (
          <section className="py-[24px] flex items-center gap-x-[16px] w-[361px] overflow-x-auto no-scrollbar">
            {categories?.map((category: any) => (
              <CatCard
                key={category?.id}
                name={category?.name}
                icon={category?.icon}
                onClick={() => {}}
              />
            ))}
          </section>
        ) : (
          <section className="py-[24px] flex items-center gap-x-[16px] w-[361px] overflow-x-auto no-scrollbar">
            {Array(3).fill(<CatCardSkeleton />)}
          </section>
        )}
        {stores ? (
          <section className="w-full mt-[38px] grid grid-cols-1 gap-y-[21px] pb-[56px]">
            {stores?.map((store: any) => (
              <StoreCard
                key={store?.id}
                cutoff={`${store?.cutoff} off some items`}
                item={store?.item}
                desc={store?.desc}
                rating={store?.rating}
                thumbnail={store?.thumbnail}
                onClick={() => router.push(`/stores/in/${store?.id}`)}
              />
            ))}
          </section>
        ) : (
          <section className="w-full mt-[38px] grid grid-cols-1 gap-y-[21px] pb-[56px]">
            {Array(3).fill(<StoreCardSkeleton />)}
          </section>
        )}
      </section>
    </section>
  );
};

export default Page;
