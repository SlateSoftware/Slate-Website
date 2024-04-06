import { LogoMark } from "./brand/LogoMark";
import {
  HomeIcon,
  ChevronDownIcon,
  PhoneIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

export default function Nav() {
  return (
    <nav className="flex z-50 backdrop-blur-fg justify-between sticky top-16 px-128 py-12 items-center bg-light-fg-no-bg shadow-light-fg border border-light-stroke-fg rounded-t-32 rounded-b-12">
      <LogoMark colour="black" size={36} />
      <div className="flex gap-28">
        <div className="flex gap-6">
          <p className="body">Home</p>
          <HomeIcon />
        </div>
        <div className="flex gap-6">
          <p className="body">Products</p>
          <ChevronDownIcon />
        </div>
        <div className="flex gap-6">
          <p className="body">Concepts</p>
          <PhoneIcon />
        </div>
        <div className="flex gap-6">
          <p className="body">About</p>
          <UserGroupIcon />
        </div>
      </div>
    </nav>
  );
}
