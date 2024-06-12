/* eslint-disable react/jsx-no-undef */
"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Package2, Menu, CircleUser } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/lib/logout";
import { getUsername } from "@/lib/session";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [username, setUsername] = useState<string | undefined>(undefined);

  //get username in cookies
  useEffect(() => {
    async function fetchUsername() {
      const name = await getUsername(); // Assurez-vous que getUsername retourne une promesse
      setUsername(name);
    }
    fetchUsername();
  }, []);

  function disconnect() {
    logout();
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <Logo size={50} />
        </Link>
        <Link
          href="/dashboard"
          className={` ${
            pathname === "/dashboard"
              ? "text-foreground"
              : "text-muted-foreground"
          } transition-colors hover:text-foreground`}
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/customers"
          className={` ${
            pathname === "/dashboard/customers"
              ? "text-foreground"
              : "text-muted-foreground"
          } transition-colors hover:text-foreground`}
        >
          Customers
        </Link>
        <Link
          href="/dashboard/transactions"
          className={` ${
            pathname === "/dashboard/transactions"
              ? "text-foreground"
              : "text-muted-foreground"
          } transition-colors hover:text-foreground`}
        >
          Transactions
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/dashboard" className="">
              <Logo size={50} />
            </Link>
            <Link
              href="/dashboard"
              className={` ${
                pathname === "/dashboard"
                  ? "text-foreground"
                  : "text-muted-foreground"
              } transition-colors hover:text-foreground`}
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/customers"
              className={` ${
                pathname === "/dashboard/customers"
                  ? "text-foreground"
                  : "text-muted-foreground"
              } transition-colors hover:text-foreground`}
            >
              Customers
            </Link>
            <Link
              href="/dashboard/transactions"
              className={` ${
                pathname === "/dashboard/transactions"
                  ? "text-foreground"
                  : "text-muted-foreground"
              } transition-colors hover:text-foreground`}
            >
              Transactions
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:gap-2 lg:gap-4 justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={disconnect} className="cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
