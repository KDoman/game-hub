import SearchInput from "./SearchInput";
import SwitchDarkMode from "./SwitchDarkMode";
import { OnSearchProps } from "./SearchInput";

const Navbar = ({ onSearch }: OnSearchProps) => {
  return (
    <>
      <div className="flex items-center px-5">
        <img src="./logo.webp" className="w-16" />
        <SearchInput onSearch={onSearch} />
        <SwitchDarkMode />
      </div>
    </>
  );
};

export default Navbar;
