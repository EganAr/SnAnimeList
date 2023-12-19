import { authUserSession } from "@/service/auth-libs";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div>
      <Image
        src={user.image}
        alt={user.name}
        width={350}
        height={300}
        className="rounded-full py-10 px-10 "
      />
      <h1 className="text-3xl font-bold text-white px-10">{user.name}</h1>
    </div>
  );
};

export default Page;
