"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface CategoryNavProps {
  data: Category[];
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/collection/${route.id}`,
    label: route.name,
    active: pathname === `/collection/${route.id}`,
  }));

  return (
    <nav
      className="flex  items-center gap-5 "
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-gre underline',
            route.active ? 'text-gre' : 'text-neutral-500'
          )}
        >
          {route.label}
          
      </Link>
      ))}
    </nav>
  )
};

export default CategoryNav;