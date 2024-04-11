import Image from "next/image";

export default function Desktop() {
  return (
    <main className="w-scren h-fit p-0 m-0">
      <section
        className="h-[80vh] flex flex-col justify-center items-center gap-24"
        id="landing"
      >
        <p className="body">Introducing</p>
        <h1 className="h1">Slate Desktop One</h1>
      </section>

      <section
        id="dock&dash"
        className="w-screen h-auto aspect-video bg-[url(/desktop/light-bg.png)] flex content-end justify-center"
      >
        <Image
          src={"/desktop/dock-dash.png"}
          width={1190}
          height={545}
          alt="Dashboard"
          className="aspect-[1990/545] h-auto w-[30vh]"
        />
      </section>
    </main>
  );
}
