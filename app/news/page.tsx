import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">新闻公告</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">了解农财通最新动态和行业资讯</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-40 sm:h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.category}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-lg sm:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">{item.excerpt}</p>
                  <Button variant="link" className="px-0" asChild>
                    <Link href={`/news/${item.id}`}>阅读更多</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const newsItems = [
  {
    id: 1,
    title: "农财通与某大型银行达成战略合作",
    date: "2024-02-20",
    category: "公司新闻",
    image: "/新闻图片/1.jpg",
    excerpt: "农财通与某大型银行签署战略合作协议，共同推进农业金融数字化转型...",
  },
  {
    id: 2,
    title: "2024年农业补贴政策解读",
    date: "2024-02-18",
    category: "政策解读",
    image: "/新闻图片/1.jpg",
    excerpt: "最新农业补贴政策出台，农财通为您详细解读政策要点...",
  },
  {
    id: 3,
    title: "农财通荣获'2023年度最佳农业科技创新企业'奖",
    date: "2024-02-15",
    category: "公司新闻",
    image: "/新闻图片/1.jpg",
    excerpt: "在2023年度农业科技创新大会上，农财通凭借优秀的产品和服务...",
  },
  {
    id: 4,
    title: "农财通系统更新：新增智能分析功能",
    date: "2024-02-12",
    category: "产品更新",
    image: "/新闻图片/1.jpg",
    excerpt: "农财通系统最新版本发布，新增智能分析功能，提升用户体验...",
  },
  {
    id: 5,
    title: "农业数字化转型研讨会成功举办",
    date: "2024-02-10",
    category: "行业动态",
    image: "/新闻图片/1.jpg",
    excerpt: "农财通联合行业专家举办农业数字化转型研讨会，共话发展...",
  },
  {
    id: 6,
    title: "农财通用户突破50万",
    date: "2024-02-08",
    category: "公司新闻",
    image: "/新闻图片/1.jpg",
    excerpt: "农财通注册用户数突破50万，标志着平台影响力进一步提升...",
  },
]

