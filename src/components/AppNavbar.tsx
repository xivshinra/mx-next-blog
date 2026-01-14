// IMPORTS

import { Newspaper } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// COMPONENT
export default function AppNavbar() {
  return (
    <nav className="w-full bg-sidebar p-4 lg:max-w-360 lg:mx-auto flex justify-between items-center sticky z-50 top-0 shadow-md">
      <Link href="/" className="flex gap-2 items-center">
        <Newspaper size={20} />
        <h1 className="text-xl font-bold">MDX Blog</h1>
      </Link>
      <ul className="flex gap-4 items-center">
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Avatar>
            <AvatarImage src="/assets/placeholder.jpg" alt="Avatar" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
        </li>
      </ul>
    </nav>
  );
}
