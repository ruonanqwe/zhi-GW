"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Home,
  Gift,
  FileCheck,
  BarChart2,
  Bell,
  FileText,
  Settings,
  Code2,
  Globe,
  ChevronDown,
  MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "仪表盘",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "用户管理",
    icon: Users,
    href: "/users",
  },
  {
    title: "家庭账户",
    icon: Home,
    href: "/family-accounts",
  },
  {
    title: "补贴管理",
    icon: Gift,
    href: "/subsidies",
    submenu: [
      { title: "补贴申请", href: "/subsidies/apply" },
      { title: "补贴审核", href: "/subsidies/review" },
      { title: "补贴发放", href: "/subsidies/distribute" },
    ],
  },
  {
    title: "申请审核",
    icon: FileCheck,
    href: "/applications",
  },
  {
    title: "数据统计",
    icon: BarChart2,
    href: "/statistics",
  },
  {
    title: "更新和公告",
    icon: MessageSquare,
    href: "/announcements",
  },
  {
    title: "通知中心",
    icon: Bell,
    href: "/notifications",
  },
  {
    title: "文档管理",
    icon: FileText,
    href: "/documents",
    submenu: [
      { title: "文档上传", href: "/documents/upload" },
      { title: "文档审核", href: "/documents/review" },
    ],
  },
  {
    title: "系统设置",
    icon: Settings,
    href: "/settings",
  },
  {
    title: "API管理",
    icon: Code2,
    href: "/api",
  },
  {
    title: "官网管理",
    icon: Globe,
    href: "/website",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-[#1a1f37] text-white p-4 flex flex-col h-screen">
      <div className="mb-6 px-2">
        <h1 className="text-xl font-bold">农财通</h1>
      </div>

      <div className="space-y-1 flex-1 overflow-auto">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href)

          return (
            <div key={item.href}>
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  className={cn("w-full justify-start gap-2 font-normal hover:bg-white/10", isActive && "bg-white/10")}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                  {item.submenu && <ChevronDown className="h-4 w-4 ml-auto" />}
                </Button>
              </Link>
              {item.submenu && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.submenu.map((subitem) => (
                    <Link key={subitem.href} href={subitem.href}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-sm font-normal hover:bg-white/10",
                          pathname === subitem.href && "bg-white/10",
                        )}
                      >
                        {subitem.title}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-auto pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 rounded-full bg-white/10" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">管理员</p>
            <p className="text-xs text-gray-400 truncate">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

