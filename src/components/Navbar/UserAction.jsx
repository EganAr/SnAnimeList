import { authUserSession } from "@/service/auth-libs";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const UserAction = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "api/auth/signout" : "api/auth/signin";
  
  return (
    <div className="flex items-center gap-4">
      <Link href="/user/dashboard">
        {user ? <Image
          src={user?.image}
          alt="..."
          width={40}
          height={40}
          className="rounded-full "
        /> : <UserCircle size={30}/>}
      </Link>
      <Link href={actionURL} className="bg-color-dark px-2 py-1 rounded-lg text-color-accent text-sm text-center hover:opacity-80">{actionLabel}</Link>
    </div>
  );
};

export default UserAction;
