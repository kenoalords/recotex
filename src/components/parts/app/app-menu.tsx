import React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

function AppMenu({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div>
      <nav
        className={cn("flex items-center space-x-4 lg:space-x-12", className)}
        {...props}
      >
        <Link
          href="/dashboard"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/dashboard/applications"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Applications
        </Link>
        <Link
          href="/dashboard/assets"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Assets
        </Link>
      </nav>
    </div>
  );
}

export default AppMenu;
