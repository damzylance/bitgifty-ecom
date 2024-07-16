import { BackIcon } from "@/components/Icons";
import Search from "@/components/Search";
import { Map } from "@/components/map";
import { useRouter } from "next/router";

const AddLocation = () => {
  const router = useRouter();
  return (
    <section className="max-w-full md:max-w-[393px] m-[0_auto] relative">
      <Map />
      <BackIcon
        onClick={() => router.back()}
        extraClass="absolute left-[16px] top-[40px] w-[40px] h-[40px] bg-grey-1"
      />
      <div className="h-[195px] w-full bg-white rounded-[16px_16px_0px_0px] shadow-sm absolute bottom-[-180px] flex flex-col items-center justify-center gap-y-[31px]  ">
        <p className="text-black text-center max-w-[222px] text-[0.875rem] leading-[16.41px]">
          Lorem Ipsum is a dummy text and a very dummy text
        </p>
        <Search extraClass="bg-grey-4" onChange={(e) => {}} />
      </div>
    </section>
  );
};

export default AddLocation;
