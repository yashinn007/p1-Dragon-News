import Image from "next/image";
import Link from "next/link";
import userAvater from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="py-8  container mx-auto flex justify-between">
      <div className="w-31"></div>
      <ul className="flex justify-center items-center gap-5 text-gray-700 font-medium">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <Image
          src={userAvater}
          alt="user Avater"
          width={30}
          height={30}
        ></Image>
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
