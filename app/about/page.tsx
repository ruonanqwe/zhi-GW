import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              农财通致力于为农业经营者提供专业的财务管理解决方案
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-6">公司简介</h2>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-4">
                农财通成立于2024年，是一家专注于农业金融科技的创新企业。我们运用先进的技术，
                为农业经营者提供智能化的财务管理和补贴申请服务，助力农业现代化发展。
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                经过多年发展，农财通已服务超过**万农业经营者，覆盖**个省份， 成为农业金融服务领域的领先品牌。
              </p>
              <Button>了解更多</Button>
            </div>
            <div className="relative h-[400px]">
              <Image src="/公司简介.jpg" alt="公司简介" fill className="object-cover rounded-2xl" />
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-12">我们的优势</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {advantages.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-12">发展历程</h2>
            <div className="space-y-8">
              {history.map((item, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="text-right w-1/4">
                    <h3 className="text-xl font-bold">{item.year}</h3>
                  </div>
                  <div className="relative flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
                    <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const advantages = [
  {
    icon: "💡",
    title: "技术创新",
    description: "持续创新，引领农业金融科技发展",
  },
  {
    icon: "👥",
    title: "专业团队",
    description: "拥有丰富经验的技术和服务团队",
  },
  {
    icon: "🌟",
    title: "优质服务",
    description: "提供全方位的专业支持服务",
  },
  {
    icon: "🤝",
    title: "广泛合作",
    description: "与多家金融机构建立战略合作",
  },
]

const history = [
  {
    year: "2024.10",
    title: "项目成立",
    description: "农财通在四川成都正式成立，开始农业金融科技服务的探索",
  },
  {
    year: "2025.02",
    title: "产品上线",
    description: "首个版本的农财通系统正式上线，获得用户好评",
  },
  {
    year: "2025.05",
    title: "快速发展",
    description: "服务范围扩展到全国20个省份，用户数突破10万",
  },
  {
    year: "2025.08",
    title: "战略升级",
    description: "推出智能化升级版本",
  },
  {
    year: "2025.10",
    title: "持续创新",
    description: "用户数突破**万，覆盖**个省份",
  },
]

