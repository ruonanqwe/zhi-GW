import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Image from "next/image"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">产品介绍</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              农财通提供全方位的农业财务管理解决方案，助力农业现代化发展
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-6">智能财务管理系统</h2>
              <div className="space-y-4">
                {["自动化记账和财务报表生成", "多维度数据分析和可视化", "智能预警和风险控制", "农业补贴政策推送"].map(
                  (feature, index) => (
                    <div key={index} className="flex items-start sm:items-center gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ),
                )}
              </div>
              <Button className="mt-8">了解更多</Button>
            </div>
            <div className="relative h-[400px]">
              <Image src="/产品界面-财务管理.png" alt="财务管理系统界面" fill className="object-contain rounded-2xl" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 relative h-[400px]">
              <Image src="/产品界面-补贴申请.png" alt="补贴申请系统界面" fill className="object-contain rounded-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">补贴申请管理系统</h2>
              <div className="space-y-4">
                {["一键式补贴申请", "申请进度实时跟踪", "智能材料审核", "政策解读和建议"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8">了解更多</Button>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-12">产品功能特点</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: "📱",
    title: "多端支持",
    description: "支持PC、手机、平板等多种设备访问，随时随地管理农业财务",
  },
  {
    icon: "🔒",
    title: "数据安全",
    description: "多层防护，保障您的财务信息安全",
  },
  {
    icon: "🤝",
    title: "专业服务",
    description: "提供7*24小时专业客服支持，解答您的任何问题",
  },
]

