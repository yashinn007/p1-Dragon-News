import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa";
import swmming from "@/assets/swimming.png";
import playground from "@/assets/playground.png";
import classpic from "@/assets/class.png";

const RightSidebar = () => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-5">Login with</h2>
      <div className="flex flex-col gap-2">
        <button className="btn border-blue-500 text-blue-500">
          <FaGoogle></FaGoogle> Login with google
        </button>
        <button className="btn btn-outline">
          <FaGithub></FaGithub> Login with github
        </button>
      </div>
      <div className="mt-5 p-3 space-y-5 flex flex-col justify-between items-center">
        <h2 className="font-bold">Q-Zone</h2>
        <Image src={swmming} alt="swmming pic" width={400}></Image>
        <Image src={classpic} alt="class pic" width={400}></Image>
        <Image src={playground} alt="playground pic" width={400}></Image>
      </div>
    </div>
  );
};

export default RightSidebar;
