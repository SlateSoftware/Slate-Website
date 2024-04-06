"use client";

import Link from "next/link";
import { TextMark } from "./brand/TextMark";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function Footer() {
  return (
    <footer className="flex flex-col text-light-text-1">
      <div className="flex justify-between px-128 py-192">
        <TextMark colour="black" size={128} />
        <div className="flex gap-48">
          <div className="flex flex-col gap-16">
            <h5 className="h5">Socials</h5>
            <Link href={""} className="body">
              GitHub
            </Link>
            <Link href={""} className="body">
              YouTube
            </Link>
            <Link href={""} className="body">
              Discord
            </Link>
            <Link href={""} className="body">
              Twitter/X
            </Link>
          </div>
          <div className="flex flex-col gap-16">
            <h5 className="h5">Projects & Resources</h5>
            <Link href={""} className="body">
              Slate Desktop One
            </Link>
            <Link href={""} className="body">
              Slate Design Kit One
            </Link>
          </div>
          <div className="flex flex-col gap-16">
            <h5 className="h5">Concepts</h5>

            <Link href={""} className="body">
              Plans
            </Link>
            <Tooltip.Provider delayDuration={0}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Link href={""} className="body">
                    Slate Phone One
                  </Link>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade
                  p-12 z-40 backdrop-blur-fg rounded-12 bg-light-fg border border-light-stroke-fg shadow-light-fg-subtle will-change-[transform,opacity]"
                    sideOffset={5}
                  >
                    Coming soon!
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div className="flex flex-col gap-16">
            <h5 className="h5">More</h5>
            <Link href={""} className="body">
              Brand & Press Kit
            </Link>
            <Tooltip.Provider delayDuration={0}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Link href={""} className="body">
                    Privacy & Terms
                  </Link>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade
                  p-12 z-40 backdrop-blur-fg rounded-12 bg-light-fg border border-light-stroke-fg shadow-light-fg-subtle will-change-[transform,opacity]"
                    sideOffset={5}
                  >
                    Nuh uh. We don't even store a single word of data from you.
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>

            <Tooltip.Provider delayDuration={0}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Link href={""} className="body">
                    Pricing
                  </Link>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade
                  p-12 z-40 backdrop-blur-fg rounded-12 bg-light-fg border border-light-stroke-fg shadow-light-fg-subtle will-change-[transform,opacity]"
                    sideOffset={5}
                  >
                    Nuh uh. We are 100% free and open-source!
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </div>
      </div>
      <div className="w-full h-72 bg-light-blue-flat blur-[64px]"></div>
    </footer>
  );
}
