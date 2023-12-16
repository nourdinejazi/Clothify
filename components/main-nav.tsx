"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Popover, Transition } from "@headlessui/react";

interface MainNavProp {
  className?: string;
}

const MainNav: React.FC<MainNavProp> = ({ className }) => {
  const pathname = usePathname();
  const routes = [
    {
      href: `/`,
      label: "HOME",
      active: pathname === `/`,
    },
    {
      href: `/collection`,
      label: "COLLECTION",
      active: pathname === `/collection`,
    },
    {
      href: `/contact`,
      label: "CONTACT",
      active: pathname === `/contact`,
    },
    {
      href: `/about`,
      label: "ABOUT",
      active: pathname === `/about`,
    },
  ];
  return (
    <nav className="flex z-50 flex-col sm:border border-gre p-8 sm:h-[300px]   sm:bg-white  text-white">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "  transition-colors py-2  hover:text-gre lg:border-b mg:border-b  border-gray-200 flex gap-2 font-bold ",
            route.active ? "text-gre " : "sm:text-bla",
            className
          )}
        >
          <span className="sm:text-black">{route.label}</span>
          {route.active && <ArrowUpRight className={className} />}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
