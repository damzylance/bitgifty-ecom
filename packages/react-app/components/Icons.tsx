import Image from "next/image";
import { MouseEventHandler } from "react";
import { useStateContext } from "./Utils/Context";
import { sumPropertyValues } from "./Utils/Helpers";
import { useRouter } from "next/router";

export const SearchIcon = () => (
  <img src="/search.png" alt="" className=" h-[24px] w-[24px]" />
);

export const SearchBlueIcon = () => (
  <img src="/searchBlue.png" alt="" className=" h-[17.06px] w-[17.05px]" />
);

export const DashboardIcon = () => (
  <img src="/dashboard.png" alt="" className=" h-[24px] w-[24px]" />
);
export const OrdersIcon = () => (
  <img src="/orders.png" alt="" className=" h-[24px] w-[24px]" />
);
export const DeliveryIcon = () => (
  <img src="/delivery.png" alt="" className=" h-[24px] w-[24px]" />
);
export const ProductsIcon = () => (
  <img src="/products.png" alt="" className=" h-[24px] w-[24px]" />
);
export const AnalyticsIcon = () => (
  <img src="/analytics.png" alt="" className=" h-[24px] w-[24px]" />
);

export const BellIcon = () => (
  <img src="/bell.png" alt="" className=" h-[39px] w-[39px]" />
);

export const SettingsIcon = () => (
  <img src="/settings.png" alt="" className=" h-[39px] w-[39px]" />
);
export const EyeOpen = ({
  onClick,
  extraClass,
}: {
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
  extraClass?: string;
}) => (
  <img
    src="/eyeOpen.png"
    alt=""
    className={`h-[24px] w-[24px] cursor-pointer ${extraClass}`}
    onClick={onClick}
  />
);

export const NoPersonIcon = ({
  extraClass,
  onClick,
}: {
  extraClass: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div
    className={`flex items-center justify-center h-[40px] w-[40px] rounded-[8px] ${extraClass}`}
    onClick={onClick}
  >
    <img src="/noPerson.png" alt="" className=" h-[24px] w-[24px]" />
  </div>
);

export const CartIcon = ({ extraClass }: { extraClass: string }) => {
  const { state } = useStateContext();
  const router = useRouter();

  return (
    <div
      className={`flex items-center justify-center h-[40px] w-[40px] rounded-[8px] cursor-pointer ${extraClass} relative`}
      onClick={() => router.push("/checkout")}
    >
      <img src="/cartPlain.png" alt="" className=" h-[24px] w-[24px]" />
      {state.cart.length > 0 && (
        <div className="absolute h-[24px] w-[24px] rounded-[50%] top-[-8px] right-[-5px] bg-red-600 text-white text-[0.7rem] flex items-center justify-center">
          {sumPropertyValues(state.cart, "quantity")}
        </div>
      )}
    </div>
  );
};

export const FilterIcon = ({
  extraClass,
  onClick,
}: {
  extraClass: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div
    className={`flex items-center justify-center h-[40px] w-[40px] rounded-[8px] ${extraClass}`}
    onClick={onClick}
  >
    <img src="/filter.png" alt="" className=" h-[24px] w-[24px]" />
  </div>
);

export const ForwardIcon = ({
  extraClass,
  onClick,
}: {
  extraClass: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div
    className={`flex items-center justify-center h-[32px] w-[32px] rounded-[8px] cursor-pointer ${extraClass}`}
    onClick={onClick}
  >
    <img src="/arrowBlack.png" alt="" className=" h-[10px] w-[5px]" />
  </div>
);

export const BackIcon = ({
  extraClass,
  onClick,
}: {
  extraClass: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div
    className={`flex items-center justify-center  rounded-[8px] cursor-pointer ${extraClass}`}
    onClick={onClick}
  >
    <img
      src="/arrowBlack.png"
      alt=""
      className=" h-[10px] w-[5px] rotate-180"
    />
  </div>
);

export const NameLogo = ({
  extraClass,
  onClick,
}: {
  extraClass?: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div className={` cursor-pointer ${extraClass}`} onClick={onClick}>
    <img src="/nameLogo.png" alt="" />
  </div>
);

export const PlusIcon = ({
  onClick,
  extraClass,
}: {
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
  extraClass?: string;
}) => (
  <img
    src="/plus.png"
    alt=""
    className={`cursor-pointer ${extraClass}`}
    onClick={onClick}
  />
);

export const MinusIcon = ({
  onClick,
  extraClass,
}: {
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
  extraClass?: string;
}) => (
  <img
    src="/minus.png"
    alt=""
    className={`cursor-pointer ${extraClass}`}
    onClick={onClick}
  />
);

export const ArrowWhiteIcon = () => <img src="/arrowWhite.png" alt="" />;

export const FoodIcon = () => <img src="/food.png" alt="" />;
export const DrinksIcon = () => <img src="/drinks.png" alt="" />;
export const PharmacyIcon = () => <img src="/pharmacy.png" alt="" />;
export const FashionIcon = () => <img src="/fashion.png" alt="" />;
export const ThumbsUpIcon = () => <img src="/thumbsUp.png" alt="" />;

export const SThumbsIcon = () => <img src="/thumbsFillIcon.png" alt="" />;
export const SDispatchIcon = () => <img src="/dispatchIcon.png" alt="" />;
export const STimeIcon = () => <img src="/timeIcon.png" alt="" />;
export const LocationSmallIcon = () => <img src="/locationSmall.png" alt="" />;
export const GiftIcon = () => <img src="/gift.png" alt="" />;
export const MethodIcon = () => <img src="/method.png" alt="" />;
export const DummyMap = () => <img src="/dummyMap.png" alt="" />;
export const ForwardSmallIcon = () => <img src="/forward.png" alt="" />;
export const SAddIcon = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
}) => <img src="/addIcon.png" alt="" onClick={onClick} />;
export const StarIcon = () => <img src="/star.png" alt="" />;
