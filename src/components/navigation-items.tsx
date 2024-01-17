"use client";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import React from "react";

type NavigationLinks = {
  href: string;
  name: string;
};

const links: NavigationLinks[] = [
  {
    href: "/dashboard",
    name: "Recent Transactions",
  },
  {
    href: "/dashboard/bank-accounts",
    name: "Bank accounts",
  },
  {
    href: "/dashboard/subscriptions",
    name: "Subscriptions",
  },
  {
    href: "/dashboard/members",
    name: "Members",
  },
];

const NavigationItems = () => {
  const pathName = usePathname();
  return (
    <ul className="flex flex-col h-full">
      <li className="text-sm font-medium mb-5 text-zinc-400">Dashboard</li>
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            className={`${
              pathName === link.href ? "text-indigo-600 bg-zinc-100" : ""
            } px-4 py-1 rounded-full`}
            href={link.href}
          >
            <li>{link.name}</li>
          </Link>
        );
      })}

      <li className="mt-auto">picker here</li>
    </ul>
  );
};

export default NavigationItems;
