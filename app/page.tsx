import { LogoMark } from "@/components/brand/LogoMark";
import { TextMark } from "@/components/brand/TextMark";

export default function Home() {
  return (
    <main className="bg-light-bg-flat min-h-screen w-screen p-32 flex flex-col gap-32">
      <LogoMark colour="black" size={256} />
      <TextMark colour="black" size={256} />
      <h3 className="h3">Heading 1</h3>
      <p className="mono">console.log("Hello World!")</p>
      <div className="mt-[32px] bg-fg h-512 rounded-32 border border-light-stroke-fg shadow-light-fg"></div>
    </main>
  );
}
