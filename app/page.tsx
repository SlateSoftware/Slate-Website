import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex gap-12 h-[88vh] w-full">
        <Link
          href={""}
          className="group p-48 w-full flex items-end gap-16 border border-light-stroke-fg rounded-12 rounded-bl-32 bg-[url(/desktop-one-dash.png)] bg-cover bg-left justify-between
        hover:scale-95 duration-200 ease-slate-out active:scale-75"
        >
          <h1 className="h1 text-[#ffffff] mix-blend-difference group-hover:scale-105 duration-200 ease-slate-out">
            Slate Desktop One
          </h1>
          <ArrowUpRightIcon className="text-[#ffffff] size-24 mix-blend-difference group-hover:scale-105 group-hover:rotate-45 duration-200 ease-slate-out" />
        </Link>
        <Link
          href={""}
          className="group p-48 w-full flex items-end gap-16 border border-light-stroke-fg rounded-12 bg-[url(/design-one-promo.png)] bg-cover bg-left justify-between
        hover:scale-95 duration-200 ease-slate-out active:scale-75"
        >
          <h1 className="h1 text-[#ffffff] mix-blend-difference group-hover:scale-105 duration-200 ease-slate-out">
            Slate Design Kit One
          </h1>
          <ArrowUpRightIcon className="text-[#ffffff] size-24 mix-blend-difference group-hover:scale-105 group-hover:rotate-45 duration-200 ease-slate-out" />
        </Link>
        <Link
          href={""}
          className="group p-48 w-full flex items-end gap-16 border border-light-stroke-fg rounded-12 rounded-br-32 bg-[url(/brand-promo.png)] bg-cover bg-left justify-between
        hover:scale-95 duration-200 ease-slate-out active:scale-75"
        >
          <h1 className="h1 text-[#ffffff] mix-blend-difference group-hover:scale-105 duration-200 ease-slate-out">
            About Us
          </h1>
          <ArrowUpRightIcon className="text-[#ffffff] size-24 mix-blend-difference group-hover:scale-105 group-hover:rotate-45 duration-200 ease-slate-out" />
        </Link>
      </section>
    </main>
  );
}
