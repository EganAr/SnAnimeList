"use client";

import { SmileyXEyes } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center ">
      <div className="flex justify-center items-center gap-4 flex-col">
        <SmileyXEyes size={60} className="text-color-accent font-bold" />
        <h1 className="text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
          Not Found
        </h1>
        <button
          onClick={() => router.back()}
          className="text-white hover:text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 underline"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
