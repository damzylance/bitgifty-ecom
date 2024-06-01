import { BackIcon, CartIcon } from "@/components/Icons";
import Search from "@/components/Search";
import { StoreCard } from "@/components/StoreCard";
import { StoreData } from "@/components/Utils/Dummy";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

const YMLStores = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  return (
    <section
      className={`w-full bg-white absolute left-0 top-0 transition-all duration-100 ease-in-out ${
        show ? "top-0 max-h-[852px]" : "top-[852px] max-h-0 overflow-hidden "
      }`}
    >
      <section className=" w-full h-[104px]  pt-[56px] px-[17px]">
        <div className="flex items-center justify-between">
          <BackIcon
            onClick={() => {
              setShow(false);
            }}
            extraClass="bg-grey-1 h-[40px] w-[40px]"
          />
          <Search extraClass="bg-grey-1" onChange={(e) => {}} />
          <CartIcon onClick={() => {}} extraClass="bg-grey-1" />
        </div>
      </section>
      <section className="px-[17px]">
        <div className="w-full mt-[23px] grid grid-cols-2 gap-[16px] pb-[56px]">
          {StoreData?.map((store) => (
            <StoreCard
              key={store?.id}
              cutoff={store?.cutoff}
              item={store?.item}
              desc={store?.desc}
              rating={store?.rating}
              thumbnail={store?.thumbnail}
              onClick={() => router.push(`/yml-stores/${store?.id}`)}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default YMLStores;
