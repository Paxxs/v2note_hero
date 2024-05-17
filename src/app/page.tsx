import { DescriptTionGrid } from "@/components/descript-grid";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Spotlight } from "@/components/ui/Spotlight";
import DotPattern from "@/components/ui/dot-pattern";
import TextReveal from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  // const { setTheme } = useTheme();
  // useLayoutEffect(() => {
  //   setTheme("dark");
  // });
  return (
    <main className="flex min-h-dvh flex-col">
      <TailwindIndicator />
      <section>
        <div className="h-[20rem] md:h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              V2Note <br /> The Way To Note.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              A Cutting-Edge, Privacy-Centric Note-taking Experience
            </p>
          </div>
        </div>
      </section>
      <section className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-white dark:bg-black">
        <TextReveal text="Experience the future of note-taking with v2Note: where dual editing meets seamless collaboration across devices." />
      </section>
      <section className="p-10 bg-black">
        <DescriptTionGrid />
      </section>
      <section
        id="open-source"
        className="relative container py-8 md:py-12 lg:py-24 bg-background mt-8"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-extrabold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            v2Note is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={"https://github.com/Paxxs/Evo-Note"}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
      </section>
    </main>
  );
}
