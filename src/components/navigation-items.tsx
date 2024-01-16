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
    <ul className="flex flex-col gap-2">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link
              className={`${pathName === link.href ? "text-red-500" : ""}`}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationItems;
