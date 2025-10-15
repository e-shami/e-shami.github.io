import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left">
          Ehtisham Rehmat
        </h1>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center sm:items-start">
          <p className="max-w-[400px] text-center sm:text-left">
            I am a software engineer specializing in building exceptional
            digital experiences. Currently, I am focused on developing
            accessible, human-centered products at{" "}
            <a
              href="https://www.ably.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-2 decoration-[#F7AB0A]/50 hover:decoration-[#F7AB0A] transition"
            >
              Ably
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
