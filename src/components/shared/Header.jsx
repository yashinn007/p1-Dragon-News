import logo from "@/assets/logo.png";
import Image from "next/image";
//import { compareAsc, format } from "date-fns";
import CurrentDate from "./CurrentDate";

const Header = () => {
  return (
    <div className="text-center py-8 space-y-2">
      <Image
        src={logo}
        width={300}
        height="auto"
        alt="logo"
        loading="eager"
        className="mx-auto"
      ></Image>
      <p>Journalism Without Fear or Favour</p>
      {/* <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p> */}
      <CurrentDate></CurrentDate>
    </div>
  );
};

export default Header;
