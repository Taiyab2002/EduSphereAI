"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import {
  LayoutDashboard,
  BookOpen,
  PlusCircle,
  Bot,
  User,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  const menu = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Courses",
      href: "/courses",
      icon: BookOpen,
    },

    ...(user?.role === "teacher" || user?.role === "admin"
      ? [
          {
            name: "Create Course",
            href: "/create-course",
            icon: PlusCircle,
          },
        ]
      : []),

    {
      name: "AI Tutor",
      href: "/ai",
      icon: Bot,
    },

    {
      name: "Profile",
      href: "/profile",
      icon: User,
    },

    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-72 rounded-2xl border border-slate-800 bg-slate-900 p-6 h-fit sticky top-24">

      <h2 className="text-2xl font-bold text-white mb-8">
        Dashboard
      </h2>

      <nav className="space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-cyan-500 text-black font-semibold"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />

              {item.name}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}