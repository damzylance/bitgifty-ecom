import { BackIcon, SearchIcon } from "@/components/Icons";
import Places from "@/components/Places";
import { useStateContext } from "@/components/Utils/Context";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import { useRouter } from "next/router";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const Page = () => {
  const router = useRouter();
  const { dispatch } = useStateContext();
  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: any) => {
    setValue(address, false);
    clearSuggestions();
    const results = await getGeocode({ address });
    const { lat, lng } = getLatLng(results[0]);
    dispatch({ type: "SET_SELECTED", payload: { lat, lng } });
  };
  return (
    <section className="max-w-full md:max-w-[393px] m-[0_auto] relative">
      {/* <Map /> */}
      <BackIcon
        onClick={() => router.back()}
        extraClass="absolute left-[16px] top-[16px] w-[40px] h-[40px] bg-grey-1 z-10"
      />
      <div className="h-[195px] w-full bg-white rounded-[16px_16px_0px_0px] shadow-sm absolute bottom-[-180px] flex flex-col items-center justify-center gap-y-[31px] px-[20px] z-10">
        <p className="text-black text-center max-w-[222px] text-[0.875rem] leading-[16.41px]">
          Select delivery location
        </p>
        <Combobox
          onSelect={handleSelect}
          className={`flex items-center gap-x-[9px] h-[40px] w-full rounded-[40px] pl-[18px] pr-[9px] bg-grey-4 outline-none`}
        >
          <SearchIcon />
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search an address"
            className="h-full w-[80%] rounded-[0px_40px_40px_0px] px-[4px] outline-none text-[0.75rem] text-black-3 bg-inherit"
          />

          <ComboboxPopover
            className={` bg-white fixed p-[8px_12px]  overflow-auto scrollbar-none  ${
              data?.length === 0 || undefined
                ? "max-h-0 transition-all duration-300 ease-in-out"
                : "max-h-[300px] pb-[200px] transition-all duration-300 ease-in-out"
            }`}
          >
            <ComboboxList className="text-[0.75rem] flex flex-col gap-y-[10px]">
              {status === "OK" &&
                data.map(({ place_id, description }) => (
                  <ComboboxOption
                    key={place_id}
                    value={description}
                    className=" cursor-pointer border-b-[0.5px] border-grey-1 pb-[10px]"
                  />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
      <Places />
    </section>
  );
};

export default Page;
