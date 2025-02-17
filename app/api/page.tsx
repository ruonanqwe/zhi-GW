import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Lock, Zap } from "lucide-react"
import Link from "next/link"

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">API 文档</h1>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 mb-8">
            <CardHeader>
              <CardTitle>API 概览</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                农财通 API 允许开发者集成我们的服务到自己的应用中。我们提供 RESTful API， 支持 JSON 格式的数据交换。
              </p>
              <Button asChild>
                <Link href="/api/getting-started">
                  开始使用
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {apiSections.map((section, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {section.icon}
                    <span className="ml-2">{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.endpoints.map((endpoint, endpointIndex) => (
                      <li key={endpointIndex}>
                        <Link href={endpoint.link} className="text-primary hover:underline flex items-center">
                          <ChevronRight className="h-4 w-4 mr-1" />
                          <span>{endpoint.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const apiSections = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "核心 API",
    description: "基本的数据操作和查询接口",
    endpoints: [
      { title: "用户管理", link: "/api/core/users" },
      { title: "财务记录", link: "/api/core/finances" },
      { title: "农产品信息", link: "/api/core/products" },
    ],
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "高级功能",
    description: "智能分析和预测接口",
    endpoints: [
      { title: "市场分析", link: "/api/advanced/market-analysis" },
      { title: "智能建议", link: "/api/advanced/recommendations" },
      { title: "风险评估", link: "/api/advanced/risk-assessment" },
    ],
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: "认证与安全",
    description: "API 认证和数据安全相关接口",
    endpoints: [
      { title: "获取 API Token", link: "/api/auth/token" },
      { title: "刷新 Token", link: "/api/auth/refresh" },
      { title: "权限管理", link: "/api/auth/permissions" },
    ],
  },
]

