"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { HyperlinkButton } from "@/components/HyperlinkButton";

export default function Desktop() {
  const { scrollYProgress } = useScroll({ offset: ["-400px", "300px"] });

  return (
    <main className="flex flex-col gap-12">
      <section
        className="h-[80vh] flex flex-col justify-center items-center gap-24"
        id="landing"
      >
        <p className="body">Introducing</p>
        <h1 className="h1">Slate Desktop One</h1>
        <div className="flex gap-24">
          <HyperlinkButton text="Download" link="#" />
          <HyperlinkButton text="Contribute" link="#" />
          <HyperlinkButton text="Video" link="#" />
        </div>
      </section>

      <motion.section
        id="dock&dash"
        style={{ scale: scrollYProgress }}
        className="sticky w-full rounded-32 h-auto aspect-video bg-cover bg-center bg-[url(/desktop/light-bg.png)] flex items-end justify-center"
      >
        <Image
          src={"/desktop/dock-dash.png"}
          width={2001}
          height={193}
          alt="Dashboard"
          className="aspect-[1190/545] h-[65vh] w-auto"
        />
      </motion.section>
      <section
        className="p-96 flex flex-col gap-24 border border-light-stroke-fg rounded-32"
        id="dock&dashdef"
      >
        <h1 className="h1">The Dock & Dashboard</h1>
        <p className="body">
          The center of Slate Desktop. Access anything with the dock, and see
          system information in the dashboard. Both components are fully modular
          and customizable.
        </p>
      </section>
    </main>
  );
}
