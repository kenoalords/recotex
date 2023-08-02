import React from "react";
import { Command } from "lucide-react";
import Link from "next/link";
import AppMenu from "./app-menu";
import UserMenu from "./user-menu";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";

function AppNavbar() {
  return (
    <div className="flex items-center justify-between border-b bg-white px-4 py-6">
      <div className="flex items-center space-x-12">
        <div>
          <Link
            href={`/dashboard`}
            className="relative block h-[70px] w-[260px]"
          >
            <Image
              src="/NIPOST-Logo.png?v=1"
              alt="Nipost"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      <div>
        <AppMenu />
      </div>
      <div className="space-x-4">
        <UserMenu />
        <Button
          variant={"default"}
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default AppNavbar;
