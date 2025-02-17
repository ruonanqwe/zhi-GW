import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Book, Video, FileText } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">使用文档</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docCategories.map((category, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {category.icon}
                  <span className="ml-2">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.docs.map((doc, docIndex) => (
                    <li key={docIndex}>
                      <Link href={doc.link} className="text-primary hover:underline flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>{doc.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/docs/all">
              查看所有文档
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const docCategories = [
  {
    icon: <Book className="h-6 w-6 text-primary" />,
    title: "入门指南",
    description: "快速上手农财通平台",
    docs: [
      { title: "账号注册与登录", link: "/docs/getting-started/registration" },
      { title: "界面导航", link: "/docs/getting-started/navigation" },
      { title: "基本功能介绍", link: "/docs/getting-started/basic-features" },
    ],
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "财务管理",
    description: "学习如何使用农财通进行财务管理",
    docs: [
      { title: "收入支出记录", link: "/docs/finance/income-expense" },
      { title: "财务报表生成", link: "/docs/finance/reports" },
      { title: "预算管理", link: "/docs/finance/budgeting" },
    ],
  },
  {
    icon: <Video className="h-6 w-6 text-primary" />,
    title: "视频教程",
    description: "观看视频快速学习平台使用方法",
    docs: [
      { title: "新手入门视频", link: "/docs/videos/beginner" },
      { title: "高级功能使用", link: "/docs/videos/advanced" },
      { title: "常见问题解答", link: "/docs/videos/faq" },
    ],
  },
]

