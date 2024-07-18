"use client";

import { CartIcon, ForwardIcon, NoPersonIcon } from "@/components/Icons";
import { ItemCard } from "@/components/ItemCard";
import Search from "@/components/Search";
import Select from "@/components/Select";
import { StoreCard } from "@/components/StoreCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import YMLStores from "@/components/YMLStores";
import { useQuery } from "@tanstack/react-query";
import { STORES_KEY, SUPER_CATEGORIES_KEY } from "@/components/Utils/Constants";
import { getAllStores, getAllSuperCategories } from "@/components/Services/Api";
import { ItemCardSkeleton } from "@/components/Skeletons/ItemCardSkeleton";
import { StoreCardSkeleton } from "@/components/Skeletons/StoreCardSkeleton";

export default function Home() {
  const [showYMLStores, setShowYMLStores] = useState(false);
  const router = useRouter();

  const getAllStoresQuery = useQuery({
    queryKey: [STORES_KEY],
    queryFn: getAllStores,
  });

  const getAllSupercategoriesQuery = useQuery({
    queryKey: [SUPER_CATEGORIES_KEY],
    queryFn: getAllSuperCategories,
  });

  const supercategories = getAllSupercategoriesQuery?.data?.results;

  const stores = getAllStoresQuery?.data?.results;

  useEffect(() => {
    if (showYMLStores) {
      window.scrollTo({
        top: 0,
      });
    } else {
      window.scrollTo({
        top: 852,
      });
    }
  }, [showYMLStores]);

  return (
    <section className="max-w-full md:max-w-[393px] m-[0_auto] relative">
      <section className=" bg-shop-bg w-full h-[730px] bg-no-repeat bg-cover pt-[56px] px-[17px]">
        <div className="flex items-center justify-between">
          <NoPersonIcon onClick={() => {}} extraClass="bg-grey-2" />
          <Search extraClass="bg-blue-2" onChange={(e) => {}} />
          <CartIcon extraClass="bg-grey-2" />
        </div>
        <Select />
        <div className=" grid grid-cols-2 m-[0_auto] mt-[91px] w-fit gap-[28px]">
          {supercategories?.map((item: any) =>
            !getAllSupercategoriesQuery.data ? (
              <ItemCardSkeleton key={item?.id} />
            ) : (
              <ItemCard
                key={item?.id}
                img={item?.icon}
                text={item?.name}
                link={`${item?.name?.toLowerCase()}`}
              />
            )
          )}
        </div>
      </section>
      <section className="px-[17px]">
        <div className="flex items-center justify-between">
          <span className=" text-[1rem] text-black-1 font-[500]">
            Stores you might like
          </span>
          <ForwardIcon
            onClick={() => {
              setShowYMLStores(true);
            }}
            extraClass="bg-grey-2"
          />
        </div>
        <div
          className={`w-full mt-[23px] grid grid-cols-2 gap-[16px] pb-[56px] transition-transform duration-300 ease-in-out ${
            showYMLStores ? "translate-y-[-300px]" : "transform-none"
          }`}
        >
          {stores
            ?.slice(0, 2)
            ?.map((store: any) =>
              !getAllStoresQuery.data ? (
                <StoreCardSkeleton key={store?.id} />
              ) : (
                <StoreCard
                  key={store?.id}
                  cutoff={store?.cutoff}
                  item={store?.item}
                  desc={store?.desc}
                  rating={store?.rating}
                  thumbnail={store?.thumbnail}
                  onClick={() => router.push(`/stores/in/${store?.id}`)}
                />
              )
            )}
        </div>
      </section>

      <YMLStores show={showYMLStores} setShow={setShowYMLStores} />
    </section>
  );
}
