import { CartIcon, ForwardIcon, NoPersonIcon } from "@/components/Icons";
import { ItemCard } from "@/components/ItemCard";
import Search from "@/components/Search";
import Select from "@/components/Select";
import { StoreCard } from "@/components/StoreCard";
import { ItemData, StoreData } from "@/components/Utils/Dummy";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import YMLStores from "@/components/YMLStores";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [showYMLStores, setShowYMLStores] = useState(false);
  const { address, isConnected } = useAccount();
  const router = useRouter();

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  if (!isMounted) {
    return null;
  }
  console.log(userAddress);

  return (
    <section className="max-w-full md:max-w-[393px] m-[0_auto] relative">
      <section className=" bg-shop-bg w-full h-[730px] bg-no-repeat bg-cover pt-[56px] px-[17px]">
        <div className="flex items-center justify-between">
          <NoPersonIcon onClick={() => {}} extraClass="bg-grey-2" />
          <Search extraClass="bg-blue-2" onChange={(e) => {}} />
          <CartIcon onClick={() => {}} extraClass="bg-grey-2" />
        </div>
        <Select />
        <div className=" grid grid-cols-2 m-[0_auto] mt-[91px] w-fit gap-[28px]">
          {ItemData?.map((item) => (
            <ItemCard
              key={item?.text}
              img={item?.img}
              text={item?.text}
              link={item?.link}
            />
          ))}
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
          {StoreData?.slice(0, 2)?.map((store) => (
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

      <YMLStores show={showYMLStores} setShow={setShowYMLStores} />
    </section>
  );
}
