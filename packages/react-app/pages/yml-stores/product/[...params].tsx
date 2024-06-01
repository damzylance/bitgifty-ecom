import React, { useEffect, useState } from "react";
import {
  BackIcon,
  CartIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
} from "../../../components/Icons";
import { useRouter } from "next/router";
import { StoreData } from "../../../components/Utils/Dummy";
import { ActionButton } from "../../../components/ActionButton";

const Page = () => {
  const router = useRouter();
  const { params } = router.query;
  const [item, setItem] = useState<any>({});

  useEffect(() => {
    if (params) {
      const storeInfo = StoreData?.find(
        (store) => store?.id?.toString() === params[0]
      );
      const itemCategory = storeInfo?.product?.find(
        (store) => store?.id?.toString() === params[1]
      );
      const item = itemCategory?.item?.find(
        (store) => store?.id?.toString() === params[2]
      );
      setItem(item);
    }
  }, [params]);

  return (
    <section className="max-w-full md:max-w-[393px] m-[0_auto] relative">
      <section
        className=" w-full h-[423px] bg-no-repeat bg-cover  relative"
        style={{ backgroundImage: `url(${item?.banner})` }}
      >
        <div className="absolute bg-blue-1 top-0 left-0 right-0 bottom-0 opacity-90 pt-[56px] px-[17px]">
          <div className="flex items-center justify-between">
            <BackIcon
              onClick={() => router.back()}
              extraClass="w-[40px] h-[40px] bg-blue-2 "
            />
            <CartIcon onClick={() => {}} extraClass="bg-blue-2" />
          </div>
          <img
            src={item?.display_photo}
            alt=""
            className="h-[248px] w-[248px] rounded-[50%] m-[0_auto]"
          />
        </div>
        <section className="bg-white w-full min-h-[calc(100vh-380px)] rounded-[32px_32px_0px_0px] shadow-md absolute top-[380px] px-[23px] pt-[33px] pb-[72px]">
          <p className="text-[1.125rem] text-black-1 leading-[21.09px] font-[500] max-w-[245px]">
            {item?.menu}
          </p>
          <div className="mt-[14px] flex items-center gap-x-[15px]">
            <div className="flex items-center gap-x-[8px]">
              {Array(item?.star).fill(<StarIcon />)}
            </div>
            <span>{`${item?.star}.0`}</span>
          </div>
          <section className="mt-[37px] flex items-center justify-between">
            <div className="flex items-center gap-x-[25px]">
              <MinusIcon onClick={() => {}} />
              <span>1</span>
              <PlusIcon onClick={() => {}} />
            </div>
            <div className="flex flex-col gap-y-[2px]">
              <p className="text-[1.5rem] text-blue-1 leading-[28.13px] font-[900]">
                {item?.new_price}
              </p>
              <p className="text-[0.875rem] text-grey-3 leading-[16.41px] line-through">
                {item?.old_price}
              </p>
            </div>
          </section>
          <section className="mt-[33px]">
            <h3 className="text-[1rem] text-black-1 leading-[18.75px] font-[500]">
              Description
            </h3>
            <p className="mt-[11px] text-grey-3 text-[0.875rem] leading-[16.59px] font-[300]">
              {item?.desc}
            </p>
          </section>
          <ActionButton
            text={`Add 1 for ${item?.new_price}`}
            onClick={() => {}}
            extraClass="mt-[65px]"
          />
        </section>
      </section>
    </section>
  );
};

export default Page;
