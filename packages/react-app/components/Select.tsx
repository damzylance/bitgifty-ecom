import { useRouter } from "next/router";
import { ArrowWhiteIcon } from "./Icons";

const Select = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-x-[8px] w-fit m-[auto] mt-[21px] text-white text-[0.875rem] cursor-pointer"
      onClick={() => router.push("/add-location")}
    >
      <span>Ikorodu</span>
      <ArrowWhiteIcon />
    </div>
  );
};

export default Select;
