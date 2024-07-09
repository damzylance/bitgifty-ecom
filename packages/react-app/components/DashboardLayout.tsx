import {
  AnalyticsIcon,
  BellIcon,
  DashboardIcon,
  DeliveryIcon,
  NameLogo,
  OrdersIcon,
  ProductsIcon,
  SearchBlueIcon,
  SettingsIcon,
} from "./Icons";
import DashboardMenuCard from "./DashboardMenuCard";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/vendor/sign-in");
  };
  return (
    <section className="w-full h-screen flex ">
      <section className=" bg-blue-3 w-[268px] h-full flex flex-col justify-between pb-[52px] pr-[32px]">
        <div>
          <NameLogo extraClass="ml-[34px]" />
          <section className="flex flex-col gap-y-[11px] pl-[50px]">
            <DashboardMenuCard
              icon={<DashboardIcon />}
              text="Dashboard"
              onClick={() => {}}
            />
            <DashboardMenuCard
              icon={<OrdersIcon />}
              text="Orders"
              onClick={() => {}}
            />
            <DashboardMenuCard
              icon={<DeliveryIcon />}
              text="Delivery"
              onClick={() => {}}
            />
            <DashboardMenuCard
              icon={<ProductsIcon />}
              text="Products"
              onClick={() => {}}
            />
            <DashboardMenuCard
              icon={<AnalyticsIcon />}
              text="Analytics"
              onClick={() => {}}
            />
            <DashboardMenuCard
              icon={<AnalyticsIcon />}
              text="Payments"
              onClick={() => {}}
            />
            <DashboardMenuCard
              icon={<AnalyticsIcon />}
              text="Customer"
              onClick={() => {}}
            />
            <DashboardMenuCard
              icon={<AnalyticsIcon />}
              text="My Company"
              onClick={() => {}}
            />
          </section>
        </div>
        <section className="pl-[50px]">
          <DashboardMenuCard
            icon={<AnalyticsIcon />}
            text="Log out"
            onClick={() => handleLogout()}
          />
        </section>
      </section>
      <section className=" bg-grey-6 w-[calc(100%-268px)]">
        <nav className="flex h-[66px] w-full bg-white shadow-md items-center justify-between p-[10px_45px]">
          <div className="flex items-center gap-x-[5px] h-[39px] w-[303px] rounded-[8px] border-[1px_solid_#E6E6E6] shadow-sm pr-[11px]">
            <input
              type="text"
              className=" outline-none border-none h-full w-full rounded-[8px] px-[10px]"
            />
            <SearchBlueIcon />
          </div>
          <div className="flex items-center gap-x-[16px]">
            <BellIcon />
            <SettingsIcon />
          </div>
        </nav>
        <section className="w-full bg-grey-6">{children}</section>
      </section>
    </section>
  );
};

export default DashboardLayout;
