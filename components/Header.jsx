import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="sticky bg-[#040714] top-0 z-[1000] flex h-[72px] items-center px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
      />
      <div>
        <a href={"/"} className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
