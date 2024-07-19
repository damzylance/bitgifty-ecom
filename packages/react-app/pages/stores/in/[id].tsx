"use client";

import { CatTitle } from "@/components/CatTitle";
import { DInStoreCard } from "@/components/DInStoreCard";
import {
  BackIcon,
  CartIcon,
  SDispatchIcon,
  SThumbsIcon,
  STimeIcon,
} from "@/components/Icons";
import { InStoreCard } from "@/components/InStoreCard";
import Search from "@/components/Search";
import { getStoreById } from "@/components/Services/Api";
import { CatTitleSkeleton } from "@/components/Skeletons/CatTitleSkeleton";
import { InStoreCardSkeleton } from "@/components/Skeletons/InStoreCardSkeleton";
import { StoreCatCard } from "@/components/StoreCatCard";
import { STORE_BY_ID_KEY } from "@/components/Utils/Constants";
import { useStateContext } from "@/components/Utils/Context";
import { useScrollToTop } from "@/components/Utils/ScrollToTop";
import { ItemProp } from "@/components/Utils/Types";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const { dispatch } = useStateContext();
  const [activeCategory, setActiveCategory] = useState("");

  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const triggerPosition = 80;

    if (scrollPosition < triggerPosition || scrollPosition === undefined) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useScrollToTop();

  const getStoreByIdQuery = useQuery({
    queryKey: [`${STORE_BY_ID_KEY}_${id}`],
    queryFn: () => getStoreById(id),
  });

  const storeInfo = getStoreByIdQuery?.data;

  return (
    <>
      <section className={`max-w-full md:max-w-[393px] m-[0_auto] pb-[500px] `}>
        <div
          className={`${
            isVisible
              ? "max-h-[500px] transition-all duration-300 ease-in-out"
              : "max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
          }`}
        >
          <section className=" w-full h-[104px]  pt-[56px] px-[17px]">
            <div className="flex items-center justify-between">
              <BackIcon
                onClick={() => {
                  router.back();
                }}
                extraClass="bg-grey-1 h-[40px] w-[40px]"
              />
              <Search extraClass="bg-grey-1" onChange={(e) => {}} />
              <CartIcon extraClass="bg-grey-1" />
            </div>
          </section>
          <section className="mt-[19px]">
            <div
              className={`w-full h-[130px] bg-no-repeat bg-cover relative ${
                !storeInfo && "animate-pulse"
              }`}
              style={{
                backgroundImage: `url(${storeInfo?.banner})`,
                backgroundColor: "#E8E9EE",
              }}
            >
              {!storeInfo ? (
                <div className="absolute left-[16px] bottom-[-65px] h-[100px] w-[100px] rounded-[8px] bg-grey-1"></div>
              ) : (
                <img
                  src={storeInfo?.logo}
                  alt=""
                  className="absolute left-[16px] bottom-[-65px] h-[100px] w-[100px] rounded-[8px]"
                />
              )}
            </div>

            {!storeInfo ? (
              <div className="w-fit m-[0_auto] mt-[7px] animate-pulse">
                <p className="h-[9px] w-[100px] mb-[10px] bg-black-2 rounded-[8px] animate-pulse"></p>
                <div className="w-[123px] h-[19px] p-[3px_9px] bg-brown-1 animate-pulse"></div>
              </div>
            ) : (
              <div className="w-fit m-[0_auto] mt-[7px]">
                <p className="text-[1.125rem] text-black-1 font-[500]">
                  {storeInfo?.name}
                </p>
                <div className="p-[3px_9px] text-white text-[0.75rem] text-center bg-brown-1">{`${storeInfo?.cutoff} on some items`}</div>
              </div>
            )}
          </section>
          <section className="w-full mt-[25px] flex items-center justify-center gap-x-[39px]">
            <div className="flex flex-col items-center gap-y-[8px]">
              <SThumbsIcon />
              <p className="text-[0.75rem] text-black-1 font-[500]">
                {storeInfo?.rating?.split(" ")[0]}
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-[8px]">
              <STimeIcon />
              <p className="text-[0.75rem] text-black-1 font-[500]">
                {storeInfo?.delivery_time}
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-[8px]">
              <SDispatchIcon />
              <p className="text-[0.75rem] text-black-1 font-[500]">
                {storeInfo?.delivery_time}
              </p>
            </div>
          </section>
        </div>
        <section
          className={` ${
            isVisible
              ? "max-h-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0 "
              : "max-h-[500px] transition-all duration-300 ease-in-out w-full  pt-[56px] pb-[15px] px-[17px] flex flex-col gap-y-[21px] opacity-100 fixed max-w-full md:max-w-[393px] m-[0_auto] top-0 bg-white z-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <BackIcon
              onClick={() => {
                router.back();
              }}
              extraClass="bg-grey-1 h-[40px] w-[40px]"
            />
            <p className="text-[1rem] text-black-1 font-[500]">
              {storeInfo?.name}
            </p>
            <CartIcon extraClass="bg-grey-1" />
          </div>
          <section className="flex items-center gap-x-[8px]">
            {storeInfo?.category?.map((category: any) => (
              <StoreCatCard
                key={category?.id}
                label={category?.name}
                active={activeCategory}
                onClick={() => {
                  setActiveCategory(category?.name);
                }}
              />
            ))}
          </section>
        </section>
        {storeInfo ? (
          <section className="px-[16px]">
            {storeInfo?.category?.map((category: any) => {
              return (
                <section className="mt-[32px]" key={category?.id}>
                  {
                    <CatTitle
                      key={category?.id}
                      icon={category?.icon}
                      text={category?.name}
                    />
                  }
                  {storeInfo?.item?.toLowerCase()?.includes("drink") ? (
                    <div className="w-full mt-[23px] grid grid-cols-3 gap-[16px] pb-[56px]">
                      {category?.items?.map((item: ItemProp) => (
                        <DInStoreCard
                          key={item?.id}
                          name={item?.title}
                          thumbnail={item?.thumbnail}
                          onClick={() =>
                            router.push(`/stores/product/${item?.id}`)
                          }
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-[33px] flex flex-col gap-y-[16px]">
                      {category?.items?.map((item: ItemProp) => (
                        <InStoreCard
                          key={item?.id}
                          cutoff={item?.cutoff}
                          new_price={item?.new_price}
                          old_price={item?.old_price}
                          thumbnail={item?.thumbnail}
                          title={item?.title}
                          desc={item?.desc}
                          onClick={() =>
                            router.push(`/stores/product/${item?.id}`)
                          }
                          addClick={(e) => {
                            e.stopPropagation();
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: { quantity: 1, item },
                            });
                          }}
                        />
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </section>
        ) : (
          <section className="px-[16px]">
            <section className="mt-[32px]">
              <CatTitleSkeleton />

              <div className="mt-[33px] flex flex-col gap-y-[16px]">
                {Array(4).fill(<InStoreCardSkeleton />)}
              </div>
            </section>
          </section>
        )}
      </section>
    </>
  );
};

export default Page;
