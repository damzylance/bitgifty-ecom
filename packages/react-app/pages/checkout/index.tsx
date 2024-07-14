"use client";

import { ActionButton } from "@/components/ActionButton";
import { CartCard } from "@/components/CartCard";
import {
  BackIcon,
  DummyMap,
  GiftIcon,
  LocationSmallIcon,
  // MethodIcon,
} from "@/components/Icons";
import { OptionsCard } from "@/components/OptionsCard";
import { useStateContext } from "@/components/Utils/Context";
import { sumTotal } from "@/components/Utils/Helpers";
import { injected } from "@wagmi/connectors";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";

const Page = () => {
  const router = useRouter();
  const { state, dispatch } = useStateContext();
  const [userAddress, setUserAddress] = useState("");
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const productPrice = sumTotal(state.cart);
  const servicesPrice = 100;
  const totalPrice = productPrice + servicesPrice;

  const handleCheckOut = () => {
    connect({ connector: injected() });
    // dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  return (
    <section className="max-w-full md:max-w-[393px] m-[0_auto] relative pb-[100px]">
      <div className="flex items-center justify-center pt-[39px] px-[17px] pb-[16px] shadow-sm">
        <BackIcon
          onClick={() => {
            router.back();
          }}
          extraClass="bg-grey-4 h-[40px] w-[40px] absolute top-[30px] left-[17px]"
        />
        <p className="text-[1rem] text-black-1 font-[500] h-[40px]">Checkout</p>
      </div>
      {state?.cart?.length === 0 ? (
        <p className="mt-[10px] text-[0.75rem] text-black-2 text-center leading-[14.06px]">
          There's nothing in the cart at the moment
        </p>
      ) : (
        <>
          {" "}
          <div className="mt-[24px] pl-[17px] flex flex-col gap-y-[7px]">
            <h2 className="text-[1.125rem] text-black font-[500] leading-[21.09px] ">
              Your Order
            </h2>
            <p className="text-[0.75rem] text-black-2 leading-[14.06px]">
              Lorem ipsum is a dummy text
            </p>
          </div>
          <section className="mt-[20px] px-[16px] flex flex-col gap-y-[19px]">
            {state.cart?.map((product) => (
              <CartCard
                title={product?.item?.title}
                desc={product?.item?.desc}
                thumbnail={product?.item?.thumbnail}
                new_price={
                  "₦" +
                  (
                    parseFloat(product?.item?.new_price) * product?.quantity
                  )?.toString()
                }
                itemCount={product?.quantity}
                addClick={() => {
                  dispatch({
                    type: "INCREASE_ITEM",
                    payload: product?.item?.id,
                  });
                }}
                minusClick={() => {
                  dispatch({
                    type: "DECREASE_ITEM",
                    payload: product?.item?.id,
                  });
                }}
              />
            ))}
          </section>
          <div className="mt-[24px] px-[16px] flex flex-col gap-y-[18px]">
            <h2 className="text-[1.125rem] text-black font-[500] leading-[21.09px] ">
              Delivery Details
            </h2>
            <DummyMap />
          </div>
          <div className="mt-[25px] px-[16px] flex flex-col gap-y-[27px]">
            <OptionsCard
              icon={<LocationSmallIcon />}
              text="Ikorodu Garage"
              subText="Lorem ipsum is a dummy text"
              onClick={() => {}}
            />
            <OptionsCard
              icon={<GiftIcon />}
              text="Sending to someone else"
              subText="Lorem ipsum is a dummy text"
              onClick={() => {}}
            />
            <div className="w-full mt-[9px] h-[53px] rounded-[8px] border-[#5C4356] border-[2px] bg-[#EAE1E8] flex flex-col justify-center gap-y-[4px] p-[9px_19px]">
              <p className="text-[0.75rem] text-black-2 font-[300] leading-[14.06px]">
                20-30 min
              </p>
              <p className="text-[0.75rem] text-black-2 font-[500] leading-[14.06px]">
                As soon as possible
              </p>
            </div>
            {/* <div className="mt-[59px] px-[16px] flex flex-col gap-y-[25px]">
              <h2 className="text-[1.125rem] text-black font-[500] leading-[21.09px] ">
                Payment Method
              </h2>
              <OptionsCard
                icon={<MethodIcon />}
                text="Add Payment Method"
                subText="Lorem ipsum is a dummy text"
                onClick={() => {}}
              />
            </div> */}
          </div>
          <div className="mt-[54px] p-[18px_24px] flex flex-col gap-y-[25px] bg-grey-4 rounded-[16px]">
            <h2 className="text-[1.125rem] text-black font-[500] leading-[21.09px] ">
              Summary
            </h2>
            <section className="flex flex-col gap-y-[24px] mt-[24px]">
              <div className="flex items-center justify-between">
                <span className="text-[0.875rem] text-black-2 leading-[16.41px]">
                  Products
                </span>
                <span className="text-[0.875rem] text-black-2 leading-[16.41px]">
                  ₦{productPrice}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[0.875rem] text-black-2 leading-[16.41px]">
                  Delivery
                </span>
                <span className="text-[0.875rem] text-black-2 leading-[16.41px]">
                  FREE
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[0.875rem] text-black-2 leading-[16.41px]">
                  Services
                </span>
                <span className="text-[0.875rem] text-black-2 leading-[16.41px]">
                  ₦100
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[1rem] text-black-2 leading-[18.75px] font-[600]">
                  Total
                </span>
                <span className="text-[1rem] text-black-2 leading-[18.75px] font-[600]">
                  {`₦${totalPrice}`}
                </span>
              </div>
            </section>
            <ActionButton
              text="Confirm Order"
              onClick={handleCheckOut}
              extraClass="mt-[43px]"
            />
            {userAddress && <span>Wallet Address: {userAddress}</span>}
          </div>
        </>
      )}
    </section>
  );
};

export default Page;
