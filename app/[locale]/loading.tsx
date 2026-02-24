import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-semibold tracking-wide">
          <div className="relative h-8 w-8">
            <Image
              src="/images/logo.webp"
              fill
              sizes="36px"
              alt="Duwat Lstikneh Logo"
              className="h-auto w-auto"
            />
          </div>
          Duwat Lstikneh
        </h1>

        <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
