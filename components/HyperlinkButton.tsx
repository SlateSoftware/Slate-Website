import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function HyperlinkButton({
  link,
  text,
}: {
  link: string;
  text: string;
}) {
  return (
    <Link
      href={link}
      className="body flex gap-6 hover:text-light-blue-flat group ease-slate-out duration-200"
    >
      {text}
      <ArrowUpRightIcon className="size-20 group-hover:rotate-45 ease-slate-out duration-200" />
    </Link>
  );
}
