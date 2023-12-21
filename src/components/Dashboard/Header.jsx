"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const Header = ({title}) => {
    const router = useRouter()
    const handleBack = (e) => {
        e.preventDefault()
        router.back()
    }
  return (
    <div>
      <div className="flex flex-row justify-between px-4">
        <button className="text-color-accent" onClick={handleBack}>
          <ArrowSquareLeft size={32} />
        </button>
        <h1 className="text-3xl font-bold text-color-accent justify-self-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Header;