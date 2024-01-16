import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex w-full h-14 px-4 border-b justify-between items-center">
      <Link className="font-semibold text-xl" href="/">
        Wallet Wise
      </Link>
      <div className="felx items-center gap-2">
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default NavBar;
