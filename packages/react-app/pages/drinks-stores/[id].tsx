import { CatTitle } from "@/components/CatTitle";
import { DInStoreCard } from "@/components/DInStoreCard";
import {
  BackIcon,
  CartIcon,
  SDispatchIcon,
  SThumbsIcon,
  STimeIcon,
} from "@/components/Icons";
import Search from "@/components/Search";
import { DrinksData } from "@/components/Utils/Dummy";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const storeInfo = DrinksData?.stores?.find(
    (store) => store?.id?.toString() === id
  );

  return (
    <section className="max-w-full md:max-w-[393px] m-[0_auto] ">
      <section className=" w-full h-[104px]  pt-[56px] px-[17px]">
        <div className="flex items-center justify-between">
          <BackIcon
            onClick={() => {
              router.back();
            }}
            extraClass="bg-grey-1 h-[40px] w-[40px]"
          />
          <Search extraClass="bg-grey-1" onChange={(e) => {}} />
          <CartIcon onClick={() => {}} extraClass="bg-grey-1" />
        </div>
      </section>

      <section className="mt-[19px]">
        <div
          className="w-full h-[130px] bg-no-repeat bg-cover relative"
          style={{ backgroundImage: `url(${storeInfo?.banner})` }}
        >
          <img
            src={storeInfo?.logo}
            alt=""
            className="absolute left-[16px] bottom-[-65px] h-[100px] w-[100px] rounded-[8px]"
          />
        </div>
        <div className="w-fit m-[0_auto] mt-[7px]">
          <p className="text-[1.125rem] text-black-1 font-[500]">
            {storeInfo?.name}
          </p>
          <div className="p-[3px_9px] text-white text-[0.75rem] text-center bg-brown-1">{`${storeInfo?.cutoff} on some items`}</div>
        </div>
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
      <section className="px-[16px]">
        {storeInfo?.product?.map((product) => {
          return (
            <section className="mt-[32px]">
              <CatTitle
                key={product?.id}
                icon={product?.icon}
                text={product?.category}
              />
              <div className="w-full mt-[23px] grid grid-cols-3 gap-[16px] pb-[56px]">
                {product?.item?.map((item) => (
                  <DInStoreCard
                    key={item?.id}
                    name={item?.name}
                    thumbnail={item?.thumbnail}
                    onClick={() =>
                      router.push(
                        `/drinks-stores/product/${id}/${product?.id}/${item?.id}`
                      )
                    }
                  />
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Page;
