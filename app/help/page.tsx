import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Search, HelpCircle, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">帮助中心</h1>
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Input type="search" placeholder="搜索常见问题..." className="w-full pl-10 pr-4 py-2 rounded-full" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {helpCategories.map((category, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {category.icon}
                  <span className="ml-2">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                <Button asChild variant="outline">
                  <Link href={category.link}>
                    查看更多
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">需要更多帮助？</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">我们的客服团队随时为您服务</p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                在线咨询
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="tel:+1234567890">
                <Phone className="mr-2 h-4 w-4" />
                电话支持
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const helpCategories = [
  {
    icon: <HelpCircle className="h-6 w-6 text-primary" />,
    title: "常见问题",
    description: "查找最常见问题的解答",
    link: "/help/faq",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: "使用指南",
    description: "了解如何使用农财通的各项功能",
    link: "/help/guides",
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "故障排除",
    description: "解决使用过程中遇到的技术问题",
    link: "/help/troubleshooting",
  },
]

