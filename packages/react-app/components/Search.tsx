import { ChangeEventHandler } from "react";
import { SearchIcon } from "./Icons";

const Search = ({
  onChange,
  extraClass,
}: {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  extraClass: string;
}) => {
  return (
    <div
      className={`flex items-center gap-x-[9px] h-[40px] w-[65%] rounded-[40px] pl-[18px] pr-[9px] ${extraClass}`}
    >
      <SearchIcon />
      <input
        onChange={onChange}
        type="text"
        placeholder="Search here"
        className="h-full w-[80%] rounded-[0px_40px_40px_0px] px-[4px] outline-none text-[0.75rem] text-black-3 bg-inherit"
      />
    </div>
  );
};

export default Search;
