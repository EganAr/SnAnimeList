import { authUserSession } from "@/service/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div>
        <Image
        src={user?.image}
        alt={user?.name}
        width={350}
        height={300}
        className="rounded-full justify-self-center mx-auto mt-6"
      />
      <h1 className="text-3xl font-bold text-center text-white py-4">{user.name}</h1>
      <div className="flex justify-center items-center font-extrabold gap-6 ">
        <Link href="/user/dashboard/collections" className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-2 rounded-md">My Collection</Link>
        <Link href="/user/dashboard/comments" className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-2 rounded-md">Comments</Link>
      </div>
    </div>

  );
};

export default Page;
