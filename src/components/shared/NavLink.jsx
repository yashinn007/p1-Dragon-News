"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

const ActiveNavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${isActive ? "text-purple-500 border-b-2 pb-1" : ""}`}
    >
      {children}
    </Link>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Suspense fallback={<Link href={href}>{children}</Link>}>
      <ActiveNavLink href={href}>{children}</ActiveNavLink>
    </Suspense>
  );
};

export default NavLink;
