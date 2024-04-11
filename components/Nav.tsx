import { LogoMark } from "./brand/LogoMark";
import {
  HomeIcon,
  ChevronDownIcon,
  PhoneIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex z-50 backdrop-blur-fg justify-between sticky top-16 px-128 py-12 items-center bg-light-fg-no-bg shadow-light-fg border border-light-stroke-fg rounded-t-32 rounded-b-12">
      <Link href={"/"}>
        <LogoMark colour="black" size={36} />
      </Link>
      <div className="flex gap-28">
        <Link href={""} className="flex gap-6">
          <p className="body">Home</p>
          <HomeIcon />
        </Link>
        <Link href={""} className="flex gap-6">
          <p className="body">Products</p>
          <ChevronDownIcon />
        </Link>
        <Link href={""} className="flex gap-6">
          <p className="body">Concepts</p>
          <PhoneIcon />
        </Link>
        <Link href={""} className="flex gap-6">
          <p className="body">About</p>
          <UserGroupIcon />
        </Link>
      </div>
    </nav>
  );
}
