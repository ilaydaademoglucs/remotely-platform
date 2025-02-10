import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/job/create">
                <span className="max-sm:hidden">Post a Job</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Sign Out</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <div className="flex items-center gap-2">
                  <span>{session?.user?.name}</span>
                  <Avatar className="size-10">
                    <AvatarImage
                      src={session?.user?.image || ""}
                      alt={session?.user?.name || ""}
                    />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                </div>
              </Link>
              {/* 
              <Link href={`/user/${session?.id}`}>
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full"
                    src={session?.user?.image || "/default-logo.png"}
                    alt="user"
                    width={30}
                    height={30}
                  />
                </div>
              </Link> */}
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Sign In</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
